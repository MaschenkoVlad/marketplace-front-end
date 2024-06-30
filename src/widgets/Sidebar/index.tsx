import { NavLink } from "react-router-dom";

import * as css from "./Sidebar.module.scss";

const SideBar = () => {
  return (
    <nav className={css.root}>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/">Dashboard</NavLink>
    </nav>
  );
};

export default SideBar;
