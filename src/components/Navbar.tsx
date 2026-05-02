import { useState } from "react";
import { motion } from "framer-motion";
import { Home, FolderOpen, Wrench, Trophy, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Wrench, label: "Skills", href: "#skills" },
  { icon: Trophy, label: "Achievements", href: "#achievements" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [active, setActive] = useState(0);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-border bg-card/80 px-2 py-2 backdrop-blur-xl">
        {navItems.map((item, i) => (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActive(i)}
            className={`relative flex h-10 w-10 items-center justify-center rounded-full transition-colors ${
              active === i ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {active === i && (
              <motion.div
                layoutId="nav-active"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <item.icon className="relative z-10 h-4 w-4" />
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
