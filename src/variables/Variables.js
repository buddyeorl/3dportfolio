// =============================================app.js Variables============================================================//
// =========================================================================================================================//
// add your name below
export const myNamePortfolio = 'Alex  Lizarraga '
// add a brief self description 
export const myBackgroundPortfolio = 'Problem Solver at heart! Web development, Blockchain and Deep Learning enthusiast!';
// add as many project names as you want. ignore the side comment, those are projects that i have pending to upload on my own portfolio :)
export const projects = ["What The Fork!", "Katenna", "CodeListener", "Multiverse", "GifTastic"]; //, "Fun", "Full Stack App", "Blockchain", "Jupyter Books"
// add the project type for the above projects
export const projectT = ["IBM Watson Visual Recognition WebApp", "Full Stack App", "IBM Watson Natural Language Recognition WebApp", "FUN", "More FUN using APIs"]; //, "Fun", "Full Stack App", "Blockchain", "Jupyter Books"
// add the matching project description to the above projects. remember it's an array!!
export const projectDescriptions = ["How many times have you wondered what could you cook with that ingredient you saw at the super market? or what is the name of that fruit or food you saw? well don't worry, we have created 'What the fork', just open the camera, take the picture of all the ingredients you have, and in matter of seconds the app will tell you all the meals you can cook. Easy!", "Never again!!, yes, You don't need to train the new hire!, with Katenna the continuity manual and the training expenses are a thing of the past, this app is the tool the managers use to train their new employees. Katenna works by keeping all the knowledge the current employee has about its position, and when an employee quits, the new hire can take the new position right away with katenna as the inexpensive trainer",
    "A project in progress that uses voice and language recognition to create and interact with website elements and display the code html code of such elements, all these without typing a word. The code listener will be the tool to create full websites with one voice command,  will help people with mobility impairement to code html, will help instructors to teach and see code changes in real time, children and adults will be able to code as long as there is a voice to do it.",
    "The war of the universes, a multiplayer online game (currently supports only two players) where you have to bomb your multiverse enemy planet, taking advantage of that moment where all the multiverse planets phase in.",
    "Search a set of gifs and click to play or click again to stop playing, who doesn't love gifs anyways?"]

// links for the projects in the same order as projects, add as many as you want.
export const demoProject = ["https://whatthefork.herokuapp.com/", "https://testkatena.herokuapp.com/", "https://thecodelistener.herokuapp.com/", "https://buddyeorl.github.io/ggj2018/", "https://buddyeorl.github.io/GifTastic/"];
// general list of skills, you can add as many as you want
export const listOfSkills =
    [
        "JavaScript",
        "Firebase",
        "NodeJS",
        "HTML",
        "CSS",
        "ReactJS",
        "IBM Watson API: Visual Recognition",
        "Imgur API: Image Upload Service",
        "Yummly API: Recipe Finder Service",
        "Wikipedia API: Food Information",
        "Passport.js: Authentication library",
        "Jsonwebtoken: Interaction between Authenticated client and server",
        "Bcryptjs: Data Encription",
        "MongoDB",
        "IBM Watson API: Voice Recognition",
        "Giphy API: Gif online service",
        "WebPack"
    ]
// IMPORTANT ==============>
// projectSkills array should have the same size as projects Array!!!the number below represent the index of the array listOfSkills======================> 
export let projectSkills = [[0, 1, 2, 3, 4, 6, 7, 8, 9], [0, 1, 2, 3, 4, 5, 10, 13, 16], [0, 1, 3, 4, 14, 16], [0, 1, 2, 3, 4,], [0, 2, 3, 4, 15], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4], [0, 1, 2, 3, 4]];


//DONT EDIIT THE FUNCTION BELOW.
//putSkillArray will take projectSkills arrays and turn them into the skills from list of skills, this is done to prevent writing the skills repeatedly
export let putSkillsInArray = () => {
    // console.log(projectSkills);
    for (let i = 0; i < projectSkills.length; i++) {
        for (let j = 0; j < projectSkills[i].length; j++) {
            projectSkills[i][j] = listOfSkills[projectSkills[i][j]];
            // console.log(projectSkills[i][j]);
        }
    }
    // console.log(projectSkills);
}



// =============================================DisplayInfo.js Variables============================================================//
// =================================================================================================================================//
// project or skill names, I will change this in the future... please note that the images related to the titles, are named as 01.png for node, 02.png for reactjs etc. all this in /src/img/logos
export const titles = ["NodeJS", "ReactJS", "MongoDB", "JavaScript", "HTML5", "Heroku", "CSS3", "Firebase", "Jupyter Books"];
export const descriptions = "";
export const initialSize = 50; //in percentage

// DONT EDIT THE LINES BELOW
export let displayInfoQty = []; // titles.length will set the size of this array to hold the displayInfo card initial size
for (let i = 0; i < titles.length; i++) {
    displayInfoQty.push(initialSize);
}
//DONT EDIT THE LINES ABOVE

// =============================================DockBottom.js Variables============================================================//
// =================================================================================================================================//
// ADD THE text you want to display when the contact icons are clicked
export const socialAccs = ["alizarraga", "buddyeorl", "@buddyeorl", "Alex", "alexander_lizarraga@ymail.com"];
// add your accounts in this order: linkedin, github, twitter, facebook, and your email.
export const socialUrls = ["https://www.linkedin.com/in/alizarraga/", "https://github.com/buddyeorl", "https://twitter.com/buddyeorl", "https://www.facebook.com/alexander.lizarraga.144", "mailto: alexander_lizarraga@ymail.com"];
