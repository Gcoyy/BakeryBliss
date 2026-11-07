import { Link, Outlet } from "react-router-dom";

const AuthLayout = () => (
  <main className="flex min-h-screen items-center justify-center bg-patisserie-vanilla px-5 py-10">
    <div className="w-full max-w-md">
      <Link to="/home" className="mb-8 block text-center font-abhaya text-3xl font-semibold text-patisserie-cocoa">
        Connie de Café
      </Link>
      <Outlet />
    </div>
  </main>
);

export default AuthLayout;
