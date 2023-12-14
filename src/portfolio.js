import cs_1 from "./media/crowdsecure/cs_1.png"
import cs_2 from "./media/crowdsecure/cs_2.png"
import cs_3 from "./media/crowdsecure/cs_3.png"
import cs_4 from "./media/crowdsecure/cs_4.png"

import fh_1 from "./media/feelinghungry/fh_1.mp4"
import fh_2 from "./media/feelinghungry/fh_2.png"

import up_1 from "./media/unipath/unipath_-_hack_the_classroom_demo.mp4"

import hd_1 from "./media/homedataanalysis/hd_1.png"
import hd_2 from "./media/homedataanalysis/hd_2.png"
import hd_3 from "./media/homedataanalysis/hd_3.png"

import p_1 from "./media/printer/p_1.png"
import p_2 from "./media/printer/p_2.png"
import p_3 from "./media/printer/p_3.png"

import mt_1 from "./media/minitenis/mt_1.mp4"

const projects = [
  {
    projectName:"CrowdSecure",
    date:"NOV 2023",
    link:"https://devpost.com/software/crowd-secure",
    linkType:"DevPost",
    description:"🏆 We won Best Cybersecurity Hack at MHacks16! 🏆\n\n" +
                 "CrowdSecure is a blockchain-based crowdfunding platform for charitable donations built " +
                 "within 24 hours at MHacks16, a Univerisity of Michigan hosted hackathon with over " +
                 "350 participants. " +
                 "Here's what we did: \n~CrowdSecure uses Hedera and GitCoin: The platform leverages " +
                 "Hedera’s decentralized network and GitCoin’s quadratic funding match model to ensure " +
                 "transparency and security in donations2. Hedera provides fast and low-cost transactions, " +
                 "while GitCoin provides a democratic way to allocate funds from sponsors to social campaigns." +
                 "\n~CrowdSecure aims to bridge the gap between donors and charities: The platform allows " +
                 "donors to be sure that their money is directly transferred to the rightful charity organizations, " +
                 "without intermediaries or fraud3. It also promotes accountability among the charities, who can " +
                 "showcase their impact and receive feedback from the donors." +
                 "\n~CrowdSecure is built with web3 technology: The platform is based on web3, which is the next " +
                 "generation of the internet that is more decentralized, open, and user-centric5. Web3 enables " +
                 "users to have more control and ownership over their data and assets, and to participate in " +
                 "the creation and governance of online services." +
                 "\n~CrowdSecure faced some challenges and learned a lot: The team had no prior experience with " +
                 "web3 and blockchain, but they learned a lot about the concept and the potential of this technology " +
                 "for social good. They also faced some difficulties in integrating GitCoin with Hedera, and in " +
                 "deploying their frontend with Streamlit. They are proud of their successful proof-of-concept " +
                 "and hope to continue improving their platform.",
    media:[cs_3, cs_1, cs_2, cs_4]
  },
  {
    projectName:"PantryAI", 
    date:"NOV 2023", 
    link:"https://github.com/zymoncone/pantry-ai",
    linkType:"GitHub",
    description:"The goal of PantryAI was to turn your pantry items into a generated list of recipes " +
                "for the week or just for the day. Check out the demo above.\n" +
                "~Here is everything we want it to do:\n" +
                "• Generate recipes for each day of the week 📝\n" +
                "• Generate recipes to chose from for a single meal 🍲\n" +
                "• Save pantry items per user 🧑\n" + 
                "• Add/delete pantry items 🍎\n" +
                "• Select items to generate recipes for\n" +
                "• Create grocery list from items 🛒\n" +
                "• Instacart from grocery items (coming soon)\n" +
                "• 2FA for user login (coming soon)\n"+
                "Check out more on GitHub!",
    media:["https://github.com/zymoncone/pantry-ai/assets/10564686/66bd9f94-872d-4230-9132-390b006e32da"]
  },
  {
    projectName:"Feeling Hungry", 
    date:"SEP 2023", 
    link:"https://github.com/zymoncone/feeling-hungry",
    linkType:"GitHub",
    description:"Ever feel hungry but don't know what to make without having to go to the store? " +
                "I made an app to help with just that! Type in what you have in your fridge " + 
                "(comma separated) and see what you can make!\n" +
                "The [Feeling Hungry App|https://zymoncone.github.io/feeling-hungry/] is now live! DM me on LinkedIn for the password!",
    media:[fh_1, fh_2]
  },
  {
    projectName:"UniPath", 
    date:"SEP 2023", 
    link:"https://devpost.com/software/path-to-uni",
    linkType:"DevPost",
    description:"UniPath was inspired by the need to address the challenges faced by high school students and counselors in large schools, " +
                "where limited resources make it difficult to provide personalized guidance. The goal is to prevent students from falling short " +
                "of their university aspirations and to bridge the support gap for those who are close to achieving their goals but lack timely assistance. " +
                "UniPath was created in 48-hours for the 'Hack The Classroom' Hackathon hosted by MLH. Here are the key points: " +
                "\n~Individualized student pages: UniPath provides a dedicated page for each student, pulling data from the school's database to display grades. " +
                "\n~Predictive SAT scores: The tool predicts SAT scores, allowing students to track their expected scores as they progress through high school. " +
                "This feature helps students align their efforts with their university goals." +
                "\n~TaiPy GUI and Core: UniPath was built using TaiPy GUI for application development and TaiPy Core for predictive modeling with SAT scores. " +
                "The tool is designed to offer a quick glance at students' needs, aiding counselors in efficient decision-making. " +    
                "\n~TaiPy Technology: The development team utilized TaiPy GUI for streamlined application building and TaiPy Core for predictive modeling. " +
                "Challenges during implementation included time management, learning a new library, and overcoming difficulties in scaling up pages. " +
                "\n~ML Pipeline: The project involved creating a machine learning (ML) pipeline, with mlmodel.py showcasing UniPath's potential " +
                "to create predictive models if provided with the right data." +
                "\n~Future Development: The team aims to enhance the app's credibility by collecting more data on GPA breakdowns and SAT " +
                "scores across different schools and time ranges. They also plan to create a student version of the app for progress tracking and academic planning.",
    media:[up_1]
  },
  {
    projectName:"Home Data Analysis", 
    date:"AUG 2023", 
    link:"https://github.com/zymoncone/HomeDataWorkflow/tree/main",
    linkType:"GitHub",
    description:"This Jupyter Notebook offers a brief analysis of data from a previous class at the University of Michigan, " +
                "specifically from SIADS 601: Qualitative Inquiry for Data Scientists. In that class, we were tasked with " +
                "conducting interviews and making qualitative deductions based on a given dataset. The final report, " +
                "available [here|https://docs.google.com/document/d/1GDIykRC3su3uFjvVsLkYSEvCCtqpSCrUBoLPLd7UBt8/edit], " +
                "was centered around the Affinity Wall " +
                "([here|https://github.com/zymoncone/HomeDataWorkflow/blob/main/Affinity_Wall.jpg] or as seen in the first image) " +
                "\nHowever, the class concluded before delving into the visualization of quantitative data, prompting further " +
                "exploration in the provided Jupyter Notebook. The chosen dataset, sourced from Kaggle, focuses on home " +
                "prices in King County, Washington, from May 2014 to May 2015. The dataset includes details such as date of " +
                "sale, price, square footage, number of bedrooms and bathrooms, grade (ranging from 1 to 13, indicating the quality " +
                "of construction and design), waterfront status (0 or 1), and other relevant features." +
                "\nThe analysis will specifically investigate trends related to the sale date and sale price by examining two " +
                "key variables: grade and waterfront status. Grade is categorized on a scale of 1 to 13, with 1-3 representing " +
                "subpar construction and design, 7 indicating an average level, and 11-13 denoting high-quality construction and " +
                "design. Waterfront status is binary, with values 0 or 1. The goal is to uncover insights into how these factors " +
                "correlate with sale date and price in the King County housing market.",
    media:[hd_3, hd_1, hd_2]
  },
  {
    projectName:"Custom 3D-Printer", 
    date:"NOV 2018", 
    link:"None",
    linkType:"None",
    description:"I designed and constructed a custom 3D printer with 3D-printed and laser-cut components. " +
                "The programming involved generating G-code instructions to precisely control the movements " +
                "and operations of the 3D printer. G-code is a numerical control language that dictates specific " +
                "actions, such as the movement of the printer's extruder, the layering of materials, " +
                "and the overall manufacturing process." +
                "\nBy delving into G-code programming, I took an active role in defining the intricate details of the 3D " +
                "printing process. This included specifying layer heights, print speeds, and other parameters " +
                "crucial for achieving the desired output. My involvement in programming not only showcased my " +
                "technical proficiency but also allowed me to tailor the 3D printer's behavior to meet the unique " +
                "requirements of the project. Overall, my hands-on approach to both hardware construction and software " +
                "programming highlights a comprehensive and personalized effort in creating a fully functional and customized product.",
    media:[p_2, p_1, p_3]
  },
  {
    projectName:"Mini Tennis", 
    date:"FEB 2015", 
    link:"https://github.com/zymoncone/Mini-Tennis",
    linkType:"GitHub",
    description:"Mini Tennis, a nostalgic classic, represents one of my initial forays into programming. " +
                "Crafted using a dynamic combination of JavaScript, HTML, and CSS, this game was not only " +
                "an exercise in creativity but also a valuable learning experience." +
                "\nThe foundation of Mini Tennis lies in HTML, where the structure of the game, including the " + 
                "playing area and interactive elements, was defined. CSS came into play for styling. " +
                "\nThe heart and soul of the game reside in the JavaScript code, where the logic and " +
                "interactivity were meticulously crafted. The player-controlled tray's movements, the " +
                "bouncing behavior of the ball, and the dynamic generation of score-earning squares were " +
                "all carefully programmed to ensure a seamless and enjoyable gaming experience." +
                "Navigating the challenges of game development, I honed my skills in handling user inputs, " +
                "managing game states, and creating a responsive and engaging user interface. The process " +
                "involved continuous iteration, tweaking parameters to find the perfect balance of " +
                "difficulty and enjoyment. \nMini Tennis not only stands as a fun and accessible game " +
                "but also symbolizes a crucial step in my programming journey, where hands-on experience " +
                "and experimentation paved the way for future projects.",
    media:[mt_1]
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