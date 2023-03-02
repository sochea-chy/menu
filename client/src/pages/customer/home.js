/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import CustomerLayout from "../../layout/customer";
import { List, Row, Col } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const HomePage = (props) => {
  const { cartItem } = props;
  const [data, setData] = React.useState([]);
  const getData = async () => {
    const res = await axios.get(`http://127.0.0.1:8000/api/category/client`);
    if (res) {
      setData(res.data?.data);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <CustomerLayout cartItem={cartItem}>
      <div className="category">
        <div className="title">
          <h3>All Catogey</h3>
        </div>
        <Row gutter={[12, 12]}>
          {data?.map((val) => {
            return (
              <Col sm={24} xs={24} md={24} lg={6} key={val.id}>
                <div style={{ backgroundColor: "#fff", borderRadius: 12 }}>
                  <List
                    itemLayout="horizontal"
                    dataSource={[val]}
                    renderItem={(item) => (
                      <List.Item>
                        <List.Item.Meta
                          avatar={
                            <div style={{ width: 100, height: 80 }}>
                              <img
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  borderRadius: 5,
                                  objectFit:"cover"
                                }}
                                src={val?.image}
                                alt=""
                              />
                            </div>
                          }
                          title={
                            <Link to={`/menu/${item.id}`}>{item.name}</Link>
                          }
                          description={item?.discription}
                        />
                      </List.Item>
                    )}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    </CustomerLayout>
  );
};

export default HomePage;
