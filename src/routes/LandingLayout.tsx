import { Outlet } from "react-router-dom";
import Footer from "@/scenes/footer";


export default function LandingLayout() {

  return (
    <div >
      <Outlet />
      <Footer /> {/* <-- ONLY here */}
    </div>
  );
}
