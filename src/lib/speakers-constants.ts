export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}

export type Speaker = {
  name: string;
  title: string;
  image: string;
  bio?: string;
  topics?: string[];
  availability?: string;
  socials?: {
    x?: string;
    linkedin?: string;
    other?: string;
  };
};

// 2026 Speakers
export const currentSpeakers: Speaker[] = [
  {
    name: "Jeremy Rubin",
    title: "CEO, Char Network",
    image: "/2026Speakers/Jeremy Rubin.webp",
    bio: "Jeremy Rubin is a Bitcoin protocol engineer and entrepreneur, and an MIT alumnus. While at MIT, he cofounded the HackNova and helped distribute Bitcoin to students on campus. He has been active in Bitcoin development for over a decade. He is the founder and CEO of Char Network, a Bitcoin-anchored Layer-2 consensus protocol.",
    topics: ["Decentralized sequencing: the hard cryptographic and game-theoretic questions"],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/jeremyrubin",
      linkedin: "https://www.linkedin.com/in/jeremyrubin",
    },
  },
  {
    name: "Robin Linus",
    title: "Stanford University | ZeroSync",
    image: "/2026Speakers/Robin Linus.webp",
    bio: "Creator of BitVM, PhD Student at Stanford.",
    topics: [
      "Latest developments in BitVM including garbled circuits and transaction introspection without softforks",
    ],
    availability: "Full weekend",
    socials: { x: "https://x.com/robin_linus" },
  },
  {
    name: "Hester M. Peirce",
    title: "Commissioner, U.S. Securities and Exchange Commission",
    image: "/2026Speakers/Hester M. Peirce.webp",
    bio: "Hester M. Peirce was appointed by President Donald J. Trump to the U.S. Securities and Exchange Commission and was sworn in on January 11, 2018. Prior to joining the SEC, she conducted research on the regulation of financial markets at the Mercatus Center at George Mason University. She was a Senior Counsel on the U.S. Senate Committee on Banking, Housing, and Urban Affairs. She earned her bachelor's degree in Economics from Case Western Reserve University and her JD from Yale Law School.",
    topics: ["Crypto Task Force, US SEC"],
    availability: "Only April 11th (Saturday)",
  },
  {
    name: "Mikhail Shalaginov",
    title: "Quantum Machine Build Lead, QuEra Computing",
    image: "/2026Speakers/Mikhail Shalaginov.webp",
    bio: "Dr. Mikhail Shalaginov is a quantum scientist and entrepreneur. He earned his Ph.D. in Quantum Photonics from Purdue University and conducted postdoctoral research at MIT. At QuEra Computing, he leads a team developing product-level neutral-atom quantum machines. He also conceived Qubitcoin, a quantum proof-of-work concept embedding useful quantum tasks into mining.",
    topics: [
      "Advances in quantum computers",
      "Merging quantum computers and blockchains",
      "Quantum computing readiness to threaten existing security protocols",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/MYShalaginov",
      linkedin: "https://www.linkedin.com/in/mikhail-shalaginov/",
    },
  },
  {
    name: "Misha Komarov",
    title: "Co-Founder, =nil and [[alloc] init]",
    image: "/2026Speakers/Misha Komarov.webp",
    bio: "Did Lido, did =nil;. Focused on [[alloc] init] making Bitcoin PIPEs work.",
    topics: ["Covenants and ZKPs on the Bitcoin L1"],
    availability: "Full weekend",
    socials: {
      x: "https://twitter.com/nemothenoone",
      linkedin: "https://www.linkedin.com/in/misha-komarov-7084a9139/",
    },
  },
  {
    name: "Liam Eagen",
    title: "CEO & Co-founder, { ideal }",
    image: "/2026Speakers/Liam Eagen.webp",
    bio: "Researcher working on verifying SNARKs on Bitcoin and private transaction protocols like ShieldedCSV. Currently working on a new garbled circuit protocol Argo and new BitVM bridge protocols at Ideal Group. Previously research at Alpen Labs and Blockstream.",
    topics: ["Argo: Garbled SNARK Verifiers", "Shielded CSV"],
    availability: "Full weekend",
    socials: { x: "https://x.com/liameagen" },
  },
  {
    name: "Ethan Heilman",
    title: "Cryptographer",
    image: "/2026Speakers/Ethan Heilman.webp",
    bio: "Ethan is a Bitcoin open source developer and co-author of OP_CAT (BIP-347) and P2MR (BIP-360). He is currently working on making Bitcoin safe to use even if quantum computers get powerful enough to threaten cryptography. He has a PhD in Computer Science from Boston University.",
    topics: [
      "Quantum attacks on Bitcoin and how to prevent them",
      "BIP-360 (P2MR)",
      "BIP-347 (OP_CAT)",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/Ethan_Heilman",
      linkedin: "https://www.linkedin.com/in/ethan-heilman-39896934/",
    },
  },
  {
    name: "Frank Corva",
    title: "Independent Bitcoin Journalist, New Renaissance Capital",
    image: "/2026Speakers/Frank Corva.webp",
    bio: "Frank is an independent Bitcoin journalist and podcast host who covers Bitcoin adoption around the world, particularly in Africa, Latin America and Southeast Asia. He formerly worked as the White House and political correspondent for Bitcoin Magazine.",
    topics: ["Bitcoin and Freedom Tech Doesn't Spread Itself — It Needs Advocates"],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/frankcorva",
      linkedin: "https://www.linkedin.com/in/frank-corva/",
    },
  },
  {
    name: "Antoine Poinsot",
    title: "Bitcoin Core Contributor, Chaincode Labs",
    image: "/2026Speakers/Antoine Poinsot.webp",
    bio: "Antoine has been contributing to Bitcoin Core and other Bitcoin projects for several years. His recent work has been aimed at strengthening network resilience and enhancing the security of protocol implementations. Prior to joining Chaincode Labs, he co-founded Wizardsardine, a Bitcoin security company.",
    topics: [
      "Bitcoin Core development",
      "Bitcoin Core security advisories",
      "BIP 54 / Consensus Cleanup",
      "OP_TEMPLATEHASH-OP_CSFS-OP_IK bundle",
    ],
    availability: "Full weekend",
    socials: { x: "https://x.com/darosior", linkedin: "https://www.linkedin.com/in/antoine-p" },
  },
  {
    name: "Nadav Kohen",
    title: "Cryptographer, Chaincode Labs",
    image: "/2026Speakers/Nadav Kohen.webp",
    bio: "Nadav is a cryptographer at Chaincode Labs primarily working on multi-party digital signature schemes for Bitcoin. He was previously a software engineer at Suredbits, where he worked on Discreet Log Contracts and other adaptor signature-based constructions.",
    topics: [
      "Cryptocamp: Teaching cryptography to Bitcoin OSS contributors",
      "Nested MuSig2",
      "Iceberg: Nested threshold MuSig2 for Lightning Network",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/nadav_kohen",
      linkedin: "https://www.linkedin.com/in/nadav-kohen-963468159/",
    },
  },
  {
    name: "Aaron Feickert",
    title: "Research Engineering Lead, Alpen Labs",
    image: "/2026Speakers/Aaron Feickert.webp",
    bio: "Aaron leads the research engineering team at Alpen Labs, focusing on innovative uses of cryptographic techniques to unlock bitcoin functionality. He has extensive experience in the digital asset ecosystem, with a research focus on safe protocols and secure implementations.",
    topics: [
      "Glock and Mosaic: cryptographic tools for trust-minimized programmability on bitcoin",
    ],
    availability: "Full weekend",
    socials: { linkedin: "https://www.linkedin.com/in/aaron-feickert" },
  },
  {
    name: "Alex Pruden",
    title: "CEO, Project Eleven",
    image: "/2026Speakers/Alex Pruden.webp",
    bio: "Alex Pruden is a former U.S. Army Green Beret who transitioned from military service to a career in blockchain and cryptocurrency. After earning an MBA from Stanford, he began his career at GGV Capital & Andreessen Horowitz before leading Aleo. Now he is CEO of Project Eleven, focused on future-proofing digital assets for the post-quantum future.",
    topics: [
      "State of Quantum Computing & the Quantum Threat to Bitcoin",
      "Post-quantum cryptography and its tradeoffs",
      "PQ Migration Strategies for Bitcoin",
    ],
    availability: "Only April 11th (Saturday)",
    socials: { x: "https://x.com/apruden08", linkedin: "https://www.linkedin.com/in/alex-pruden/" },
  },
  {
    name: "David Seroy",
    title: "Ecosystem Lead @ Alpen Labs",
    image: "/2026Speakers/David Seroy.webp",
    bio: "Ecosystem Lead at Alpen Labs.",
    topics: ["Bitcoin credit markets"],
    availability: "Full weekend",
    socials: { x: "https://x.com/david_seroy" },
  },
  {
    name: "Boris Revsin",
    title: "Managing Director & General Partner, Tribe Capital",
    image: "/2026Speakers/Boris Revsin.webp",
    bio: "Boris Revsin is the Managing Director and General Partner at Tribe Capital, a venture-capital firm with $2.2 billion under management. He has led investments into OpenAI, xAI, World Labs, Kraken, and Applied Intuition. Prior to joining Tribe, Boris co-founded Republic Capital.",
    topics: ["Tokens vs Equity", "Crypto and AI Capital Markets"],
    availability: "Only April 11th (Saturday)",
    socials: { x: "https://x.com/brevsin", linkedin: "https://www.linkedin.com/in/borisrevsin/" },
  },
  {
    name: "Roya Mahboob",
    title: "CEO, Digital Citizen Fund",
    image: "/2026Speakers/Roya Mahboob.webp",
    bio: "Roya Mahboob is Afghanistan's first female tech CEO. In 2013, she began using Bitcoin to pay her female staff in Afghanistan, providing them with direct access to digital income. She was named one of TIME magazine's 100 Most Influential People in 2013.",
    topics: ["Financial freedom for the unbanked, digital literacy, and empowering women"],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/RoyaMahboob",
      linkedin: "https://www.linkedin.com/in/roya-mahboob-93946536/",
    },
  },
  {
    name: "Muriel Médard",
    title: "CEO & Co-Founder, Optimum",
    image: "/2026Speakers/Muriel Médard.webp",
    bio: "Muriel Médard is co-founder and CEO of Optimum, to optimize decentralized latency and bandwidth in Web3. She holds the NEC Chair of Software Science and Engineering at MIT and is a Member of the US National Academy of Engineering and Fellow of the US National Academy of Inventors.",
    topics: [
      "The evolution of network coding in blockchain",
      "Data Propagation: the overlooked bottleneck of crypto",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/MurielMedard",
      linkedin: "https://www.linkedin.com/in/murielmedard/",
    },
  },
  {
    name: "Austin Federa",
    title: "Co-Founder, DoubleZero",
    image: "/2026Speakers/Austin Federa.webp",
    bio: "Austin Federa is the Co-Founder of DoubleZero, a dedicated high-performance network for modern distributed systems, and President of the DoubleZero Foundation. Prior to co-founding DoubleZero in 2024, Austin served as Head of Strategy at the Solana Foundation. Previously, he worked on marketing and product at Bison Trails, and was Director of Marketing at Republic and Republic Crypto.",
    topics: [
      "The Public Internet Wasn't Built for This",
      "Accelerating Blockchain By Optimizing Physical Infrastructure",
      "The Internet in Internet Capital Markets",
    ],
    availability: "Full weekend",
    socials: {
      x: "https://x.com/Austin_Federa",
      linkedin: "https://www.linkedin.com/in/austin-federa",
    },
  },
  {
    name: "Andrew Camilleri",
    title: "CTO Ark Labs & BTCPay Server Core Contributor",
    image: "/2026Speakers/Andrew Camilleri.webp",
  },
  {
    name: "Calle",
    title: "Open-source dev | Creator of Cashu",
    image: "/2026Speakers/Calle.webp",
  },
  {
    name: "Clara Shikhelman",
    title: "Head of Research, Chaincode Labs",
    image: "/2026Speakers/Clara Shikhelman.webp",
  },
  {
    name: "Neha Narula",
    title: "Director, MIT Digital Currency Initiative",
    image: "/2026Speakers/Neha Narula.webp",
  },
  {
    name: "Robert Netzke",
    title: "Software Engineer, 2140",
    image: "/2026Speakers/Robert Netzke.webp",
  },
  {
    name: "Tadge Dryja",
    title: "Lightning Network Developer",
    image: "/2026Speakers/Tadge Dryja.webp",
  },
  {
    name: "Ava Chow",
    title: "Bitcoin Core Maintainer; Localhost Researcher",
    image: "",
  },
  {
    name: "Ekrem Bal",
    title: "Co-founder & Chief Scientist, Citrea",
    image: "/2026Speakers/Ekrem BAL.webp",
  },
];

