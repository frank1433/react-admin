import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { Menu } from "antd";
/* import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons"; */

import "./index.less";
import menuList from "../../config/menuConfig";

import logo from "../../assets/images/logo.png";

const { SubMenu } = Menu;
class LeftNav extends Component {
  //const path = this.props.location.pathname;
  //reduce version
  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname;
    return menuList.reduce((pre, item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        const cItem = item.children.find((cItem) => cItem.key === path);
        if (cItem) {
          this.openKey = item.key;
        }

        pre.push(
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
      return pre;
    }, []);
  };
  /* map version 
  getMenuNodes = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {this.getMenuNodes(item.children)}
          </SubMenu>
        );
      }
    });
  }; */
  /*  componentDidMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  } */

  componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }
  render() {
    //const menuNodes = this.getMenuNodes(menuList);
    const path = this.props.location.pathname;
    const openKey = this.openKey;
    return (
      <div className="left-nav">
        <Link to="/" className="left-nav-header">
          <img src={logo} alt="logo" />
          <h1>StoreHome</h1>
        </Link>
        <Menu
          mode="inline"
          theme="dark"
          selectedKeys={[path]}
          defaultOpenKeys={[openKey]}
        >
          {this.menuNodes}
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftNav);
