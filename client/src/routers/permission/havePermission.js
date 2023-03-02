import { Navigate, Outlet } from "react-router-dom";

const HavePermissionRoutes = (props) => {
  const { code } = props;
  const permissionCode = ["0001", "0002", "0003", "0005"];
  const isPermission = permissionCode.find((val) => val === code);
  return isPermission !== undefined ? <Outlet /> : <Navigate to="/403" />;
};

export default HavePermissionRoutes;
