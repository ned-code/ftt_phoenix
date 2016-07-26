/**
 * @param requiredProperties
 * @param options { renderLoad, renderFail }
 */
export const checkProperties = (requiredProperties, options) => (Component) => {

  Component.prototype.renderReady = Component.prototype.render;

  if (!Component.prototype.renderLoad && options.renderLoad && typeof options.renderLoad == 'function') {
    Component.prototype.renderLoad = options.renderLoad;
  }

  if (!Component.prototype.renderFail && options.renderFail && typeof options.renderFail == 'function') {
    Component.prototype.renderFail = options.renderFail;
  }

  Component.prototype.render = function () {
    
    let loaded = true;

    for (let i = 0; i < requiredProperties.length; i++) {
      let item = requiredProperties[i];

      if (typeof this.props[item] == 'undefined' ) {
        return this.renderFail();
      }

      if (this.props[item] === null ) {
        loaded = false;
      }
    }

    if (!loaded) {
      return this.renderLoad();
    }

    return this.renderReady();
  };
};

export const load = (callback) => (Component) => {
  const _willMount = Component.prototype.componentWillMount;
  const _willUpdate = Component.prototype.componentWillUpdate;

  Component.prototype.componentWillMount = function () {
    const is = !!_willMount;
    if (is) {
      _willMount.call(this);
    }
    this.__loadings = {};
    callback.apply(this, [ this.props, this.state ]);

  };
  Component.prototype.componentWillUpdate = function (nextProps, nextState) {
    const is = !!_willUpdate;
    if (is) {
      _willUpdate.apply(this, [ nextProps, nextState ]);
    }
    callback.apply(this, [ nextProps, nextState ]);

  };

  Component.prototype.load = function ({ name, is, method, props, dependent = false, multi = false }) {
    const isDependent = ('function'===typeof(dependent)) ? !!dependent() : dependent;
    if(isDependent) return Promise.resolve(this.state[name]);

    let process = this.__loadings[name];
    if ('undefined' !== typeof(process) && (process == 'error' || process == 'in_progress') ) return Promise.resolve(this.state[name]);

    const _is = !!is();
    const callMethod = (args, index) => {
      return method
      .apply(method, 'function' === typeof(args) ? args() : Array.isArray(args) ? args : [ args ])
      .catch(()=> {
        if (multi) {
          let process = this.__loadings[name];
          process[index] = undefined;
          if(process.indexOf('in_progress') === -1) {
            let fp = process.filter(item => 'undefined' !== typeof(item));
            if(fp.length != 0) {
              return this.setState({ [name]: this.props[multi].toJS() });
            } else {
              this.__loadings[name] = 'error';
              return this.setState({ [name]: undefined });
            }
          }
        } else {
          this.__loadings[name] = 'error';
          return this.setState({ [name]: undefined });
        }
      })
      .then((data)=>{
        let process = this.__loadings[name];
        if('undefined' !== typeof(process) && process == 'error') return true;
        if (multi) {
          this.__loadings[name][index] = data;
          if(process.indexOf('in_progress') === -1) {
            //delete this.__loadings[name];
          }
        } else {
          delete this.__loadings[name];
        }
      })
      .then(()=>this.state[name]);
    };

    const callMultiMethod = () => {
      if('undefined' !== typeof(process)) return Promise.resolve(this.state[name]);
      let _props = 'function' === typeof(props) ? props() : Array.isArray(props) ? props : [ props ];
      this.__loadings[name] = [];

      _props.map((args, index) => {
        this.__loadings[name][index] = 'in_progress';
        callMethod(args, index); 
      });
    };

    if (_is) {
      if (this.state[name] === null) {
        this.setState({
          [name]: is()
        });
      } 
      return Promise.resolve(this.state[name]);
    } else {
      if (multi) {
        callMultiMethod();
      } else {
        this.__loadings[name] = 'in_progress';
        callMethod(props, 0);
      }
    }
  };
};
