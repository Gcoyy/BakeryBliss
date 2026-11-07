import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { supabase } from "../supabaseClient";

const Header = () => {
  const location = useLocation();
  const { session, userRole, loading } = UserAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);

  // Fetch pending orders count
  const fetchPendingOrdersCount = async () => {
    if (!session?.user || userRole !== 'customer') {
      setPendingOrdersCount(0);
      return;
    }

    try {
      // Get customer ID from the CUSTOMER table
      const { data: customerData, error: customerError } = await supabase
        .from('CUSTOMER')
        .select('cus_id')
        .eq('auth_user_id', session.user.id)
        .single();

      if (customerError || !customerData) {
        console.error('Error fetching customer:', customerError);
        setPendingOrdersCount(0);
        return;
      }

      // Count orders with 'Pending' status
      const { count, error } = await supabase
        .from('ORDER')
        .select('*', { count: 'exact', head: true })
        .eq('cus_id', customerData.cus_id)
        .eq('order_status', 'Pending');

      if (error) {
        console.error('Error fetching pending orders count:', error);
        setPendingOrdersCount(0);
        return;
      }

      setPendingOrdersCount(count || 0);
    } catch (error) {
      console.error('Error in fetchPendingOrdersCount:', error);
      setPendingOrdersCount(0);
    }
  };

  // Update pending orders count when session changes or orders are updated
  useEffect(() => {
    fetchPendingOrdersCount();

    // Listen for custom order update events
    const handleOrderUpdate = () => {
      fetchPendingOrdersCount();
    };

    window.addEventListener('orderUpdated', handleOrderUpdate);

    return () => {
      window.removeEventListener('orderUpdated', handleOrderUpdate);
    };
  }, [session?.user, userRole]);

