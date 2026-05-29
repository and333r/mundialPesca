/* ============================================================
   Resultados oficiales en directo del Mundial 2026.
   ------------------------------------------------------------
   Este archivo arranca VACÍO: mientras no haya nada relleno,
   el ranking muestra a todo el mundo con 0 puntos.
   A medida que vayas escribiendo resultados aquí (orden final
   de un grupo, ganadores de eliminatorias, premios, etc.), la
   app recalcula automáticamente las puntuaciones de cada
   participante. Lo que dejes vacío ("" o []) sigue contando
   como "pendiente" y no resta puntos a nadie.

   Si quieres volver a partir de cero, copia el contenido de
   results-empty.js sobre este archivo.
   ------------------------------------------------------------
   Cambios importantes:
   - YA NO se predicen resultados exactos de partidos: solo el
     ORDEN en que terminan los equipos en cada grupo.
     Por eso este archivo no tiene "groupMatches".
   - "thirdPlace" es la lista de los 8 mejores terceros que
     pasan a dieciseisavos, en el orden 1º-8º.
   - "awards" tiene 5 categorías nuevas y divertidas.
   ============================================================ */

const RESULTS = {
  // Orden final de cada grupo: 1º, 2º, 3º, 4º.
  groups: {
    A: ["Mexico", "Switzerland", "South Korea", "Cameroon"],
    B: ["Spain", "Uruguay", "Morocco", "Scotland"],
    C: ["Argentina", "Denmark", "Canada", "Ghana"],
    D: ["Brazil", "Croatia", "Japan", "Nigeria"],
    E: ["France", "Netherlands", "Senegal", "Costa Rica"],
    F: ["England", "United States", "Serbia", "Tunisia"],
    G: ["Germany", "Belgium", "Poland", "Wales"],
    H: ["Portugal", "Colombia", "Iran", "Australia"],
    I: ["Italy", "Turkey", "Sweden", "Algeria"],
    J: ["Japan", "Peru", "Egypt", "New Zealand"],
    K: ["Belgium", "Mexico", "Austria", "South Africa"],
    L: ["Croatia", "United States", "Ecuador", "Saudi Arabia"]
  },

  // Los 8 mejores terceros que clasifican a dieciseisavos,
  // en orden (1º mejor tercero → 8º mejor tercero).
  thirdPlace: [
    "Morocco",
    "Senegal",
    "Sweden",
    "Poland",
    "Iran",
    "Canada",
    "Austria",
    "Ecuador"
  ],

  // Quiniela 1X2 — resultados reales de los 3 partidos fijos.
  // Valores admitidos: "1" (gana team1), "X" (empate), "2" (gana team2).
  // Las claves coinciden con `[team1, team2].sort().join('__')` definido en
  // QUINIELA_1X2_MATCHES dentro de app.js. Dejar "" mientras el partido no
  // se haya jugado.
  quiniela1x2: {
    "Mexico__South Korea": "1",
    "Morocco__Scotland":   "1",
    "Spain__Uruguay":      "X"
  },

  knockout: {
    round32: [
      "Switzerland",
      "Mexico",
      "Senegal",
      "France",
      "United States",
      "England",
      "Belgium",
      "Germany",
      "Colombia",
      "Portugal",
      "Turkey",
      "Italy",
      "Peru",
      "Japan",
      "United States",
      "Croatia"
    ],
    round16: [
      "Mexico",
      "France",
      "England",
      "Germany",
      "Portugal",
      "Italy",
      "Japan",
      "Croatia"
    ],
    quarterfinals: [
      "France",
      "Germany",
      "Italy",
      "Croatia"
    ],
    semifinals: [
      "France",
      "Italy"
    ],

    champion: "France",
    runnerUp: "Italy",
    finalists: ["France", "Italy"],

    thirdPlaceWinner: "Germany",
    final: "France",
    thirdPlace: "Germany",

    matches: {
      round32: [
        { match: 73, team1: "A2 Switzerland", team2: "B3 Morocco", winner: "Switzerland" },
        { match: 74, team1: "A1 Mexico", team2: "C3 Canada", winner: "Mexico" },
        { match: 75, team1: "B2 Uruguay", team2: "E3 Senegal", winner: "Senegal" },
        { match: 76, team1: "E1 France", team2: "B4 Scotland", winner: "France" },
        { match: 77, team1: "C2 Denmark", team2: "F2 United States", winner: "United States" },
        { match: 78, team1: "C1 Argentina", team2: "F3 Serbia", winner: "England" },
        { match: 79, team1: "D2 Croatia", team2: "G2 Belgium", winner: "Belgium" },
        { match: 80, team1: "D1 Brazil", team2: "G3 Poland", winner: "Germany" },
        { match: 81, team1: "E2 Netherlands", team2: "H2 Colombia", winner: "Colombia" },
        { match: 82, team1: "H1 Portugal", team2: "E3 Senegal", winner: "Portugal" },
        { match: 83, team1: "F2 United States", team2: "I2 Turkey", winner: "Turkey" },
        { match: 84, team1: "I1 Italy", team2: "F3 Serbia", winner: "Italy" },
        { match: 85, team1: "G2 Belgium", team2: "J2 Peru", winner: "Peru" },
        { match: 86, team1: "J1 Japan", team2: "G3 Poland", winner: "Japan" },
        { match: 87, team1: "K2 Mexico", team2: "L2 United States", winner: "United States" },
        { match: 88, team1: "K1 Belgium", team2: "L1 Croatia", winner: "Croatia" }
      ],
      round16: [
        { match: 89, team1: "Switzerland", team2: "Mexico", winner: "Mexico" },
        { match: 90, team1: "Senegal", team2: "France", winner: "France" },
        { match: 91, team1: "United States", team2: "England", winner: "England" },
        { match: 92, team1: "Belgium", team2: "Germany", winner: "Germany" },
        { match: 93, team1: "Colombia", team2: "Portugal", winner: "Portugal" },
        { match: 94, team1: "Turkey", team2: "Italy", winner: "Italy" },
        { match: 95, team1: "Peru", team2: "Japan", winner: "Japan" },
        { match: 96, team1: "United States", team2: "Croatia", winner: "Croatia" }
      ],
      quarterfinals: [
        { match: 97, team1: "Mexico", team2: "France", winner: "France" },
        { match: 98, team1: "England", team2: "Germany", winner: "Germany" },
        { match: 99, team1: "Portugal", team2: "Italy", winner: "Italy" },
        { match: 100, team1: "Japan", team2: "Croatia", winner: "Croatia" }
      ],
      semifinals: [
        { match: 101, team1: "France", team2: "Germany", winner: "France" },
        { match: 102, team1: "Italy", team2: "Croatia", winner: "Italy" }
      ],
      thirdPlace: [
        { match: 103, team1: "Germany", team2: "Croatia", winner: "Germany" }
      ],
      final: [
        { match: 104, team1: "France", team2: "Italy", winner: "France" }
      ]
    }
  },

  semifinalists: ["France", "Germany", "Italy", "Croatia"],
  finalists: ["France", "Italy"],

  champion: "France",
  runnerUp: "Italy",
  thirdPlaceWinner: "Germany",

  // 5 categorías divertidas — todas son una sola elección por categoría.
  // "topScorer", "topAssister" y "goldenGlove" esperan el NOMBRE de un jugador
  //   (de los listados en AWARD_PLAYERS dentro de app.js).
  // "topScoringTeam" y "mostConcededTeam" esperan el NOMBRE de una selección
  //   (tal y como aparece en los grupos).
  awards: {
    topScorer: "Kylian Mbappé",
    topAssister: "Bruno Fernandes",
    goldenGlove: "Gianluigi Donnarumma",
    topScoringTeam: "France",
    mostConcededTeam: "Saudi Arabia"
  }
};
