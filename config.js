// ============================================================
// SCHOOLOS DÉMO — Configuration de l'école
// ============================================================
// Remplissez ce fichier AVANT chaque rendez-vous.
// La démo (index.html et admin-demo.html) se met à jour
// automatiquement avec les informations de l'école.
// ============================================================

const SCHOOL_CONFIG = {

  // ── Identité ─────────────────────────────────────────────
  name:         "Collège Toussaint Louverture",   // Nom complet de l'école
  director:     "M. Jean-Baptiste Pierre",         // Nom du directeur / directrice
  city:         "Port-au-Prince",                  // Ville
  department:   "Ouest",                           // Département haïtien
  address:      "Avenue Christophe, PAP",          // Adresse
  phone:        "+509 36 00 0000",                 // Téléphone
  email:        "contact@college-toussaint.ht",    // Email
  emoji:        "📚",                              // Emoji logo (🏫 📚 🌿 🎓 ✝️ ⚔️ 🌊 🎨 🏛️ 🌺)
  tagline:      "Liberté, dignité, excellence",    // Slogan de l'école

  // ── Apparence ────────────────────────────────────────────
  // Thème   : "nature" | "classic" | "modern" | "ocean" | "sunset"
  // Police  : "rounded" | "serif" | "tech" | "humanist" | "display"
  theme:        "classic",
  font:         "serif",

  // ── Type d'établissement ──────────────────────────────────
  // "maternelle" | "primaire" | "secondaire" | "mixte"
  type:         "secondaire",

  // ── Niveaux proposés (affiché dans le formulaire) ─────────
  levels: [
    // Décommentez les niveaux que l'école propose
    // { group: "Fondamental 1er cycle", options: ["1ère Année", "2ème Année", "3ème Année"] },
    // { group: "Fondamental 2ème cycle", options: ["4ème Année", "5ème Année", "6ème Année"] },
    // { group: "Fondamental 3ème cycle", options: ["7ème Année", "8ème Année", "9ème Année"] },
    { group: "Secondaire", options: ["Seconde", "Rhétorique", "Terminale (Philo)"] },
  ],

  // ── Actualités (3 max pour la démo) ──────────────────────
  news: [
    {
      emoji: "🎓",
      date:  "12 janvier 2025",
      title: "Résultats du Bac — 94% de réussite !",
      text:  "Notre lycée affiche un taux de réussite exceptionnel au baccalauréat. Félicitations à tous nos lauréats.",
    },
    {
      emoji: "📝",
      date:  "2 janvier 2025",
      title: "Inscriptions 2025–2026 ouvertes",
      text:  "Les inscriptions pour la prochaine rentrée sont désormais ouvertes. Formulaire en ligne disponible 24h/24.",
    },
    {
      emoji: "🏆",
      date:  "20 décembre 2024",
      title: "Concours national de mathématiques",
      text:  "Trois de nos élèves se distinguent au niveau national. Une fierté pour tout l'établissement.",
    },
  ],

  // ── Événements à venir (4 max) ────────────────────────────
  events: [
    { day:"15", month:"Jan", title:"Réunion de parents — 2ème trimestre",    meta:"18h00 · Salle polyvalente" },
    { day:"20", month:"Jan", title:"Examens blancs — Terminales",            meta:"08h00 · Toutes les salles" },
    { day:"8",  month:"Fév", title:"Journée portes ouvertes",                meta:"09h00 – 16h00 · Tout l'établissement" },
    { day:"14", month:"Fév", title:"Fête de l'école",                        meta:"Journée entière · Cour principale" },
  ],

};
