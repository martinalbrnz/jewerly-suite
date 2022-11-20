import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";

import SharedTable from "../../../components/shared/SharedTable";
import { Movement } from "../../../constants/customTypes";
import styles from "./movimientos.module.css";

const Movimientos = () => {
  const [movements, setMovements] = useState<Movement[]>([]);

  useEffect(() => {
    fetch("/api/movements")
      .then((res) => res.json())
      .then((res) => setMovements(res.data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <div>
        <Link href="/cuentas" className={styles.navItem}>
          <MdArrowBack className={styles.icon} />
        </Link>
        <h1>Movimientos</h1>
      </div>
      <div className={styles.tableContainer}></div>
      <SharedTable>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cuenta</th>
            <th>Monto</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          {movements?.map((mov: Movement) => {
            return (
              <tr key={mov._id}>
                <td>
                  {new Intl.DateTimeFormat("es-AR").format(new Date(mov.date))}
                </td>
                <td>{mov.account.name.toUpperCase()}</td>
                <td>$ {mov.amount.toFixed(2)}</td>
                <td>{mov.description}</td>
              </tr>
            );
          })}
        </tbody>
      </SharedTable>
    </>
  );
};

export default Movimientos;
