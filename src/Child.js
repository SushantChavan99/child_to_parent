import React from 'react';

function Child(props){
	return (
		<>
			<button onClick={props.parentChange}>Increament</button>
		</>
	)
}

export default Child;