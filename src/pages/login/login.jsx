import React, { Component } from "react";
//import { Form, Input, Button } from "antd";
//import { UserOutlined, LockOutlined } from "@ant-design/icons";

import "./login.less";
import logo from "./imgs/logo.png";
import LoginForm from "./form/form";

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React Project: Admin</h1>
        </header>
        <section className="login-content">
          <h2>User Login</h2>
          <LoginForm />
        </section>
      </div>
    );
  }
}
//1.verify input
//2. collect input info.
