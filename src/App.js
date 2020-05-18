import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: "",
      previous: [],
    };
  }

  render() {
    return (
      <div>
        <input className="result" type="text" value={this.state.current} />
      </div>
    );
  }
}
