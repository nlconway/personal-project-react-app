import React from "react";
import Login from "./Login.js";
import Lists from "./Lists.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      username: ""
    };
    this.setValue = this.setValue.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  // componentDidMount() {
  // }
  handleSubmit(evt) {
    evt.preventDefault();
  }
  setValue(name, value) {
    this.setState({ [name]: value });
  }

  onClick() {
    this.setState({ loginStatus: true });
  }

  render() {
    return (
      <div>
        {this.state.loginStatus ? (
          <div>
            <h2>{this.state.username}</h2>
            <Lists username={this.state.username} />
          </div>
        ) : (
          <Login
            username={this.state.username}
            setValue={this.setValue}
            onClick={this.onClick}
          />
        )}
      </div>
    );
  }
}
export default App;
