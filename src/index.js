var connect = require('react-redux').connect
var bindActionCreators = require('redux').bindActionCreators

const makeDispatchProps = function(component) {
  return function(dispatch) {
    return Object.keys(component.actionProps).reduce(function(result, key) {
      result[key] = bindActionCreators(component.actionProps[key], dispatch);
      return result;
    }, {});
  }
}

// can't get any simpler than that, as plain js as possible
module.exports = function(component) {
  var dispatchProps = component.actionProps
    ? makeDispatchProps(component)
    : component.dispatchProps;

  return connect(component.stateProps, dispatchProps)(component);
}

module.exports.makeDispatchProps = makeDispatchProps;
