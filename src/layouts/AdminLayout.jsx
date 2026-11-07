import { Outlet } from "react-router-dom";
import AdminSidebar from "../sections/AdminSidebar";

const AdminLayout = () => (
  <div className="min-h-screen bg-[#f5f3ef] text-[#2f2d2b] md:flex">
    <AdminSidebar />
    <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8">
      <Outlet />
    </main>
  </div>
);

export default AdminLayout;
