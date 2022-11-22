import * as React from "react";
import { useState } from "react";

import Header from "../header";
import Navigator from "../navigator";
import styles from "./layout.module.css";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenuOpen = (): void => {
    setMenuIsOpen(!menuIsOpen);
  };
  return (
    <>
      <Header menuIsOpen={menuIsOpen} toggleMenuOpen={toggleMenuOpen} />
      <div className={styles.bodyContainer} >
        <Navigator menuIsOpen={menuIsOpen} />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
