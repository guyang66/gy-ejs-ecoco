export const arrayToObj = (arrs = [], key = 'id') => {
  const params = {};
  for (let i = 0, len = arrs.length; i < len; i++) {
    const item = arrs[i];
    params[item[key]] = item;
  }
  return params;
};
