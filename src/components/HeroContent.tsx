import { motion } from "framer-motion";

const stats = [
  { value: "1800+", label: "PROBLEMS\nSOLVED" },
  { value: "400+", label: "CONTESTS\nCOMPLETED" },
  { value: "2", label: "FULL-STACK\nPLATFORMS" },
];

export default function HeroContent() {
  return (
    <section id="home">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-foreground md:text-7xl xl:text-8xl">
          FULL-STACK
        </h1>
        <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-gradient-orange md:text-7xl xl:text-8xl">
          DEVELOPER
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground"
      >
        Passionate about building scalable web applications with modern JavaScript. Specialize in directing AI tools to ship features rapidly while maintaining code quality.
      </motion.p>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 flex gap-10"
      >
        {stats.map((stat) => (
          <div key={stat.label}>
            <p className="font-display text-3xl font-bold text-foreground md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Skill cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <div className="bg-gradient-orange flex-1 min-w-[180px] rounded-2xl p-5">
          <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
            AI-DIRECTED DEVELOPMENT,<br />RAPID ITERATION
          </p>
          <div className="mt-4 flex justify-end">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground">→</span>
          </div>
        </div>
        <div className="bg-gradient-lime flex-1 min-w-[180px] rounded-2xl p-5">
          <p className="text-sm font-bold uppercase tracking-wider text-accent-foreground">
            REACT, NODE.JS, POSTGRESQL,<br />TYPESCRIPT
          </p>
          <div className="mt-4 flex justify-end">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-foreground/30 text-accent-foreground">→</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
