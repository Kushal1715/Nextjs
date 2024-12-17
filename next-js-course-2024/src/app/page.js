import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <h1>welcome to next js course</h1>
      <Link href='/account'><button>navigate to account papge</button></Link>
      <Link href='/products'><button>navigate to products papge</button></Link>
    </div>
  );
}
