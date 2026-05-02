import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";
import profileImg from "@/assets/profile.jpg";

const socials = [
  { icon: GithubIcon, href: "https://github.com/thetakibkhan", label: "GitHub" },
  { icon: LinkedinIcon, href: "https://linkedin.com/in/takib-khan", label: "LinkedIn" },
  { icon: Mail, href: "mailto:takib.khan.01@gmail.com", label: "Email" },
];

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative"
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
  );
}
