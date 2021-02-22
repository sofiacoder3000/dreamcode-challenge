import React, { useState } from 'react';
import { Tabs, Skeleton } from 'antd';
import Layout from 'antd/lib/layout/layout';
import { useQuery } from '@apollo/client';
import ProfileHeader from './ProfileHeader';
import Description from './Description';
import { GET_CHARACTER } from '../graphql/Querys';
const { TabPane } = Tabs;

function Profile(props) {
	const layoutProfile = {
		background: 'white',
		width: '800px',
		display: 'flex',
		flexDirection: 'column',
		margin: '0 auto',
		padding: '24px'
	};
	const { loading, error, data } = useQuery(GET_CHARACTER, {
		variables: { id: props.idCharacter }
	});
	if (loading)
		return (
			<Layout style={layoutProfile}>
				<Skeleton active />
			</Layout>
		);
	if (error) return <p>{`Error :( ${error}`}</p>;

	return (
		<Layout style={layoutProfile}>
			<ProfileHeader info={data.character} />
			<Tabs defaultActiveKey="1" type="card" size="small">
				<TabPane tab="Personal Information" key="1">
					<Description info={data.character} />
				</TabPane>
				<TabPane tab="Security" key="2">
					Security...
				</TabPane>
				<TabPane tab="Payment Information" key="3">
					Payment Information...
				</TabPane>
			</Tabs>
		</Layout>
	);
}

export default Profile;
