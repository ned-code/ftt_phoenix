import superagent from 'superagent';
import client from 'socket.io-client';

const methods = [ 'get', 'post', 'put', 'patch', 'del' ];

function formatUrl (path) {
  const adjustedPath = path[0] !== '/' ? '/' + path : path;
  return 'http://localhost:3000/api' + adjustedPath;
}

export default class Server {

  constructor () {
    //this.io = client(`http://${document.domain}:4000`);
    this.api = {};

    methods.forEach(
      (method) => this.api[method] = (path, { params, data } = {}) => new Promise((resolve, reject) => {
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

  emit = (ch, data, fn) => {
    return new Promise((resolve, reject) => {
      this.io.emit(ch, data, (err, data) => !!err ? reject(err) : resolve(data));
    })
  }

  static addListener (name, fn) {
    Server.connection && Server.connection.on(name, data => fn(data));
  }

  static removeListener (name) {
    Server.connection && Server.connection.removeListener(name);
  }

}
