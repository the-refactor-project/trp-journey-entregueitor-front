import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import { InfoType, UiGetContextValue, UiSetContextValue } from "./types";
import UiGetContext from "./UiGetContext";
import UiSetContext from "./UiSetContext";

const UiContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [info, setInfo] = useState<
    Pick<UiGetContextValue, "showInfo" | "infoType" | "infoMessage">
  >({
    showInfo: false,
    infoType: "info",
    infoMessage: "",
  });
  const [confirm, setConfirm] = useState<
    Pick<UiGetContextValue, "showConfirm" | "confirmText" | "confirmAction">
  >({
    showConfirm: false,
    confirmText: "",
    confirmAction: () => {},
  });

  const uiGetContextValue: UiGetContextValue = useMemo(
    () => ({
      showInfo: info.showInfo,
      infoType: info.infoType,
      infoMessage: info.infoMessage,
      showConfirm: confirm.showConfirm,
      confirmText: confirm.confirmText,
      confirmAction: confirm.confirmAction,
    }),
    [
      confirm.confirmAction,
      confirm.confirmText,
      confirm.showConfirm,
      info.infoMessage,
      info.infoType,
      info.showInfo,
    ]
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

  const showConfirm = useCallback(
    (confirmText: string, confirmAction: () => void) => {
      setConfirm({
        showConfirm: true,
        confirmText,
        confirmAction,
      });
    },
    []
  );

  const hideConfirm = useCallback(() => {
    setConfirm({
      showConfirm: false,
      confirmText: "",
      confirmAction: () => {},
    });
  }, []);

  const uiSetContextValue: UiSetContextValue = useMemo(
    () => ({
      showInfo,
      hideInfo,
      showConfirm,
      hideConfirm,
    }),
    [showInfo, hideInfo, showConfirm, hideConfirm]
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
