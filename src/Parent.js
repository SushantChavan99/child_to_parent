import React,{useState} from 'react';
import Child from './Child';

function Parent(){
	const [count, setState] = useState(0);

	const inscrement =()=>{		
		setState(count+1);
	}
	return(
		<>
			<h1>{count}</h1>
			<Child parentChange={inscrement} />
		</>
	)
}

export default Parent;