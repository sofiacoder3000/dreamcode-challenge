import { gql } from '@apollo/client';

export const GET_CHARACTER = gql`
	query Character($id: ID!) {
		character(id: $id) {
			name
			gender
			status
			image
			created
			species
			origin {
				name
				type
			}
			location {
				name
				type
			}
		}
	}
`;

export const GET_CHARACTERS = gql`
	query Characters($page: Int!) {
		characters(page: $page) {
			info {
				prev
				pages
			}
			results {
				id
				name
				status
				species
				type
				gender
				image
			}
		}
	}
`;
