const config = {
  title: "Kishor B | Full Stack Web Developer",

  description: {
    long: "Explore the portfolio of Kishor B, a passionate Full Stack Developer building scalable web applications.",
    short:
      "Portfolio of Kishor B, a passionate Full Stack Developer.",
  },

  keywords: [
    "Kishor B",
    "portfolio",
    "full stack developer",
    "React",
    "Node.js",
    "MongoDB",
    "JavaScript",
  ],

  author: "Kishor B",

  email: "kishor8754215627@gmail.com",

  site: "http://localhost:3000",

  githubUsername: "kishor514",

  githubRepo: "portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    github: "https://github.com/kishor514",
    linkedin: "https://www.linkedin.com/in/kishor45",
    instagram: "https://instagram.com/kishork4988",
    twitter: "",
    facebook: "",
  },
};

export { config };