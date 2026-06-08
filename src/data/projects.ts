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
      "An AI-powered design education platform that helps landscape architecture students generate site analysis frameworks, precedent references, visual directions, and presentation boards.",
    tags: ["AI Product", "UX Design", "Web Prototype", "OpenAI API", "Design Education"],
    overview:
      "SiteAtlas is an experimental design education tool that combines AI analysis, precedent curation, and visual guidance to help students shape site strategy and presentation assets.",
    problem:
      "Landscape design students often need faster ways to connect research insights to compelling visual frameworks, precedent references, and presentation-ready diagrams.",
    targetUsers:
      "Landscape architecture students, design instructors, and early-stage design teams who need structured site analysis guidance and inspiration.",
    role:
      "Product design, UX strategy, AI prompt architecture, prototype design, and user testing feedback synthesis.",
    tools: ["Next.js", "Tailwind CSS", "OpenAI API", "Figma", "Notion"],
    process: [
      "Mapped student workflows for site analysis, precedent research, and visual concept development.",
      "Built modular AI prompts for site frameworks, references, directions, and board generation.",
      "Iterated on prototype flows with usability feedback from peers and instructors.",
    ],
    decisions: [
      "Prioritized simple, scaffolded inputs to keep AI outputs relevant for design students.",
      "Separated analysis, precedent, and presentation modules to reduce cognitive load.",
      "Used a clean editorial layout to support both research and visual direction review.",
    ],
    outcome:
      "Created a prototype that helped learners move from open-ended research to tangible site strategy and visual presentation artifacts.",
    nextSteps:
      "Test richer site-mapping interactions, expand AI training prompts for design criticism, and add peer review workflows.",
    heroTagline: "AI-powered design education for site analysis.",
    heroSummary:
      "A platform for landscape architecture students to turn research into structured design frameworks, precedent references, and visual presentation boards.",
    path: "/work/siteatlas",
  },
  {
    slug: "lift",
    title: "LIFT",
    label: "Narrative Horror Game Prototype",
    description:
      "A mobile narrative horror game prototype built around modular elevator floors, interactive rules, and player-state progression.",
    tags: ["Game UX", "Unity", "Narrative Systems", "Mobile Prototype"],
    overview:
      "LIFT is a prototype that explores story-driven gameplay through a stacked elevator world, layered rules, and stateful character choices.",
    problem:
      "Horror game prototypes can struggle to balance atmosphere, player guidance, and emergent narrative systems in a compact mobile form.",
    targetUsers:
      "Mobile narrative game players, game designers, and storytellers interested in systems-driven horror experiences.",
    role:
      "Game UX design, systems planning, narrative architecture, prototype iteration, and user experience flows.",
    tools: ["Unity", "Figma", "Miro", "Prototyping", "Playtesting"],
    process: [
      "Defined elevator floor modules and interactive rule sets for narrative escalation.",
      "Designed player-state progression to create meaningful choices across scenes.",
      "Refined pacing through playtesting and rule clarity checks.",
    ],
    decisions: [
      "Focused on modular floor design to enable replayability and emergent dread.",
      "Kept interactions clear and minimal to preserve pacing on mobile.",
      "Used stateful progression to make each choice feel consequential.",
    ],
    outcome:
      "Delivered a compact prototype with a strong narrative spine, clear game rules, and a believable progression structure.",
    nextSteps:
      "Expand floor variations, add audio drama cues, and test deeper player-state branching.",
    heroTagline: "A compact narrative horror experience in a haunted elevator.",
    heroSummary:
      "A mobile prototype that blends atmosphere, choice-driven progression, and modular game rules around a single elevator environment.",
    path: "/work/lift",
  },
  {
    slug: "ai-content-pipeline",
    title: "AI Content Pipeline",
    label: "Horror Video Workflow",
    description:
      "An AI-assisted workflow for producing short-form horror videos from concept to script, storyboard, visual prompts, video generation, editing, and performance testing.",
    tags: ["AI Workflow", "Content Systems", "Storytelling", "Video Production"],
    overview:
      "The content pipeline maps the end-to-end process of turning an idea into a shareable horror video with AI-enabled tools at every stage.",
    problem:
      "Creating cohesive short-form video with strong storytelling is time consuming without a structured workflow that connects idea, visuals, and iteration.",
    targetUsers:
      "Video creators, content teams, and storytellers who need a repeatable AI-first production process.",
    role:
      "Workflow design, content strategy, systems thinking, AI prompt sequencing, and performance testing analysis.",
    tools: ["Notion", "ChatGPT", "Midjourney", "Runway", "Figma"],
    process: [
      "Mapped creative stages from concept to scripting, storyboarding, asset generation, and editing.",
      "Built a repeatable AI prompt sequence for visual and narrative consistency.",
      "Validated the process with short-form tests and iteration feedback.",
    ],
    decisions: [
      "Organized deliverables as a linear pipeline to reduce handoff friction.",
      "Embraced generative AI for storyboard and visual idea exploration.",
      "Connected performance testing to creative iteration rather than output alone.",
    ],
    outcome:
      "Established a content workflow that transmits a horror concept into visual and narrative artifacts efficiently.",
    nextSteps:
      "Integrate analytics into ideation, refine asset handoff, and test the pipeline with a live creator team.",
    heroTagline: "From concept to horror video through an AI-assisted production workflow.",
    heroSummary:
      "A workflow designed to create short-form horror content with generative narrative, visuals, editing, and iteration baked in.",
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
