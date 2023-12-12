export const getLocalStorage = (key: string) => {
  const local = localStorage.getItem(key);
  if (local) return JSON.parse(local);
};
