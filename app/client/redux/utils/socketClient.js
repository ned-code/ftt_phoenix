import client from 'socket.io-client';

export default class SocketClient {

  static sonnection = null;

  constructor () {
    SocketClient.connection = client(`http://${document.domain}:4000`);
  }

  ///listeners
  static addListener (name, fn) {
    SocketClient.connection && SocketClient.connection.on(name, data => fn(data));
  }

  static removeListener (name) {
    SocketClient.connection && SocketClient.connection.removeListener(name);
  }

  request (channel, data = {}) {
    return new Promise((resolve, reject) => {
      if (!Server.connection) {
        reject([]); //503
      }

      Server.connection.emit(channel, data, (data) => {
        if (data.status) {
          if (data.status && data.status === 200) {
            resolve(data.data);
          } else {
            reject(data.errors);
          }
        } else {
          reject([]); //500
        }
      });
    });
  }

  getConnection () {
    return Server.connection;
  }

}
