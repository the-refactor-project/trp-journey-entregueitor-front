import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { InfoType, UiGetContextValue, UiSetContextValue } from "./types";
import UiGetContext from "./UiGetContext";
import UiSetContext from "./UiSetContext";

const UiContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [info, setInfo] = useState<Omit<UiGetContextValue, "isLoading">>({
    showInfo: false,
    infoType: "info",
    infoMessage: "",
  });

  const uiGetContextValue: UiGetContextValue = useMemo(
    () => ({
      isLoading,
      showInfo: info.showInfo,
      infoType: info.infoType,
      infoMessage: info.infoMessage,
    }),
    [info.infoMessage, info.infoType, info.showInfo, isLoading]
  );

  const hideInfo = useCallback(() => {
    setInfo((info) => ({
      ...info,
      showInfo: false,
      infoType: "info",
      infoMessage: "",
    }));
  }, []);

  const showInfo = useCallback(
    (type: InfoType, message: string) => {
      setInfo((info) => ({
        ...info,
        showInfo: true,
        infoType: type,
        infoMessage: message,
      }));

      setTimeout(() => {
        hideInfo();
      }, 2000);
    },
    [hideInfo]
  );

  const uiSetContextValue: UiSetContextValue = useMemo(
    () => ({
      showLoading: () => {
        setIsLoading(true);
      },
      hideLoading: () => {
        setIsLoading(false);
      },
      showInfo,
      hideInfo,
    }),
    [showInfo, hideInfo]
  );

  return (
    <UiGetContext.Provider value={uiGetContextValue}>
      <UiSetContext.Provider value={uiSetContextValue}>
        {children}
      </UiSetContext.Provider>
    </UiGetContext.Provider>
  );
};

export default UiContextProvider;
