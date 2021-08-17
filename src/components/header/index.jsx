import React, { Component } from "react";

import { reqWeather } from "../../api";
import "./index.less";
import { formateDate } from "../../utils/dateUtils";
import memoryUitls from "../../utils/memoryUtils";
export default class Header extends Component {
  state = {
    currentTime: formateDate(Date.now()),
    weather: "",
  };
  getTime = () => {
    setInterval(() => {
      const currentTime = formateDate(Date.now());
      this.setState({ currentTime });
    }, 1000);
  };
  getWeather = async () => {
    const weather = await reqWeather("上海");
    this.setState({ weather });
  };
  componentDidMount() {
    this.getTime();
    this.getWeather();
  }
  render() {
    const { currentTime, weather } = this.state;
    const username = memoryUitls.user.username;
    return (
      <div className="header">
        <div className="header-top">
          <span>welcome {username}</span>
          <a href=" ">exit</a>
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left">homepage</div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src="" alt="" />
            <span>{weather}</span>
          </div>
        </div>
      </div>
    );
  }
}
