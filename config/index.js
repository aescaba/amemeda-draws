// THIS IS WHERE ALL THE CUSTOMIZABLE SETTINGS LIVE !!
// copied from portfolio site code https://github.com/aescaba/portfolio/blob/master/config/index.js
module.exports = {
    // probably delete this
    //-- SITE SETTINGS -----
    // author: "@aescaba",
    // siteTitle: "Amanda Escaba",
    // siteShortTitle: "ae", // Used as logo text in header, footer, and splash screen
    // siteDescription:
    //   "Designer, developer, & artist based in New York.",
    // siteUrl: "https://amandaescaba.com/",
    // siteLanguage: "en_US",
    // siteIcon: "content/favicon.png", // Relative to gatsby-config file
    // seoTitleSuffix: "Designer, Developer, & Artist", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"
  
    // -- THEME SETTINGS -----
    colors: {
        primary: "#000000",
        secondary: "#A7C4E7",
        tertiary: "#83AAD9",
        text: "#000000",
        subtext: "#555555",
        background: "#FFFFFF",
        card: "#FFFFFF",
        scrollBar: "rgba(0, 0, 0, 0.5)",
        boxShadow: "rgba(0, 0, 0, 0.16)",
        boxShadowHover: "rgba(0, 0, 0, 0.32)",
        link: "#F4C416",
        special: "#FFA35C"
    },
    fonts: {
      primary: "Roboto, Arial, sans-serif",
    },
  
    //-- NAVIGATION SETTINGS -----
    headerLinks: {
        header: [
            {
            name: "Digital",
            url: "/digital",
            },
            {
            name: "Traditional",
            url: "/traditional",
            },
            {
            name: "Cards",
            url: "/cards",
            },
            {
            name: "About",
            url: "/about",
            },
        ],
        },
  
    //-- SOCIAL MEDIA SETTINGS -----
    // There are icons available for the following platforms:
    // Medium, GitHub, LinkedIn, XING, Behance
    socialMedia: [
      {
        name: "Resume",
        url: "https://drive.google.com/file/d/1n4lYfD1M7ZoGZGENIhkVUaDjUM4hhpkh/view?usp=sharing",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aescaba/",
      },
      {
        name: "Github",
        url:
          "https://github.com/aescaba/",
      },
      // {
      //   name: "Behance",
      //   url: "https://www.behance.net/konstanmnster",
      // },
    ],
  

    footerLinks: [
      // {
      //   name: "powered by gatsby",
      //   url: "https://www.gatsbyjs.com/",
      // },
    ],
  }
  