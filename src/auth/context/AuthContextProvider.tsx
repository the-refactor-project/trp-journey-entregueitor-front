import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router";
import { AuthGetInfoContextValue, AuthSetInfoContextValue } from "./types";
import {
  getAuthenticatedUser,
  signInWithGitHub,
  signOut,
} from "../supabase/supabase";
import { useFlagsmith } from "flagsmith/react";
import AuthGetInfoContext from "./AuthGetInfoContext";
import AuthSetInfoContext from "./AuthSetInfoContext";

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const flagsmith = useFlagsmith();

  const loggedOutUser: AuthGetInfoContextValue = useMemo(
    () => ({
      hasFinishedChecking: false,
      isLoggedIn: false,
      username: "",
      userMaxChallenge: 0,
      role: "student",
    }),
    []
  );

  const removeHash = useCallback(() => {
    navigate(window.location.pathname, { replace: true });
  }, [navigate]);

  const [authInfo, setAuthInfo] =
    useState<AuthGetInfoContextValue>(loggedOutUser);

  const login = async () => {
    await signInWithGitHub();
  };

  const logout = useCallback(async () => {
    await signOut();
    await flagsmith.logout();
    setAuthInfo({ ...loggedOutUser, hasFinishedChecking: true });
  }, [flagsmith, loggedOutUser]);

  const authSetInfo: AuthSetInfoContextValue = useMemo(
    () => ({
      login,
      logout,
    }),
    [logout]
  );

  useEffect(() => {
    (async () => {
      try {
        const user = await getAuthenticatedUser();

        await flagsmith.identify(user?.user_metadata.user_name);
        const maxChallenge = flagsmith.getValue("challenge-number");
        const isAdmin =
          user?.user_metadata.user_name === "the-refactor-project";

        setAuthInfo({
          hasFinishedChecking: true,
          isLoggedIn: true,
          role: isAdmin ? "admin" : "student",
          userMaxChallenge: Number(maxChallenge),
          username: user?.user_metadata.user_name,
        });

        removeHash();
      } catch {
        setAuthInfo((authInfo) => ({
          ...authInfo,
          hasFinishedChecking: true,
        }));
      }
    })();
  }, [flagsmith, removeHash]);

  return (
    <AuthGetInfoContext.Provider value={authInfo}>
      <AuthSetInfoContext.Provider value={authSetInfo}>
        {children}
      </AuthSetInfoContext.Provider>
    </AuthGetInfoContext.Provider>
  );
};

export default AuthContextProvider;
