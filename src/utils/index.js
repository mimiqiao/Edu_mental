// 通用工具函数

/**
 * 防抖函数
 * @param {Function} fn 需要防抖的函数
 * @param {number} delay 延迟时间（毫秒）
 * @returns {Function} 防抖后的函数
 */
export const debounce = (fn, delay) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
};

/**
 * 节流函数
 * @param {Function} fn 需要节流的函数
 * @param {number} limit 限制时间（毫秒）
 * @returns {Function} 节流后的函数
 */
export const throttle = (fn, limit) => {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * 格式化日期
 * @param {Date} date 日期对象
 * @param {string} format 格式字符串
 * @returns {string} 格式化后的日期字符串
 */
export const formatDate = (date, format = 'YYYY-MM-DD') => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day);
};