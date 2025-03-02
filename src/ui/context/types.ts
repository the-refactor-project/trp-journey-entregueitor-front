export type InfoType = "info" | "error";

export interface UiGetContextValue {
  showInfo: boolean;
  infoType: InfoType;
  infoMessage: string;
  showConfirm: boolean;
  confirmText: string;
  confirmAction: () => void;
}

export interface UiSetContextValue {
  showInfo: (type: InfoType, message: string) => void;
  hideInfo: () => void;
  showConfirm: (confirmText: string, confirmAction: () => void) => void;
  hideConfirm: () => void;
}
