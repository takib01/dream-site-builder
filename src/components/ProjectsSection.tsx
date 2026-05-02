import { motion } from "framer-motion";
import { GithubIcon } from "./SocialIcons";
import ayojonImg from "@/assets/project-ayojon.jpg";
import taskorbitImg from "@/assets/project-taskorbit.jpg";

const projects = [
  {
    title: "Ayojon E-Commerce",
    subtitle: "Multi-Vendor Marketplace",
    description:
      "Full-stack multi-vendor e-commerce platform for event products. Features vendor onboarding, product CRUD with variants, hybrid cart sync, multi-step checkout, and admin dashboards with KPI analytics.",
    tech: ["React 19", "Hono", "Bun", "PostgreSQL", "Better Auth", "S3"],
    image: ayojonImg,
    github: "https://github.com/thetakibkhan",
    color: "bg-gradient-orange",
  },
  {
    title: "TaskOrbit",
    subtitle: "Micro-Task Earning Platform",
    description:
      "Full-stack micro-task marketplace connecting buyers and workers globally. Role-based auth, task posting with coin budgets, submission/approval workflow, and coin-based payout system.",
    tech: ["React 19", "Express", "MongoDB", "Firebase Auth"],
    image: taskorbitImg,
    github: "https://github.com/thetakibkhan",
    color: "bg-gradient-lime",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          RECENT <span className="text-gradient-orange">PROJECTS</span>
        </motion.h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary/40"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  width={1200}
                  height={900}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{project.title}</h3>
                    <p className="text-sm text-primary">{project.subtitle}</p>
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
