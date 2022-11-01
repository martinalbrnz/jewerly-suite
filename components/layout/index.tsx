import * as React from "react";

import Header from "../header";
import Navigator from "../navigator";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Navigator />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
