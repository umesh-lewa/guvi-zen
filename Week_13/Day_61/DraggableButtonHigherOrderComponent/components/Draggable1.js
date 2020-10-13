import React, { Fragment, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const throttle = (f) => {

    let token = null, lastArgs = null;
    const invoke = () => {
        f(...lastArgs);
        token = null;
    };
    const result = (...args) => {
        lastArgs = args;
        if (!token) {
            token = requestAnimationFrame(invoke);
        }
    };
    result.cancel = () => token && cancelAnimationFrame(token);
    return result;
};

class Draggable1 extends React.PureComponent {

    xCoordinate = 0;
    yCoordinate = 0;
    ref = React.createRef();

    handleMouseDown = (event) => {

        if (event.button !== 0) {
            return;
        }

        const { scrollLeft, scrollTop, clientLeft, clientTop } = document.body;

        const { left, top } = this.ref.current.getBoundingClientRect();

        this.xCoordinate = event.pageX - (left + scrollLeft - clientLeft);
        this.yCoordinate = event.pageY - (top + scrollTop - clientTop);

        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        event.preventDefault();
    };

    handleMouseUp = (event) => {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        event.preventDefault();
    };

    handleMouseMove = (event) => {
        this.props.onMove(
            event.pageX - this.xCoordinate,
            event.pageY - this.yCoordinate,
        );
        event.preventDefault();
    };

    updateCoordinates = throttle(() => {
        const { x, y } = this.props;
        this.ref.current.style.transform = `translate(${x}px, ${y}px)`;
    });

    componentDidMount() {
        this.ref.current.addEventListener('mousedown', this.handleMouseDown);
        this.updateCoordinates();
    }

    componentDidUpdate() {
        this.updateCoordinates();
    }

    componentWillUnmount() {
        this.ref.current.removeEventListener('mousedown', this.handleMouseDown);
        this.updateCoordinates.cancel();
    }

    render() {
        return (
            <div className="draggable" ref={this.ref}>
                <button>{this.props.children}</button>
                <h3>X-Coordinate - {this.xCoordinate}</h3>
                <h3>Y-Coordinate - {this.yCoordinate}</h3>
            </div>
        );
    }
}

export default Draggable1;