export const educationData = [
  {
    degree: "Licenciatura en Ingeniería Comercial",
    school: "Universidad Mayor de San Simon",
    year: "2016 - 2021",
    description: "Me formé en análisis cuantitativo (econometría, estadística avanzada e investigación operativa), aplicada a Marketing tradicional y digital.",
  },
  {
    degree: "Diplomado en E marketing - E business - E commerce",
    school: "Universidad Mayor de San Simon",
    year: "2022 - 2023",
    description: "Me formé con estrategias y contenido basado en datos, combinando inbound y outbound marketing.",
  },
  {
    degree: "Diplomado en Inteligencia Artificial aplicada al Marketing Digital ",
    school: "Universidad UCATEC",
    year: "2024 - 2025",
    description: "IA aplicada a análisis de sentimiento, SEO, automatización conversacional y creación de contenido.",
  },
  {
    degree: "Diplomado en Marketing Analytics",
    school: "Unifranz",
    year: "2026 - Presente",
    description: "Especialización avanzada en análisis de datos.",
  },
]

export const skillsData = [
  { skill: "Content Strategy", level: 85 },
  { skill: "Storytelling & Writing", level: 80 },
  { skill: "AI & Productivity Tools", level: 85 },
  { skill: "Community Leadership", level: 80 },
  { skill: "Animación", level: 75 },
  { skill: "Systems & Frameworks", level: 70 },
  { skill: "Growth & Analytics", level: 80 },
]

export const radarData = [
  { subject: "Strategy", A: 85, fullMark: 100 },
  { subject: "Storytelling", A: 80, fullMark: 100 },
  { subject: "AI Tools", A: 85, fullMark: 100 },
  { subject: "Animación", A: 75, fullMark: 100 },
  { subject: "Analytics", A: 80, fullMark: 100 },
]

export const toolsData = [
  { name: "Adobe Express", level: 90, icon: "Ae" },
  { name: "Canva", level: 95, icon: "Ca" },
  { name: "Photoshop", level: 70, icon: "Ps" },
  { name: "Illustrator", level: 50, icon: "Ai" },
  { name: "Adobe Premiere", level: 70, icon: "Pr" },
  { name: "After Effects", level: 50, icon: "Ae" },
  { name: "Capcut", level: 90, icon: "Ca" },
  { name: "Figma", level: 50, icon: "Fg" },
]

export type ProjectCategory = "Todos" | "Ilustración" | "Branding" | "UI/UX" | "Diseño de Personajes"

export interface Project {
  id: number
  title: string
  category: ProjectCategory
  year: string
  description: string
  stats: { subject: string; value: number }[]
  color: string
  type: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Marketing & IA",
    category: "Creación de piezas de contenido",
    year: "2023",
    description: "Un sistema de generación y optimización de contenido usando IA, de acuerdo a las campañas.",
    stats: [
      { subject: "Creatividad", value: 95 },
      { subject: "Técnica", value: 88 },
      { subject: "Color", value: 92 },
      { subject: "Composición", value: 85 },
      { subject: "Impacto", value: 90 },
    ],
    color: "#7c3aed",
    type: "AI Content Lab",
  },
  {
    id: 2,
    title: "Viral Content Engine",
    category: "Guionización y Contenido Audiovisual",
    year: "2023",
    description: "Estrategia y producción de contenido orientado a engagement y alcance orgánico, optimizado con análisis de métricas y comportamiento de audiencia.",
    stats: [
      { subject: "Creatividad", value: 92 },
      { subject: "Técnica", value: 85 },
      { subject: "Color", value: 90 },
      { subject: "Composición", value: 88 },
      { subject: "Impacto", value: 95 },
    ],
    color: "#a855f7",
    type: "Storyboards",
  },
  {
    id: 3,
    title: "Content Analytics System",
    category: "Data & Métricas",
    year: "2024",
    description: "Análisis de rendimiento, evaluación de campañas, hipótesis de crecimiento y optimización basada en KPIs de engagement y conversión.",
    stats: [
      { subject: "Creatividad", value: 88 },
      { subject: "Técnica", value: 92 },
      { subject: "Color", value: 85 },
      { subject: "Composición", value: 90 },
      { subject: "Impacto", value: 87 },
    ],
    color: "#c084fc",
    type: "Métricas",
  },
  {
    id: 4,
    title: "Campaign Calendars",
    category: "Estrategia de Contenido",
    year: "2024",
    description: "Diseño de secuencias de calendarios para lanzamientos, activaciones y eventos, alineando narrativa, expectativa y timing.",
    stats: [
      { subject: "Creatividad", value: 85 },
      { subject: "Técnica", value: 90 },
      { subject: "Color", value: 88 },
      { subject: "Composición", value: 95 },
      { subject: "Impacto", value: 82 },
    ],
    color: "#7c3aed",
    type: "Content Strategist",
  },
  {
    id: 5,
    title: "Process Mapping & Team Flow",
    category: "Optimización de Procesos",
    year: "2025",
    description: "Análisis de flujos de trabajo y creación de diagramas operativos para mejorar eficiencia en equipos de contenido y marketing.",
    stats: [
      { subject: "Creatividad", value: 97 },
      { subject: "Técnica", value: 93 },
      { subject: "Color", value: 88 },
      { subject: "Composición", value: 91 },
      { subject: "Impacto", value: 94 },
    ],
    color: "#a855f7",
    type: "Workflow",
  },
  {
    id: 6,
    title: "Paid Ads Strategy",
    category: "Performance Marketing",
    year: "2024",
    description: "Diseño y ejecución de campañas pagadas con enfoque en segmentación y retorno sobre inversión.",
    stats: [
      { subject: "Creatividad", value: 90 },
      { subject: "Técnica", value: 87 },
      { subject: "Color", value: 82 },
      { subject: "Composición", value: 85 },
      { subject: "Impacto", value: 92 },
    ],
    color: "#c084fc",
    type: "Arte de Juegos",
  },
  {
    id: 7,
    title: "Merch & Product Support Kit",
    category: "Branding",
    year: "2024",
    description: "Creación de merchandising, materiales visuales y recursos gráficos para reforzar identidad y adopción de productos.",
    stats: [
      { subject: "Creatividad", value: 86 },
      { subject: "Técnica", value: 94 },
      { subject: "Color", value: 91 },
      { subject: "Composición", value: 89 },
      { subject: "Impacto", value: 88 },
    ],
    color: "#7c3aed",
    type: "Identidad de Marca",
  },
  {
    id: 8,
    title: "Value Content Series",
    category: "Educación",
    year: "2023",
    description: "Desarrollo de contenido educativo, infografías y contenido estructurado para aportar valor sostenido a la audiencia.",
    stats: [
      { subject: "Creatividad", value: 89 },
      { subject: "Técnica", value: 86 },
      { subject: "Color", value: 84 },
      { subject: "Composición", value: 92 },
      { subject: "Impacto", value: 85 },
    ],
    color: "#a855f7",
    type: "Value Content",
  },
]

export const categories: ProjectCategory[] = ["Todos", "Ilustración", "Branding", "UI/UX", "Diseño de Personajes"]
