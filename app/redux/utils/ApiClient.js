import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

import { API_URL } from '../../constants';

function formatUrl(path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return API_URL + adjustedPath;
}

class _ApiClient {
  constructor(req) {
    methods.forEach((method) =>
      this[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {

        const request = superagent[method](formatUrl(path))

        if (params) {
          request.query(params);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}, ...rest) => {
          return err ? reject(body || err) : resolve(body) 
        });
      }));
  }
}

const ApiClient = _ApiClient;

export default ApiClient;
