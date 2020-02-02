import React from "react";
import Row from "./Row";
import { ThemeContext, LocaleContext } from "./context";

export default class Greeting extends React.Component {
  state = {
    name: "Toy",
    surname: "Piano"
  };

  componentDidMount() {
    document.title = this.state.name + " " + this.state.surname;
  }

  componentDidUpdate() {
    document.title = this.state.name + " " + this.state.surname;
  }

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
            <LocaleContext.Consumer>
              {locale => <Row label="From">{locale}</Row>}
            </LocaleContext.Consumer>
          </section>
        )}
      </ThemeContext.Consumer>
    );
  }
}
