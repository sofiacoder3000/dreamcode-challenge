import React from 'react';
import { Space, Layout, Typography } from 'antd';
import { EditTwoTone } from '@ant-design/icons';

const { Content } = Layout;
const { Text, Paragraph } = Typography;

const layoutDescription = {
	background: 'white',
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	padding: '10px 50px'
};
function MoreInfo(props) {
	let { species, origin, location } = { ...props.info };
	return (
		<div>
			<Content>
				<Space size={15} style={{ alignItems: 'baseline' }}>
					<h2>More Information</h2>
					<span size={64}>
						<EditTwoTone style={{ fontSize: '25px' }} />
					</span>
				</Space>
			</Content>
			<Content style={{ display: 'flex', flexDirection: 'column' }}>
				<Space size={15}></Space>
				<div>
					<Text strong>Species</Text>
					<Paragraph>{species}</Paragraph>
				</div>
				<div>
					<Text strong>Origin Type</Text>
					<Paragraph>{origin.type}</Paragraph>
				</div>
				<div>
					<Text strong>Origin Name</Text>
					<Paragraph>{origin.name}</Paragraph>
				</div>
				<div>
					<Text strong>Location Type</Text>
					<Paragraph>{location.type}</Paragraph>
				</div>
				<div>
					<Text strong>Location Name</Text>
					<Paragraph>{location.name}</Paragraph>
				</div>
			</Content>
		</div>
	);
}

const UserInformation = (props) => {
	return (
		<div>
			<Content>
				<Space size={15} style={{ alignItems: 'baseline' }}>
					<h2>User's Information</h2>
					<span size={64}>
						<EditTwoTone style={{ fontSize: '25px' }} />
					</span>
				</Space>
			</Content>
			<Content>
				<div>
					<Text strong>First Name</Text>
					<Paragraph>{props.info.name.split(' ')[0]}</Paragraph>
				</div>
				<div>
					<Text strong>Last Name</Text>
					<Paragraph>{props.info.name.split(' ')[1]}</Paragraph>
				</div>
				<div>
					<Text strong>Gender</Text>
					<Paragraph>{props.info.gender}</Paragraph>
				</div>
				<div>
					<Text strong>Status</Text>
					<Paragraph>{props.info.status}</Paragraph>
				</div>
				<div>
					<Text strong>Created</Text>
					<Paragraph>{props.info.created}</Paragraph>
				</div>
			</Content>
		</div>
	);
};

function DescriptionHeader(props) {
	let { name, gender, status, created } = { ...props.info };
	let { species, origin, location } = { ...props.info };
	return (
		<Layout style={layoutDescription}>
			<UserInformation info={{ name, gender, status, created }} />
			<MoreInfo info={{ species, origin, location }} />
		</Layout>
	);
}

export default DescriptionHeader;
