import { Link, useLocation } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const customerLinks = [
  { to: "/home", label: "Home" },
  { to: "/cakecatalog", label: "Our cakes" },
  { to: "/cakecustomization", label: "Custom cake" },
  { to: "/aboutus", label: "About" },
  { to: "/contactus", label: "Contact" },
];

const adminLinks = [
  { to: "/adminpage", label: "Dashboard" },
  { to: "/qrcodeupload", label: "QR Code Upload" },
];

const Header = () => {
  const location = useLocation();
  const { session, userRole, loading } = UserAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [pendingOrdersCount, setPendingOrdersCount] = useState(0);
  const isAdmin = userRole === "admin";
  const links = loading ? [] : isAdmin ? adminLinks : customerLinks;

  useEffect(() => {
    const fetchPendingOrdersCount = async () => {
      if (!session?.user || userRole !== "customer") {
        setPendingOrdersCount(0);
        return;
      }

      try {
        const { data: customerData, error: customerError } = await supabase
          .from("CUSTOMER")
          .select("cus_id")
          .eq("auth_user_id", session.user.id)
          .single();

        if (customerError || !customerData) {
          console.error("Error fetching customer:", customerError);
          setPendingOrdersCount(0);
          return;
        }

        const { count, error } = await supabase
          .from("ORDER")
          .select("*", { count: "exact", head: true })
          .eq("cus_id", customerData.cus_id)
          .eq("order_status", "Pending");

        if (error) {
          console.error("Error fetching pending orders count:", error);
          setPendingOrdersCount(0);
          return;
        }

        setPendingOrdersCount(count || 0);
      } catch (error) {
        console.error("Error in fetchPendingOrdersCount:", error);
        setPendingOrdersCount(0);
      }
    };

    fetchPendingOrdersCount();
    window.addEventListener("orderUpdated", fetchPendingOrdersCount);

    return () => {
      window.removeEventListener("orderUpdated", fetchPendingOrdersCount);
    };
  }, [session?.user, userRole]);

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
                  )}
                </Link>
              )}
            </>
          ) : (
            <Link
              to="/login"
              className="inline-flex h-10 items-center justify-center rounded-full bg-patisserie-rose-strong px-4 text-sm font-medium text-white transition-colors hover:bg-patisserie-cocoa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-patisserie-rose-strong"
            >
              <svg className="h-4 w-4 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-5-4l5-5m0 0l-5-5m5 5H3" />
              </svg>
              <span className="hidden sm:inline">Log in</span>
              <span className="sr-only sm:hidden">Log in</span>
            </Link>
          )}
        </div>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`border-t border-[#754B45]/10 bg-[#FFF9F5] px-4 py-3 shadow-lg lg:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        {renderLinks(true)}
      </nav>
    </header>
  );
};

export default Header;
