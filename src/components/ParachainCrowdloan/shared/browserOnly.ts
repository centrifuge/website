export const isBrowser = typeof window !== "undefined";

const isBrowserProd = isBrowser && location.origin === "https://centrifuge.io";

export const getSearchParam = (paramName: string) =>
  isBrowser ? new URL(location.href).searchParams.get(paramName) : "";

/** Always return empty string if in production */
export const getDebugSearchParam = (paramName: string) =>
  isBrowserProd ? "" : getSearchParam(paramName);

export const localStorageSetItem = (key: string, value: string) => {
  if (!isBrowser) return;
  localStorage.setItem(key, value);
};

export const localStorageGetItem = (key: string) => {
  if (!isBrowser) return "";
  return localStorage.getItem(key);
};
