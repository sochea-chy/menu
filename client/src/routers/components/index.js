import ListCateogry from "../../pages/addmin/category/list";
import ListProduct from "../../pages/addmin/product/list";
import ListSeaat from "../../pages/addmin/seat/list";
import ListUser from "../../pages/addmin/user/list";
import ListOrder from "../../pages/addmin/order/list";
import ListReport from "../../pages/addmin/report/list";
import Overview from "../../pages/addmin/overview";

export const componentRouter = [
  {
    id: 1,
    path: "/",
    element: <Overview />,
    code: "0002",
  },
  {
    id: 2,
    path: "/category",
    element: <ListCateogry />,
    code: "0002",
  },
  {
    id: 4,
    path: "/product",
    element: <ListProduct />,
    code: "0002",
  },
  {
    id: 5,
    path: "/seat",
    element: <ListSeaat />,
    code: "0002",
  },
  {
    id: 6,
    path: "/user",
    element: <ListUser />,
    code: "0002",
  },
  {
    id: 7,
    path: "/order",
    element: <ListOrder />,
    code: "0002",
  },
  {
    id: 9,
    path: "/report",
    element: <ListReport />,
    code: "0002",
  },
  {
    id: 9,
    path: "/overview",
    element: <Overview />,
    code: "0002",
  },
];
