import { Navigate, Outlet } from "react-router-dom";
const NoPermissionRoutes = (props) => {
    const { code } = props;
    const permissionCode = ["0001", "0002", "0003", "0004"];
    const isPermission = permissionCode.find((val) => val === code);
  return isPermission !== undefined ? <Outlet /> : <Navigate to="/login" />;
};

export default NoPermissionRoutes;
