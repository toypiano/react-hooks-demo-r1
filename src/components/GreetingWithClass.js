import React from "react";
import Row from "./Row";

export default class Greeting extends React.Component {
  state = {
    name: "Paul"
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <section>
        <Row label="Name">
          <input
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </Row>
      </section>
    );
  }
}
