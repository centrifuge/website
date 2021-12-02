export const isBrowser = typeof window !== "undefined";

export const getSearchParam = (paramName: string) =>
  isBrowser ? new URL(location.href).searchParams.get(paramName) : "";
