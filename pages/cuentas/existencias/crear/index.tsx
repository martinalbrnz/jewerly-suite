import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import AccountForm from "../../../../components/shared/AccountForm";
import styles from "./create-movement.module.css";

const CreateMovement = () => {
  return (
    <div className={styles.sectionContainer}>
      <div className={styles.sectionHeader}>
        <Link href="/cuentas/existencias">
          <MdArrowBack className={styles.icon} />
        </Link>
        <h2 className={styles.sectionTitle}>Nueva cuenta</h2>
      </div>
      <AccountForm />
    </div>
  );
};

export default CreateMovement;
