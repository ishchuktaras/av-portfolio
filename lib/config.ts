// Site configuration
export const siteConfig = {
  name: "Anhelina Vavzhyniak | Fotografka",
  description: "Portrétní, módní a komerční fotografka z Jihlavy. Studentka Obchodní akademie s vášní pro fotografii.",
  url: "https://anhelina-photo.cz",
  ogImage: "/og-image.jpg",
  links: {
    instagram: "https://instagram.com/anhelina.photo",
    facebook: "https://facebook.com/anhelina.photo",
    email: "info@anhelina-photo.cz",
    phone: "+420777888999",
  },
  categories: [
    { id: "all", name: "Všechny" },
    { id: "portraits", name: "Portréty" },
    { id: "fashion", name: "Móda" },
    { id: "creative", name: "Kreativní" },
    { id: "events", name: "Události" },
    { id: "commercial", name: "Komerční" },
    { id: "personal", name: "Osobní" },
  ],
}

// Portfolio configuration
export const portfolioConfig = {
  itemsPerPage: 12,
  defaultCategory: "all",
}

// Portfolio items
export interface PortfolioItem {
  id: string
  title: string
  description?: string
  category: string
  image: string
  aspectRatio: "portrait" | "landscape" | "square"
  tags?: string[]
  featured?: boolean
}

// Demo portfolio data
export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Portrét Kláry",
    description: "Studiový portrét s přirozeným osvětlením",
    category: "portraits",
    image: "https://placehold.co/600x800/e2e8f0/1e293b?text=Portrét+Kláry",
    aspectRatio: "portrait",
    tags: ["portrét", "žena", "studio"],
    featured: true,
  },
  {
    id: "2",
    title: "Módní editorial Léto 2024",
    description: "Letní kolekce pro místní butik",
    category: "fashion",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Módní+editorial",
    aspectRatio: "landscape",
    tags: ["móda", "léto", "editorial"],
    featured: true,
  },
  {
    id: "3",
    title: "Kreativní portrét s květinami",
    description: "Umělecký portrét s květinovými prvky",
    category: "creative",
    image: "https://placehold.co/700x700/e2e8f0/1e293b?text=Kreativní+portrét",
    aspectRatio: "square",
    tags: ["kreativní", "květiny", "portrét"],
    featured: true,
  },
  {
    id: "4",
    title: "Firemní večírek XYZ",
    description: "Reportáž z firemní akce",
    category: "events",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Firemní+večírek",
    aspectRatio: "landscape",
    tags: ["událost", "firemní", "reportáž"],
    featured: false,
  },
  {
    id: "5",
    title: "Produktová fotografie pro e-shop",
    description: "Série produktových fotografií pro online obchod",
    category: "commercial",
    image: "https://placehold.co/600x800/e2e8f0/1e293b?text=Produktová+fotografie",
    aspectRatio: "portrait",
    tags: ["produkt", "e-shop", "komerční"],
    featured: false,
  },
  {
    id: "6",
    title: "Osobní projekt - Příroda",
    description: "Série fotografií z osobního projektu o přírodě",
    category: "personal",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Příroda",
    aspectRatio: "landscape",
    tags: ["příroda", "osobní", "projekt"],
    featured: true,
  },
  {
    id: "7",
    title: "Portrét Jana",
    description: "Venkovní portrét s přirozeným světlem",
    category: "portraits",
    image: "https://placehold.co/600x800/e2e8f0/1e293b?text=Portrét+Jana",
    aspectRatio: "portrait",
    tags: ["portrét", "muž", "exteriér"],
    featured: false,
  },
  {
    id: "8",
    title: "Módní kolekce Podzim",
    description: "Podzimní kolekce pro módní značku",
    category: "fashion",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Módní+kolekce",
    aspectRatio: "landscape",
    tags: ["móda", "podzim", "kolekce"],
    featured: true,
  },
  {
    id: "9",
    title: "Experimentální dvojexpozice",
    description: "Kreativní experiment s dvojitou expozicí",
    category: "creative",
    image: "https://placehold.co/700x700/e2e8f0/1e293b?text=Dvojexpozice",
    aspectRatio: "square",
    tags: ["kreativní", "dvojexpozice", "experiment"],
    featured: false,
  },
  {
    id: "10",
    title: "Svatba Petry a Tomáše",
    description: "Svatební reportáž",
    category: "events",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Svatba",
    aspectRatio: "landscape",
    tags: ["svatba", "reportáž", "událost"],
    featured: true,
  },
  {
    id: "11",
    title: "Reklamní kampaň pro místní kavárnu",
    description: "Série fotografií pro reklamní kampaň kavárny",
    category: "commercial",
    image: "https://placehold.co/600x800/e2e8f0/1e293b?text=Reklamní+kampaň",
    aspectRatio: "portrait",
    tags: ["reklama", "kavárna", "kampaň"],
    featured: false,
  },
  {
    id: "12",
    title: "Cestování - Itálie",
    description: "Osobní cestovatelské fotografie z Itálie",
    category: "personal",
    image: "https://placehold.co/800x600/e2e8f0/1e293b?text=Itálie",
    aspectRatio: "landscape",
    tags: ["cestování", "Itálie", "osobní"],
    featured: false,
  },
]

