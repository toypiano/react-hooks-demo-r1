import React from "react";
import Row from "./Row";

export default class Greeting extends React.Component {
  state = {
    name: "Paul"
  };
  render() {
    return (
      <section>
        <Row label="Name">
          <input value={this.state.name} />
        </Row>
      </section>
    );
  }
}
