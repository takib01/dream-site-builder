import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-foreground md:text-5xl"
        >
          LET'S WORK <span className="text-gradient-orange">TOGETHER</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-base text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!
            </p>
            <div className="space-y-4">
              <a href="mailto:takib.khan.01@gmail.com" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">takib.khan.01@gmail.com</span>
              </a>
              <a href="tel:+8801884055563" className="flex items-center gap-4 text-foreground transition-colors hover:text-primary">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+880 1884 055 563</span>
              </a>
              <div className="flex items-center gap-4 text-foreground">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">Chittagong, Bangladesh</span>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href="https://github.com/thetakibkhan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/takib-khan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = "mailto:takib.khan.01@gmail.com";
            }}
            className="space-y-4 rounded-2xl border border-border bg-card p-6"
          >
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full resize-none rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Takib Khan. Built with passion & code.
          </p>
        </div>
      </div>
    </section>
  );
}
