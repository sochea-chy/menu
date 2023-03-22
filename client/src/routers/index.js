import React from "react";
import PublicRoutes from "./private/public";
import LayoutComponent from "../layout";
import ProtectedRoutes from "./private/private";
import { Routes, Route } from "react-router-dom";
import HavePermissionRoutes from "./permission/havePermission";
import NoPermissionRoutes from "./permission/noPermission";
import { componentRouter } from "./components";

//error
import Pag0404 from "../pages/errors/404";
import Pag0403 from "../pages/errors/403";

//auth
import LoginPage from "../pages/auth";
import HomePage from "../pages/customer/home";
import MenuPage from "../pages/customer/menu";
import CartPage from "../pages/customer/cart";
import OrderHistory from "../pages/customer/orderHistory";

const MainRoutes = (props) => {
  const { color, setColor } = props;
  window.addEventListener("storage", handler);
  function handler() {
    window.location.reload();
  }
  const [cartItem, setCartItem] = React.useState([]);

  return (
    <React.Fragment>
      <Routes>
        <Route path="/client" element={<HomePage setCartItem={setCartItem} cartItem={cartItem}/>} />
        <Route path="/order-history" element={<OrderHistory setCartItem={setCartItem} cartItem={cartItem}/>} />
        <Route
          path="/menu/:id"
          element={<MenuPage setCartItem={setCartItem} cartItem={cartItem} />}
        />
        <Route
          path="/cart"
          element={<CartPage setCartItem={setCartItem} cartItem={cartItem} />}
        />
        <Route path="/" element={<LayoutComponent color={color} setColor={setColor} />}>
          <Route path="/" element={<ProtectedRoutes />}>
            {componentRouter.map((val) => {
              return (
                <React.Fragment key={val?.id}>
                  <Route
                    path={val?.path}
                    element={<HavePermissionRoutes code={val.code} />}
                  >
                    <Route path={val.path} element={val.element} />
                  </Route>
                  <Route
                    path="403"
                    element={<NoPermissionRoutes code={val.code} />}
                  >
                    <Route path="/403" element={<Pag0403 />} />
                  </Route>
                </React.Fragment>
              );
            })}
            <Route path="*" element={<Pag0404 />} />
          </Route>
        </Route>
        <Route path="login" element={<PublicRoutes />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
};

export default MainRoutes;
