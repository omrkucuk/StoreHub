import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px" }}>
        <Outlet />
      </div>
    </div>
  );
}
