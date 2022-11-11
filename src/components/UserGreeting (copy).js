import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn: false
      }
    }

  render() {

    let message;
    if (this.state.isLoggedIn){
        message = <div>Welcome UserName!</div>
    }else{
        message = <div>Welcome Guest!</div>
    }

    return <div>{message}</div>
    /*
    if (this.state.isLoggedIn){
        return <div> Welcome user_name! </div>
    }else{
        return <div> Welcome Guest! </div>
    }
    */

    /*
    return (
      <div>
        <div>
            Welcome user_name!
        </div>
        <div>Welcome Guest!</div>
      </div>
    )
        */
  }
}

export default UserGreeting