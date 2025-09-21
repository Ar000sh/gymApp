import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="app bg-gray-20">
        {/* No Navbar */}
      <Outlet />
      {/* No Footer */}
    </div>
  );
}
