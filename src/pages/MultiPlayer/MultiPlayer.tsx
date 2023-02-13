import React from 'react';
import { Link } from "react-router-dom";
import TwoPlayers from '../../components/Board/TwoPlayers/TwoPlayers';
import "./multiplayer.scss";

export interface MultiPlayerInterface {}

const MultiPlayer : React.FC<MultiPlayerInterface> = () => {
	return <div id='container_multiplayer'>
		<h1 style={{color:"white"}}>Multiplayer</h1>
		<Link to={"/"}>Home</Link>

		<TwoPlayers/>
	</div>;
};

export default MultiPlayer;
