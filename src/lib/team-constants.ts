export type TeamMember = {
  name: string;
  team: string;
  role: string;
  image: string;
  linkedin?: string;
};

export type TeamCategory = {
  name: string;
  members: TeamMember[];
};

// Real images from mitbtcexpo.org
const TEAM_IMAGES = {
  ben: "/team/ben.webp",
  achyut: "/team/achyut-katiyar.webp",
  arul: "/team/arul.webp",
  yi: "/team/yi.webp",
  rojina: "/team/rojina.webp",  
  carys: "/team/Carys.webp",
  michelle: "/team/michelle.webp",
  thomas: "/team/tom.webp",
  adam: "/team/adam.webp",
  hash: "/team/hash.webp",
  cameron: "/team/cam.webp",
  namnueng: "/team/namnueng.webp",
  nicole: "/team/nicole.webp",
  thomaz: "/team/thomaz.webp",
  manish: "/team/manish.webp",
  frank: "/team/frank.webp",
  hao: "/team/hao.webp",
  julie: "/team/julie.webp"
};

// Linked list of team categories and their members
const LinkedInLink = {
  achyut: "https://www.linkedin.com/in/achyutkatiyar2103/",
  arul: "https://linkedin.com/in/arulagarwal",
  yi: "https://www.linkedin.com/in/yiliu-mit/",
  rojina: "https://www.linkedin.com/in/rojina-adhikari-1464b5282/",
  carys: "https://www.linkedin.com/in/carys-chan-8a2588298/",
  michelle: "https://www.linkedin.com/in/michelle-cao-4437a220a/",
  thomas: "https://www.linkedin.com/in/tomcpilla/",
  adam: "https://www.linkedin.com/in/agebner/",
  hash: "https://www.linkedin.com/in/h6239/",
  cameron: "https://www.linkedin.com/in/cameron-moini-207496232/",
  namnueng: "https://www.linkedin.com/in/namnueng/",
  nicole: "https://www.linkedin.com/in/nicole-wu-47b317109/",
  thomaz: "https://www.linkedin.com/in/luiz-thomaz-5023977/",
  manish: "https://www.linkedin.com/in/manish-kumar-68810326a/",
  hao: "https://www.linkedin.com/in/weehaong/",
  ben: "https://www.linkedin.com/in/rosenbleet/"
};

export const teamCategories: TeamCategory[] = [
  {
    name: "Board",
    members: [
      {
        name: "Thomaz",
        team: "Board",
        role: "Co-Director",
        image: TEAM_IMAGES.thomaz,
        linkedin: LinkedInLink.thomaz,
      },
      {
        name: "Namnueng Protpagorn",
        team: "Board",
        role: "Co-Director",
        image: TEAM_IMAGES.namnueng,
        linkedin: LinkedInLink.namnueng,
      },

    ],
  },
  {
    name: "Content",
    members: [
      {
        name: "Cameron",
        team: "Content",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.cameron,
        linkedin: LinkedInLink.cameron,
      },
      {
        name: "Manish",
        team: "Content",
        role: "Senior Advisor",
        image: TEAM_IMAGES.manish,
        linkedin: LinkedInLink.manish,
      },
      {
        name: "Adam",
        team: "Content",
        role: "Co-Chair | Associate at ego death",
        image: TEAM_IMAGES.adam,
        linkedin: LinkedInLink.adam,
      },
      {
        name: "Hash",
        team: "Content",
        role: "Advisor",
        image: TEAM_IMAGES.hash,
        linkedin: LinkedInLink.hash,
      },
      {
        name: "Trey",
        team: "Content",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
      {
        name: "Ishaana",
        team: "Content",
        role: "Co-Chair",
        image: "",
        linkedin: "#",
      },
    ],
  },
  {
    name: "Hackathon",
    members: [
      // {
      //   name: "Frank",
      //   team: "Hackathon",
      //   role: "Co-Chair (Lead)",
      //   image: TEAM_IMAGES.frank,
      //   linkedin: "#",
      // },
      {
        name: "Hao",
        team: "Hackathon",
        role: "Co-Chair",
        image: TEAM_IMAGES.hao,
        linkedin: LinkedInLink.hao,
      },
      {
        name: "Achyut Katiyar",
        team: "Hackathon",
        role: "Co-Chair · Shipped this site",
        image: TEAM_IMAGES.achyut,
        linkedin: LinkedInLink.achyut,
      },
    ],
  },
  {
    name: "Logistics",
    members: [
      {
        name: "Michelle C",
        team: "Logistics",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.michelle,
        linkedin: LinkedInLink.michelle,
      },
      {
        name: "Yoyo",
        team: "Logistics",
        role: "Co-Chair (Lead)",
        image: "",
        linkedin: "#",
      },
      {
        name: "Rojina Adhikari",
        team: "Logistics",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.rojina,
        linkedin: LinkedInLink.rojina,
      },
    ],
  },
  {
    name: "Marketing",
    members: [
      {
        name: "Juli Serrano",
        team: "Marketing",
        role: "Co-Chair(Lead)",
        image: TEAM_IMAGES.julie,
        linkedin: "https://www.linkedin.com/in/juliethserrano",
      },
      {
        name: "Yi Liu",
        team: "Marketing",
        role: "Co-Chair",
        image: TEAM_IMAGES.yi,
        linkedin: LinkedInLink.yi,
      },
      {
        name: "Carys Chan",
        team: "Marketing",
        role: "Co-Chair",
        image: TEAM_IMAGES.carys,
        linkedin: LinkedInLink.carys,
      },
      {
        name: "Thomas Pilla",
        team: "Marketing",
        role: "Co-Chair",
        image: TEAM_IMAGES.thomas,
        linkedin: LinkedInLink.thomas,
      },
      {
        name: "Achyut Katiyar",
        team: "Marketing",
        role: "Co-Chair · Shipped this site",
        image: TEAM_IMAGES.achyut,
        linkedin: "#",
      },
    ],
  },
  {
    name: "Sponsorship",
    members: [
      {
        name: "Ben",
        team: "Sponsorship",
        role: "Co-Chair (Lead)",
        image: TEAM_IMAGES.ben,
        linkedin: LinkedInLink.ben,
      },
      {
        name: "Arul",
        team: "Sponsorship",
        role: "Co-Chair",
        image: TEAM_IMAGES.arul,
        linkedin: LinkedInLink.arul,
      },


    ],
  },
];

// Flat list of all team members
export const allTeamMembers: TeamMember[] = teamCategories.flatMap((category) => category.members);
