/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  PieChartOutlined,
  DesktopOutlined,
  AreaChartOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
  TeamOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Layout, Menu, Space, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";

const { Header, Content, Sider } = Layout;


const App = (props) => {
  
  const { color, setColor } = props;

  const permission = ["0001", "0002"];
  function getItem(label, key, icon, code) {
    return {
      key,
      icon,
      label,
      code,
    };
  }
  const items = [
    getItem(
      <Link to="/overview">Overview</Link>,
      "/overview",
      <PieChartOutlined />,
      "0001"
    ),
    getItem(
      <Link to="/category">Category</Link>,
      "/category",
      <AreaChartOutlined />,
      "0001"
    ),
    getItem(
      <Link to="/product">Menu</Link>,
      "/product",
      <DesktopOutlined />,
      "0002"
    ),
    getItem(<Link to="/seat">QRCode by Seat</Link>, "/seat", <SettingOutlined />, "0002"),
    getItem(
      <Link to="/order">Order</Link>,
      "/order",
      <ShoppingCartOutlined />,
      "0002"
    ),
    getItem(<Link to="/user">User</Link>, "/user", <TeamOutlined />, "0001"),
    getItem(
      <Link to="/report">Report</Link>,
      "/report",
      <IdcardOutlined />,
      "0001"
    ),
  ];

  const title = window.location.pathname;
  const defaultSelected = title.split("/")[1];
  const itemsPermission = items.filter((item) =>
    permission.includes(item?.code)
  );

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const token = localStorage.getItem("TOKEN");
  const auth = JSON.parse(token);
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={
            defaultSelected === "" ? ["/overview"] : [`/${defaultSelected}`]
          }
          mode="inline"
          items={itemsPermission}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: "0px 24px 0px 24px",
            background: colorBgContainer,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div>
            <Space>
              <input 
                style={{  marginTop: 24, borderColor: `${color}`  }}
                type="color" value={color} onChange={e => setColor(e.target.value)} 
              />
              <Button
                onClick={async () => {
                  const res = await axios({
                    method: "post",
                    url: "http://127.0.0.1:8000/api/logout",
                    headers: {
                      Accept: "application/vnd.api+json",
                      "Content-Type": "application/vnd.api+json",
                      Authorization: `Bearer ${auth?.token}`,
                    },
                  });
                  if (res) {
                    localStorage.removeItem("TOKEN");
                    window.location.reload();
                  }
                }}
                type="primary"
                danger
                size="small"
              >
                Logout
              </Button>
              <a style={{ color: "#000" }} href="#">
                <Avatar src={auth?.user?.image} />
                {auth?.user?.name}
              </a>
            </Space>
          </div>
        </Header>
        <Content
          style={{
            margin: "10px",
          }}
        >
          <div
            style={{
              minHeight: 500,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
