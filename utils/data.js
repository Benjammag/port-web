import Link from "next/link";

export const SKILLS = [
  {
    title: "Frontend",
    icon: "/assets/images/frnt.png",
    skills: [
      { skill: "HTML5", percentage: "95%" },
      { skill: "CSS3 (Sass/SCSS)", percentage: "90%" },
      { skill: "JavaScript", percentage: "90%" },
      { skill: "Typescript", percentage: "80%" },
      { skill: "React.js", percentage: "90%" },
    ],
  },
  {
    title: "Tools",
    icon: "/assets/images/tools.png",
    skills: [
      { skill: "Git & GitHub", percentage: "90%" },
      { skill: "Visual Studio Code", percentage: "90%" },
      { skill: "Webpack", percentage: "80%" },
      { skill: "Responsive Design", percentage: "80%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: "/assets/images/soft.png",
    skills: [
      { skill: "Problem-solving", percentage: "90%" },
      { skill: "Collaboration", percentage: "90%" },
      { skill: "Attention to Detail", percentage: "90%" },
    ],
  },
];

export const CREATIVE_EXPERIENCE = [
  {
    icon: "/assets/images/recipe.jpg",
    title: "FOOD-RECIPE App",
    about: [
      "HTML, CSS, JavaScript, React",
      "Built a food-recipe react app which utilizes API call to display recipe, ingredients etc.",
    ],
    deploy: ["https://food-ce5j52hxq-benjamin-agbetuyis-projects.vercel.app/"],
    git: ["https://github.com/Benjammag/food-app"],
  },

  {
    icon: "/assets/images/dog.jpg",
    title: "TIN-DOG Website",
    about: [
      "HTML, CSS, Bootstrap",
      "Built a website using basic HTML, CSS and Bootstrap.",
    ],
    deploy: [
      "https://tindog-k85bf6kxe-benjamin-agbetuyis-projects.vercel.app/",
    ],
    git: ["https://github.com/Benjammag/tindog"],
  },

  {
    icon: "/assets/images/game.jpg",
    title: "SIMON GAME",
    about: [
      "HTML, CSS, JavaScript, JQuery",
      "Built an imitation of a game that can be played on a website.",
    ],
    deploy: ["https://simon-game-psi-gules.vercel.app/"],
    git: ["https://github.com/Benjammag/simon-game"],
  },

  {
    icon: "/assets/images/todo-lists.jpg",
    title: "TO-DO App",
    about: [
      "HTML, CSS, JavaScript, React",
      "Built a to-do react app that takes in to-do schedules and allows deletion of schedules.",
    ],
    deploy: ["https://benjammag.github.io/to-do-app/"],
    git: ["https://github.com/Benjammag/to-do-app"],
  },

  {
    icon: "/assets/images/drum.jpg",
    title: "DRUM-KIT",
    about: ["HTML, CSS, JavaScript"],
    deploy: ["https://benjammag.github.io/drum-kit/"],
    git: ["https://github.com/Benjammag/drum-kit"],
  },
  {
    icon: "/assets/images/coffee-menu.jpg",
    title: "CAFE-MENU",
    about: ["HTML, CSS, JavaScript"],
    deploy: ["https://benjammag.github.io/cafe-menu/"],
    git: ["https://github.com/Benjammag/cafe-menu"],
  },
  {
    icon: "/assets/images/card.jpg",
    title: "NAME-CARD Page",
    about: ["HTML, CSS, JavaScript"],
    deploy: ["https://benjammag.github.io/assessment/"],
    git: ["https://github.com/Benjammag/assessment"],
  },
];
