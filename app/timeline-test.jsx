import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Senior Software Engineer",
      company: "Charter Communications",
      duration: "Feb 2023 - Present",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Key Achivements:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Built the Daily Work Queue app with React.js, Next.js, owning
              development and maintenance while collaborating with the product
              team, designers, and users
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Optimized customer data access by integrating subgraphs into
              Apollo GraphQL Federation, improving API response time by 37%
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Ran A/B tests in the SMART app, improving ease of use for
              customer service agents and boosting task efficiency by 15%
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Experience with front-end observability using Kibana and Splunk
              to monitor website performance, identify bottlenecks, and optimize
              user experience
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Deployed and managed frontends on AWS using Kubernetes,
              automating with Jenkins and Docker, reducing manual efforts by 40%
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Senior Software Engineer",
      company: "Ernst & Young",
      duration: "Jun 2021 - Jan 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Key Achivements:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Developed the ASSESS app, a complex B2C application for EY
              customer engagement, supporting 50K users and managing over 0.4M
              annual engagements
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Implemented Cypress tests, automating 80% of cases, reducing
              testing time by 60%, and raising code coverage to 85%
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Achieved WCAG AA certification by integrating A11y features,
              supporting users with disabilities and increasing user count by
              22%
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Reduced bundle size by 42% and improved Time to Interactive
              (TTI) by 55% using SASS, utility classes, and CSS optimizations
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Designed micro-frontend architecture with Single-SPA for VIA
              app, enabling scalable and modular frontend solutions
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Integrated Azure Communication and Translation Services with
              i18n in Node.js APIs for multilingual email notifications
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      company: "Microsoft ",
      duration: "Jun 2019 - May 2021",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Key Achivements:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Spearheaded performance optimization using React hooks for the
              DataLine app, reducing Main Thread Time by 43%
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Implemented drag-and-drop functionality and React Quill,
              enhancing UX and boosting user satisfaction
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Migrated codebase to TypeScript, reducing runtime errors by 30%
              and accelerating development velocity
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      company: "Infosys Limited ",
      duration: "May 2018 - May 2019",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Key Achivements:
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄Built Rewards portal for British Petroleum, boosting performance
              by 150% with React Context API for seamless data sharing
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🪄 Automated testing with React Testing Library, achieving 65%
              code coverage and reducing bugs
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4"></div>
        </div>
      ),
    },
    {
      title: "Bachelor of Engineering",
      company: "Anna University, Chennai ",
      duration: "May 2014  - May 2018",
      content: <div></div>,
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
