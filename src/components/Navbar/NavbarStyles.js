import styled from 'styled-components';

export const Toggler = styled.div`
	margin: 2rem;
	label {
		cursor: pointer;
		transition: all .3s cubic-bezier(.92, 0, .2, 1.2);
		svg {
			font-size: 2.4rem;
			&:hover {
				transition: transform 450ms;
				transform: translateY(2px) scale(1.08);
			}
			&:active {
				transition: transform 450ms;
				transform: translateY(-2px);
			}
		}
	}

	input[type="checkbox"] {
		display: none;
	}
`;
