import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f0] text-[#111111]">
      <div className="mx-auto max-w-7xl px-8 py-10 md:px-16 md:py-14">
        <header className="flex items-center justify-between border-b border-neutral-300 pb-6">
          <Link
            href="/"
            className="text-sm font-medium transition hover:opacity-50"
          >
            DEEPAK KARJALA
          </Link>

          <Link
            href="/#work"
            className="text-sm text-neutral-600 transition hover:text-neutral-900"
          >
            ← All Projects
          </Link>
        </header>

        <section className="py-20 md:py-28">
          <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.2em] text-neutral-500">
                {project.type}
              </p>

              <h1 className="max-w-4xl text-5xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
                {project.title}
              </h1>
            </div>

            <div className="flex flex-col justify-end gap-8 border-t border-neutral-300 pt-5 lg:border-t-0 lg:pt-0">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Year
                </p>
                <p>{project.year}</p>
              </div>

              <div>
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
                  Technologies
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-12 border-t border-neutral-300 py-16 md:grid-cols-[200px_1fr]">
          <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Overview
          </p>

          <div className="max-w-3xl">
            <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
              {project.description}
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-600">
              {project.detail}
            </p>
          </div>
        </section>

        {project.problem && (
        <section className="grid gap-12 border-t border-neutral-300 py-16 md:grid-cols-[200px_1fr]">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Problem
            </p>

            <div className="max-w-3xl">
            <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
                {project.problem}
            </p>
            </div>
        </section>
        )}

        {project.role && (
        <section className="grid gap-12 border-t border-neutral-300 py-16 md:grid-cols-[200px_1fr]">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            My Role
            </p>

            <div className="max-w-3xl">
            <h2 className="text-3xl tracking-tight md:text-4xl">
                Frontend Engineering
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-neutral-600">
                {project.role}
            </p>
            </div>
        </section>
        )}

        {project.contributions && (
        <section className="grid gap-12 border-t border-neutral-300 py-16 md:grid-cols-[200px_1fr]">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            What I Built
            </p>

            <div className="max-w-3xl">
            <div className="divide-y divide-neutral-300 border-t border-neutral-300">
                {project.contributions.map((contribution, index) => (
                <div
                    key={contribution}
                    className="grid grid-cols-[50px_1fr] gap-6 py-6"
                >
                    <span className="text-sm text-neutral-400">
                    {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="text-lg leading-relaxed text-neutral-700">
                    {contribution}
                    </p>
                </div>
                ))}
            </div>
            </div>
        </section>
        )}

        {project.outcome && (
        <section className="grid gap-12 border-t border-neutral-300 py-16 md:grid-cols-[200px_1fr]">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
            Outcome
            </p>

            <div className="max-w-3xl">
            <p className="text-2xl leading-relaxed tracking-tight md:text-3xl">
                {project.outcome}
            </p>
            </div>
        </section>
        )}

        {project.proprietary && (
          <section className="border-t border-neutral-300 py-10">
            <p className="max-w-2xl text-sm leading-relaxed text-neutral-500">
              This was professional work completed for a company. Source code
              and proprietary materials are not publicly available.
            </p>
          </section>
        )}

        <footer className="flex items-center justify-between border-t border-neutral-300 py-8 text-sm">
          <Link href="/#work" className="transition hover:opacity-50">
            ← Selected Work
          </Link>

          <p className="text-neutral-500">deepakkarjala.com</p>
        </footer>
      </div>
    </main>
  );
}