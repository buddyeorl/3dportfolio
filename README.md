# QUICK REACT PORTFOLIO (NO TITLE YET, BEST TITLE SUGGESTION WILL GET A $5 STARBUCKS GIFT CARD, FOR REAL!)
OK, I was struggling trying to get a decent portfolio and end up creating a fully customizable open source portfolio. This is a full FROM SCRATCH ReactjS portfolio.

## Ok let's get to the portfolio personalization first. below is the almost self explanatory of the variables you need to modify in order to get one exact portoflio replica with your information:

```javascript
// =============================================app.js Variables============================================================//
// =========================================================================================================================//
// add your name below
export const myNamePortfolio = 'Alex  Lizarraga '
// add a brief self description 
export const myBackgroundPortfolio = 'Problem Solver at heart! Web development, Blockchain and Deep Learning enthusiast!';
// add as many project names as you want. ignore the side comment, those are projects that i have pending to upload on my own portfolio :)
export const projects = ["What The Fork!", "Katenna", "CodeListener", "Multiverse", "GifTastic"]; //, "Fun", "Full Stack App", "Blockchain", "Jupyter Books"
// add the matching project description to the above projects. remember it's an array!!
export const projectDescriptions = ["How many times have you wondered what could you cook with that ingredient you saw at the super market? or what is the name of that fruit or food you saw? well don't worry, we have created 'What the fork', just open the camera, take the picture of all the ingredients you have, and in matter of seconds the app will tell you all the meals you can cook. Easy!", "Never again!!, yes, You don't need to train the new hire!, with Katenna the continuity manual and the training expenses are a thing of the past, this app is the tool the managers use to train their new employees. Katenna works by keeping all the knowledge the current employee has about its position, and when an employee quits, the new hire can take the new position right away with katenna as the inexpensive trainer",
    "A project in progress that uses voice and language recognition to create and interact with website elements and display the code html code of such elements, all these without typing a word. The code listener will be the tool to create full websites with one voice command,  will help people with mobility impairement to code html, will help instructors to teach and see code changes in real time, children and adults will be able to code as long as there is a voice to do it.",
    "The war of the universes, a multiplayer online game (currently supports only two players) where you have to bomb your multiverse enemy planet, taking advantage of that moment where all the multiverse planets phase in.",
    "Search a set of gifs and click to play or click again to stop playing, who doesn't love gifs anyways?"]

// links for the projects in the same order as projects, add as many as you want.
export const demoProject = ["https://whatthefork.herokuapp.com/", "http://www.katenna.com", "https://thecodelistener.herokuapp.com/", "https://buddyeorl.github.io/ggj2018/", "https://buddyeorl.github.io/GifTastic/"];
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
// project or skill names, I will change this in the future...
export const titles = ["JS", "MongoDB", "Deep Learning", "React", "Full Stack", "Fun", "Full Stack App", "Blockchain", "Jupyter Books"];
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

```

## Will add some documentation on all the animation and transitions I created for this project but for now this is the list:
1. FadeIn: Created for opacity 0.5 on hover of element
2. Following Tag: this effect will keep the titles of the projects on the top of the screen
3. Left Message: effect that tilt 30 deg the text when out of focus and tilt back to 0 deg when scrolling down.
4. Transition3d: main effect used on personal description div, to follow the mouse pointer and to move perspective accordingly to mimic 3d
5. TransitionLeft: effect from left to right
6. TransitionRight: effect from right to left
7. TransitionUp: effect from below to above

*** will add more description on the effects used.
*** will add more description on how to apply effects specially transition3d that depends on the parent div
*** will add information on all the components created


## if you need documentation on the react app boiler plate I used, please see below:
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).