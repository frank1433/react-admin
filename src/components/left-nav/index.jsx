import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

import "./index.less";

import logo from "../../assets/images/logo.png";

const { SubMenu } = Menu;
export default class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
          <h1>StoreHome</h1>
        </Link>
        <Menu mode="inline" theme="dark">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <span>Homepage</span>
          </Menu.Item>

          <SubMenu key="sub1" icon={<MailOutlined />} title="Product">
            <Menu.Item key="5" icon={<MailOutlined />}>
              Class Management
            </Menu.Item>
            <Menu.Item key="6" icon={<MailOutlined />}>
              Product Management
            </Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
