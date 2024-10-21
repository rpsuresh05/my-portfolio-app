"use client";
import Image from "next/image";
import { FloatingDock } from "./../components/ui/floating-dock";
import { FloatingDockDemo } from "./test";
import Example from "./button";
import { TimelineDemo } from "./timeline-test";
import { MovingBorder } from "@/components/ui/moving-border";
import { MovingBorderDemo } from "./moving-border-test";
import { HeroHighlightDemo } from "./highlight-test";
import UnderlineReveal from "@/components/ui/UnderlineReveal";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <div className="font-[family-name:var(--font-geist-mono)]">
            Hi, I am <HeroHighlightDemo />
          </div>
          <p>
            A passionate frontend engineer with over 5 years of experience
            building scalable, high-performance web applications. I specialize
            in using React, TypeScript, JavaScript, and modern frameworks to
            deliver user-centric and maintainable solutions. My expertise lies
            in UI/UX development, state management (Redux), and performance
            optimization, ensuring seamless user experiences across devices.
          </p>
          <p>
            My collaborative work with product and design teams has helped align
            business requirements with technical solutions, resulting in
            efficient and intuitive applications.
          </p>
          <p>
            Additionally, I have hands-on experience with GraphQL, Google Maps
            integrations, and CI/CD pipelines using Jenkins and Docker. I am
            also proficient with testing frameworks like Jest and Cypress to
            ensure code reliability. I enjoy mentoring junior developers,
            sharing best practices, and fostering collaborative team
            environments.
          </p>
          {/* <p>
            I’m constantly looking to improve my skills and stay updated with
            the latest technologies. Whether working on large enterprise
            solutions or smaller side projects, I’m driven by the challenge of
            creating clean, responsive UIs and solving complex front-end
            problems.
          </p> */}
          <TimelineDemo />
        </main>
      </div>
      <div
        style={{
          height: 222,
        }}
      ></div>
      <FloatingDockDemo />
    </>
  );
}
