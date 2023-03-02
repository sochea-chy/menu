/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import {
  Button,
  Input,
  Space,
  Table,
  Modal,
  Form,
  message,
  Card,
  Row,
  Col,
} from "antd";
import axios from "axios";
const BASE_URL = `${process.env.API_URL}`;

const ListLayout = (props) => {
  console.log(BASE_URL);
  const {
    columns,
    form: FormComponents,
    beforeSubmit,
    beforeInitialValues,
    url,
    notEdit,
    newAction,
    isReport,
  } = props;
  const token = localStorage.getItem("TOKEN");
  const auth = JSON.parse(token);

  const [isModalOpenAdd, setIsModalOpenAdd] = React.useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = React.useState(false);
  const [valueInit, setValueInit] = React.useState(null);
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [renderApi, setRenderApi] = React.useState(false);
  const [textQuery, setTextQuery] = React.useState("");
  const getData = async () => {
    setLoading(true);
    const res = await axios.get(
      `http://127.0.0.1:8000/api/${url}?q=${textQuery}`,
      {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${auth?.token}`,
        },
      }
    );
    if (res) {
      setData(res.data?.data);
      setLoading(false);
    }
  };

  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [viewProduct, setViewProduct] = React.useState([]);

  React.useEffect(() => {
    getData();
  }, [url, renderApi, textQuery]);

  const onDelete = async (id) => {
    const res = await axios({
      method: "delete",
      url: `http://127.0.0.1:8000/api/${url}/delete/${id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth?.token}`,
      },
    });
    if (res) {
      message.success("deleted success");
      setIsModalOpenEdit(false);
      setRenderApi(!renderApi);
    }
  };

  const newColums = [
    ...columns,
    {
      title: "Action",
      dataIndex: "action",
      render: (_, row) => {
        return (
          <Space>
            {!notEdit && (
              <Button
                type="primary"
                onClick={() => {
                  setIsModalOpenEdit(true);
                  setValueInit(row);
                }}
                size="small"
              >
                Edit
              </Button>
            )}
            <Button
              size="small"
              type="primary"
              danger
              onClick={() => onDelete(row?.id)}
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  const newColumsAction = [
    ...columns,
    {
      title: "Action",
      dataIndex: "action",
      render: (_, row) => {
        return (
          <Space>
            {!isReport && (
              <Button
                type="primary"
                danger
                onClick={async () => {
                  const res = await axios({
                    method: "put",
                    url: `http://127.0.0.1:8000/api/${url}/updateStatus/${row?.id}`,
                    headers: {
                      Accept: "application/vnd.api+json",
                      "Content-Type": "application/vnd.api+json",
                      Authorization: `Bearer ${auth?.token}`,
                    },
                    data: {
                      status: "cancel",
                    },
                  });
                  if (res) {
                    message.success("status updated success");
                    setRenderApi(!renderApi);
                  }
                }}
                size="small"
              >
                Cancel
              </Button>
            )}

            <Button
              danger
              onClick={() => {
                setIsModalOpen(true);
                setViewProduct(JSON.parse(row?.product));
              }}
              size="small"
            >
              View
            </Button>
            {!isReport && (
              <Button
                type="primary"
                onClick={async () => {
                  const res = await axios({
                    method: "put",
                    url: `http://127.0.0.1:8000/api/${url}/updateStatus/${row?.id}`,
                    headers: {
                      Accept: "application/vnd.api+json",
                      "Content-Type": "application/vnd.api+json",
                      Authorization: `Bearer ${auth?.token}`,
                    },
                    data: {
                      status: "confirm",
                    },
                  });
                  if (res) {
                    message.success("status updated success");
                    setRenderApi(!renderApi);
                  }
                }}
                size="small"
              >
                Confirm
              </Button>
            )}
          </Space>
        );
      },
    },
  ];

  const onEdit = async (values) => {
    if (beforeSubmit) {
      values = beforeSubmit(values);
    }
    const res = await axios({
      method: "put",
      url: `http://127.0.0.1:8000/api/${url}/edit/${valueInit?.id}`,
      headers: {
        Accept: "application/vnd.api+json",
        "Content-Type": "application/vnd.api+json",
        Authorization: `Bearer ${auth?.token}`,
      },
      data: values,
    });
    if (res) {
      message.success("Edited success");
      setIsModalOpenEdit(false);
      setRenderApi(!renderApi);
    }
  };

  const onAdd = async (values) => {
    if (beforeSubmit) {
      values = beforeSubmit(values);
    }
    if (notEdit) {
      const res = await axios({
        method: "post",
        url: `http://127.0.0.1:8000/api/register`,
        data: values,
      });
      if (res) {
        message.success("Created success");
        setIsModalOpenAdd(false);
        setRenderApi(!renderApi);
      }
    } else {
      const res = await axios({
        method: "post",
        url: `http://127.0.0.1:8000/api/${url}/create`,
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
          Authorization: `Bearer ${auth?.token}`,
        },
        data: values,
      });
      if (res) {
        message.success("Created success");
        setIsModalOpenAdd(false);
        setRenderApi(!renderApi);
      }
    }
  };

  return (
    <React.Fragment>
      <Table
        columns={newAction ? newColumsAction : newColums}
        dataSource={data}
        bordered
        title={() => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Input
                style={{ width: "300px" }}
                placeholder="Search text"
                onChange={(value) => setTextQuery(value?.target?.value)}
              />
              {!newAction && (
                <Button type="primary" onClick={() => setIsModalOpenAdd(true)}>
                  Add new
                </Button>
              )}
            </div>
          );
        }}
        footer={false}
        pagination={false}
        loading={loading}
      />
      <Modal
        title="Add new"
        open={isModalOpenAdd}
        destroyOnClose
        onCancel={() => setIsModalOpenAdd(false)}
        width={800}
        footer={[]}
      >
        <Form layout="vertical" onFinish={onAdd}>
          <FormComponents />
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form>
      </Modal>
      {valueInit !== null && (
        <Modal
          title="Edit"
          open={isModalOpenEdit}
          destroyOnClose
          onCancel={() => setIsModalOpenEdit(false)}
          width={800}
          footer={[]}
        >
          <Form
            layout="vertical"
            onFinish={onEdit}
            initialValues={
              beforeInitialValues ? beforeInitialValues(valueInit) : valueInit
            }
          >
            <FormComponents image={valueInit?.image} />
            <Button type="primary" htmlType="submit">
              Edit
            </Button>
          </Form>
        </Modal>
      )}

      <Modal
        title="Menu"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
          setViewProduct([]);
        }}
        footer={[]}
      >
        <Row gutter={[12, 12]}>
          {viewProduct?.map((val) => {
            return (
              <Col sm={24} xs={24} md={24} lg={12}>
                <Card
                  cover={
                    <div
                      style={{
                        width: "100%",
                        height: "100px",
                        padding: 5,
                        borderRadius: 12,
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          borderRadius: 12,
                        }}
                        alt="example"
                        src={val.image}
                      />
                    </div>
                  }
                >
                  <Card.Meta title={val.name} />
                  <div className="description">
                    <h3>${val?.price}.00</h3>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Modal>
    </React.Fragment>
  );
};
export default ListLayout;
