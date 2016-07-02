var connect = require('react-redux').connect
var bindActionCreators = require('redux').bindActionCreators

// can't get any simpler than that, as plain js as possible
module.exports = function(k){
  var dispatchProps = k.dispatchProps
  if(k.actionProps){
    dispatchProps = function(dispatch){
      var h = {}
      Object.keys(k.actionProps).forEach(function(key){
        h[key] =  bindActionCreators(k.actionProps[key], dispatch)
      })
      return h
    }
  }
  return connect(k.stateProps,dispatchProps)(k)
}
