// start off with money 
let totalEarned = 0; 
let winAmount = 10;

// Landscaping Tools Array of Objects! 
const tools = [
    {
        name: 'teeth',
        cost: 0, 
        payout: 1 
    },
    {
        name: 'rusty scissors',
        cost: 5, 
        payout: 5
    },
    {
        name: 'old-timey push lawnmower',
        cost: 25, 
        payout: 50
    },
    {
        name: 'fancy battery-powered lawnmower',
        cost: 250,
        payout: 100
    },
    {
        name: 'team of starving students',
        cost: 500,
        payout: 250
    }
]

// pseudocode! // no player choice to say Yes/or/No yet! and get back the String from prompt()!
// 1. start with teeth
let currTool = tools[0]; 

// 2. use while loop to keep incrementing money earned with prompt using currTool.payout 
// use currTool.payout to increase totalEarned until it hits the following if-statement! 
// totalEarned += currTool.payout;

    // 3. if (currTool.name === "teeth" && totalEarned === 5) 

        // const userAction = prompt("You can now upgrade to the next tool!", "Yes or No?"); 

            // if (userAction === "yes")

                // reassign currTool equal to next Tool-Object in the array! 
                // THEN decrease totalEarned by the currTool.cost 
                // totalEarned -= currTool.cost; 
    
    // 4. copy and paste the logic for EVERY tool! START! 
                


