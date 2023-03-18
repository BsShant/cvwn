import { Button, Form, Input, message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { server } from "../../utils/fetch";
import "./login.css";
const ForgotPassword = () => {
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    try {
      const res = await fetch(`${server}/auth/forgotPassword`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data) {
        message.success({ content: data.message, key, duration: 2 });
      }
    } catch (error) {
      message.error({ content: "The operation failed", key, duration: 2 });
    }
  };

  const onFinishFailed = (errorInfo) => {
    ""
  };

  return (
    <div className="LoginWrapper">
      <div className="LoginBox row">
        <div className="col-md-12">
          <h2>Enter Your Registered Email Id</h2>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            layout="vertical"
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button className="buttonReverse" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
