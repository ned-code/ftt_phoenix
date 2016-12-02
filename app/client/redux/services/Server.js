import superagent from 'superagent';
import client from 'socket.io-client';

const methods = [ 'get', 'post', 'put', 'patch', 'del' ];

function formatUrl (path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return 'localhost:3000/api' + adjustedPath;
}

export default function Server (client, io){

  static io = null;
  static api = null;

  constructor () {
    Server.io = client(`http://${document.domain}:4000`);
    Server.api = {};

    methods.forEach(
      (method) => Server.api[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
        const request = superagent[method](formatUrl(path));

        if (params) {
          request.query(params);
        }

        if (data) {
          request.send(data);
        }

        request.end((err, { body } = {}) => {
          return err ? reject(body || err) : resolve(body);
        });
    }));
  }

  static addListener (name, fn) {
    Server.connection && Server.connection.on(name, data => fn(data));
  }

  static removeListener (name) {
    Server.connection && Server.connection.removeListener(name);
  }

}
