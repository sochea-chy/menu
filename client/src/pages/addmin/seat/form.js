import React from "react";
import { Row, Col, Form, Input } from "antd";

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
          label="Seat Number"
          name="seat_number"
          rules={[{ required: true, message: "Please input your Seat Number!" }]}
        >
          <Input placeholder="Input Seat Number" />
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
    </Row>
  );
};

export default FormComponents;
