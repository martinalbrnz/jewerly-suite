import { useState, useEffect } from "react";
import { Movement } from "../../../constants/customTypes";
import { ListItem, ListItemProps } from "../../../components/shared/ListItem";
import styles from './movimientos.module.css';

const Movimientos = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/movements")
      .then((res) => res.json())
      .then((res) => setData(res.data))
      .catch((error) => error);
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
              line1={item.account.toString()}
              line2={new Intl.DateTimeFormat("es").format(new Date(item?.date))}
              trailing={`\$ ${item.amount.toFixed(2)}`}
            />
          );
        })}
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
