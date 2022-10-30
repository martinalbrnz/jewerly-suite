import Link from "next/link";

const CuentasHome = () => {
  return (
    <div>
      <h3>Cuentas</h3>
      {/* This bugs, see why */}
      <Link href="/cuentas/existencias">Existencias</Link>
      <Link href="/cuentas/movimientos">Movimientos</Link>
    </div>
  )
}

export default CuentasHome;