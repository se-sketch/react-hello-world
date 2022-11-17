import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render() {
        //const {count} = this.state;
        const {count, incrementCount} = this.props;

        //console.log(this.props);

        return (
            <button onClick={incrementCount}>{this.props.name} Clicked {count} times</button>
        )
    }
}

export default withCounter(ClickCounter, 5)