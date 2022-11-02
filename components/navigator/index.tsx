import Link from "next/link";
import {
  MdArticle,
  MdHome, MdWarning,
  MdWork
} from "react-icons/md";
import styles from "./navigator.module.css";


export interface NavigatorProps {
  menuIsOpen: boolean;
}

const Navigator = ({menuIsOpen}: NavigatorProps) => {
  if (menuIsOpen) {
    return (
      <nav className={styles.navigationDrawer}>
        <Link href="/" className={styles.navItem}>
          <MdHome className={styles.icon} />
          <p className={styles.iconTag}>Inicio</p>
        </Link>
        <Link href="/test" className={styles.navItem}>
          <MdWarning className={styles.icon} />
          <p className={styles.iconTag}>Test</p>
        </Link>
        <Link href="/cuentas" className={styles.navItem}>
          <MdArticle className={styles.icon} />
          <p className={styles.iconTag}>Cuentas</p>
        </Link>
        <Link href="/produccion" className={styles.navItem}>
          <MdWork className={styles.icon} />
          <p className={styles.iconTag}>Producción</p>
        </Link>
      </nav>
    );
  } else {
    return <></>
  }
};

export default Navigator;
