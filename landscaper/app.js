// start off with money 
console.log("Game is running");
let userAction = null; 
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
while (userAction !== "stop" && totalEarned !== 10) { 

    // keep prompting to ask if want to keep cutting lawns? 
    userAction = prompt("Do you want to keep cutting lawns?", "yes or no"); 

        // if (userReply === yes) keep cutting! 
        if (userAction === "yes") {
        // use currTool.payout to increase totalEarned until it hits the following if-statement! 
        // totalEarned += currTool.payout;
            totalEarned += currTool.payout;
            console.log(totalEarned); 
        }
        // if (userReply === no) exit game and alert() Game Over! 
        if (userAction === "no") {
            alert("Game Over!"); 
        }
             

    // 3. if (currTool.name === "teeth" && totalEarned === 5) 

        // const userAction = prompt("You can now upgrade to the next tool!", "Yes or No?"); 

            // if (userAction === "yes")

                // reassign currTool equal to next Tool-Object in the array! 
                // THEN decrease totalEarned by the currTool.cost 
                // totalEarned -= currTool.cost; 
    
    // 4. copy and paste the logic for EVERY tool! START! 
                

    // need FINAL WINNING STATEMENT 
    if (totalEarned === 10) {
        alert("You win!");
    }
}

