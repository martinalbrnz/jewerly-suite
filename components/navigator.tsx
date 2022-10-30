import Link from "next/link";

const Navigator = () => {
  return (
    <nav>
      <Link href="/">
        Home
      </Link>
      <Link href="/test">
        Test
      </Link>
      <Link href="cuentas">
        Cuentas
      </Link>
      <Link href="/produccion">
        Producción
      </Link>
    </nav>
  )
}

export default Navigator;
