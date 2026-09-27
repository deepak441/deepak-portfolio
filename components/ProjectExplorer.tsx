"use client";

import { useMemo, useState } from "react";
import { projects, type Category } from "@/data/projects";
import Link from "next/link";

const filters = ["All", "Professional", "AI", "Research"] as const;

type Filter = (typeof filters)[number];

export default function ProjectExplorer() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [selectedId, setSelectedId] = useState(1);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(activeFilter as Category)
    );
  }, [activeFilter]);

  const selectedProject =
    projects.find((project) => project.id === selectedId) ?? projects[0];

  function changeFilter(filter: Filter) {
    setActiveFilter(filter);

    const firstMatchingProject =
      filter === "All"
        ? projects[0]
        : projects.find((project) =>
            project.categories.includes(filter as Category)
          );

    if (firstMatchingProject) {
      setSelectedId(firstMatchingProject.id);
    }
  }

  return (
    <section id="work" className="pb-32">
      <div className="border-b border-neutral-300 pb-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">
              Selected Work
            </p>

            <h2 className="text-3xl tracking-tight md:text-5xl">
              Projects I&apos;ve worked on.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => changeFilter(filter)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  activeFilter === filter
                    ? "border-neutral-900 bg-neutral-900 text-white"
                    : "border-neutral-300 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-12 pt-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="border-t border-neutral-300">
          {filteredProjects.map((project) => {
            const selected = project.id === selectedId;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setSelectedId(project.id)}
                className={`group grid w-full grid-cols-[45px_1fr_auto] gap-4 border-b border-neutral-300 px-2 py-7 text-left transition md:grid-cols-[60px_1fr_130px] ${
                  selected
                    ? "bg-neutral-900 text-white"
                    : "hover:bg-neutral-200/60"
                }`}
              >
                <span
                  className={`text-sm ${
                    selected ? "text-neutral-400" : "text-neutral-500"
                  }`}
                >
                  {String(project.id).padStart(2, "0")}
                </span>

                <div>
                  <p className="text-xl tracking-tight md:text-2xl">
                    {project.shortTitle}
                  </p>

                  <p
                    className={`mt-2 text-sm ${
                      selected ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {project.type}
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <span
                    className={`hidden text-sm md:block ${
                      selected ? "text-neutral-400" : "text-neutral-500"
                    }`}
                  >
                    {project.year}
                  </span>

                  <span
                    className={`transition-transform duration-200 group-hover:translate-x-1 ${
                      selected ? "text-white" : "text-neutral-500"
                    }`}
                  >
                    →
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <aside className="lg:sticky lg:top-8 lg:self-start">
          <div className="border-t border-neutral-900 pt-6">
            <div className="mb-12 flex items-start justify-between gap-6">
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">
                Currently Viewing
              </p>

              <p className="text-sm text-neutral-500">
                {selectedProject.year}
              </p>
            </div>

            <p className="mb-4 text-sm text-neutral-500">
              {selectedProject.type}
            </p>

            <h3 className="max-w-xl text-4xl leading-tight tracking-tight md:text-5xl">
              {selectedProject.title}
            </h3>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
              {selectedProject.description}
            </p>

            <p className="mt-6 max-w-xl leading-relaxed text-neutral-600">
              {selectedProject.detail}
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {selectedProject.stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-neutral-300 px-3 py-1.5 text-sm text-neutral-600"
                >
                  {technology}
                </span>
              ))}
            </div>

            {selectedProject.proprietary && (
              <p className="mt-8 border-t border-neutral-300 pt-5 text-sm leading-relaxed text-neutral-500">
                Professional project. Source code is proprietary and is not
                publicly available.
              </p>
              
            )}
            <Link
                href={`/projects/${selectedProject.slug}`}
                className="mt-8 inline-flex items-center gap-2 border-b border-neutral-900 pb-1 text-sm font-medium transition hover:opacity-50">
            View case study
            <span>↗</span>
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}