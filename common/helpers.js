export const _throttle = (func, delay = 1000) => {
  let timer = null;
  return (...params) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(func, delay, ...params);
  };
};