<<<<<<< HEAD
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const renderLinks = (isMobile = false) => (
    <ul className={isMobile ? "space-y-1" : "flex items-center gap-1"}>
      {links.map(({ to, label }) => {
        const isActive = location.pathname === to;

        return (
          <li key={to}>
            <Link
              to={to}
              onClick={isMobile ? () => setIsMobileMenuOpen(false) : undefined}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-full px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patisserie-rose-strong ${
                isActive
                  ? isAdmin
                    ? "bg-white/55 text-patisserie-cocoa"
                    : "bg-patisserie-blush text-patisserie-cocoa"
                  : isAdmin
                    ? "text-patisserie-cocoa hover:bg-white/35"
                    : "text-patisserie-cocoa/80 hover:bg-patisserie-blush hover:text-patisserie-cocoa"
              }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <header
      className={`sticky top-0 z-50 border-b ${
          isAdmin
          ? "border-[#b8941f]/30 bg-[#e6d5aa]"
          : "border-[#f0e5de] bg-patisserie-vanilla/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex min-h-20 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
        <Link
          to={isAdmin ? "/adminpage" : "/home#home"}
          className="flex shrink-0 items-center gap-2.5 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#754B45]"
        >
          <img
            src="/Web Icon.png"
            alt=""
            aria-hidden="true"
            className="h-10 w-10 object-contain"
          />
          <span className="font-abhaya text-lg font-bold leading-tight text-patisserie-cocoa sm:text-xl">
            Connie <span className="text-patisserie-rose-strong">de Café</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden lg:block">
          {renderLinks()}
        </nav>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#754B45] transition-colors hover:bg-[#754B45]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#754B45] lg:hidden"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>

          {loading ? (
            <span className="h-9 w-9 animate-pulse rounded-full bg-[#754B45]/10" aria-label="Loading account" />
          ) : session ? (
            <>
              <Link
                to={isAdmin ? "/admin/profile" : "/profile"}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-[#754B45] transition-colors hover:bg-[#754B45]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#754B45]"
                aria-label="My profile"
                title="My profile"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </Link>
              {!isAdmin && (
                <Link
                  to="/cart"
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[#754B45] transition-colors hover:bg-[#754B45]/8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#754B45]"
                  aria-label={`My orders${pendingOrdersCount ? `, ${pendingOrdersCount} pending` : ""}`}
                  title={`My orders${pendingOrdersCount ? ` (${pendingOrdersCount} pending)` : ""}`}
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3 4h2l2.2 10.1a2 2 0 002 1.6h8.9a2 2 0 001.9-1.4L22 8H7M10 20a1 1 0 100-2 1 1 0 000 2zm8 0a1 1 0 100-2 1 1 0 000 2z" />
                  </svg>
                  {pendingOrdersCount > 0 && (
                    <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#754B45] px-1 text-[10px] font-semibold text-white">
                      {pendingOrdersCount > 99 ? "99+" : pendingOrdersCount}
                    </span>
=======
  // Show loading state while context is initializing
  if (loading) {
    return (
      <header className="relative w-full h-[14vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#AF524D] to-[#8B3A3A] flex items-center justify-center">
          <div className="text-white text-sm">Loading...</div>
        </div>
      </header>
    );
  }

  return (
    <header className="relative w-full h-[14vh] overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 right-10 w-16 h-16 bg-[#AF524D]/10 rounded-full blur-lg animate-pulse"></div>
        <div className="absolute top-4 left-20 w-12 h-12 bg-[#DFAD56]/15 rounded-full blur-md animate-pulse delay-1000"></div>
        <div className="absolute bottom-2 right-1/4 w-20 h-20 bg-[#8B3A3A]/8 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Main Header Content */}
      <div className={`relative z-10 flex items-center justify-between px-4 md:px-8 w-full h-full ${userRole === "admin" ? "bg-gradient-to-r from-[#DFAD56] to-[#B8941F]" : "bg-gradient-to-r from-[#AF524D] to-[#8B3A3A]"} backdrop-blur-sm`}>
        <Link to="/#home" className="group">
          <div className="flex items-center space-x-3 group-hover:scale-105 transition-transform duration-300">
            {/* Modern Cake Icon */}
            <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-2xl relative shadow-lg group-hover:shadow-xl transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#DFAD56] to-[#E2D2A2] rounded-b-2xl"></div>
              <div className="absolute bottom-1/3 left-0 right-0 h-1/3 bg-gradient-to-t from-[#E2D2A2] to-[#F8E6B4]"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-4 bg-gradient-to-t from-yellow-400 to-orange-400 rounded-full">
                <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-orange-400 rounded-full shadow-sm"></div>
              </div>
            </div>
            {/* Modern Logo Text */}
            <div className="text-white font-abhaya font-bold text-2xl group-hover:text-[#F8E6B4] transition-colors duration-300">
              <span className="text-[#F8E6B4] group-hover:text-white transition-colors duration-300">Connie</span>
              <span className="text-white group-hover:text-[#F8E6B4] transition-colors duration-300"> de Café</span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-medium text-base">
            {[
              ...(userRole === "admin" ? [
                { to: "/adminpage", label: "Dashboard" },
                { to: "/qrcodeupload", label: "QR Code Upload" },
              ] : [
                { to: "/home", label: "Home" },
                { to: "/cakecustomization", label: "Cake Customization" },
                { to: "/cakecatalog", label: "Cake Catalog" },
                { to: "/aboutus", label: "About Us" },
                { to: "/contactus", label: "Contact Us" },
              ])
            ].map((item) => (
              <li key={item.to} className="relative group">
                <Link
                  to={item.to}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 transform ${location.pathname === item.to
                    ? (userRole === "admin"
                      ? "bg-white/20 text-[#613C2A] shadow-lg"
                      : "bg-white/20 text-[#F8E6B4] shadow-lg")
                    : "text-white hover:bg-white/10 hover:text-[#F8E6B4]"
                    }`}
                >
                  {item.label}
                  {location.pathname === item.to && (
                    <div className="absolute inset-0 bg-white/10 rounded-xl -z-10"></div>
>>>>>>> parent of fc1a11f (Updated web responsiveness and visuals)
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div className={`absolute top-full left-0 w-full backdrop-blur-lg transition-all duration-300 md:hidden z-50 ${isMobileMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
          <div className={`${userRole === "admin" ? "bg-gradient-to-br from-[#DFAD56]/95 to-[#B8941F]/95" : "bg-gradient-to-br from-[#AF524D]/95 to-[#8B3A3A]/95"} backdrop-blur-lg shadow-2xl border-t border-white/20`}>
            <nav className="px-6 py-6">
              <ul className="space-y-3 font-medium text-base">
                {[
                  ...(userRole === "admin" ? [
                    { to: "/adminpage", label: "Dashboard" },
                    { to: "/qrcodeupload", label: "QR Code Upload" },
                  ] : [
                    { to: "/", label: "Home" },
                    { to: "/cakecustomization", label: "Cake Customization" },
                    { to: "/cakecatalog", label: "Cake Catalog" },
                    { to: "/aboutus", label: "About Us" },
                    { to: "/contactus", label: "Contact Us" },
                  ])
                ].map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className={`block px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 transform ${location.pathname === item.to
                        ? (userRole === "admin"
                          ? "bg-white/20 text-[#613C2A] shadow-lg"
                          : "bg-white/20 text-[#F8E6B4] shadow-lg")
                        : "text-white hover:bg-white/10 hover:text-[#F8E6B4]"
                        }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Profile and Cart Icons */}
        <div className="flex items-center space-x-3">
          {session ? (
            <Link
              to={userRole === "admin" ? "/admin/profile" : "/profile"}
              className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 transform relative"
              title="Profile"
            >
              <div className="w-6 h-6 text-white group-hover:text-[#F8E6B4] transition-colors duration-300">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {/* Login Status Badge */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
            </Link>
          ) : (
            <Link
              to="/login"
<<<<<<< HEAD
              className="inline-flex h-10 items-center justify-center rounded-full bg-patisserie-rose-strong px-4 text-sm font-medium text-white transition-colors hover:bg-patisserie-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patisserie-rose-strong"
=======
              className="group px-4 py-2 bg-gradient-to-r from-[#F8E6B4] to-[#E2D2A2] hover:from-[#E2D2A2] hover:to-[#DFAD56] text-[#492220] font-semibold rounded-xl transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl flex items-center space-x-2"
              title="Login to your account"
>>>>>>> parent of fc1a11f (Updated web responsiveness and visuals)
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span className="text-sm">Login</span>
            </Link>
          )}
          {session && userRole !== "admin" && (
            <Link
              to="/cart"
              className="group p-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-105 transform relative"
              title={`Orders to Pay (${pendingOrdersCount})`}
            >
              <div className="w-6 h-6 text-white group-hover:text-[#F8E6B4] transition-colors duration-300">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </div>
              {/* Pending Orders Count Badge */}
              {pendingOrdersCount > 0 && (
                <div className="absolute -top-2 -right-2 min-w-[20px] h-5 bg-gradient-to-r from-[#F8E6B4] to-[#E2D2A2] text-[#492220] text-xs font-bold rounded-full flex items-center justify-center px-1.5 shadow-lg border-2 border-white animate-pulse">
                  {pendingOrdersCount > 99 ? '99+' : pendingOrdersCount}
                </div>
              )}
            </Link>
          )}
        </div>
      </div>
<<<<<<< HEAD

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`border-t border-[#754B45]/10 bg-[#FFF9F5] px-4 py-3 shadow-lg lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {renderLinks(true)}
      </nav>
=======
>>>>>>> parent of fc1a11f (Updated web responsiveness and visuals)
    </header>
  )
}

export default Header;