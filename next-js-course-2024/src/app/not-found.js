import Link from "next/link";

export default function NotFound() {
  return <div>
    <h1>This page does not exits</h1>
    <Link href='/'>Go to home page</Link>
  </div>
}