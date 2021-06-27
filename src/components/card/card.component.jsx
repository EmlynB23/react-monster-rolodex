import React from "react";

import "./card.styles.css";

export const Card = (props) => {
	return (
		<div className="card-container">
			<img
				src={`https://robohash.org/${props.monster.id}?set=set3`}
				alt={props.monster.id}
			/>
			<h2>{props.monster.name}</h2>
		</div>
	);
};
