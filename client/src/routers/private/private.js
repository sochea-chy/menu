import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("TOKEN");
  const auth = JSON.parse(token);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
