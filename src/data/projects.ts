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
      "An AI-powered design education platform that helps landscape architecture and design students turn a site, project type, and design direction into structured analysis, precedent references, visual guidance, and presentation logic.",
    tags: ["AI Product", "UX Design", "Web Prototype", "OpenAI API", "Design Education"],
    overview:
      "SiteAtlas was created to solve a common problem in design education: students often know the site and assignment, but do not know how to start site analysis, organize research, select precedents, or translate observations into a coherent board.",
    problem:
      "Site analysis is often ambiguous for beginner design students. Students depend heavily on expensive tutoring, scattered references, and vague online inspiration. Existing AI tools can generate text, but they usually do not understand the design process or studio critique logic. The challenge was to create a product flow that turns a vague design starting point into actionable design thinking.",
    targetUsers:
      "Landscape architecture students, architecture and urban design students, portfolio applicants, beginner designers preparing studio boards, and self-taught design learners.",
    role:
      "Product strategy, UX flow, AI prompt structure, feature planning, information architecture, prototype direction, and case study writing.",
    tools: ["Next.js", "Tailwind CSS", "OpenAI API", "Figma", "Notion"],
    process: [
      "Defined the core product path from site input to board-ready output.",
      "Structured prompts and outputs to support both analysis and visual direction.",
      "Refined prototype screens around clear student workflows and critique preparation.",
    ],
    decisions: [
      "Designed a beginner-first structure that scaffolds analysis and precedent review.",
      "Connected inspirational references to explicit design logic rather than abstract mood boards.",
      "Positioned AI as a studio assistant rather than a final designer.",
      "Prioritized the board output as the activation moment for student confidence.",
    ],
    outcome:
      "Delivered an independent product prototype that makes site analysis more structured, approachable, and decision-focused for design learners.",
    nextSteps:
      "Add a real precedent database, user-uploaded reference images, editable board layouts, export formats, critique mode, and paid tier experiments.",
    heroTagline: "AI-enabled education for site analysis and design direction.",
    heroSummary:
      "A platform for landscape architecture and design students to turn a site, assignment, and style direction into structured research, precedents, and board logic.",
    path: "/work/siteatlas",
  },
  {
    slug: "lift",
    title: "LIFT",
    label: "Narrative Horror Game Prototype",
    description:
      "A mobile narrative horror game prototype built around modular elevator floors, interactive rules, surreal spatial logic, and player-state progression.",
    tags: ["Game UX", "Narrative Systems", "Mobile Prototype", "Unity"],
    overview:
      "LIFT is an independent mobile prototype exploring how horror emerges from rules, repetition, spatial uncertainty, and player interpretation rather than only jump scares.",
    problem:
      "Many mobile horror games rely on jump scares or passive observation. Narrative games can become overly text-heavy if interaction is not carefully designed. The challenge was to create a compact game structure where each floor functions as a self-contained surreal puzzle but also contributes to a larger progression system, and to make this feasible for a solo creator while remaining expandable.",
    targetUsers:
      "Players interested in surreal horror, narrative puzzle game players, mobile horror audiences, and players who enjoy liminal spaces, analog horror, and rule-based mysteries.",
    role:
      "Game concept, narrative system design, level structure, player-state progression, UX flow, interaction logic, prototype planning, and Unity implementation direction.",
    tools: ["Unity", "Figma", "Miro", "Prototyping", "Playtesting"],
    process: [
      "Defined a minimal set of interaction rules per floor to support emergent discovery.",
      "Designed a four-state player recognition system to drive emotional progression.",
      "Built modular level templates to allow scalable content creation.",
    ],
    decisions: [
      "Elevator as the main navigation and interaction surface to centralize player focus.",
      "Encourage rule discovery rather than heavy tutorials to preserve tension.",
      "Use modular floor design so new content can be authored quickly.",
      "Make player-state progression the primary emotional feedback loop.",
    ],
    outcome:
      "Produced a focused prototype demonstrating meaningful player-driven discovery, concise interaction rules, and a scaffold for further chapter development.",
    nextSteps:
      "Refine onboarding for Floor 01, develop contrasting Floor 02, add player-state UI, incorporate audio and environmental storytelling, and prepare a vertical slice.",
    heroTagline: "A rule-driven, atmospheric narrative horror prototype.",
    heroSummary:
      "A mobile prototype where each elevator floor is a compact, rule-based narrative chamber that contributes to a larger, stateful progression.",
    path: "/work/lift",
  },
  {
    slug: "ai-content-pipeline",
    title: "AI Content Pipeline",
    label: "Horror Video Workflow",
    description:
      "An AI-assisted content production workflow that turns a short horror concept into a repeatable pipeline for scriptwriting, shot planning, visual prompting, video generation, editing, and performance review.",
    tags: ["AI Workflow", "Content Systems", "Visual Storytelling", "Video Production"],
    overview:
      "This independent workflow explores how AI tools can help solo creators produce short-form horror videos more consistently without losing narrative control or visual direction.",
    problem:
      "Short-form horror content requires strong hooks, pacing, and visual clarity. AI tools can generate assets quickly, but outputs are inconsistent without a clear workflow. Solo creators spend time switching between ideation, scripting, image prompts, video generation, editing, and publishing. The challenge was to design a repeatable content pipeline that preserves creative control while improving production speed.",
    targetUsers:
      "Solo content creators, horror YouTube/TikTok creators, AI video creators, small creative teams, storytelling-focused content operators, and creators testing short-form video concepts.",
    role:
      "Workflow design, story structure, prompt system design, visual direction, AI tool orchestration, content operations planning, performance review framework, and case study writing.",
    tools: ["Notion", "ChatGPT", "Midjourney", "Runway", "Figma"],
    process: [
      "Defined a clear handoff between ideation, scripting, assets, generation, and editing.",
      "Built repeatable prompt templates for visual consistency across generated images and video frames.",
      "Established an editing checklist and post-publish performance review routine.",
    ],
    decisions: [
      "Designed the workflow before integrating tooling to prevent tool-driven outcomes.",
      "Prioritized human editorial direction over AI randomness.",
      "Created a repeatable prompt and content checklist to improve consistency.",
      "Integrated performance review into the creative loop for iterative improvement.",
    ],
    outcome:
      "Delivered an independent workflow prototype that demonstrates how AI tools can be orchestrated into a controlled, repeatable content production process for short-form horror.",
    nextSteps:
      "Build a simple web interface for the pipeline, add reusable prompt templates, enable thumbnail/title testing, create a content calendar, and track analytics for retention and completion.",
    heroTagline: "From concept to horror video through a repeatable AI-assisted pipeline.",
    heroSummary:
      "A production system that converts a short horror idea into scripts, shot lists, visual prompts, generated assets, and an editing checklist ready for testing and iteration.",
    path: "/work/ai-content-pipeline",
  },
  {
    slug: "product-analytics",
    title: "Product Analytics Case Study",
    label: "Product Analytics Case Study",
    description:
      "A data analysis case study exploring activation, retention, and conversion for an AI design tool.",
    tags: ["SQL", "Product Analytics", "Funnel Analysis", "Retention"],
    overview:
      "This case study examines product metrics for an AI design tool, focusing on activation, retention, and conversion insights.",
    problem:
      "Product teams need clear data signals to understand where users drop off and how AI features impact long-term retention.",
    targetUsers:
      "Product analysts, UX researchers, and AI product leaders looking for actionable analytics storytelling.",
    role:
      "Analytic strategy, funnel definition, metric synthesis, and product recommendation development.",
    tools: ["SQL", "Looker", "Figma", "Notion", "Excel"],
    process: [
      "Defined key activation and retention cohorts based on product behavior.",
      "Analyzed funnel drop-off and feature usage patterns.",
      "Translated data into prioritized product recommendations.",
    ],
    decisions: [
      "Focused on activation and retention rather than vanity metrics.",
      "Broke analysis into user behavior, feature adoption, and conversion triggers.",
      "Supplemented numeric insight with qualitative product recommendations.",
    ],
    outcome:
      "Delivered a concise analytics story that surfaced high-leverage improvements for onboarding and AI feature usage.",
    nextSteps:
      "Run targeted experiments on onboarding prompts, retention nudges, and conversion messaging.",
    heroTagline: "Data-driven product insight for an AI design experience.",
    heroSummary:
      "A product analytics case study focused on how activation, retention, and conversion move together for an AI design tool.",
    path: "/work/product-analytics",
  },
];
