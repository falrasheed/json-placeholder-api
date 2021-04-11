import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './detailspage.css';

function Details() {
	const [data, setItems] = useState([]);
	useEffect(() => {
		fetchDetails();
	});

	const { id } = useParams();
	const api_url = `https://jsonplaceholder.typicode.com/users/${id}`;

	const fetchDetails = async function () {
		await fetch(api_url)
			.then((response) => response.json())
			.then((data) => setItems(data));
	};

	const companyName = data && data.company ? data.company.name : null;
	const companyStreet = ((data || {}).address || {}).street;
	const companySuite = ((data || {}).address || {}).suite;
	const companyCity = ((data || {}).address || {}).city;
	const companyZipcode = ((data || {}).address || {}).zipcode;

	return (
		<div className='detail-list'>
			<p>-name: {`${data.name}`}</p>
			<p>-username: {`${data.username}`}</p>
			<p>-email: {`${data.email}`}</p>
			<p>-phone: {`${data.phone}`}</p>
			<p>-company: {`${companyName}`}</p>
			<p>-website: {`${data.website}`}</p>
			<p>
				-address:
				<ul className='ul-list'>
					<li>street: {`${companyStreet}`}</li>
					<li>suite: {`${companySuite}`}</li>
					<li>city: {`${companyCity}`}</li>
					<li>zipcode: {`${companyZipcode}`}</li>
				</ul>
			</p>
		</div>
	);
}

export default Details;
