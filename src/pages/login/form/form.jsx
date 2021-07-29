import React from "react";
import { useHistory, Redirect } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { reqLogin } from "../../../api";
import memoryUtils from "../../../utils/memoryUtils";
import storageUtils from "../../../utils/storageUtils";

export default function LoginForm() {
  let history = useHistory();
  const user = memoryUtils.user;
  if (user && user._id) {
    return <Redirect to="/" />;
  }
  const onFinish = async (values) => {
    const { username, password } = values;

    const result = await reqLogin(username, password);
    //console.log("request success", response.data);

    if (result.status === 0) {
      message.success("login successfully!");
      const user = result.data;
      memoryUtils.user = user; ///save user info in memory
      storageUtils.saveUser(user); //save user info loaclly
      history.replace("/");
    } else {
      console.log(result);
      message.error(result.meg);
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  //this.validatePwd = (rule, value) => Promise;
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="username"
        name="username"
        initialValue="admin"
        rules={[
          //declare valid: use antd declare validation.
          {
            required: true,
            whitespace: true,
            message: "Please input your username!",
          },
          { min: 5, message: "username at least 5digit" },
          { max: 12, message: "username maximun 5digit" },
          {
            pattern: /^[a-zA-Z0-9_]+$/,
            message: "username must be Englis, digit of underscore",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            //validator: this.validatePwd,
          },
        ]}
      >
        <Input
          prefix={<LockOutlined style={{ color: "rgba(0,0,0,.25)" }} />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
