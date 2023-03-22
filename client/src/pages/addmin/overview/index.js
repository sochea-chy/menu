import React from "react";
import { Card, Col, Row, Statistic } from "antd";

import home from "../images/home.jpg";
import axios from "axios";

const Overview = () => {
    const [data, setData] = React.useState();

    React.useEffect(() => {
        (async () => {
            const res = await axios.get("http://127.0.0.1:8000/api/total");
            setData(res?.data);
        })()

    }, []);
    
  return (
    <React.Fragment>
      <Row gutter={[12, 12]}>
        <Col lg={6}>
          <Card>
            <Statistic
              title="Total Order"
              value={data?.order}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Statistic
              title="Total User"
              value={data?.user}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Statistic
              title="Total Menu"
              value={data?.prodcut}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <Statistic
              title="Total Category"
              value={data?.category}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <div style={{ height: "65vh" }}>
              <img
                src={home}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </div>
          </Card>
        </Col>
        <Col lg={12}>
          <Card>
            <div style={{ height: "65vh" }}>
              <img
                src="https://wp-statistics.com/wp-content/themes/site-theme/assets/img/cta-secondary.svg"
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};
export default Overview;
