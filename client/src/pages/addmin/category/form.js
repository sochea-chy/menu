import React from "react";
import { Row, Col, Form, Input } from "antd";
import UploadComponent from "../../../components/upload";

const FormComponents = (props) => {
  return (
    <Row gutter={[12, 12]}>
      <Col lg={24}>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Input name" />
        </Form.Item>
      </Col>
      <Col lg={24}>
        <Form.Item
          label="Description"
          name="discription"
          rules={[
            { required: true, message: "Please input your Description!" },
          ]}
        >
          <Input.TextArea placeholder="Input Description" rows={4} />
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
