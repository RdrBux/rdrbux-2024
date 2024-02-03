import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="text-body mx-[6vw] flex justify-between items-center fixed top-[6vw] left-0 right-0">
      <Link href="/">RdrBux</Link>
      <ul className="flex gap-[1vw]">
        <li>
          <Link href="/" className="px-[0.5vw]">
            Inicio
          </Link>
        </li>
        <li>
          <Link href="/" className="px-[0.5vw]">
            Proyectos
          </Link>
        </li>
        <li>
          <Link href="/" className="px-[0.5vw]">
            Sobre mí
          </Link>
        </li>
        <li>
          <Link href="/" className="pl-[0.5vw]">
            Contacto
          </Link>
        </li>
      </ul>
    </header>
  );
}
