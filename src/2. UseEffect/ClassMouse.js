import React, { Component } from "react";

export class ClassMouse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }
  logMousePosition = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };
  componentDidMount() {
    console.log("Mounted");
    window.addEventListener("mousemove", this.logMousePosition);
  }
  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }
  render() {
    return (
      <div>
        <h3>
          X - {this.state.x} and Y - {this.state.y}
        </h3>
      </div>
    );
  }
}

export default ClassMouse;