// Previous Year Speakers (HackNova 2025)
export const previousSpeakers: Speaker[] = [
  {
    name: "Adam Jonas",
    title: "CEO, Chaincode Labs",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Adam.png",
  },
  {
    name: "Anna Chekhovich",
    title: "Nonprofit Bitcoin Adoption Lead",
    image: "/2025Speakers/Anna Chekhovich.webp",
  },
  {
    name: "Antoine Poinsot",
    title: "Engineer, Chaincode Labs",
    image: "/2025Speakers/Antoine Poinsot.webp",
  },
  {
    name: "Arsh Molu",
    title: "Operations Lead, Human Rights Foundation",
    image: "/2025Speakers/Arsh Molu.webp",
  },
  {
    name: "Bradley Rettler",
    title: "Director, Bitcoin Research Institute, University of Wyoming",
    image: "/2025Speakers/Bradley Rettler.webp",
  },
  {
    name: "Brian Abely",
    title: "Investment Strategist, Fidelity Digital Asset Management",
    image: "/2025Speakers/Brian Abely.webp",
  },
  {
    name: "Cory Fields",
    title: "Bitcoin Core Developer - MIT DCI",
    image: "/2025Speakers/Cory Fields.webp",
  },
  {
    name: "Dylan LeClair",
    title: "Director of Bitcoin Strategy at Metaplanet",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Dylan.jpg",
  },
  {
    name: "Eric Semler",
    title: "Chairman, Semler Scientific",
    image: "/2025Speakers/Eric Semler.webp",
  },
  {
    name: "Ethan Heilman",
    title: "Research Fellow MIT DCI",
    image: "/2025Speakers/Ethan Heilman.webp",
  },
  {
    name: "Evan Mawarire",
    title: "Human Rights and Freedom Activist",
    image: "/2025Speakers/Evan Mawarire.webp",
  },
  {
    name: "Farida Nabourema",
    title: "Convener, Africa Bitcoin Conference",
    image: "/2025Speakers/Farida Nabourema.webp",
  },
  {
    name: "Femi Longe",
    title: "Global Bitcoin Development Lead, Human Rights Foundation",
    image: "/2025Speakers/Femi Longe.webp",
  },
  {
    name: "Frank Corva",
    title: "Political Correspondent at Bitcoin Magazine",
    image: "/2025Speakers/Frank Corva.webp",
  },
  {
    name: "Gloria Zhao",
    title: "Bitcoin Core Developer",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Gloria.jpeg",
  },
  {
    name: "Hunter Beast",
    title: "Protocol Engineer for Anduro, Project Lead at Surmount Systems",
    image: "/2025Speakers/Hunter Beast.webp",
  },
  {
    name: "Jameson Lopp",
    title: "Chief Security Officer at Casa",
    image: "/2025Speakers/Jameson Lopp.webp",
  },
  {
    name: "Janusz",
    title: "Lead Maintainer @ Bitcoin Layers",
    image: "/2025Speakers/janusz.webp",
  },
  {
    name: "Jeff Walton",
    title: "MSTR True North Founder",
    image: "/2025Speakers/Jeff Walton.webp",
  },
  {
    name: "Jeremy Rubin",
    title: "Char Network",
    image: "/2025Speakers/Jeremy Rubin.webp",
  },
  {
    name: "Jorge Jraissati",
    title: "President, Economic Inclusion Group",
    image: "/2025Speakers/Jorge Jraissati.webp",
  },
  {
    name: "Matt Odell",
    title: "Partner, Ten31, CoFounder, OpenSats",
    image: "/2025Speakers/Matt Odell.webp",
  },
  {
    name: "Mauricio Di Bartolomeo",
    title: "Co-founder & CSO at Ledn",
    image: "/2025Speakers/Mauricio Di Bartolomeo.webp",
  },
  {
    name: "Mikhail Komarov",
    title: "Co-Founder @[[alloc] init]",
    image: "/2025Speakers/Mikhail Komarov.webp",
  },
  {
    name: "Neha Narula",
    title: "Director, Digital Currency Initiative, MIT Media Lab",
    image: "/2025Speakers/Neha Narula.webp",
  },
  {
    name: "Nico Lechuga",
    title: "Founding Partner, Ego Death Capital",
    image: "/2025Speakers/Nico Lechuga.webp",
  },
  {
    name: "Paul Giordano",
    title: "VP of Digital Asset Management, MARA",
    image: "/2025Speakers/Paul Giordano.webp",
  },
  {
    name: "Phong Le",
    title: "President and CEO, Strategy",
    image: "https://www.mitbtcexpo.org/assets/img/speakers/Phong.jpeg",
  },
  {
    name: "Ren Crypto Fish",
    title: "Partner, Electric Capital",
    image: "/2025Speakers/Ren Crypto Fish.webp",
  },
  {
    name: "Robin Linus",
    title: "PhD Student at Stanford",
    image: "/2025Speakers/Robin Linus.webp",
  },
  {
    name: "Roger Dingledine",
    title: "Co-founder, The Tor Project",
    image: "/2025Speakers/Roger Dingledine.webp",
  },
  {
    name: "Roger Huang",
    title: "Author, Would Mao Hold Bitcoin",
    image: "/2025Speakers/Roger Huang.webp",
  },
  {
    name: "Satsie",
    title: "The Bitcoin Dev Project",
    image: "/2025Speakers/Satsie.webp",
  },
  {
    name: "Sjors Provoost",
    title: "Bitcoin Core Developer",
    image: "/2025Speakers/Sjors Provoost.webp",
  },
  {
    name: "Steven Roose",
    title: "CEO @ Second",
    image: "/2025Speakers/Steven Roose.webp",
  },
  {
    name: "Tadge Dryja",
    title: "Bitcoin Programmer",
    image: "/2025Speakers/Tadge Dryja.webp",
  },
  {
    name: "Timothy Massad",
    title: "Director, Digital Assets Policy Project, Harvard Kennedy School",
    image: "/2025Speakers/Timothy Massad.webp",
  },
  {
    name: "Vitor Pamplona",
    title: "Creator of Amethyst",
    image: "/2025Speakers/Vitor Pamplona.webp",
  },
  {
    name: "Weikeng Chen",
    title: "Research Partner, L2 Iterative",
    image: "/2025Speakers/Weikeng Chen.webp",
  },
  {
    name: "William Casarin",
    title: "Damus Founder & CEO",
    image: "/2025Speakers/William Casarin.webp",
  },
];

