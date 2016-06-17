'use strick';
import Immutable from 'immutable';

class Config {
  constructor(){
    let env = ["local", "production"].indexOf(process.env.NODE_ENV) !== -1 ? process.env.NODE_ENV : "local";
    let json = require("./"+env);

    let config = Immutable.fromJS(json);

    this.get = (name, c) => { 
      if(name.length == 0) return false;
      if(!c) c = config;
      let p = ("string" === typeof(name)) ? name.split('.') : name;
      return (p.length > 1) ? this.get(p.slice(1), c.get(p[0])) : c.get(p[0]);
    };
  };
};

export default new Config();

