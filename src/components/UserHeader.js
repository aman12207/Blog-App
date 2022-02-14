import React from "react";
import { connect } from "react-redux";


class userHeader extends React.Component{
  render(){
    const {user} = this.props;
    if(!user)
      return null;
    return <div className="header">{user.name}</div>;
  }
}

const mapStatetoProps = (state,ownProps) =>({
  user : state.users.find(user=> user.id === ownProps.userId)
})

export default connect(mapStatetoProps)(userHeader);