import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import HeroContent from "@/components/HeroContent";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Takib Khan — Full-Stack Developer" },
      { name: "description", content: "Full-stack JavaScript developer specializing in AI-directed rapid development. React, Node.js, TypeScript, PostgreSQL." },
      { property: "og:title", content: "Takib Khan — Full-Stack Developer" },
      { property: "og:description", content: "Full-stack JavaScript developer shipping production-ready features with AI-driven workflows." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          {/* Left column — sticky profile card */}
          <div className="flex-shrink-0 lg:w-80">
            <div className="lg:sticky lg:top-24">
              <ProfileCard />
            </div>
          </div>

          {/* Right column — all content */}
          <div className="min-w-0 flex-1 space-y-0">
            <HeroContent />
            <ProjectsSection />
            <SkillsSection />
            <AchievementsSection />
            <ContactSection />
          </div>
        </div>
      </div>
    </div>
  );
}
