const RESULTS = {
  groups: {
    A: ["México", "Sudáfrica", "Corea del Sur", "República Checa"],
    B: ["Suiza", "Canadá", "Bosnia y Herzegovina", "Catar"],
    C: ["Brasil", "Marruecos", "Escocia", "Haití"],
    D: ["Estados Unidos", "Australia", "Paraguay", "Turquía"],
    E: ["Alemania", "Costa de Marfil", "Ecuador", "Curazao"],
    F: ["Países Bajos", "Japón", "Suecia", "Túnez"],
    G: ["Bélgica", "Egipto", "Irán", "Nueva Zelanda"],
    H: ["España", "Cabo Verde", "Uruguay", "Arabia Saudí"],
    I: ["Francia", "Noruega", "Senegal", "Irak"],
    J: ["Argentina", "Austria", "Argelia", "Jordania"],
    K: ["Colombia", "Portugal", "RD del Congo", "Uzbekistán"],
    L: ["Inglaterra", "Croacia", "Ghana", "Panamá"]
  },
  
  quiniela1x2: {
    "Corea del Sur__México": "1",
    "Escocia__Marruecos":    "2",
    "España__Uruguay":       "2"
  },
  
  "thirdPlace": [],
  "groupMatches": {
    "A": {
      "México__Sudáfrica": { "home": 2, "away": 0 },
      "Corea del Sur__República Checa": { "home": 2, "away": 1 },
      "República Checa__Sudáfrica": { "home": 1, "away": 1 },
      "México__Corea del Sur": { "home": 1, "away": 0 }
    },
    "B": {
      "Canadá__Bosnia y Herzegovina": { "home": 1, "away": 1 },
      "Catar__Suiza": { "home": 1, "away": 1 },
      "Suiza__Bosnia y Herzegovina": { "home": 4, "away": 1 },
      "Canadá__Catar": { "home": 6, "away": 0 }
    },
    "C": {
      "Brasil__Marruecos": { "home": 1, "away": 1 },
      "Haití__Escocia": { "home": 0, "away": 1 },
      "Escocia__Marruecos": { "home": 0, "away": 1 },
      "Brasil__Haití": { "home": 3, "away": 0 }
    },
    "D": {
      "Estados Unidos__Paraguay": { "home": 4, "away": 1 },
      "Australia__Turquía": { "home": 2, "away": 0 },
      "Estados Unidos__Australia": { "home": 2, "away": 0 },
      "Turquía__Paraguay": { "home": 0, "away": 1 }
    },
    "E": {
      "Alemania__Curazao": { "home": 7, "away": 1 },
      "Costa de Marfil__Ecuador": { "home": 1, "away": 0 },
      "Alemania__Costa de Marfil": { "home": 2, "away": 1 },
      "Ecuador__Curazao": { "home": 0, "away": 0 }
    },
    "F": {
      "Países Bajos__Japón": { "home": 2, "away": 2 },
      "Suecia__Túnez": { "home": 5, "away": 1 },
      "Países Bajos__Suecia": { "home": 5, "away": 1 },
      "Túnez__Japón": { "home": 0, "away": 4 }
    },
    "G": {
      "Bélgica__Egipto": { "home": 1, "away": 1 },
      "Irán__Nueva Zelanda": { "home": 2, "away": 2 }
    },
    "H": {
      "España__Cabo Verde": { "home": 0, "away": 0 },
      "Arabia Saudí__Uruguay": { "home": 1, "away": 1 }
    },
    "I": {
      "Francia__Senegal": { "home": 3, "away": 1 },
      "Irak__Noruega": { "home": 1, "away": 4 }
    },
    "J": {
      "Argentina__Argelia": { "home": 3, "away": 0 },
      "Austria__Jordania": { "home": 3, "away": 1 }
    },
    "K": {
      "Portugal__RD del Congo": { "home": 1, "away": 1 },
      "Uzbekistán__Colombia": { "home": 1, "away": 3 }
    },
    "L": {
      "Inglaterra__Croacia": { "home": 4, "away": 2 },
      "Ghana__Panamá": { "home": 1, "away": 0 }
    }
  },
  "knockout": {
     round32: [
      // 12 primeros clasificados
      "México", "Suiza", "Brasil", "Estados Unidos",
      "Alemania", "Países Bajos", "Bélgica", "España",
      "Francia", "Argentina", "Colombia", "Inglaterra",
      // 12 segundos clasificados
      "Sudáfrica", "Canadá", "Marruecos", "Australia",
      "Costa de Marfil", "Japón", "Egipto", "Cabo Verde",
      "Noruega", "Austria", "Portugal", "Croacia",
      // 8 mejores terceros
      "Bosnia y Herzegovina", "Paraguay", "Ecuador", "Suecia",
      "Senegal", "Argelia", "RD del Congo", "Ghana"
    ],
    "round16": [],
    "quarterfinals": [],
    "semifinals": [],
    "champion": "",
    "runnerUp": "",
    "finalists": [],
    "thirdPlaceWinner": "",
    "final": "",
    "thirdPlace": "",
    "matches": {
      round32: [
        // Partido 73: 2ºA vs 2ºB
        {match: 73, team1: "Sudáfrica",      team2: "Canadá",              winner: "Canadá"},
        // Partido 74: 1ºE vs 3ºD
        {match: 74, team1: "Alemania",        team2: "Paraguay",            winner: ""},
        // Partido 75: 1ºF vs 2ºC
        {match: 75, team1: "Países Bajos",    team2: "Marruecos",           winner: ""},
        // Partido 76: 1ºC vs 2ºF
        {match: 76, team1: "Brasil",          team2: "Japón",               winner: ""},
        // Partido 77: 1ºI vs 3ºF
        {match: 77, team1: "Francia",         team2: "Suecia",              winner: ""},
        // Partido 78: 2ºE vs 2ºI
        {match: 78, team1: "Costa de Marfil", team2: "Noruega",             winner: ""},
        // Partido 79: 1ºA vs 3ºE
        {match: 79, team1: "México",          team2: "Ecuador",             winner: ""},
        // Partido 80: 1ºL vs 3ºK
        {match: 80, team1: "Inglaterra",      team2: "RD del Congo",        winner: ""},
        // Partido 81: 1ºD vs 3ºB
        {match: 81, team1: "Estados Unidos",  team2: "Bosnia y Herzegovina",winner: ""},
        // Partido 82: 1ºG vs 3ºI
        {match: 82, team1: "Bélgica",         team2: "Senegal",             winner: ""},
        // Partido 83: 2ºK vs 2ºL
        {match: 83, team1: "Portugal",        team2: "Croacia",             winner: ""},
        // Partido 84: 1ºH vs 2ºJ
        {match: 84, team1: "España",          team2: "Austria",             winner: ""},
        // Partido 85: 1ºB vs 3ºJ
        {match: 85, team1: "Suiza",           team2: "Argelia",             winner: ""},
        // Partido 86: 1ºJ vs 2ºH
        {match: 86, team1: "Argentina",       team2: "Cabo Verde",          winner: ""},
        // Partido 87: 1ºK vs 3ºL
        {match: 87, team1: "Colombia",        team2: "Ghana",               winner: ""},
        // Partido 88: 2ºD vs 2ºG
        {match: 88, team1: "Australia",       team2: "Egipto",              winner: ""}
      ],
      "round16": [],
      "quarterfinals": [],
      "semifinals": [],
      "thirdPlace": [],
      "final": []
    }
  },
  "semifinalists": [],
  "finalists": [],
  "champion": "",
  "runnerUp": "",
  "thirdPlaceWinner": "",
  "awards": {
    "goldenBoot": [],
    "goldenBall": []
  }
};
