import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CustomerLayout = () => (
  <div className="min-h-screen bg-patisserie-vanilla text-patisserie-cocoa">
    <Header />
    <Outlet />
    <Footer />
  </div>
);

export default CustomerLayout;
