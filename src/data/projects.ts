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
    label: "Activation & Retention",
    description:
      "A simulated product analytics case study exploring activation, retention, and conversion for an AI design education tool.",
    tags: ["Product Analytics", "Funnel Analysis", "Retention", "SQL"],
    overview:
      "This case study uses a simulated dataset for an AI design education product similar to SiteAtlas. The goal is to demonstrate how product analytics can translate user behavior into product decisions.",
    problem:
      "AI tools can generate outputs, but not every output creates user value. Product teams need to know where users drop off and which behaviors predict retention. For an AI design education tool, the key question is whether users reach a board-ready structure. The challenge was to define meaningful activation and retention signals for a new product concept.",
    targetUsers:
      "Product analysts, UX researchers, product managers, and designers interested in analytics-driven product decisions.",
    role:
      "Analytic strategy, funnel definition, simulated data design, SQL query examples, metric synthesis, and product recommendation writing.",
    tools: ["SQL", "Looker", "Figma", "Notion", "Excel"],
    process: [
      "Defined a hypothetical funnel and key activation signals.",
      "Created a simulated dataset to demonstrate analysis workflows.",
      "Produced prioritized product recommendations based on simulated insights.",
    ],
    decisions: [
      "Define clear activation and retention events early in the product lifecycle.",
      "Focus analysis on behaviors that lead to board-ready outputs rather than generation volume.",
      "Use exports and saved boards as stronger value signals than generation alone.",
    ],
    outcome:
      "A clear, reproducible analytics narrative demonstrating how teams can measure and act on activation and retention signals for an AI design education product.",
    nextSteps:
      "Build a real event-tracking plan, implement the analytics events, create dashboards, and run onboarding experiments.",
    heroTagline: "Activation and retention analysis for an AI design learning experience.",
    heroSummary:
      "A simulated analytics case study showing how funnel, retention, and conversion metrics inform product decisions for an AI design tool.",
    path: "/work/product-analytics",
  },
];
