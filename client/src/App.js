import React from "react";
import { ConfigProvider } from "antd";
import MainRoutes from "./routers";

function App() {
  const  [color , setColor] = React.useState("#1677FF")
  return (
    <ConfigProvider
    theme={{
      token: {
        colorPrimary: color,
      },
    }}
  >
    <MainRoutes setColor={setColor} color={color} />
  </ConfigProvider>
  );
}

export default App;
