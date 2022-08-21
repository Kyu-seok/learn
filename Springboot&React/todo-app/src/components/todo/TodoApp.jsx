import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import withNavigation from './WithNavigation';

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <Routes>
            <Route path="/" element={<LoginComponentWithNavigation />} />
            <Route path="/login" element={<LoginComponentWithNavigation />} />
            <Route path="/welcome" element={<WelcomeComponent />} />
          </Routes>
        </Router>
      </div >
    );
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome to my todo app</div>;
  }
}

class LoginComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: 'kyu',
      password: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  loginClicked() {
    // kyu, 1234
    if (this.state.username === 'kyu' && this.state.password === '1234') {
      this.props.navigate("/welcome");
      // this.setState({ showSuccessMessage: true });
      // this.setState({ hasLoginFailed: false });
    } else {
      console.log('Failed');
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        {this.state.hasLoginFailed && <div>Invalid Credential</div>}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }
}

const LoginComponentWithNavigation = withNavigation(LoginComponent);



export default TodoApp;