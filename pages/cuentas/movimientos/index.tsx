import { useState, useEffect } from "react";
import { Movement } from "../../../constants/customTypes";
import { ListItem } from "../../../components/shared/ListItem";
import styles from './movimientos.module.css';

const Movimientos = () => {
  const [data, setData] = useState<any[]>([]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    fetch("/api/movements/total")
      .then(res => res.json()) 
      .then(res => setTotalAmount(res.data))
      .catch(e => console.error(e));

    fetch("/api/movements")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <h1>Movimientos</h1>
      <div className={styles.listContainer}>
        {data?.map((item: Movement) => {
          return (
            <ListItem
              key={item._id}
              headline={item.description}
              line1={item.account.name.toUpperCase()}
              line2={new Intl.DateTimeFormat("es").format(new Date(item?.date))}
              trailing={`\$ ${item.amount.toFixed(2)}`}
            />
          );
        })}
      </div>
      <div className={styles.totalContainer}>
        <p className={styles.totalAmount}>{`\$ ${totalAmount.toFixed(2)}`}</p>
      </div>
    </>
  );
};

// interface MovementCardProps {
//   movement: Movement;
// }

// const MovementCard = ({movement}: MovementCardProps) => {
//   return (
//     <div>
//       <p>{movement.account}</p>
//       <p>{movement.amount}</p>
//       <p>{new Date(movement.date).toISOString().split('T')[0]}</p>
//       <p>{movement.description}</p>
//     </div>
//   )
// }

export default Movimientos;
