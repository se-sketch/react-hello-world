import React, {Component} from 'react'

class Welcome extends Component{
	render(){
		const {name, heroName} = this.props;
		//const {state1, state2} = this.state;
		//console.log('state', this.state);
		return (
			<h1>
				Welcome {name} a.k.a {heroName}
			</h1>
		)
	}
}

export default Welcome