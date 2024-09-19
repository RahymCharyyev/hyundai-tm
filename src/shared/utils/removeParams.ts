const removeParams = <T extends Record<string, unknown>, P extends Array<keyof T>>(
  obj: T,
  params: P,
) => {
  for (const p of params) {
    delete obj[p];
  }
};

export default removeParams;
