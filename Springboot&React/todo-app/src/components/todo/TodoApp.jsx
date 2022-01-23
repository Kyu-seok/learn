import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponent />} />
                        <Route path="/login" element={<LoginComponent />} />
                        <Route path="/welcome" element={<WelcomeComponent />} />
                    </Routes>
                </Router>

                {/* <LoginComponent />
        <WelcomeComponent /> */}
            </div>
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
            username: "kyu",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
        });
        console.log(this.state);
    }

    loginClicked() {
        // kyu, dummy
        if (this.state.username === "kyu" && this.state.password === "dummy") {
            console.log("Successful");
            this.setState({ showSuccessMessage: true });
            this.setState({ hasLoginFailed: false });
        } else {
            this.setState({ showSuccessMessage: false });
            this.setState({ hasLoginFailed: true });
        }
    }

    render() {
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>login Successful</div>}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                User Name:
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                Password:
                <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

// function ShowInvalidCredentials(props) {
//   if (props.hasLoginFailed) {
//     return <div>Invalid Credentials</div>;
//   }
//   return null;
// }

// function ShowLoginSuccessMessage(props) {
//   if (props.showSuccessMessage) {
//     return <div>Login Sucessful</div>;
//   }
//   return null;
// }

export default TodoApp;
