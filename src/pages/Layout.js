import { Outlet } from "react-router-dom";
import { Fragment } from "react";

export default function Layout() {
  return (
    <Fragment>
      <header>Layout at top</header>
      <Outlet />
    </Fragment>
  );
}
