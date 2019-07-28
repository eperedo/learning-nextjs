// import Error from './../../_error';
import Error from 'next/error';

const users = [
	{
		id: 1,
		name: 'Eduardo',
		age: 20,
	},
	{
		id: 2,
		name: 'Cinthya',
		age: 30,
	},
];

function Details({ user, statusCode }) {
	if (statusCode === 404) {
		// This line will show the Error Page component
		return <Error statusCode={statusCode} />;
	}

	return (
		<div>
			<h1>Name: {user.name}</h1>
			<p>Age: {user.age}</p>
			<p>Id: {user.id}</p>
		</div>
	);
}

function getInitialProps({ query, res }) {
	const { id } = query;
	const user = users.find((u) => u.id == id);
	if (!user) {
		res.statusCode = 404;
	}
	return {
		user: user || {},
		statusCode: user ? 200 : 404,
	};
}

Details.getInitialProps = getInitialProps;

export default Details;
