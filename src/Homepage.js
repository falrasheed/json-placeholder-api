import React, { useState, useEffect } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list-component';

function Card() {
	//stored info
	const [info, setInfo] = useState([]);
	useEffect(() => {
		getInfo();
	}, []);
	const api_url = 'https://jsonplaceholder.typicode.com/users';
	const getInfo = async () => {
		await fetch(api_url)
			.then((response) => response.json())
			.then((retrievedInfo) => setInfo(retrievedInfo));
	};

	return (
		<div
			style={{
				backgroundImage:
					'url(' +
					'https://res.cloudinary.com/drrqe1a7m/image/upload/v1618156760/Integrify/jason-leung-Xaanw0s0pMk-unsplash_retery.jpg' +
					')',
				backgroundPosition: 'center',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<CardList info={info}></CardList>
		</div>
	);
}

export default Card;
