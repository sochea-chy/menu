import React from "react";
import { Row, Col, Form, Input, Select, InputNumber } from "antd";
import axios from "axios";
import UploadComponent from "../../../components/upload";

const FormComponents = (props) => {
  const [data, setData] = React.useState([]);
  const token = localStorage.getItem("TOKEN");
  const auth = JSON.parse(token);

  const getData = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/category`, {
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth?.token}`,
      },
    });
    if (res) {
      setData(res.data?.data?.map((val) => {
        return {
          value: val?.id,
          label: val?.name,
        }
      }));
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

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
          label="Category"
          name="category_id"
          rules={[{ required: true, message: "Please select your name!" }]}
        >
          <Select 
            placeholder="Select Category"
            options={data}
          />
        </Form.Item>
      </Col>
      <Col lg={24}>
        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, message: "Please input your price!" }]}
        >
          <InputNumber placeholder="Input price" style={{ width: "100%" }} />
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
