// ============================================================
// SCHOOLOS DÉMO — Configuration générée automatiquement
// École : CIH
// ============================================================

const SCHOOL_CONFIG = {

  // ── Identité ─────────────────────────────────────────────
  name:         "CIH",
  director:     "Jean Franck Saint-Cyr",
  city:         "Port-au-Prince",
  department:   "Ouest",
  address:      "...",
  phone:        "...",
  email:        "...",
  emoji:        "🎓",
  tagline:      "...",

  // ── Apparence ────────────────────────────────────────────
  theme:        "classic",
  font:         "serif",

  // ── Niveaux ──────────────────────────────────────────────
  levels: [
    { group: "Fondamental 1er cycle",  options: ["1ère Année", "2ème Année", "3ème Année"] },
    { group: "Fondamental 2ème cycle", options: ["4ème Année", "5ème Année", "6ème Année"] },
    { group: "Fondamental 3ème cycle", options: ["7ème Année", "8ème Année", "9ème Année"] },
    { group: "Secondaire",             options: ["Seconde", "Rhétorique", "Terminale (Philo)"] },
  ],

  // ── Actualités ────────────────────────────────────────────
  news: [
    {
      emoji: "📝",
      date:  "Janvier 2025",
      title: "Inscriptions 2025–2026 ouvertes",
      text:  "Les inscriptions pour la prochaine rentrée scolaire sont désormais ouvertes en ligne.",
    },
    {
      emoji: "🎓",
      date:  "Décembre 2024",
      title: "Remise des diplômes",
      text:  "Cérémonie de remise des diplômes pour les lauréats de l'année scolaire 2023–2024.",
    },
    {
      emoji: "🏆",
      date:  "Novembre 2024",
      title: "Excellence académique",
      text:  "Nos élèves se distinguent lors des évaluations nationales. Félicitations à toute l'équipe pédagogique.",
    },
  ],

  // ── Événements ────────────────────────────────────────────
  events: [
    { day:"15", month:"Jan", title:"Réunion de parents",       meta:"18h00 · Salle polyvalente" },
    { day:"8",  month:"Fév", title:"Journée portes ouvertes",  meta:"09h00 – 16h00 · Établissement" },
    { day:"14", month:"Fév", title:"Fête de l'école",          meta:"Journée entière · Cour principale" },
    { day:"1",  month:"Mar", title:"Début du 2ème trimestre",  meta:"07h30 · Toutes les classes" },
  ],

};
