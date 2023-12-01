import cs_1 from "./images/cs_1.png"
import cs_2 from "./images/cs_2.png"
import cs_3 from "./images/cs_3.png"

const projects = [
  {
    projectName:"CrowdSecure",
    date:"NOV 2023",
    link:"https://devpost.com/software/crowd-secure",
    linkType:"DevPost",
    description:`CrowdSecure is a transparent and secure blockchain based platform to 
                help empower philanthropy. We leveraged Hederas decentralized network 
                to ensure that all verified campaigns are on Hedera accounts and can be 
                accessed and reviewed by anyone via their PublicKeys.
                `,
    images:[cs_3, cs_1, cs_2]
  },
  {
    projectName:"PantryAI", 
    date:"NOV 2023", 
    link:"Test Link",
    linkType:"GitHub",
    description:"https://github.com/zymoncone/pantry-ai",
    images:["None", "None"]
  },
  {
    projectName:"Feeling Hungry", 
    date:"SEP 2023", 
    link:"https://github.com/zymoncone/feeling-hungry",
    linkType:"GitHub",
    description:"None",
    images:["None", "None"]
  },
  {
    projectName:"UniPath", 
    date:"SEP 2023", 
    link:"https://devpost.com/software/path-to-uni",
    linkType:"DevPost",
    description:"None",
    images:["None", "None"]
  },
  {
    projectName:"Home Data Analysis", 
    date:"AUG 2023", 
    link:"https://github.com/zymoncone/HomeDataWorkflow",
    linkType:"GitHub",
    description:"None",
    images:["None", "None"]
  },
  {
    projectName:"Custom 3D-Printer", 
    date:"NOV 2018", 
    link:"Test Link",
    linkType:"None",
    description:"None",
    images:["None", "None"]
  },
  {
    projectName:"Mini Tennis", 
    date:"FEB 2015", 
    link:"https://github.com/zymoncone/Mini-Tennis",
    linkType:"None",
    description:"None",
    images:["None", "None"]
  }
]

const socials = [
  {
    name: "Github",
    link: "https://github.com/zymoncone",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/szymonsarnowicz/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
  },
  {
    name: "Email",
    link: "mailto:szymon@sarnowicz.net",
    path: "M15.61 12c0 1.99-1.62 3.61-3.61 3.61-1.99 0-3.61-1.62-3.61-3.61 0-1.99 1.62-3.61 3.61-3.61 1.99 0 3.61 1.62 3.61 3.61M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12c2.424 0 4.761-.722 6.76-2.087l.034-.024-1.617-1.879-.027.017A9.494 9.494 0 0 1 12 21.54c-5.26 0-9.54-4.28-9.54-9.54 0-5.26 4.28-9.54 9.54-9.54 5.26 0 9.54 4.28 9.54 9.54a9.63 9.63 0 0 1-.225 2.05c-.301 1.239-1.169 1.618-1.82 1.568-.654-.053-1.42-.52-1.426-1.661V12A6.076 6.076 0 0 0 12 5.93 6.076 6.076 0 0 0 5.93 12 6.076 6.076 0 0 0 12 18.07a6.02 6.02 0 0 0 4.3-1.792 3.9 3.9 0 0 0 3.32 1.805c.874 0 1.74-.292 2.437-.821.719-.547 1.256-1.336 1.553-2.285.047-.154.135-.504.135-.507l.002-.013c.175-.76.253-1.52.253-2.457 0-6.617-5.383-12-12-12"
  }
]

export {projects,
        socials}