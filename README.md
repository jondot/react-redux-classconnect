# react-redux-classconnect

Remove cognitive load by moving prop mapping into the component, by using static method references.

## Quick Start

Instead of this:

```javascript
import { connect } from 'react-redux'

class FriendListApp extends Component {
  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  render () {
    const { friendList: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">
        <h1>Da Bro's List</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    friendList: state.friendList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(FriendsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FriendListApp);
```

Do this:

```
import connect from 'react-redux-classconnect'

class FriendListApp extends Component {
  static propTypes = {
    friendList: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired
  };

  static stateProps = (state)=>({
      friendList: state.friendList
  })

  static dispatchProps = (dispatch)=>({
      actions: bindActionCreators(FriendsActions, dispatch)
  })

  render () {
    const { friendList: { friendsById }, actions } = this.props;

    return (
      <div className="friendListApp">
        <h1>Da Bro's List</h1>
        <AddFriendInput addFriend={actions.addFriend} />
        <FriendList friends={friendsById} actions={actions} />
      </div>
    );
  }
}
export default connect(FriendListApp);
```

