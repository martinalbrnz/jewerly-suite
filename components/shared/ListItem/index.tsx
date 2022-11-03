import { ReactNode } from "react";
import styles from "./ItemList.module.css";

export interface ListItemProps {
  headline: string;
  line1?: string;
  line2?: string;
  trailing?: string;
  leading?: string | ReactNode;
}

export const ListItem = (props: ListItemProps) => {
  return (
    <div className={styles.listItemContainer}>
      {props.leading && <p className={styles.leading}>{props.leading}</p>}
      <div className={styles.listCenter}>
        <p className={styles.headline}>{props.headline}</p>
        {props.line1 && <p className={styles.line1}>{props.line1}</p>}
        {props.line2 && <p className={styles.line2}>{props.line2}</p>}
      </div>
      <div className={styles.trailingContainer}>
        {props.trailing && <p className={styles.trailing}>{props.trailing}</p>}
      </div>
    </div>
  );
};
