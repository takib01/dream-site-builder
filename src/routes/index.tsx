import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}
