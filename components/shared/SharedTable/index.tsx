import styles from "./shared-table.module.css";

interface SharedTableProps {
  children: React.ReactNode;
}
const SharedTable = ({ children }: SharedTableProps) => {
  return (
    <table className={styles.table}>
      {children}
    </table>
  );
};

export default SharedTable;
