'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleNavigation = (route) => {
    router.push(route)
  }
  return (
    <div className="justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1>welcome to next js course</h1>
      <Link href='/account'><button>navigate to account papge</button></Link>
      <Link href='/products'><button>navigate to products papge</button></Link>

      <h1>alternative way using useRouter hook</h1>
      <button onClick={() => handleNavigation('/account')}>navigate to account papge</button>
      <button onClick={() => handleNavigation('/products')}>navigate to products papge</button>
    </div>
  );
}
