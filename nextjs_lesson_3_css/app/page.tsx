import Image from "next/image";
import variables from './variables.module.scss'

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <h1 className="text-4xl font-bold">Welcome to Next.js!</h1> */}
        <h1 style={{ color: variables.primaryColor }}>Hello, Sardor!</h1>
      </main>
    </div>
  );
}
