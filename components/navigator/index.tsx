import Link from "next/link";
import { useState } from "react";
import {
  MdArticle,
  MdHome,
  MdMenu,
  MdMenuOpen,
  MdWarning,
  MdWork,
} from "react-icons/md";
import styles from "./navigator.module.css";

const Navigator = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const toggleMenuOpen = (): void => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <nav className={styles.navigationDrawer}>
      {menuIsOpen ? (
        <MdMenuOpen onClick={() => toggleMenuOpen()} className={`${styles.icon} ${styles.menu}`} />
      ) : (
        <MdMenu onClick={() => toggleMenuOpen()} className={`${styles.icon} ${styles.menu}`} />
      )}
      <Link href="/" className={styles.navItem}>
        <MdHome className={styles.icon} />
      </Link>
      <Link href="/test" className={styles.navItem}>
        <MdWarning className={styles.icon} />
      </Link>
      <Link href="cuentas" className={styles.navItem}>
        <MdArticle className={styles.icon} />
      </Link>
      <Link href="/produccion" className={styles.navItem}>
        <MdWork className={styles.icon} />
      </Link>
    </nav>
  );
};

export default Navigator;
