import HeaderNav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <HeaderNav />
      <Outlet />
      <Footer />
    </div>
  );
}
