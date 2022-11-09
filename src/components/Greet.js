import React from 'react'

/*
function Greet(){
	return <h1>hello TTTTTTT</h1>
}
*/

const Greet = (props) => {
	console.log(props.children);
	//props.name = 'Vishwas';
	return (<div>
		<h1>hello {props.name} a.k.a {props.heroName}</h1>	
		{props.children}
		</div>
	)
} 

export default Greet