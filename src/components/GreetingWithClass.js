import React from "react";
import Row from "./Row";
import { ThemeContext, LocaleContext } from "./context";

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
      <ThemeContext.Consumer>
        {theme => (
          <section className={theme}>
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
        )}
      </ThemeContext.Consumer>
    );
  }
}
