// protecteRoute component react router 6
import { useLocation } from "react-router-dom";
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "universal-cookie";
export default function ProtectedRoutes() {
  const cookies = new Cookies();
  const location = useLocation();
  const token = cookies.get("token");
  if (token !== undefined) {
    return <Outlet />;
  } else {
    return <Navigate to={{ pathname: "/", state: { from: location } }} />;
  }
}
