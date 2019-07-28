import Link from 'next/link';

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

function Home() {
	return (
		<ul>
			{users.map((user) => {
				return (
					<li key={user.id}>
						<Link href={`/users/${user.id}`}>
							<a>{user.name}</a>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}

export default Home;
