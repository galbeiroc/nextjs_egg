import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <img src="/logo.png" alt="Next.js Logo" className="w-28 h-28"/>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Let&apos;s build something great together with Next.js!
          </p>
          <p><Link href="/about">About Us</Link></p>
        </div>
      </main>
    </div>
  );
}
