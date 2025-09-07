import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <div className="mx-auto p-4 md:py-12 md:px-28">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
