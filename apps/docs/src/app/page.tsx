import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      <h1>hello</h1>
      <Link href="/navigation">navigation</Link>
    </main>
  );
}
