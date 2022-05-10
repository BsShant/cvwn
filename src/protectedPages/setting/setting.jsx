import React from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import FormItem from "../../components/formItem/formItem";
import { server } from "../../utils/fetch";
import { useDispatch, useSelector } from "react-redux";
import { logoutProcessStarts } from "../../store/authStore/auth.action";

const Setting = (props) => {
  const dispatch = useDispatch();
  const parsedToken = useSelector((state) => state.authStore.userToken);

  const onFinish = async (values, route) => {
    const key = "updatable";
    message.loading({ content: "Loading...", key });
    try {
      const res = await fetch(`${server}/auth/${route}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${parsedToken}`,
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.hasOwnProperty("user")) {
        message.error({ content: data.message, key, duration: 2 });
        return dispatch(logoutProcessStarts(data.user));
      }
      console.log(data);
      if (data) {
        message.success({ content: data.message, key, duration: 2 });
      }
    } catch (error) {
      console.log(error);
      message.error({ content: "The operation failed", key, duration: 2 });
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="row">
        <div className="col-md-6 col-sm-8 col-12">
          <h2>Setting Page</h2>
        </div>
      </div>
      <div className="row" style={{ marginTop: "60px" }}>
        <div className="col-md-6 col-sm-8 col-12">
          <h3>Change Your Email Address</h3>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            layout="Vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={(values) => onFinish(values, "changeEmail")}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <FormItem label="Enter your current Email" name="email" />
            <FormItem label="Enter your new Email" name="newEmail" />
            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button className="buttonNormal" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-6 col-sm-8 col-12">
          <h3>Change Your Username</h3>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            layout="Vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={(values) => onFinish(values, "changeUsername")}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <FormItem label="Enter your current Username" name="username" />
            <FormItem label="Enter your new Username" name="newUsername" />
            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button className="buttonNormal" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <div className="row" style={{ marginTop: "70px" }}>
        <div className="col-md-6 col-sm-8 col-12">
          <h3>Change Your Password</h3>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            layout="Vertical"
            initialValues={{
              remember: true,
            }}
            onFinish={(values) => onFinish(values, "changePassword")}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <FormItem label="Enter your current Password" name="oldPassword" />
            <FormItem label="Enter your new Password" name="newPassword" />
            <Form.Item
              wrapperCol={{
                span: 16,
              }}
            >
              <Button className="buttonNormal" htmlType="submit">
                Update
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Setting;
