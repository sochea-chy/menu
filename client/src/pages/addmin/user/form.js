import React from "react";
import { Row, Col, Form, Input } from "antd";
import UploadComponent from "../../../components/upload";

const FormComponents = (props) => {
  return (
    <Row gutter={[12, 12]}>
      <Col lg={12}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Input name" />
        </Form.Item>
      </Col>
      <Col lg={12}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
          ]}
        >
          <Input placeholder="Input email" />
        </Form.Item>
      </Col>
      <Col lg={12}>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            { required: true, message: "Please input your Password!" },
          ]}
        >
          <Input.Password placeholder="Input Password" />
        </Form.Item>
      </Col>
      <Col lg={12}>
        <Form.Item
          label="Pssword Confirmation"
          name="pssword_confirmation"
          rules={[
            { required: true, message: "Please input your pssword confirmation!" },
          ]}
        >
          <Input.Password placeholder="Input pssword_confirmation" />
        </Form.Item>
      </Col>
      <Col lg={24}>
        <UploadComponent 
          label="Image"
          name="image"
          required={true}
          image={props.image}
        />
      </Col>
    </Row>
  );
};

export default FormComponents;
