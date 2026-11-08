import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div style={{fontSize: '6rem', color: 'red', textAlign: 'center', marginTop: '12%'}}>
      Main Site
      <br /><br />
      <Link href="/about">About</Link>
      <br /><br />
      <Link href="/contact">Contact</Link>
    </div>
  );
}
