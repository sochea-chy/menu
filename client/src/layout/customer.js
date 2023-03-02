import { Space, Badge, Affix, Result, Button, Modal, Form, Input } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CustomerLayout = (props) => {
  const { children, cartItem } = props;
  const seatId = Number(window.location.search.split("=")[1]);
  const customer = sessionStorage.getItem("customer");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (value) => {
    sessionStorage.setItem("customer", JSON.stringify(value));
    window.location.reload();
  };

  return (
    <div>
      {customer ? (
        <React.Fragment>
          <Affix>
            <div className="header-clinet">
              <div className="logo">
                <img
                  src="https://image.pngaaa.com/904/2275904-middle.png"
                  alt="logo"
                />
              </div>
              <div className="action">
                <Space>
                  <Link to={"/order-history"}>
                    <Button type="primary" size="small">My order</Button>
                  </Link>
                  <Badge count={cartItem?.length}>
                    <Link to="/cart" style={{ color: "#000" }}>
                      <ShoppingCartOutlined
                        style={{ fontSize: 24, cursor: "pointer" }}
                      />
                    </Link>
                  </Badge>
                </Space>
              </div>
            </div>
          </Affix>
          <div className="content">{children}</div>
        </React.Fragment>
      ) : (
        <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={
            <Button type="primary" onClick={showModal}>
              Enter phone number
            </Button>
          }
        />
      )}

      <Modal
        title="Enter phone number"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[]}
        destroyOnClose
      >
        <Form
          name="basic"
          onFinish={onFinish}
          autoComplete="off"
          layout="vertical"
          initialValues={{ seat_number: seatId ? seatId : "" }}
        >
          <Form.Item
            label="Phone Number"
            name="phone_number"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>

          <Form.Item
            label="Seat Number"
            name="seat_number"
            rules={[
              { required: true, message: "Please input your seat number!" },
            ]}
          >
            <Input
              disabled={seatId ? true : false}
              placeholder="Phone number"
            />
          </Form.Item>
          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default CustomerLayout;
