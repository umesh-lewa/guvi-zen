import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Draggable1 from "./components/Draggable1"

class Test extends React.PureComponent {

    state = {
        x: 0,
        y: 0,
    };
    
    move = (x, y) => {
		this.setState({x, y});
	}
    
    render() {

		const {x, y} = this.state;
		
        return (
            <Draggable1 x={x} y={y} onMove={this.move}>
                Draggable-Component
            </Draggable1>
        );
    }
}

const App = () => {

	return (
		<Fragment>
			<Test />
		</Fragment>
	);
};

ReactDOM.render(<App />, document.querySelector("#app-root"));