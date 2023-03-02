import { Button, Card, Col, Divider, Empty, message, Row } from "antd";
import React from "react";
import CustomerLayout from "../../layout/customer";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CartPage = (props) => {
  
  const { setCartItem, cartItem } = props;
  const navigate = useNavigate();

  const onDeleteCart = (id) => {
    const newData = cartItem.filter((val) => val.id !== id);
    setCartItem(newData);
  };

  let tottal = 0;

  const onAdd = (id) => {
    const newData = cartItem.filter((val) => {
      if (val.id === id) {
        return {
          ...val,
          qty: val.qty++,
        };
      } else {
        return val;
      }
    });
    setCartItem(newData);
  };

  const onDok = (id) => {
    const newData = cartItem.filter((val) => {
      if (val.id === id) {
        return {
          ...val,
          qty: val.qty--,
        };
      } else {
        return val;
      }
    });
    setCartItem(newData);
  };

  const onOrder = async () => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    const payload = {
      phone_number: customer?.phone_number,
      seat_number: customer?.seat_number,
      total: tottal,
      product: cartItem,
      status: "pedding",
    }
    const res = axios.post("http://127.0.0.1:8000/api/order/create", payload);
    if(res) {
      message.success("Order successfully");
      navigate("/order-history");
      setCartItem([]);
    }
  };

  return (
    <CustomerLayout cartItem={cartItem}>
      <div className="cart">
        <h2>
          <u>Shopping Cart</u>
        </h2>
        {cartItem?.length === 0 ? (
          <Empty />
        ) : (
          <Row gutter={[12, 12]}>
            <Col sm={24} xs={24} md={24} lg={16}>
              <Row gutter={[0, 1]}>
                {cartItem?.map((value) => {
                  tottal = tottal + value.price * value.qty;
                  return (
                    <Col span={24}>
                      <div className="card">
                        <div className="box-cart">
                          <div className="box1">
                            <div className="box-image">
                              <img
                                src={value?.image}
                                alt=""
                              />
                            </div>
                            <div className="title">
                              <h3>{value.name}</h3>
                              <p style={{ color: "red" }}>${value.price}.00</p>
                            </div>
                          </div>
                          <div className="box2">
                            <Button
                              size="small"
                              onClick={() => onDok(value.id)}
                              disabled={value.qty === 1}
                            >
                              -
                            </Button>
                            <h2 style={{ marginLeft: 10, marginRight: 10 }}>
                              {value.qty}
                            </h2>
                            <Button
                              size="small"
                              onClick={() => onAdd(value.id)}
                            >
                              +
                            </Button>
                          </div>
                          <div className="box3">
                            <Button
                              type="primary"
                              danger
                              icon={<DeleteOutlined />}
                              onClick={() => onDeleteCart(value.id)}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </Col>
            <Col sm={24} xs={24} md={24} lg={8}>
              <Card title="Order Summary">
                <div className="summary">
                  <h3>Total:</h3>
                  <h3>${tottal}.00</h3>
                </div>
                <Divider danger />
                <Button type="primary" block onClick={onOrder}>
                  Order
                </Button>
                <Button
                  type="dashed"
                  block
                  style={{ marginTop: 10 }}
                  onClick={() => navigate(-1)}
                >
                  Add more
                </Button>
              </Card>
            </Col>
          </Row>
        )}
      </div>
    </CustomerLayout>
  );
};

export default CartPage;
