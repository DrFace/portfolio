const isProd = process.env.NODE_ENV === 'production';
export const basePath = isProd ? '/portfolio' : '';

export const withBasePath = (path: string) => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};
