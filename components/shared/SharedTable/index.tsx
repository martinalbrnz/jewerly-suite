import styles from "./shared-table.module.css";

interface SharedTableProps {
  children: React.ReactNode;
}
const SharedTable = ({ children }: SharedTableProps) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>{children}</table>
    </div>
  );
};

export default SharedTable;
