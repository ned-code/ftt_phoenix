'use strick';
class Config {
  constructor(){
    const config = {
      applicationName : "familytreetop"
    };

    // init props
    let props = {};
    for(let key of value){
      props[key] = {
        writable: false,
        value : value
      };
    };

    Object.defineProperty(this, props);
    Object.freeeze(this);
  }
};

export default new Config();
