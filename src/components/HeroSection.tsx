import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "1800+", label: "PROBLEMS\nSOLVED" },
  { value: "400+", label: "CONTESTS\nCOMPLETED" },
  { value: "2", label: "FULL-STACK\nPLATFORMS" },
];

const socials = [
  { icon: Github, href: "https://github.com/thetakibkhan", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/takib-khan", label: "LinkedIn" },
  { icon: Mail, href: "mailto:takib.khan.01@gmail.com", label: "Email" },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen px-6 pt-24 pb-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex-shrink-0"
        >
          {/* Dashed decorative border */}
          <div className="absolute -top-4 -left-4 h-[calc(100%+2rem)] w-[calc(100%+2rem)] rounded-3xl border-2 border-dashed border-primary/40" />
          <div className="relative w-72 overflow-hidden rounded-2xl border border-border bg-card p-6 text-center shadow-2xl">
            <div className="relative mx-auto mb-4 h-52 w-52 overflow-hidden rounded-xl">
              <img
                src={profileImg}
                alt="Takib Khan"
                className="h-full w-full object-cover"
                width={800}
                height={1000}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            <h3 className="text-xl font-bold text-foreground font-display">Takib Khan</h3>
            <div className="my-3 flex justify-center">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm">🔥</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A Full-Stack Developer who ships production-ready features with AI-driven workflows.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right content */}
        <div className="flex-1 lg:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-display text-6xl font-bold leading-none tracking-tight text-foreground md:text-8xl lg:text-9xl">
              FULL-STACK
            </h1>
            <h1 className="font-display text-6xl font-bold leading-none tracking-tight text-gradient-orange md:text-8xl lg:text-9xl">
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
            className="mt-10 flex gap-12"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-4xl font-bold text-foreground md:text-5xl">{stat.value}</p>
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
            <div className="bg-gradient-orange flex-1 min-w-[200px] rounded-2xl p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-primary-foreground">
                AI-DIRECTED DEVELOPMENT,<br />RAPID ITERATION
              </p>
              <div className="mt-4 flex justify-end">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground">→</span>
              </div>
            </div>
            <div className="bg-gradient-lime flex-1 min-w-[200px] rounded-2xl p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-accent-foreground">
                REACT, NODE.JS, POSTGRESQL,<br />TYPESCRIPT
              </p>
              <div className="mt-4 flex justify-end">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-foreground/30 text-accent-foreground">→</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
