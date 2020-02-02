import React from "react";
import Row from "./Row";

export default class Greeting extends React.Component {
  state = {
    name: "Paul",
    surname: "Gilbert"
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };
  handleSurnameChange = e => {
    this.setState({ surname: e.target.value });
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
        <Row label="Surname">
          <input
            value={this.state.surname}
            onChange={this.handleSurnameChange}
          />
        </Row>
      </section>
    );
  }
}
