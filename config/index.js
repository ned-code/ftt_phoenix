'use strick';
import Immutable from 'immutable';

class Config {
  constructor(){
    let env = ["local", "production"].indexOf(process.env.NODE_ENV) !== -1 ? process.env.NODE_ENV : "local";
    let json = require("./"+env);

    let config = Immutable.Map(json);
    
    this.get = (name) => { return config.get(name); };
  };
};

export default new Config();

