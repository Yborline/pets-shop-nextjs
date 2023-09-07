import { Component } from "react";
import themeContext from "./themeContext";

export default class ProviderTheme extends Component {
  state = {
    themes: JSON.parse(localStorage.getItem("themes")) || "light",

    toggleTheme: (newValue) => {
      try {
        localStorage.setItem("themes", JSON.stringify(newValue));
      } catch (error) {
        console.log(error);
      }
      this.setState({ themes: newValue });
    },
  };
  render() {
    return (
      <themeContext.Provider value={this.state}>
        {this.props.children}
      </themeContext.Provider>
    );
  }
}
