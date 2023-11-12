import {
  VITE_API_BASE_URL,
  VITE_API_KEY,
  VITE_API_HASH,
  VITE_API_TS,
} from '@env';

const config = {
  api: {
    baseUrl: VITE_API_BASE_URL,
    key: VITE_API_KEY,
    hash: VITE_API_HASH,
    ts: VITE_API_TS,
  },
};

export default config;
