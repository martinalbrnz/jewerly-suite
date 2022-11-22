import { useEffect, useState } from "react";
import { Account } from "../../../constants/customTypes";
import styles from "./movement-form.module.css";

const initialForm = {
  date: new Date(Date.now()),
  account: "",
  amount: 0,
  description: "",
};
const MovementForm = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [form, setForm] = useState<any>(initialForm);

  useEffect(() => {
    fetch("/api/accounts")
      .then((res) => res.json())
      .then((json) => setAccounts(json.data))
      .catch((e) => console.error(e));
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitMovement = (e: any) => {
    e.preventDefault();
    console.log(form);
    fetch("/api/movements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        date: new Date(form.date),
        account: form.account,
        amount: Number(form.amount),
        description: form.description,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (!json.error) {
          setForm(initialForm);
        }
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label htmlFor="date">Fecha de movimiento:</label>
        <input onChange={handleChange} name="date" type="date" required />
        <label htmlFor="account">Cuenta:</label>
        <select onChange={handleChange} name="account" id="account" required>
          <option disabled selected>
            Nombre de cuenta
          </option>
          {accounts.map((acc) => {
            return (
              <option key={acc._id} value={acc._id}>
                {acc.name.toUpperCase()}
              </option>
            );
          })}
        </select>
        <label htmlFor="amount">Cantidad:</label>
        <input
          type="number"
          onChange={handleChange}
          name="amount"
          required
          placeholder="Ingrese una cantidad"
        />
        <label htmlFor="description">Descripción:</label>
        <textarea
          onChange={handleChange}
          name="description"
          required
          placeholder="Ingrese una descripción"
        />
        <p onClick={submitMovement} className={styles.submitButton}>
          GUARDAR
        </p>
      </form>
    </div>
  );
};

export default MovementForm;
