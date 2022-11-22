import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import SharedTable from "../../../components/shared/SharedTable";
import styles from './existencias.module.css';

interface AccountAmount {
  _id: string;
  amount: number;
  name: string;
}
const Existencias = () => {
  const [data, setData] = useState<AccountAmount[]>([]);
  const [total, setTotal] = useState<any>(0);

  useEffect(() => {
    fetch("/api/accounts/total")
      .then((res) => res.json())
      .then((json) => setData(json.data))
      .catch((e) => console.error(e));
  }, []);

  useEffect(() => {
    fetch("/api/movements/total")
      .then((res) => res.json())
      .then((res) => setTotal(res.data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <div className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <Link href="/cuentas">
            <MdArrowBack className={styles.icon} />
          </Link>
          <h2 className={styles.sectionTitle}>Existencias</h2>
        </div>
        <Link href="/cuentas/existencias/crear" className={styles.newAccount}>
          NUEVA CUENTA
        </Link>
      </div>
      <SharedTable>
        <thead>
          <tr>
            <th>Cuenta</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((mov: AccountAmount) => {
            return (
              <tr key={mov._id}>
                <td>{mov.name.toUpperCase()}</td>
                <td>$ {mov.amount.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>$ {total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </SharedTable>
    </>
  );
};

export default Existencias;
