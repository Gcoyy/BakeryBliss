import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import CustomerLayout from "./layouts/CustomerLayout";
import AdminLayout from "./layouts/AdminLayout";
import AuthLayout from "./layouts/AuthLayout";
import SignUp from "./Pages/Customer/SignUp";
import Home from "./Pages/Customer/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import AboutUs from "./Pages/Customer/AboutUs";
import ContactUs from "./Pages/Customer/ContactUs";
import Profile from "./Pages/Customer/Profile";
import CakeCatalog from "./Pages/Customer/CakeCatalog";
import RoleBasedRedirect from "./context/RoleBasedRedirect";
import Cart from "./Pages/Customer/Cart";
import CakeCustomization from "./Pages/Customer/CakeCustomization";
import TermsConditions from "./Pages/Terms&Conditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Inventory from "./sections/Inventory";
import Cakes from "./sections/Cakes";
import CakeOrders from "./sections/CakeOrders";
import Assets from "./sections/Assets";
import BlockedDates from "./sections/BlockedDates";
import RecipeManagement from "./sections/RecipeManagement";
import AssetIngredientManagement from "./sections/AssetIngredientManagement";
import QRCodeUpload from "./sections/QRCodeUpload";
import ProtectedRoute from "./context/ProtectedRoute";
import AdminProfile from "./Pages/Admin/AdminProfile";
import ScrollToHashElement from "./components/ScrollToHashElement";
import useScrollToTop from "./hooks/useScrollToTop";

const transition = (element) => <PageTransition>{element}</PageTransition>;

function AppRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={transition(<SignUp />)} />
          <Route path="/login" element={transition(<Login />)} />
          <Route path="/reset-password" element={transition(<ResetPassword />)} />
        </Route>

        <Route element={<CustomerLayout />}>
          <Route path="/home" element={transition(<Home />)} />
          <Route path="/aboutus" element={transition(<AboutUs />)} />
          <Route path="/contactus" element={transition(<ContactUs />)} />
          <Route path="/cakecatalog" element={transition(<CakeCatalog />)} />
          <Route path="/cart" element={transition(<Cart />)} />
          <Route path="/cakecustomization" element={transition(<CakeCustomization />)} />
          <Route path="/terms&conditions" element={transition(<TermsConditions />)} />
          <Route path="/privacypolicy" element={transition(<PrivacyPolicy />)} />
          <Route path="/profile" element={<ProtectedRoute allowedRoles={["customer"]}>{transition(<Profile />)}</ProtectedRoute>} />
        </Route>

        <Route path="/" element={<RoleBasedRedirect />} />
        <Route path="/dashboard" element={<RoleBasedRedirect />} />
        <Route path="/redirect" element={<RoleBasedRedirect />} />

        <Route path="/adminpage" element={<ProtectedRoute allowedRoles={["admin"]}><AdminLayout /></ProtectedRoute>}>
          <Route index element={transition(<Inventory />)} />
          <Route path="inventory" element={transition(<Inventory />)} />
          <Route path="cakes" element={transition(<Cakes />)} />
          <Route path="cake orders" element={transition(<CakeOrders />)} />
          <Route path="custom cake assets" element={transition(<Assets />)} />
          <Route path="blocked dates" element={transition(<BlockedDates />)} />
          <Route path="recipe management" element={transition(<RecipeManagement />)} />
          <Route path="asset ingredient management" element={transition(<AssetIngredientManagement />)} />
        </Route>
        <Route path="/admin/profile" element={<ProtectedRoute allowedRoles={["admin"]}><AdminLayout /></ProtectedRoute>}>
          <Route index element={transition(<AdminProfile />)} />
        </Route>
        <Route path="/qrcodeupload" element={<ProtectedRoute allowedRoles={["admin"]}><AdminLayout /></ProtectedRoute>}>
          <Route index element={transition(<QRCodeUpload />)} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useScrollToTop();
  return <><Toaster position="top-center" reverseOrder={false} /><AppRoutes /><ScrollToHashElement /></>;
}

export default App;
