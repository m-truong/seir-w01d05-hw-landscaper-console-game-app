alert("You are starting a landscaping business, but all you have are you teeth!"); 

/**
 * global variables
 */
let userAction = null; 
let totalEarned = 0; 
let winAmount = 1000;

/**
 * Landscaper tool array 
 */
const tools = [
    { name: 'teeth', cost: 0, payout: 1 },
    { name: 'rusty scissors', cost: 5, payout: 5},
    { name: 'old-timey push lawnmower', cost: 25, payout: 50},
    { name: 'fancy battery-powered lawnmower', cost: 250, payout: 100},
    { name: 'team of starving students', cost: 500, payout: 250 }
]

/** 
 * Iterable k
 */
let k = 0; 
let currTool = tools[k];

/**
 * The cutGrass() is a function that continuously prompts the player for an input of "y or n". 
 * If the player inputs "y", the game continues to run and the totalEarned increases.
 * If the player inputs "n", the game is reset, and the player's totalEarned progress restarts 
 * at 0, and the current tool restarts at teeth.
 */
const cutGrass = () => {
    if (userAction === "y") {
        totalEarned += currTool.payout;
    }
    if (userAction === "n") {
        alert("Game Over!"); 
        totalEarned = 0; 
        currTool = tools[0]; 
    }
}

/**
 * The upgradeTool() is a function that checks if the totalEarned is enough to purchase the next tool.
 * Then it reassigns currTool to the next tool, decrements the totalEarned, 
 * and iterates k to the next tool array index. 
 */ 
const upgradeTool = () => {
    if (k < 4) {
        if (currTool.name === tools[k].name && totalEarned === tools[k+1].cost) { 
            userAction = prompt(`You can now upgrade to the ${tools[k+1].name}!`, "y or n?"); 
            if (userAction === "y") {
                currTool = tools[k+1];
                totalEarned -= currTool.cost;
                k++;
            }
        }
    }
}

/**
 * The winningStatement() is a function that checks if the player has reached 
 * the winning amount of $1000 and has upgraded to the final tool. 
 * If so, the player is shown a winning message. 
 */
const winningStatement = () => {
     if (currTool.name === tools[4].name && totalEarned === winAmount) {
        alert("Congratulations! You've completed the Landscaper Game!");
    }
}

/**
 * The startLandscaper() is a function that starts the Landscaper game's while-loop 
 * and executes the cutGrass(), upgradeTool() and winningStatement() functions. 
 */
const startLandscaper = () => { 
    while (userAction !== "s" && totalEarned !== winAmount) { 
        userAction = prompt("Do you want to keep cutting lawns?", "y or n");
        cutGrass();
        upgradeTool(); 
        winningStatement();
    } 
}

/** 
 * The Landscaper game starts down here. 
 */
startLandscaper(); 
