import React from "react";
import Battle from "./Battle";
import Popular from "./Popular";
import { NavLink, Switch, Route } from "react-router-dom";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ui: "battle",
      mode: "light",
      icon: "💡",
    };
  }
  handleClick(e) {
    if (e.target.dataset.id === "modeSwitch") {
      this.state.mode === "light"
        ? this.setState({
            mode: "dark",
            icon: "🔦",
          })
        : this.setState({
            mode: "light",
            icon: "💡",
          });
    }
  }

  render() {
    return (
      <div className={`main py-1 my-0 has-background-${this.state.mode}`}>
        <div className="level mt-3 container">
          <div className="level-left">
            <NavLink to='/' activeClassName={`mr-6 ${this.state.mode} has-text-weight-bold selected`} className={`mr-6 ${this.state.mode}`} exact>Popular</NavLink>{" "}
            <NavLink to='/battle' activeClassName={`${this.state.mode} selected has-text-weight-bold`} className={`${this.state.mode}`}>Battle</NavLink>
          </div>
          <div className="level-right">
            <span
              className={this.state.mode}
              data-id="modeSwitch"
              onClick={(e) => {
                this.handleClick(e);
              }}
            >
              {this.state.icon}
            </span>
          </div>
        </div>
        <Switch>
          <Route path="/" exact>
            <Popular mode={this.state.mode}/>
          </Route>
          <Route path="/battle">
            <Battle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
