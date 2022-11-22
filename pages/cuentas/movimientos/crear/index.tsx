import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import MovementForm from "../../../../components/shared/MovementForm";
import styles from "./create-movement.module.css";

const CreateMovement = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <Link href="/cuentas/movimientos">
          <MdArrowBack className={styles.icon} />
        </Link>
        <h2 className={styles.sectionTitle}>Nuevo movimiento</h2>
      </div>
      <MovementForm />
    </div>
  );
};

export default CreateMovement;
