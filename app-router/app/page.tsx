import Link from "next/link";
import Header from "@/components/header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <Header />
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Let&apos;s build something great together with Next.js!
          </p>
          <p><Link href="/about">About Us</Link></p>
        </div>
      </main>
    </div>
  );
}
