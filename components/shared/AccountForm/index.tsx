import { useState } from "react";
import styles from "./movement-form.module.css";

const initialForm = {
  name: '',
};
const AccountForm = () => {
  const [form, setForm] = useState<any>(initialForm);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const submitMovement = (e: any) => {
    e.preventDefault();
    if (form.name.length > 4) {
      console.log(form);
      fetch("/api/accounts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
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
    } else {
      alert('El nombre de cuenta debe tener más de 4 caracteres')
    }
  };
  return (
    <div className={styles.formContainer}>
      <form className={styles.form}>
        <label htmlFor="name">Nombre de la cuenta:</label>
        <input onChange={handleChange} name="name" required minLength={4} placeholder="Ingrese el nombre de la cuenta" />
        <p onClick={submitMovement} className={styles.submitButton}>
          GUARDAR
        </p>
      </form>
    </div>
  );
};

export default AccountForm;
