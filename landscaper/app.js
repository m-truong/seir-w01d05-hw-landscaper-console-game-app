// start off with money 
console.log("Game is running");
let userAction = null; // use as killSwitch
let totalEarned = 0; 
let winAmount = 10;

// Landscaping Tools Array of Objects! 
const tools = [
    { name: 'teeth', cost: 0, payout: 1 },
    { name: 'rusty scissors', cost: 5, payout: 5},
    { name: 'old-timey push lawnmower', cost: 25, payout: 50},
    { name: 'fancy battery-powered lawnmower', cost: 250, payout: 100},
    { name: 'team of starving students', cost: 500, payout: 250 }
]

// pseudocode! // no player choice to say Yes/or/No yet! and get back the String from prompt()!
// 1. start with teeth
let currTool = tools[0]; 

// 2. use while loop to keep incrementing money earned with prompt using currTool.payout 
// while not at winning condition! totalEarned ==== 1000 

// ***** KEEP CHANGING STOP CONDITION UPP HERE ********
while (userAction !== "stop" && totalEarned !== 1000) { 

    // keep prompting to ask if want to keep cutting lawns? 
    userAction = prompt("Do you want to keep cutting lawns?", "y or n"); 

        // if (userReply === yes) keep cutting! 
        if (userAction === "y") {
        // use currTool.payout to increase totalEarned until it hits the following if-statement! 
        // totalEarned += currTool.payout;
            totalEarned += currTool.payout;
            console.log(totalEarned); 
        }
        // if (userReply === no) exit game and alert() Game Over! 
        if (userAction === "n") {
            alert("Game Over!"); 
            console.log("Game has stopped running");
            // RESET totalEarned to $0! 
            totalEarned = 0; 
            break;

        }
             

    // 3. upgrade to 'rusty-scissors' 
    if (currTool.name === "teeth" && totalEarned === 5) {
        // prompt() user to upgrade to nextTool! 
        userAction = prompt(`You can now upgrade to the ${tools[1].name}!`, "y or n?"); 
            // check if (yes) 
            if (userAction === "y") {
                // reassign currTool equal to next Tool-Object in the array! 
                currTool = tools[1];
                // THEN decrease totalEarned by the currTool.cost 
                // totalEarned -= currTool.cost;
                totalEarned -= currTool.cost;
                console.log(totalEarned); 
                console.log(`Upgraded to ${tools[1].name}!`); 
            }
            // don't need an else-statement 
    }
     // 3. upgrade to 'old-timey push lawnmower' 
     if (currTool.name === "rusty scissors" && totalEarned === 25) { // OHH Logically CANNOT even go BACK A TOOL ANYWAYS!  
        // prompt() user to upgrade to nextTool! 
        userAction = prompt(`You can now upgrade to the ${tools[2].name}!`, "y or n?"); 
            // check if (yes) 
            if (userAction === "y") {
                // reassign currTool equal to next Tool-Object in the array! 
                currTool = tools[2];
                // THEN decrease totalEarned by the currTool.cost 
                // totalEarned -= currTool.cost;
                totalEarned -= currTool.cost;
                console.log(totalEarned); 
                console.log(`Upgraded to ${tools[2].name}!`);
            }
            // don't need an else-statement 
    }

     // 4. upgrade to 'fancy battery-powered lawnmower' 
     if (currTool.name === "old-timey push lawnmower" && totalEarned === 250) { // OHH Logically CANNOT even go BACK A TOOL ANYWAYS!  
        // prompt() user to upgrade to nextTool! 
        userAction = prompt(`You can now upgrade to the ${tools[3].name}!`, "y or n?"); 
            // check if (yes) 
            if (userAction === "y") {
                // reassign currTool equal to next Tool-Object in the array! 
                currTool = tools[3];
                // THEN decrease totalEarned by the currTool.cost 
                // totalEarned -= currTool.cost;
                totalEarned -= currTool.cost;
                console.log(totalEarned); 
                console.log(`Upgraded to ${tools[3].name}!`);
            }
            // don't need an else-statement 
    }

     // 5. upgrade to 'team of starving students' 
     if (currTool.name === "fancy battery-powered lawnmower" && totalEarned === 500) { // OHH Logically CANNOT even go BACK A TOOL ANYWAYS!  
        // prompt() user to upgrade to nextTool! 
        userAction = prompt(`You can now upgrade to the ${tools[4].name}!`, "y or n?"); 
            // check if (yes) 
            if (userAction === "y") {
                // reassign currTool equal to next Tool-Object in the array! 
                currTool = tools[4];
                // THEN decrease totalEarned by the currTool.cost 
                // totalEarned -= currTool.cost;
                totalEarned -= currTool.cost;
                console.log(totalEarned); 
                console.log(`Upgraded to ${tools[4].name}!`);
            }
            // don't need an else-statement 
    }

    // 6. copy and paste the logic for EVERY tool! START! 
                
    // need FINAL WINNING STATEMENT 
    if (currTool.name === "team of starving students" && totalEarned === 1000) {
        alert("You've completed the Landscaper Game!");
        console.log("Game is complete!");
    }
}

