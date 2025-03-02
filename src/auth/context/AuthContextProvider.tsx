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
import { Id } from "../../types";

const AuthContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const flagsmith = useFlagsmith();

  const loggedOutUser: AuthGetInfoContextValue = useMemo(
    () => ({
      hasFinishedChecking: false,
      studentId: 0,
      isLoggedIn: false,
      username: "",
      userMaxWeek: 0,
      role: "student",
    }),
    []
  );

  const removeHash = useCallback(() => {
    if (window.location.href.endsWith("#")) {
      navigate(window.location.pathname, { replace: true });
    }
  }, [navigate]);

  const [authInfo, setAuthInfo] =
    useState<AuthGetInfoContextValue>(loggedOutUser);

  const login = useCallback(async () => {
    await signInWithGitHub();
  }, []);

  const logout = useCallback(async () => {
    await signOut();
    await flagsmith.logout();
    setAuthInfo({ ...loggedOutUser, hasFinishedChecking: true });
  }, [flagsmith, loggedOutUser]);

  const setStudentId = useCallback((studentId: Id) => {
    setAuthInfo((authInfo) => ({
      ...authInfo,
      studentId,
    }));
  }, []);

  const authSetInfo: AuthSetInfoContextValue = useMemo(
    () => ({
      login,
      logout,
      setStudentId,
    }),
    [login, logout, setStudentId]
  );

  useEffect(() => {
    (async () => {
      try {
        const user = await getAuthenticatedUser();

        await flagsmith.identify(user?.user_metadata.user_name);
        const maxWeek = flagsmith.getValue("project-number");
        const isAdmin =
          user?.user_metadata.user_name === "the-refactor-project";

        setAuthInfo((authInfo) => ({
          studentId: authInfo.studentId,
          hasFinishedChecking: true,
          isLoggedIn: true,
          role: isAdmin ? "admin" : "student",
          userMaxWeek: Number(maxWeek),
          username: user?.user_metadata.user_name,
        }));

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
