import styled from 'styled-components';

export const Button = styled.button`
	height: 36px;
	width: 142px;
	font-size: 14px;
	font-weight: bold;
	color: #fff;
	border: 0;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	background:#333;
	transition: background 0.2s;
	&:hover {
		background: yellow;
	}
	svg {
		margin-right: 8px;
	}
  `