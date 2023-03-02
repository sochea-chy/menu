import React from "react";
import { Button, Form, Input, Row, Col, message } from "antd";
import axios from 'axios';
import { Navigate } from "react-router-dom";
import image from "../../images/login.jpg";

const LoginPage = () => {

  const onFinish = async (values) => {
    const url = "http://127.0.0.1:8000/api/login";
    const res = await axios.post(url, values)
    if(res?.data?.code === 401) {
      message.error(res?.data?.message);
    }
    if(res?.status === 200) {
      localStorage.setItem("TOKEN", JSON.stringify(res?.data));
      window.location.reload();
      Navigate("/overview");
    }
  };
  return (
    <Row style={{ background: "#fff" }}>
      <Col lg={12}>
        <div style={{ width: "100%", height: "100%" }}>
          <img
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt="zxcv sx"
          />
        </div>
      </Col>
      <Col lg={12}>
        <div
          style={{
            backgroundColor: "#fff",
            padding: 24,
            position: "absolute",
            top: "30%",
            width: "500px",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          }}
        >
          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your email!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default LoginPage;
