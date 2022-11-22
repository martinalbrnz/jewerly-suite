import Link from "next/link";
import { useEffect, useState } from "react";
import { MdArrowBack, MdArrowForward, MdAdd } from "react-icons/md";

import MovementForm from "./crear";
import SharedTable from "../../../components/shared/SharedTable";
import { Movement } from "../../../constants/customTypes";
import styles from "./movimientos.module.css";

const Movimientos = () => {
  const [movements, setMovements] = useState<Movement[]>([]);
  const [page, setPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(3);
  const [take, setTake] = useState<number>(10);
  const [total, setTotal] = useState<any>(0);

  const nextPage = () => {
    if (page < maxPage) setPage(page + 1);
  };
  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  useEffect(() => {
    fetch(`/api/movements?page=${page}&take=${take}`)
      .then((res) => res.json())
      .then((res) => {
        setMovements(res.data);
        setMaxPage(Math.floor((res.max - 1) / take + 1));
      })
      .catch((e) => console.error(e));
  }, [page, take]);

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
          <h2>Movimientos</h2>
        </div>
        <Link href="/cuentas/movimientos/crear" className={styles.newMovement}>
          NUEVO MOVIMIENTO
        </Link>
      </div>
      <div className={styles.tableContainer}>
        <SharedTable>
          <thead>
            <tr>
              <th className={styles.dateColumn}>Fecha</th>
              <th className={styles.accountColumn}>Cuenta</th>
              <th className={styles.amountColumn}>Monto</th>
              <th className={styles.descriptionColumn}>Descripción</th>
            </tr>
          </thead>
          <tbody>
            {movements?.map((mov: Movement) => {
              return (
                <tr key={mov._id}>
                  <td>
                    {new Intl.DateTimeFormat("es-AR").format(
                      new Date(mov.date)
                    )}
                  </td>
                  <td>{mov.account.name.toUpperCase()}</td>
                  <td className={styles.amountAlign}>
                    $ <span>{mov.amount.toFixed(2)}</span>
                  </td>
                  <td>{mov.description}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td className={styles.amountAlign}>
                    $ <span>{total.toFixed(2)}</span>
                  </td>
              <td></td>
            </tr>
          </tfoot>
        </SharedTable>
        <div className={styles.paginator}>
          {page > 1 ? (
            <MdArrowBack onClick={prevPage} className={styles.icon} />
          ) : (
            <MdArrowBack className={styles.iconDisabled} />
          )}
          Página {page}
          {page < maxPage ? (
            <MdArrowForward onClick={nextPage} className={styles.icon} />
          ) : (
            <MdArrowForward className={styles.iconDisabled} />
          )}
        </div>
      </div>
    </>
  );
};

export default Movimientos;
