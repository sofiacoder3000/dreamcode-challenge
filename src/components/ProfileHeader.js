import React, { useState } from 'react';
import { Avatar, Layout, Tag, Badge, Typography, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Content } = Layout;
const { Link } = Typography;
function ProfileTitle({ name }) {
	const [verify, setVerify] = useState(false);
	const handleClick = () => {
		setVerify(!verify);
	};
	const text = verify === true ? 'Verified' : 'Unverified';
	return (
		<div style={{ display: 'flex', flexDirection: 'column' }}>
			<Space align="baseline">
				<strong style={{ fontSize: '28px' }}>{name}</strong>
				<Link underline onClick={() => handleClick()}>
					{verify === true ? 'Rollback' : 'Verify Me'}
				</Link>
			</Space>
			<div>
				<Tag color={verify === true ? 'green' : 'orange'}>
					<Badge status={verify === true ? 'success' : 'warning'} />
					{text}
				</Tag>
			</div>
		</div>
	);
}

function ProfileHeader(props) {
	return (
		<Layout style={{ background: 'white', marginBottom: '20px' }}>
			<Content style={{ display: 'flex', flexDirection: 'row' }}>
				<Space size={15}>
					<Avatar
						style={{ backgroundColor: '#f5f5f5', color: 'black' }}
						size={80}
						shape="square"
						icon={<UserOutlined />}
						src={props.info.image}
					/>
					<ProfileTitle name={props.info.name} />
				</Space>
			</Content>
		</Layout>
	);
}

export default ProfileHeader;
