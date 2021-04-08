import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Details() {
	const [data, setItems] = useState([]);
	useEffect(() => {
		fetchDetails();
	});

	const { id } = useParams();
	//let {id} = useParams ();

	const api_url = `https://jsonplaceholder.typicode.com/users/${id}`;

	// const fetchDetails = async () => {
	// 	await fetch(api_url)
	// 		.then((response) => response.json())
	// 		.then((retrievedDetails) => setItems(retrievedDetails));
	// };
	// console.log(data);

	const fetchDetails = async function () {
		await fetch(api_url)
			.then((response) => response.json())
			.then((data) => setItems(data));
	};

	const companyName = data && data.company ? data.company.name : null;
	return (
		<div className='detail-list'>
			<p>-name: {`${data.name}`}</p>
			<p>-username: {`${data.username}`}</p>
			<p>-email: {`${data.email}`}</p>
			<p>-phone: {`${data.phone}`}</p>
			<p>-company: {`${companyName}`}</p>
			<p>-website: {`${data.website}`}</p>
			<p>-address: {`${data.address}`}</p>
		</div>
	);
}

export default Details;
