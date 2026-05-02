import { motion } from "framer-motion";
import { Award, Code, Users } from "lucide-react";

const achievements = [
  {
    icon: Code,
    title: "1800+ Problems Solved",
    description: "Across 400+ contests over 4 years on Codeforces, AtCoder, and CodeChef.",
  },
  {
    icon: Award,
    title: "ICPC Top 6%",
    description: "154th / 2500 in Preliminary 2023, 164th / 2500 in 2024.",
  },
  {
    icon: Award,
    title: "IEEE Xtreme 18.0",
    description: "National 8th place, Top 13% globally.",
  },
  {
    icon: Users,
    title: "Best Mentor Award",
    description: "Bootcamp Coordinator at IIUC Competitive Programming Society.",
  },
];

const experience = [
  {
    role: "Undergraduate Teaching Assistant",
    org: "International Islamic University Chittagong",
    period: "Aug 2024 – Jan 2025",
    desc: "Led Competitive Programming II lab sessions covering algorithms and data structures.",
  },
  {
    role: "Bootcamp Coordinator",
    org: "IIUC CP Society",
    period: "Jan – Jul 2025",
    desc: "Organized bootcamps and contests, tracked member performance.",
  },
  {
    role: "Trainer",
    org: "IIUC CP Society",
    period: "Sept 2025 – Jan 2026",
    desc: "Conducted bootcamp sessions to improve competitive programming skills.",
  },
];

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-16">
      <div>
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          ACHIEVEMENTS & <span className="text-gradient-orange">EXPERIENCE</span>
        </motion.h2>

        {/* Achievements grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-primary/40 hover:glow-orange"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <a.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-sm font-bold text-foreground">{a.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Experience timeline */}
        <div className="mt-16 space-y-6">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="flex gap-6 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/40"
            >
              <div className="hidden h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex">
                <span className="font-display text-lg font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-base font-bold text-foreground">{exp.role}</h3>
                  <span className="rounded-full bg-secondary px-3 py-0.5 text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-primary">{exp.org}</p>
                <p className="mt-2 text-sm text-muted-foreground">{exp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
