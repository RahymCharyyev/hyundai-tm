const removeEmpty = <T extends Record<string, unknown>>(obj: T) => {
  const newObj = {} as T;

  for (const key of Object.keys(obj)) {
    if (Array.isArray(obj[key])) {
      // @ts-expect-error any
      if (obj[key].length) newObj[key] = obj[key].map((item) => removeEmpty(item));
      continue;
    }

    // @ts-expect-error any
    if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
    else if ((obj[key] && obj[key] !== undefined) || obj[key] === 0) {
      // @ts-expect-error any
      newObj[key] = obj[key];
    }
  }

  return newObj;
};

export default removeEmpty;
