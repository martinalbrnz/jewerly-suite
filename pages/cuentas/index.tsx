import Link from "next/link";
import styles from "./cuentas-home.module.css";

const CuentasHome = () => {
  return (
    <div className={styles.sectionContainer}>
      <h2 className={styles.sectionTitle}>Cuentas</h2>
      <div className={styles.subSectionsContainer}>
        <Link href="/cuentas/existencias">
          <div className={styles.subSection}>
            <h3>Existencias</h3>
            <div className={styles.hide}>
              <ul>
                <li>Visualizar existencias</li>
                <li>Crear nuevas existencias</li>
              </ul>
            </div>
          </div>
        </Link>
        <Link href="/cuentas/movimientos">
          <div className={styles.subSection}>
            <h3>Movimientos</h3>
            <div className={styles.hide}>
              <ul>
                <li>Visualizar movimientos</li>
                <li>Crear nuevos movimientos</li>
              </ul>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CuentasHome;
