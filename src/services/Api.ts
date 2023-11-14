import axios from 'axios';
import config from 'config/index';

const Api = axios.create({
  baseURL: config.api.baseUrl,
});

Api.interceptors.request.use((set) => {
  return {
    ...set,
    params: {
      ...set.params,
      ts: config.api.ts,
      apikey: config.api.key,
      hash: config.api.hash,
    },
  };
});

export default Api;
