const connect = require('react-redux').connect
// can't get any simpler than that!
module.exports = function(k){
  return connect(k.stateProps,k.dispatchProps)(k)
}

