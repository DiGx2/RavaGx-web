import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen bg-ravagx-bg font-sans antialiased">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
