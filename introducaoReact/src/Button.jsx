/** @format */

import React from 'react';

function Button(props) {
	// prettier-ignore
	const { name, onClick } = props // const name = props.name
	return <button onClick={onClick}>{name}</button>;
}

export default Button;
