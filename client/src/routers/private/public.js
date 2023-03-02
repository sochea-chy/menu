import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
  const token = localStorage.getItem("TOKEN");
  const auth = JSON.parse(token);
  return auth ? <Navigate to="/overview" /> : <Outlet />;
};

export default PublicRoutes;
