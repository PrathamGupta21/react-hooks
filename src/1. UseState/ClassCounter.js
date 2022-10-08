import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  // incrementCounter = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  incrementCounter = () => [
    this.setState((prevCount) => {
      return {
        count: prevCount.count + 1,
      };
    }),
  ];
  render() {
    return (
      <div>
        <h3>Class Counter</h3>
        <button onClick={this.incrementCounter}>
          Count - {this.state.count}
        </button>
      </div>
    );
  }
}

export default ClassCounter;
