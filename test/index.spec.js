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

const connect = require('../src/index');

describe('react-redux-classconnect', () => {

  it('wraps a component with stateProps', () => {
    const actual = connect(mockComponentStateProps);
    expect(actual.displayName).toBe(`Connect(${mockComponentStateProps.name})`);
    expect(actual.stateProps).toBe(mockComponentStateProps.stateProps);
  });

  it('wraps a component with actionProps', () => {
    // This test is NOT correct - we should be checking the component's
    // dispatchProps
    const actual = connect(mockComponentActionProps);
    expect(actual.displayName).toBe(`Connect(${mockComponentActionProps.name})`);
    expect(actual.actionProps).toBe(mockComponentActionProps.actionProps);
  });

});
