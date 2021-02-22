import React from 'react';
import { Card, Space } from 'antd';

const { Meta } = Card;
function ProfileList({ characters, onClick }) {
	return (
		<div>
			<Space size={15} style={{ display: 'flex', flexWrap: 'wrap' }}>
				{characters.results.map((result) => (
					<Card
						hoverable
						style={{ width: 200 }}
						cover={<img alt={result.name} src={result.image} />}
						key={result.id}
						onClick={() => onClick(result.id)}
					>
						<Meta
							title={`${result.id}. ${result.name}`}
							description={`${result.species} - ${result.status}`}
						/>
					</Card>
				))}
			</Space>
		</div>
	);
}

export default React.memo(ProfileList);
