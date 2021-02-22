import React, { useState, useCallback } from 'react';
import Profile from './components/Profile';
import ProfileList from './components/ProfileList';
import { Spin, Layout } from 'antd';
import { GET_CHARACTERS } from './graphql/Querys';
import './App.css';
import 'antd/dist/antd.css';
import { useQuery } from '@apollo/client';

const { Sider, Content } = Layout;
const PAGE_DEFAULT = 1;

function App() {
	const [idCharacter, setIdCharacter] = useState(1);

	const { loading, error, data } = useQuery(GET_CHARACTERS, {
		variables: { page: PAGE_DEFAULT }
	});

	const selectProfile = useCallback((value) => {
		console.log(value);
		setIdCharacter(value);
	}, []);

	if (loading)
		return (
			<Layout className="App">
				<Spin />
			</Layout>
		);
	if (error) return <p>{`Error :( ${error}`}</p>;

	return (
		<Layout className="App">
			<Content style={{ background: 'white', marginRight: 200 }}>
				<Profile idCharacter={idCharacter} />
			</Content>
			<Sider
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					right: 0
				}}
			>
				<ProfileList
					onClick={selectProfile}
					characters={data ? data.characters : []}
				/>
			</Sider>
		</Layout>
	);
}

export default App;
