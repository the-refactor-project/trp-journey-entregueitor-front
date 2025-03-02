export type InfoType = "info" | "error";

export interface UiGetContextValue {
  isLoading: boolean;
  showInfo: boolean;
  infoType: InfoType;
  infoMessage: string;
}

export interface UiSetContextValue {
  showLoading: () => void;
  hideLoading: () => void;
  showInfo: (type: InfoType, message: string) => void;
  hideInfo: () => void;
}
