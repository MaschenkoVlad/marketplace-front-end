import { Outlet } from "react-router-dom";
import Header from "src/widgets/Header";
import SideBar from "src/widgets/Sidebar";

import * as css from "./DashboardPageComponent.module.scss";

const DashboardPage = () => {
  return (
    <div className={css.root}>
      <Header />
      <SideBar />

      <main className={css.mainContent}>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardPage;