// Notable Past Speakers (Previous Years)
export const pastSpeakers: Speaker[] = [
  {
    name: "Michael Saylor",
    title: "Executive Chairman, MicroStrategy",
    image: "/previousYearSpeaker/MichaelSaylor.webp",
  },
  {
    name: "Andreas Antonopoulos",
    title: "Bitcoin Educator and Author, Mastering Bitcoin",
    image: "/previousYearSpeaker/AndreasAntonopoulos.webp",
  },
  {
    name: "Charlie Lee",
    title: "Creator of Litecoin",
    image: "/previousYearSpeaker/CharlieLee.webp",
  },
  { name: "Jameson Lopp", title: "CTO, Casa", image: "/previousYearSpeaker/JamesonLopp.webp" },
  {
    name: "Peter McCormack",
    title: "Podcast Host",
    image: "/previousYearSpeaker/PeterMcCormack21.webp",
  },
  {
    name: "Elizabeth Stark",
    title: "CEO, Lightning Labs",
    image: "/previousYearSpeaker/ElizabethStark.webp",
  },
  {
    name: "Jimmy Song",
    title: "Author, Programming Bitcoin",
    image: "/previousYearSpeaker/JimmySong.webp",
  },
  {
    name: "Dylan LeClair",
    title: "Bitcoin Analyst and Researcher",
    image: "/previousYearSpeaker/DylanLeClair.webp",
  },
  {
    name: "Jason Lowery",
    title: "US Space Force; Author, Softwar",
    image: "/previousYearSpeaker/JasonLowery.webp",
  },
  { name: "ODELL", title: "Host, Citadel Dispatch", image: "/previousYearSpeaker/ODELL.webp" },
  {
    name: "Peter Todd",
    title: "Bitcoin Core Developer",
    image: "/previousYearSpeaker/PeterTodd19.webp",
  },
  {
    name: "Gavin Andresen",
    title: "Former Chief Scientist, Bitcoin Foundation",
    image: "/previousYearSpeaker/GavinAndresen.webp",
  },
  {
    name: "Gary Gensler",
    title: "Former Chair, SEC; Professor, MIT Sloan",
    image: "/previousYearSpeaker/GaryGensler19.webp",
  },
  {
    name: "Arvind Narayanan",
    title: "Professor of Computer Science, Princeton University",
    image: "/previousYearSpeaker/ArvindNarayanan.webp",
  },
  {
    name: "Neha Narula",
    title: "Director, MIT Digital Currency Initiative",
    image: "/previousYearSpeaker/NehaNarula.webp",
  },
  {
    name: "Matt Corallo",
    title: "Bitcoin Core Developer; Engineer, Spiral",
    image: "/previousYearSpeaker/MattCorallo.webp",
  },
  {
    name: "Evan Mawarire",
    title: "Pastor and Pro-Democracy Activist",
    image: "/previousYearSpeaker/EvanMawarire.webp",
  },
  {
    name: "Farida Nabourema",
    title: "Executive Director, Togolese Civil League",
    image: "/previousYearSpeaker/FaridaNabourema.webp",
  },
  { name: "Robin Linus", title: "Creator of BitVM", image: "/previousYearSpeaker/RobinLinus.webp" },
  {
    name: "Pieter Wuille",
    title: "Bitcoin Core Developer",
    image: "/previousYearSpeaker/PieterWuille.webp",
  },
  {
    name: "Jeremy Rubin",
    title: "CEO, Judica; Bitcoin Core Contributor",
    image: "/previousYearSpeaker/JeremyRubin26.webp",
  },
  {
    name: "John Newbery",
    title: "Bitcoin Core Contributor; Co-founder, Brink",
    image: "/previousYearSpeaker/JohnNewbery.webp",
  },
  {
    name: "Gloria Zhao",
    title: "Bitcoin Core Developer; Engineer, Chaincode Labs",
    image: "/previousYearSpeaker/GloriaZhao.webp",
  },
  {
    name: "Sjors Provoost",
    title: "Bitcoin Core Developer; Author",
    image: "/previousYearSpeaker/SjorsProvoost.webp",
  },
  {
    name: "Tadge Dryja",
    title: "Co-creator of the Lightning Network; Researcher, MIT DCI",
    image: "/previousYearSpeaker/TadgeDryja.webp",
  },
  {
    name: "Antoine Poinsot",
    title: "Co-founder, Chaincode Labs",
    image: "/previousYearSpeaker/AntoinePoinsot.webp",
  },
  {
    name: "Christian Catalini",
    title: "Co-creator of Diem; Research Scientist, MIT Sloan",
    image: "/previousYearSpeaker/ChristianCatalini.webp",
  },
  {
    name: "Joseph Poon",
    title: "Co-creator of the Lightning Network",
    image: "/previousYearSpeaker/JosephPoon.webp",
  },
  {
    name: "Elaine Shi",
    title: "Professor of Computer Science, Carnegie Mellon University",
    image: "/previousYearSpeaker/ElaineShi19.webp",
  },
  {
    name: "Timothy Massad",
    title: "Former Chair, CFTC; Senior Fellow, Harvard Kennedy School",
    image: "/previousYearSpeaker/TimothyMassad.webp",
  },
  {
    name: "Andrew Poelstra",
    title: "Director of Research, Blockstream",
    image: "/previousYearSpeaker/AndrewPoelstra.webp",
  },
  {
    name: "Jeff Walton",
    title: "Chief Risk Officer and CTO, True North",
    image: "/previousYearSpeaker/JeffWalton.webp",
  },
];

export function getSpeakerBySlug(slug: string): Speaker | undefined {
  return currentSpeakers.find((s) => generateSlug(s.name) === slug);
}

export function getAllSpeakerSlugs(): string[] {
  return currentSpeakers.map((s) => generateSlug(s.name));
}
