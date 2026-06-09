export type Project = {
  slug: string;
  title: string;
  label: string;
  description: string;
  tags: string[];
  overview: string;
  problem: string;
  targetUsers: string;
  role: string;
  tools: string[];
  process: string[];
  decisions: string[];
  outcome: string;
  nextSteps: string;
  heroTagline: string;
  heroSummary: string;
  path: string;
};

export const projects: Project[] = [
  {
    slug: "siteatlas",
    title: "SiteAtlas",
    label: "AI Design Education Tool",
    description:
      "An AI-assisted design education platform that helps landscape architecture and design students turn a site, project type, and visual direction into structured analysis, precedent logic, AI visual guidance, and presentation-ready board thinking.",
    tags: ["AI Product", "Design Education", "Landscape Architecture", "UX System", "Web Prototype"],
    overview:
      "SiteAtlas is a self-directed AI product prototype built from my landscape architecture background. It addresses the moment when design students know their site and assignment, but do not know how to begin analysis, organize references, or translate research into a clear design board.",
    problem:
      "Beginner design students often depend on expensive tutoring, scattered online inspiration, and vague precedent references. General AI tools can generate text, but they rarely understand studio critique logic, site-analysis sequence, precedent reasoning, or presentation-board structure. The challenge was to design a tool that turns an ambiguous design starting point into a guided, critique-aware workflow.",
    targetUsers:
      "Landscape architecture students, architecture and urban design students, portfolio applicants, beginner designers preparing studio boards, and self-taught design learners who need structured design guidance.",
    role:
      "Product strategy, UX flow, AI prompt structure, feature planning, information architecture, prototype direction, visual direction, and case study writing.",
    tools: ["Next.js", "Tailwind CSS", "OpenAI API", "Figma", "Notion"],
    process: [
      "Mapped the student journey from site input to analysis, precedent review, visual direction, board logic, and export planning.",
      "Structured the AI output into sections that support design thinking instead of generic text generation.",
      "Designed beginner, advanced, and competition-oriented flows to support different levels of design confidence.",
      "Refined the prototype around visible outputs: analysis cards, precedent cards, visual directions, critique prompts, and board-building steps.",
    ],
    decisions: [
      "Positioned AI as a studio assistant rather than a final designer.",
      "Used a beginner-first structure to make site analysis less intimidating.",
      "Connected visual references to explicit design logic instead of treating them as mood-board decoration.",
      "Prioritized board-ready output as the activation moment because students need something they can present, revise, and discuss.",
    ],
    outcome:
      "Created an independent web prototype that demonstrates how AI can support design education through structured workflows, critique logic, precedent reasoning, and visual direction.",
    nextSteps:
      "Add a curated precedent database, user-uploaded reference images, editable board layouts, export formats, critique mode, and paid-tier experiments.",
    heroTagline: "AI-assisted design education for site analysis and portfolio thinking.",
    heroSummary:
      "A web prototype for landscape architecture and design students to turn a site, assignment, and visual direction into structured research, precedents, critique logic, and board-ready guidance.",
    path: "/work/siteatlas",
  },
  {
    slug: "lift",
    title: "LIFT",
    label: "Narrative Horror Game Prototype",
    description:
      "A mobile narrative horror prototype built around surreal elevator floors, rule-based puzzles, modular level design, and player-state progression.",
    tags: ["Game Design", "Narrative Systems", "Unity", "Mobile Prototype", "Horror UX"],
    overview:
      "LIFT is an independent mobile game concept about an elevator that turns life anxieties, unfinished memories, and social rules into surreal floors. Each floor works as a compact narrative puzzle with its own spatial logic, interaction rule, and emotional consequence.",
    problem:
      "Many mobile horror games rely on jump scares, while many narrative games become too passive or text-heavy. The challenge was to design a horror experience that feels interactive, replayable, and feasible for a solo creator. The core question became: how can each floor feel like a self-contained mystery while still contributing to a larger system of recognition, contamination, and transformation?",
    targetUsers:
      "Players interested in surreal horror, narrative puzzle games, liminal spaces, analog horror, rule-based mysteries, and compact mobile experiences with strong atmosphere.",
    role:
      "Game concept, narrative system design, level structure, player-state progression, UX flow, interaction logic, prototype planning, and Unity implementation direction.",
    tools: ["Unity", "Figma", "Miro", "Prototyping", "Playtesting"],
    process: [
      "Defined the elevator as the central navigation system to keep the prototype focused and scalable.",
      "Designed modular floor rules so each level can introduce a new interaction without rebuilding the whole game.",
      "Built a four-stage player-state framework: Passenger, Recognized, Integrated, and Resident.",
      "Developed early floor concepts around memory, repetition, forbidden actions, spatial contradiction, and player interpretation.",
    ],
    decisions: [
      "Used rule discovery instead of heavy tutorials to preserve tension.",
      "Kept each floor compact so the project can be developed by a solo creator.",
      "Made the elevator both interface and narrative container.",
      "Connected player-state progression to emotional feedback rather than simple score or inventory accumulation.",
    ],
    outcome:
      "Produced a focused prototype direction for a surreal narrative horror game with modular levels, compact interactions, and a scalable chapter structure.",
    nextSteps:
      "Refine Floor 01 onboarding, develop Floor 02 with a contrasting mechanic, add player-state UI, incorporate sound design and environmental storytelling, and prepare a vertical slice.",
    heroTagline: "A surreal elevator game where every floor is a rule you have to survive.",
    heroSummary:
      "A mobile narrative horror prototype where each elevator floor becomes a compact, rule-based chamber connected to a larger system of recognition, contamination, and transformation.",
    path: "/work/lift",
  },
  {
    slug: "ai-content-pipeline",
    title: "AI Content Pipeline",
    label: "Horror Video Workflow",
    description:
      "An AI-assisted production workflow that turns a short horror concept into a repeatable system for scripts, shot lists, visual prompts, generated assets, editing plans, and performance review.",
    tags: ["AI Workflow", "Content System", "Horror Storytelling", "Visual Direction", "Video Production"],
    overview:
      "This project explores how a solo creator can use AI tools to produce short-form horror videos more consistently without losing control over story, pacing, atmosphere, and visual identity.",
    problem:
      "Short-form horror depends on strong hooks, controlled pacing, visual clarity, and an ending that lands quickly. AI tools can generate assets fast, but without a system, the output becomes random and inconsistent. The challenge was to design a repeatable pipeline that keeps human editorial control at the center while using AI to speed up production.",
    targetUsers:
      "Solo content creators, horror YouTube and TikTok creators, AI video creators, small creative teams, storytelling-focused content operators, and creators testing short-form video concepts.",
    role:
      "Workflow design, story structure, prompt system design, visual direction, AI tool orchestration, content operations planning, and performance review framework.",
    tools: ["ChatGPT", "Runway", "Kling", "Midjourney", "Notion", "Figma"],
    process: [
      "Defined the production path from concept, hook, script, shot list, visual prompt, image generation, video generation, editing, and review.",
      "Created reusable prompt structures to keep characters, atmosphere, camera direction, and visual continuity more consistent.",
      "Separated creative decisions from tool execution so the workflow does not become tool-driven.",
      "Added a post-publish review layer for retention, completion rate, comments, and future iteration.",
    ],
    decisions: [
      "Designed the workflow before choosing specific tools.",
      "Prioritized editorial control over AI randomness.",
      "Built repeatable checkpoints for hook, pacing, visual logic, and final twist.",
      "Treated analytics as part of the creative loop rather than a separate afterthought.",
    ],
    outcome:
      "Created a structured AI-assisted production system that can turn horror concepts into repeatable video experiments with clearer direction and faster iteration.",
    nextSteps:
      "Build a simple web interface for the pipeline, add prompt-template storage, enable thumbnail and title testing, create a content calendar, and track retention data.",
    heroTagline: "A repeatable AI-assisted workflow for short-form horror videos.",
    heroSummary:
      "A production system that converts a horror idea into scripts, shot lists, visual prompts, generated assets, editing checklists, and performance-review loops.",
    path: "/work/ai-content-pipeline",
  },
  {
    slug: "portfolio-system",
    title: "Portfolio System",
    label: "Personal Brand & Web System",
    description:
      "A self-directed portfolio website that turns scattered projects into a coherent public-facing system across AI product prototypes, UX systems, workflow design, and analytics case studies.",
    tags: ["Portfolio Design", "Personal Brand", "Frontend", "Case Study System", "Creative Direction"],
    overview:
      "This portfolio is not only a container for finished work. It is a design system for clarifying my direction across AI tools, landscape thinking, narrative games, and visual experiments. The goal was to turn many different interests into one coherent professional identity.",
    problem:
      "My work spans multiple categories: AI product ideas, landscape design education, horror game systems, visual experiments, and content workflows. Without a clear structure, these projects can look unrelated. The challenge was to design a portfolio that presents them as one connected practice instead of a random collection of experiments.",
    targetUsers:
      "Hiring managers, collaborators, AI product teams, design studios, product operations teams, and people evaluating my ability to structure ambiguous ideas.",
    role:
      "Information architecture, writing, visual direction, project positioning, frontend editing, content strategy, and case study system design.",
    tools: ["Next.js", "Tailwind CSS", "Vercel", "GitHub", "VS Code"],
    process: [
      "Defined the core identity around AI product prototypes, UX systems, workflow design, and narrative prototypes.",
      "Organized projects into clear case-study categories with consistent labels, summaries, roles, processes, decisions, outcomes, and next steps.",
      "Refined the homepage, work overview, project cards, and detail-page structure to feel more curated and less template-like.",
      "Connected the portfolio language to the actual projects I am building rather than forcing the work into a generic designer format.",
    ],
    decisions: [
      "Used a restrained editorial visual style to keep the site professional and flexible.",
      "Positioned the portfolio around systems, space, story, and AI-assisted production.",
      "Made each project card read like a curated case study instead of a simple gallery item.",
      "Kept the structure expandable so new projects can be added without redesigning the entire site.",
    ],
    outcome:
      "Built a public-facing portfolio system that gives my scattered work a clearer professional frame and can continue evolving as new projects become more complete.",
    nextSteps:
      "Add stronger project visuals, refine mobile presentation, create a downloadable resume PDF, add live demo links, and continue replacing placeholder material with real project assets.",
    heroTagline: "A portfolio system for turning scattered work into a clear public identity.",
    heroSummary:
      "A self-directed web system that organizes AI product prototypes, UX systems, workflow design, and analytics case studies into a coherent portfolio.",
    path: "/work/portfolio-system",
  },
];