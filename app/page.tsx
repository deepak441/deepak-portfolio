import ProjectExplorer from "@/components/ProjectExplorer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#111111]">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-8 py-10 md:px-16 md:py-14">
        <header className="flex items-center justify-between text-sm">
          <p className="font-medium">DEEPAK KARJALA</p>

          <nav className="flex gap-6">
            <a href="#work" className="hover:opacity-50">
              Work
            </a>
            <a href="#about" className="hover:opacity-50">
              About
            </a>
            <a href="#contact" className="hover:opacity-50">
              Contact
            </a>
          </nav>
        </header>

        <section className="py-32 md:py-40">
          <p className="mb-6 text-sm uppercase tracking-widest text-neutral-500">
            San José, California
          </p>

          <h1 className="max-w-5xl text-6xl font-medium leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
            Deepak
            <br />
            Karjala
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-neutral-600 md:text-xl">
            Engineering student focused on software, networking, cloud
            infrastructure, and intelligent systems.
          </p>
        </section>

        <ProjectExplorer />

        <footer className="flex justify-between border-t border-neutral-300 pt-6 text-sm text-neutral-600">
          <p>SJSU</p>
          <p>Portfolio — 2026</p>
        </footer>
      </div>
    </main>
  );
}