import staticData from './staticData';

describe('static reducer', () => {
  it('static data loaded', () => {
    const state = {
      data: {}
    };
    const expectedState = {
      data: { 
        staticData: {
          data: [],
          links: []
        },
        ganttData: {
          disciplines: [],
          resources: []
        }
      }
    };

    const action = {
      type: "LOAD_STATIC_DATA"
    };

    expect(staticData(state, action).toJS()).to.eql(expectedState);
  });
});

