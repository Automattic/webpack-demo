import React, { Component } from "react";

import { localizedNow } from "../utils";

export default class CurrentTime extends Component {
  componentDidMount() {
    this.interval = setInterval(this.forceUpdate.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        Current time: <span className="time">{localizedNow()}</span>
      </div>
    );
  }
}
