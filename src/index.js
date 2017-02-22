var connect = require('react-redux').connect
var bindActionCreators = require('redux').bindActionCreators

// can't get any simpler than that, as plain js as possible
module.exports = function(component) {
  var dispatchProps = component.dispatchProps;

  if (component.actionProps) {
    dispatchProps = function(dispatch) {
      return Object.keys(component.actionProps).reduce(function(result, key) {
        result[key] = bindActionCreators(component.actionProps[key], dispatch);
        return result;
      }, {});
    };
  }
  return connect(component.stateProps, dispatchProps)(component);
}
