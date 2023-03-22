/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CustomerLayout from "../../layout/customer";
import { Row, Col, Card, Button, message, Empty } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";
import { useParams } from "react-router-dom";

const MenuPage = (props) => {
  const [data, setData] = React.useState([]);
  const { id } = useParams();
  const getData = async () => {
    const res = await axios.get(
      `http://127.0.0.1:8000/api/product/${Number(id)}`
    );
    if (res) {
      setData(res.data?.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, [id]);

  const { setCartItem, cartItem } = props;

  const onAddToCart = (value) => {
    if (cartItem.find((val) => val.id === value.id)) {
      message.warning("This menu already added");
    } else {
      setCartItem([...cartItem, { ...value, qty: 1 }]);
    }
  };

  return (
    <CustomerLayout cartItem={cartItem}>
      <div className="menu">
        <div className="title">
          <h3>All Menu By Catogey</h3>
        </div>
        {data.length === 0 ? (
          <Empty />
        ) : (
          <Row gutter={[12, 12]}>
            {data?.map((val) => {
              return (
                <Col sm={24} xs={24} md={24} lg={6}>
                  <Card
                    cover={
                      <div
                        style={{
                          width: "100%",
                          height: "200px",
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
                      <Button
                        type="primary"
                        danger
                        icon={<ShoppingCartOutlined />}
                        className="shoppingCartOutlined"
                        onClick={() => onAddToCart(val)}
                      />
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        )}
      </div>
    </CustomerLayout>
  );
};

export default MenuPage;
