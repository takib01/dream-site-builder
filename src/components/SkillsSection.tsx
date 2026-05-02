import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "AI Development Tools",
    items: ["Claude Code", "Gemini CLI", "GitHub Copilot", "OpenCode", "Codex"],
  },
  {
    title: "Frontend",
    items: ["React 19", "Next.js", "TypeScript", "TanStack Router/Query", "Tailwind CSS", "Vite", "Jotai"],
  },
  {
    title: "Backend & Frameworks",
    items: ["Node.js", "Express.js", "Hono", "Bun", "REST API", "oRPC"],
  },
  {
    title: "Databases & ORM",
    items: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Drizzle ORM"],
  },
  {
    title: "Auth & Security",
    items: ["JWT", "Better Auth", "Firebase Auth", "RBAC", "Zod"],
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD", "Git", "GitHub", "Linux"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16">
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          PREMIUM <span className="text-gradient-orange">TOOLS</span>
        </motion.h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <h3 className="font-display text-lg font-bold text-foreground">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
