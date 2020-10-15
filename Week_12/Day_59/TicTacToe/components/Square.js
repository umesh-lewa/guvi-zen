import React from "react";

const style = {
	background: "white",
	border: "2px solid black",
	fontSize: "30px",
	fontWeight: "300",
	cursor: "pointer",
	outline: "none",
};

const Square = ({ value, onClick }) => (
	<button style={style} onClick={onClick}>
		{value}
	</button>
);

export default Square;