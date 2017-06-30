const connect = require('../src/index');
const makeDispatchProps = require('../src/index').makeDispatchProps;

const mockComponentStateProps = {
  name : 'MyStatePropsComponent',
  stateProps : {
    foo : 'bar',
    bar : 'baz',
    baz : 'foo',
  },
};

const mockComponentActionProps = {
  name : 'MyActionPropsComponent',
  actionProps : {
    foo : () => {},
    bar : () => {},
    baz : () => {},
  },
};

describe('react-redux-classconnect', () => {

  describe('#connect', () => {

    it('wraps a component with stateProps', () => {
      const actual = connect(mockComponentStateProps);
      expect(actual.displayName).toBe(`Connect(${mockComponentStateProps.name})`);
      expect(actual.stateProps).toBe(mockComponentStateProps.stateProps);
    });

    it('wraps a component with actionProps', () => {
      const actual = connect(mockComponentActionProps);
      expect(actual.displayName).toBe(`Connect(${mockComponentActionProps.name})`);
      expect(actual.actionProps).toBe(mockComponentActionProps.actionProps);
    });
  });


  describe('#makeDispatchProps', () => {

    it('creates a valid `dispatchProps()` function when `actionProps` are specified', () => {
      const actual = makeDispatchProps(mockComponentActionProps);

      expect(actual()).toHaveProperty("foo");
      expect(actual()).toHaveProperty("bar");
      expect(actual()).toHaveProperty("baz");
    });
  });
});
