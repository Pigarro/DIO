/** @format */

import React from 'react';
import Botao from './botao';

const BotaoA = <button>Histórico</button>;

const BotaoB = <button>Cadastrar Cliente</button>;

const hasCustomer = true;

const customersList = [
	{
		id: 1,
		name: 'Marco Fuganti',
		skills: ['Html', 'CSS', 'JS'],
	},
	{
		id: 2,
		name: 'Jane Doe',
		skills: ['C#', 'C++', 'JS'],
	},
	{
		id: 3,
		name: 'Jonh Smith',
		skills: ['Ruby', 'Go', 'Python'],
	},
	{
		id: 4,
		name: 'Joao da Silva',
		skills: ['React', 'Angular', 'ThreeJs'],
	},
];

const renderCustomer = (customer, index) => {
	return (
		<div key={`customers-${customer.id}`}>
			<li>
				{customer.name}{' '}
				<button onClick={(e) => handleClick(e, customer.id)}>Delete</button>
			</li>
			{customer.skills.map(renderSkills)}
		</div>
	);
};

const handleClick = (e, id) => {
	console.log(`Cliente ${id} deletado`);
};

const renderSkills = (skill, index) => {
	return (
		<div style={{ paddingLeft: '30px' }} key={`skill-${index}`}>
			<li> {skill} </li>
		</div>
	);
};

const renderShowHistory = (
	<div>
		Clique no botao para ver o histórico de clientes <br />
		{BotaoA}
	</div>
);

const renderAddCustomer = (
	<div>
		<p>
			clique Abaixo para cadastrar Cliente
			<br />
			{BotaoB}
		</p>
	</div>
);

const customer = 'Marco Fuganti';

const showCustomer = () => {
	if (!hasCustomer) return null;
	return (
		<div>
			<h3> Nome do Cliente: {customer} </h3>
		</div>
	);
};

const showEvent = (e) => {
	alert('Evento Clicado');
	alert(customer);
	console.log(e);
};
const ButtonEvento = <button onClick={showEvent}>Mostrar Evento</button>;

const handleChange = (e) => {
	const { value } = e.target;
	console.log(value);
};

const App = () => {
	// prettier-ignore
	return (
        <div> 
            <p>Webpack</p>
            <p>Babel</p>
            <div>Olá Mundo</div>
            <br />

            {hasCustomer ? renderShowHistory : renderAddCustomer}
                          
            
            <Botao />
            <div>
                {showCustomer()}
            </div>
            <div>
                <ul>
                {customersList.map(renderCustomer)}
                </ul>
            </div>

            {ButtonEvento}
            <br />
            <input onChange={handleChange} />
        </div>
    );
};
export default App;
