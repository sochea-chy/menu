/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CustomerLayout from "../../layout/customer";
import { Row, Col, List, Empty, Modal, Card } from "antd";
import axios from "axios";
import moment from "moment";

const OrderHistory = () => {
  const customer = sessionStorage.getItem("customer");
  const phone_number = JSON.parse(customer)?.phone_number;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [viewProduct, setViewProduct] = React.useState([]);
  const getData = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/order/${phone_number}`
    );
    if (res) {
      setData(res.data?.data);
    }
  };

  React.useEffect(() => {
    if (phone_number) {
      getData();
    }
  }, []);

  return (
    <CustomerLayout>
      <div className="category">
        <div className="title">
          <h3>Order History</h3>
        </div>
        {data.length === 0 ? (
          <Empty />
        ) : (
          <Row gutter={[12, 12]}>
            {data?.map((val) => {
              return (
                <Col sm={24} xs={24} md={24} lg={6} key={val.id}>
                  <div
                    style={{ backgroundColor: "#fff", borderRadius: 12 }}
                    onClick={() => {
                      setViewProduct(JSON.parse(val?.product));
                      setIsModalOpen(true);
                    }}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={[val]}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            title={
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p>Phone Number:</p>
                                  <p>{item?.phone_number}</p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p>Seat Number:</p>
                                  <p>{item?.seat_number}</p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p>Status:</p>
                                  <p>{item?.status}</p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p>Date:</p>
                                  <p>
                                    {moment(item.created_at).format(
                                      "DD-MMMM-YYYY H::ss A"
                                    )}
                                  </p>
                                </div>
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                  }}
                                >
                                  <p>Total:</p>
                                  <p>${item?.total}</p>
                                </div>
                              </div>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </div>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
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
    </CustomerLayout>
  );
};

export default OrderHistory;
