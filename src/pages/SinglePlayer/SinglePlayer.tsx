import React from 'react';
export interface SinglePlayerInterface {}
import { Link } from "react-router-dom";

const SinglePlayer : React.FC<SinglePlayerInterface> = () => {
	return <div>
		<Link to={"/"}>Home</Link>
		
	</div>;
};

export default SinglePlayer;
