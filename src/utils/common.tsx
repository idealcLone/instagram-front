export const cls = (...values: string[]) => {
  return values.filter(Boolean).join(" ");
};

export const defaultErrorHandler = (message: string, callback?: () => any) => {
  console.log(message);

  callback?.();
};
