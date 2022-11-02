import { MdMenu, MdMenuOpen } from "react-icons/md";
import styles from "./header.module.css";

export interface HeaderProps {
  toggleMenuOpen(): void;
  menuIsOpen: boolean;
}

const Header = ({ toggleMenuOpen, menuIsOpen }: HeaderProps) => {
  return (
    <header className={styles.header}>
      {menuIsOpen ? (
        <MdMenuOpen
          onClick={() => toggleMenuOpen()}
          className={`${styles.icon} ${styles.menu}`}
        />
      ) : (
        <MdMenu
          onClick={() => toggleMenuOpen()}
          className={`${styles.icon} ${styles.menu}`}
        />
      )}
      <h1>Header genérico</h1>
    </header>
  );
};

export default Header;
