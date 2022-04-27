/** @format */

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import Button from './Button';
import ComponenteA from './ComponeteA';
import ComponenteB from './ComponenteB';

class App extends Component {
	// prettier-ignore
	constructor(props) {
	super(props)

	this.state = {
		clock: 1000,
		copo: 'agua',
	}
}

	componentDidMount() {
		window.setTimeout(() => {
			this.setState({
				copo: 'suco',
			});
		}, 3000);
	}

	alterarCopo = () => {
		this.setState({
			copo: 'refrigerante',
		});
	};

	render() {
		// prettier-ignore
		const { clock, copo } = this.state
		return (
			<div>
				<h2>{clock}</h2>
				<button onClick={() => this.alterarCopo()}>{copo} </button>
			</div>
		);
	}
}

function sum(a, b) {
	alert(a + b);
}

/*
function primeiroJSX() {
	//	/* prettier-ignore
	return (
    <div className='teste'>
        <h2> Introdução ao React - DIO </h2>
		<p>Soma: {sum(29, 13)}</p>
    </div>
    )
}
*/
const elemento1 = <h2>Renderização</h2>;
const paragrafo = <p>Eu sou um parágrafo</p>;

// function App() {}
// const App = () => {
// prettier-ignore
// const soma = () =>

// 	return (
// 	<div className="App">
// 		<Button onClick={() => sum(19, 13)} name="Marco Fuganti" />
// 		<ComponenteA>
// 			<ComponenteB>
// 				<Button onClick={() => sum(42, 23)} name="Damaris" />
// 			</ComponenteB>
// 		</ComponenteA>
// 	</div>
// 	)
// };

const rootElement = document.getElementById('root');
ReactDom.render(<App />, rootElement);
