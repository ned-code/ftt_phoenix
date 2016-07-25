const __PRODUCTION__ = __PRODUCTION__ || process.env.NODE_ENV === 'production'; // eslint-disable-line

let devUrl;

if (!__PRODUCTION__) {
  devUrl = 'http://localhost:5000/dist/';
}

if (__PRODUCTION__) {
  devUrl = '/dist/';
}

export const DEV_URL = devUrl;

export const API_URL = __PRODUCTION__
  ? ''
  : 'http://localhost:5000';
