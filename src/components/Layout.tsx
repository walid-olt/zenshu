import { Outlet, useNavigation } from "react-router";
import Navbar from "./Navbar";
import { BarLoader } from "react-spinners";

function Layout() {
  const navigation = useNavigation();
  const isLoading = navigation.state !== "idle";

  return (
    <main>
      <Navbar />
      <BarLoader
        loading={isLoading}
        width="100%"
        height={3}
        color="var(--primary)"
        cssOverride={{
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
      />
      <div className="overflow-x-clip">
        <Outlet />
      </div>
    </main>
  );
}

export default Layout;
