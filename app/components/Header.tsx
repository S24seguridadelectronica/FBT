// app/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <Image src="/images/logo.png" alt="FBT Logo" width={150} height={50} />
        <ul>
          <li><Link href="#home">Inicio</Link></li>
          <li><Link href="#services">Servicios</Link></li>
          <li><Link href="#contact">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}
