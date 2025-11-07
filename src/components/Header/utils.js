// Header/utils.js
export const checkActiveLink = (pathname, linkAddress) => {
  return pathname === linkAddress;
};

export const preloadImage = (src, onLoad, onError) => {
  const img = new Image();
  img.onload = onLoad;
  img.onerror = onError;
  img.src = src;
};
