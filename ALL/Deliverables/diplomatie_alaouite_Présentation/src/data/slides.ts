import { Slide, PART_LABELS } from "@/lib/index";

export const slidesContent: Slide[] = [
  {
    id: 1,
    title: "Les Fondations de la Diplomatie Alaouite",
    subtitle: "Histoire des pratiques diplomatiques (1666-1912)",
    part: "I",
    partLabel: PART_LABELS.I,
    category: "Introduction",
    content: {
      narrative: "Comment le droit international est-il passé d'un outil de projection souveraine à un ultime rempart contre l'annexion ? Cette présentation explore l'évolution de la diplomatie chérifienne sur trois siècles.",
      bullets: [
        "Émergence de l'État alaouite et affirmation de la souveraineté",
        "Transition des relations de force aux relations contractuelles",
        "Le paradoxe de la modernisation sous contrainte coloniale"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185476347992_1"],
    presenterNotes: "Poser la problématique centrale : le basculement de la puissance à la survie. Souligner l'importance de la temporalité 1666-1912."
  },
  {
    id: 2,
    title: "Plan de la présentation",
    subtitle: "Structure Bipartite",
    part: "I",
    partLabel: PART_LABELS.I,
    content: {
      bullets: [
        "Partie I : Le Dispositif Diplomatique Chérifien — Architecture et Projection (1666-1844)",
        "Partie II : La Diplomatie de Résistance — Encerclement Colonial et Protectorat (1844-1912)",
        "Conclusion & Annexes : Analyse comparative et bibliographie"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185260891767_2"],
    presenterNotes: "Expliquer la coupure de 1844 (Bataille d'Isly) comme point de bascule entre l'offensive et la défensive."
  },
  {
    id: 3,
    title: "L'Accroche Narrative",
    subtitle: "Le Paradoxe de la Puissance",
    part: "I",
    partLabel: PART_LABELS.I,
    content: {
      narrative: "Le Maroc fut la première nation à reconnaître l'indépendance des États-Unis en 1777, signant en 1786 le traité d'amitié le plus long de l'histoire américaine. Pourtant, un siècle plus tard, l'Empire chérifien est exsangue.",
      citations: [
        {
          text: "Le Maroc post-1860 ressemble à un oiseau sans ailes, exposé à tous les vents.",
          author: "Ahmad ibn Khalid al-Nasiri",
          context: "Al-Istiqsa"
        }
      ],
      concepts: [
        {
          term: "Basculement",
          definition: "Passage d'une diplomatie de souveraineté impériale à une diplomatie de survie juridique."
        }
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185451427069_3"],
    presenterNotes: "Insister sur le traité de 1786 comme preuve de l'insertion précoce du Maroc dans le droit international moderne."
  },
  {
    id: 4,
    title: "Fondements Théologico-Politiques",
    subtitle: "Souveraineté et Allégeance",
    part: "I",
    partLabel: PART_LABELS.I,
    content: {
      concepts: [
        {
          term: "Bay'a",
          definition: "Allégeance contractuelle liant le Sultan au peuple, définissant une souveraineté personnelle plutôt que purement territoriale."
        },
        {
          term: "Dar al-Islam vs Dar al-Harb",
          definition: "Division classique du monde influençant la gestion des frontières et des traités avec les puissances non-musulmanes."
        }
      ],
      references: [
        {
          label: "Avis CIJ 1975",
          source: "Reconnaissance de liens juridiques d'allégeance entre le Sultan et les tribus du Sahara."
        }
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185414825902_4"],
    presenterNotes: "Expliquer que la souveraineté marocaine n'est pas westphalienne à l'origine, mais basée sur le lien spirituel et politique de la Bay'a."
  },
  {
    id: 5,
    title: "La Genèse Alaouite",
    subtitle: "De Sijilmassa à la Fondation de l'État",
    part: "II",
    partLabel: PART_LABELS.II,
    category: "Architecture",
    content: {
      bullets: [
        "Moulay Chérif : L'origine au Tafilalet et la légitimité chérifienne",
        "Moulay Rachid : Unification du territoire et prise de Fès (1666)",
        "Contrôle des axes transsahariens comme levier de puissance économique"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185453480856_5"],
    presenterNotes: "Souligner que la diplomatie alaouite commence par le contrôle du commerce caravanier, base de la reconnaissance par les puissances étrangères."
  },
  {
    id: 6,
    title: "Moulay Ismaïl (1672-1727)",
    subtitle: "Le Rejet de la Suzeraineté Ottomane",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      narrative: "Moulay Ismaïl affirme une souveraineté absolue, refusant de se soumettre au Califat ottoman en invoquant une généalogie prophétique supérieure.",
      bullets: [
        "Argument du Nasab (Généalogie) contre les Turcs d'Alger",
        "Fixation de la frontière sur l'Oued Tafna (1678)",
        "Correspondances fermes avec la Sublime Porte affirmant l'indépendance marocaine"
      ]
    },
    images: ["CROPPED_IMAGE_3_1770559185139099665_6"],
    presenterNotes: "Le Maroc est le seul pays du Maghreb à avoir résisté à l'expansion ottomane, forgeant une identité diplomatique singulière."
  },
  {
    id: 7,
    title: "La Diplomatie du \"Pair à Pair\"",
    subtitle: "L'ère de Moulay Ismaïl et l'Europe",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      bullets: [
        "Récupération des présides : Tanger (1684) et Larache (1689)",
        "Ambassade de Mohammed Temim à Paris (1682) pour une alliance contre l'Espagne",
        "Traité avec l'Angleterre (1721) : Reconnaissance de la juridiction du Sultan"
      ],
      references: [
        {
          label: "Traité de 1721",
          source: "Accord commercial et juridique avec la Grande-Bretagne."
        }
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185271684233_7"],
    presenterNotes: "Moulay Ismaïl traitait avec Louis XIV comme son égal, envoyant des ambassadeurs de haut rang pour négocier des alliances stratégiques."
  },
  {
    id: 8,
    title: "La Diplomatie Corsaire",
    subtitle: "Le Jihad Maritime comme Levier",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      concepts: [
        {
          term: "Diplomatie de contrainte",
          definition: "Utilisation de la course pour forcer les nations européennes à négocier des traités de paix et de commerce."
        }
      ],
      bullets: [
        "Nationalisation de la course par la République de Salé",
        "Le sort des captifs chrétiens comme monnaie d'échange diplomatique",
        "Approvisionnement militaire en échange de trêves maritimes"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185361179051_8"],
    presenterNotes: "La course n'était pas de la piraterie désordonnée, mais un outil d'État régulé pour maintenir l'équilibre des forces en Méditerranée."
  },
  {
    id: 9,
    title: "La Parenthèse de l'Anomie (1727-1757)",
    subtitle: "Crise Interne et Paralysie Diplomatique",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      narrative: "Après la mort de Moulay Ismaïl, le Maroc traverse une période de troubles dynastiques menée par les Abid al-Bukhari.",
      bullets: [
        "Fragmentation de l'autorité centrale",
        "Traités locaux informels signés par des chefs de tribus ou de ports",
        "Affaiblissement de la projection extérieure de l'Empire"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185059306464_9"],
    presenterNotes: "Montrer comment l'instabilité intérieure réduit immédiatement la capacité de l'État à s'imposer sur la scène internationale."
  },
  {
    id: 10,
    title: "Sidi Mohammed ben Abdallah (1757-1790)",
    subtitle: "L'Architecte de la Diplomatie Moderne",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      narrative: "Sultan visionnaire, il opère une rupture épistémologique : passer de la confrontation maritime à la coopération contractuelle.",
      bullets: [
        "Systématisation des traités : Danemark, Suède, France (1767)",
        "Ouverture de Mogador (Essaouira) en 1765",
        "Reconnaissance des USA (1777) : Un acte de souveraineté pionnier"
      ]
    },
    images: ["CROPPED_IMAGE_7_1770559185105797271_10"],
    presenterNotes: "Sidi Mohammed ben Abdallah est le véritable fondateur de la diplomatie marocaine moderne, misant sur le commerce légal plutôt que la course."
  },
  {
    id: 11,
    title: "Essaouira (Mogador) - Le Laboratoire",
    subtitle: "Un Port Franc Diplomatique",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      bullets: [
        "Conception par l'architecte Théodore Cornut sur ordre du Sultan",
        "Concentration forcée des douanes pour contrôler le commerce extérieur",
        "Installation des consulats étrangers et de la communauté juive commerçante"
      ],
      concepts: [
        {
          term: "Tujjar as-Sultan",
          definition: "Les marchands du Sultan, agents économiques et diplomatiques privilégiés."
        }
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185348451722_11"],
    presenterNotes: "Essaouira devient le point de contact unique entre le Makhzen et l'Europe, facilitant la surveillance des agents étrangers."
  },
  {
    id: 12,
    title: "L'Appareil Diplomatique",
    subtitle: "Gestion de la Distance et de l'Information",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      bullets: [
        "Le Naib à Tanger : Représentant permanent du Sultan face aux légations",
        "Utilisation des Vizirs et Lettrés pour les ambassades extraordinaires",
        "Lenteur structurelle des communications et primauté de la parole royale"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559181593306024_12"],
    presenterNotes: "Tanger devient la capitale diplomatique de fait, tandis que Fès et Marrakech restent les capitales politiques et spirituelles."
  },
  {
    id: 13,
    title: "Les Acteurs Intermédiaires",
    subtitle: "Intermédiation et Renseignement",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      bullets: [
        "Rôle crucial des familles juives (Guedalla, Corcos, Pallache)",
        "Intelligence économique et connaissance des marchés européens",
        "Interprétariat et rédaction des correspondances en langues étrangères"
      ]
    },
    images: ["CROPPED_IMAGE_3_1770559185450630327_13"],
    presenterNotes: "Ces acteurs transfrontaliers permettaient au Makhzen de naviguer dans les subtilités du droit et de l'économie européenne."
  },
  {
    id: 14,
    title: "Moulay Slimane (1792-1822)",
    subtitle: "La Politique de Précaution (Ihtiyat)",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      narrative: "Face aux guerres napoléoniennes, Moulay Slimane choisit le repli pour préserver l'intégrité du territoire.",
      bullets: [
        "Arrêt officiel de la course (1817) sous pression européenne",
        "Désarmement naval et fermeture relative des ports",
        "Influence des idées wahhabites limitant les contacts avec les 'Infidèles'"
      ]
    },
    images: ["CROPPED_IMAGE_1_1770559185501608056_14"],
    presenterNotes: "L'Ihtiyat est une stratégie de survie qui, bien que nécessaire, a privé le Maroc de la révolution technologique européenne."
  },
  {
    id: 15,
    title: "Bilan Partie I",
    subtitle: "Une Souveraineté Affirmée mais Fragile",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      table: {
        headers: ["Période", "Sultan dominant", "Mode d'action", "Résultat"],
        rows: [
          ["1672-1727", "Moulay Ismaïl", "Force & Prestige", "Refus des Ottomans"],
          ["1757-1790", "Sidi Mohammed", "Commerce & Traités", "Reconnaissance USA"],
          ["1792-1822", "Moulay Slimane", "Isolement (Ihtiyat)", "Neutralité préservée"]
        ]
      }
    },
    images: ["CROPPED_IMAGE_3_1770559185369218672_15"],
    presenterNotes: "Résumer la réussite de la dynastie à maintenir l'indépendance totale face aux deux empires (Ottoman et Européen) jusqu'en 1830."
  },
  {
    id: 16,
    title: "Transition",
    subtitle: "Le Monde Change, le Maroc Stagne",
    part: "II",
    partLabel: PART_LABELS.II,
    content: {
      narrative: "La Révolution industrielle en Europe et la conquête de l'Algérie (1830) brisent l'équilibre séculaire. Le Maroc passe d'un acteur régional à une cible coloniale.",
      bullets: [
        "Supériorité technologique et militaire de l'Europe",
        "Fin de l'isolement géographique par la présence française à l'Est",
        "L'impréparation de l'armée chérifienne aux guerres modernes"
      ]
    },
    images: ["CROPPED_IMAGE_4_1770559184349452947_16"],
    presenterNotes: "Préparer l'auditoire au choc brutal de 1844 qui va tout remettre en question."
  },
  {
    id: 17,
    title: "Le Choc d'Isly (1844)",
    subtitle: "La Fin du Mythe de l'Invincibilité",
    part: "III",
    partLabel: PART_LABELS.III,
    category: "Résistance",
    content: {
      bullets: [
        "Défaite face à l'armée française (Bugeaud) en soutien à l'Émir Abd el-Kader",
        "Traité de Lalla Maghnia (1845) : Imposition d'une frontière linéaire floue",
        "Perte de la profondeur stratégique à l'Est"
      ],
      references: [
        {
          label: "Traité de Lalla Maghnia",
          source: "Texte imposé par la France définissant arbitrairement les limites territoriales."
        }
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559181574042242_17"],
    presenterNotes: "Isly est le traumatisme originel de la diplomatie de résistance. C'est la première défaite majeure face à une armée européenne."
  },
  {
    id: 18,
    title: "Le Tournant de 1856",
    subtitle: "L'Empire Informel et le Libre-échange",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      concepts: [
        {
          term: "Traité Drummond Hay",
          definition: "Accord anglo-marocain imposant le libre-échange et limitant les droits de douane à 10%."
        }
      ],
      bullets: [
        "Fin des monopoles royaux (Kuntradat)",
        "Invasion des produits manufacturés britanniques",
        "Analyse de Ben-Srhir : Une 'OPA hostile' économique par le droit"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559184754636607_18"],
    presenterNotes: "Le Maroc perd sa souveraineté économique avant de perdre sa souveraineté politique. Le Sultan ne peut plus financer ses réformes."
  },
  {
    id: 19,
    title: "La Guerre de Tétouan (1860) & La Dette",
    subtitle: "Le Cycle Infernal de l'Endettement",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      bullets: [
        "Défaite face à l'Espagne (O'Donnell) et occupation de Tétouan",
        "Indemnité de guerre colossale : 20 millions de douros",
        "Mise sous tutelle des revenus douaniers pour rembourser l'Espagne"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185476347992_19"],
    presenterNotes: "La dette devient l'outil principal de la domination étrangère, forçant le Maroc à emprunter en Europe pour payer l'Europe."
  },
  {
    id: 20,
    title: "La Convention Béclard (1863)",
    subtitle: "L'Institutionnalisation de la Protection",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      narrative: "La protection consulaire devient une 'gangrène' soustrayant des milliers de Marocains à la justice et à l'impôt du Sultan.",
      bullets: [
        "Création d'un 'État dans l'État' au profit des protégés des consulats",
        "Érosion de l'autorité fiscale et judiciaire du Makhzen",
        "Abus systématiques par les puissances européennes"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185260891767_20"],
    presenterNotes: "Expliquer comment la protection consulaire a été détournée pour créer une clientèle locale déloyale au Sultan."
  },
  {
    id: 21,
    title: "Conférence de Madrid (1880)",
    subtitle: "L'Internationalisation comme Ultime Recours",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      bullets: [
        "Tentative de Hassan Ier de réguler les abus de la protection",
        "Échec diplomatique : Les puissances maintiennent et légalisent leurs privilèges",
        "Le Maroc devient un 'problème international' géré collectivement"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185451427069_21"],
    presenterNotes: "Madrid est une victoire pour les impérialismes car elle codifie l'ingérence dans les affaires intérieures marocaines."
  },
  {
    id: 22,
    title: "La Stratégie du Tadmin (Garantie)",
    subtitle: "Neutralisation par la Rivalité",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      concepts: [
        {
          term: "Diplomatie pendulaire",
          definition: "Jouer les puissances européennes les unes contre les autres pour éviter qu'une seule ne domine."
        }
      ],
      bullets: [
        "Utilisation de l'Allemagne contre la France",
        "Recours à l'Angleterre pour maintenir le statu quo",
        "Recherche de garanties internationales collectives"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185414825902_22"],
    presenterNotes: "Le Tadmin est une stratégie de survie intelligente mais qui finit par échouer quand les puissances s'entendent entre elles."
  },
  {
    id: 23,
    title: "Moulay Hassan Ier (1873-1894)",
    subtitle: "Le Sultan en Mouvement",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      narrative: "Hassan Ier passe son règne à cheval, parcourant l'Empire (Harka) pour unifier le front intérieur face à la menace extérieure.",
      bullets: [
        "Modernisation de l'armée (création des Askars)",
        "Refus des réformes structurelles imposées par les consuls",
        "Maintien fragile de la souveraineté territoriale par la présence physique"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185453480856_23"],
    presenterNotes: "Hassan Ier est la figure du résistant qui comprend que l'unité intérieure est la seule défense contre l'ingérence."
  },
  {
    id: 24,
    title: "Le Verrouillage (1900-1904)",
    subtitle: "La Fin de la Stratégie Pendulaire",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      bullets: [
        "Entente Cordiale (1904) : La France laisse l'Égypte à l'Angleterre contre le Maroc",
        "Accords secrets franco-espagnols pour le partage des zones d'influence",
        "Isolement diplomatique total du Makhzen"
      ]
    },
    images: ["CROPPED_IMAGE_3_1770559185139099665_24"],
    presenterNotes: "C'est le moment où les 'loups' s'entendent. Le Maroc n'a plus personne vers qui se tourner, sauf peut-être l'Allemagne."
  },
  {
    id: 25,
    title: "Le Coup de Tanger (1905)",
    subtitle: "Guillaume II et l'Internationalisation",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      narrative: "L'Empereur d'Allemagne débarque à Tanger pour affirmer qu'il traite avec le Sultan comme souverain indépendant.",
      bullets: [
        "Déclenchement de la première crise marocaine",
        "Appel du Sultan à une conférence internationale",
        "L'Allemagne utilise le Maroc comme levier contre la France en Europe"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185271684233_25"],
    presenterNotes: "Le Sultan tente une dernière fois de sauver l'indépendance par le droit international multilatéral."
  },
  {
    id: 26,
    title: "Conférence d'Algésiras (1906)",
    subtitle: "Une Souveraineté de Façade",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      bullets: [
        "Victoire formelle : L'indépendance et l'intégrité du Maroc sont réaffirmées",
        "Défaite réelle : Création de la Banque d'État et de la police sous tutelle européenne",
        "Internationalisation de l'administration marocaine"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185361179051_26"],
    presenterNotes: "Algésiras est l'acte de décès de l'indépendance réelle. Le Sultan règne mais les banquiers étrangers gouvernent."
  },
  {
    id: 27,
    title: "L'Échec des Réformes Internes",
    subtitle: "Le Tertib et la Crise Fiscale",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      concepts: [
        {
          term: "Tertib",
          definition: "Impôt universel basé sur la production agricole, censé remplacer les taxes traditionnelles."
        }
      ],
      bullets: [
        "Refus des tribus et des protégés de payer le nouvel impôt",
        "Effondrement des recettes de l'État",
        "Emprunts massifs de 1904 et 1910 aggravant la dépendance"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185059306464_27"],
    presenterNotes: "Le Tertib, bien qu'égalitaire en théorie, a été saboté par les puissances étrangères et les notables locaux."
  },
  {
    id: 28,
    title: "La Crise Finale (1907-1911)",
    subtitle: "De Casablanca à Agadir",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      bullets: [
        "Occupation de Casablanca et Oujda (1907) suite à des troubles",
        "Coup d'Agadir (1911) : Tension maximale entre la France et l'Allemagne",
        "Troc final : Le Cameroun à l'Allemagne contre le Maroc à la France"
      ]
    },
    images: ["CROPPED_IMAGE_7_1770559185105797271_28"],
    presenterNotes: "Le Maroc n'est plus qu'une monnaie d'échange dans le grand jeu colonial européen."
  },
  {
    id: 29,
    title: "Le Traité de Fès (30 mars 1912)",
    subtitle: "L'Acte de Protectorat",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      narrative: "Signé par Moulay Hafid et Eugène Regnault sous la pression militaire française encerclant le palais.",
      bullets: [
        "Délégation des pouvoirs régaliens (Défense, Diplomatie, Finances)",
        "Maintien de la personnalité internationale du Maroc",
        "Engagement de la France à protéger le trône et la religion"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559185348451722_29"],
    presenterNotes: "Souligner que juridiquement, ce n'est pas une annexion (comme l'Algérie) mais un protectorat, ce qui aura des conséquences majeures en 1956."
  },
  {
    id: 30,
    title: "Analyse Juridique",
    subtitle: "La Souveraineté Amputée",
    part: "III",
    partLabel: PART_LABELS.III,
    content: {
      citations: [
        {
          text: "L'État marocain n'a jamais cessé d'exister en tant qu'entité souveraine, bien que l'exercice de sa souveraineté ait été délégué.",
          author: "CIJ (1952)",
          context: "Affaire des ressortissants américains au Maroc"
        }
      ],
      bullets: [
        "Distinction entre Titularité et Exercice de la souveraineté",
        "Le Sultan reste le chef de l'État, mais sous contrôle du Résident Général",
        "La diplomatie marocaine est mise en sommeil pendant 44 ans"
      ]
    },
    images: ["CROPPED_IMAGE_0_1770559181593306024_30"],
    presenterNotes: "L'avis de la CIJ de 1952 est fondamental pour comprendre que le Maroc est resté un État tout au long du protectorat."
  },
  {
    id: 31,
    title: "Tableau Comparatif",
    subtitle: "Stratégies de Résistance au Maghreb",
    part: "IV",
    partLabel: PART_LABELS.IV,
    category: "Conclusion",
    content: {
      table: {
        headers: ["Critère", "Modèle Ottoman (Tunisie/Libye)", "Modèle Alaouite (Maroc)"],
        rows: [
          ["Légitimité", "Déléguée par le Calife", "Chérifienne intrinsèque"],
          ["Souveraineté", "Dissociée (Spirituel/Temporel)", "Fusionnée (Bay'a)"],
          ["Diplomatie", "Stratégie du recul", "Internationalisation (Tadmin)"],
          ["Fin du processus", "Annexion ou colonisation", "Protectorat (État maintenu)"]
        ]
      }
    },
    images: ["CROPPED_IMAGE_3_1770559185450630327_31"],
    presenterNotes: "Montrer que l'originalité marocaine réside dans la fusion de l'identité nationale et territoriale."
  },
  {
    id: 32,
    title: "Frise Chronologique Synthétique",
    subtitle: "Trois Siècles de Diplomatie",
    part: "IV",
    partLabel: PART_LABELS.IV,
    content: {
      bullets: [
        "1666-1727 : Fondation et affirmation face aux Ottomans",
        "1727-1757 : Anomie et instabilité interne",
        "1757-1822 : Apogée contractuel et ouverture (Mogador)",
        "1822-1860 : Choc colonial (Isly) et traités inégaux",
        "1860-1906 : Encerclement et tentatives d'internationalisation",
        "1906-1912 : Mise sous tutelle et chute du système indépendant"
      ]
    },
    images: ["CROPPED_IMAGE_1_1770559185501608056_32"],
    presenterNotes: "Utiliser cette frise pour récapituler le basculement de la courbe de puissance."
  },
  {
    id: 33,
    title: "Synthèse Finale",
    subtitle: "Le Droit International comme Bouclier et Glaive",
    part: "IV",
    partLabel: PART_LABELS.IV,
    content: {
      narrative: "La diplomatie alaouite a brillamment utilisé le droit international pour exister, puis pour se défendre. Si elle n'a pu empêcher le protectorat, elle a sauvé l'essentiel : la personnalité juridique de l'État.",
      bullets: [
        "Le passage d'un monde de force à un monde de normes",
        "Le Lawfare (guerre par le droit) avant la lettre",
        "Héritage pour le Maroc moderne : une diplomatie de médiation et de droit"
      ]
    },
    images: ["CROPPED_IMAGE_3_1770559185369218672_33"],
    presenterNotes: "Répondre à la problématique : le droit a été un rempart ultime qui a permis la renaissance de 1956."
  },
  {
    id: 34,
    title: "Bibliographie Académique",
    subtitle: "Sources et Références",
    part: "IV",
    partLabel: PART_LABELS.IV,
    content: {
      bullets: [
        "Abitbol, M. - Histoire du Maroc (Perrin, 2009)",
        "Ben-Srhir, K. - Le Maroc et la Grande-Bretagne (L'Harmattan)",
        "Rivet, D. - Le Maroc de Lyautey à Mohammed V (Fayard)",
        "Tazi, A. - Histoire diplomatique du Maroc (Plusieurs volumes)",
        "En-Naciri - Al-Istiqsa (Source primaire fondamentale)"
      ]
    },
    images: ["CROPPED_IMAGE_4_1770559184349452947_34"],
    presenterNotes: "Encourager les étudiants à consulter les sources primaires comme les Documents Diplomatiques Français (DDF)."
  }
];