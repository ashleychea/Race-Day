let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;
// registeredEarly = false; (If you set the variable to equal false and you change the age to > 18, ex. 67), the ouput changes to: Your race starts at 11:00am

// Used the variable const; the runnersAge can be changed at any time for a different output. 
const runnersAge = 45;

// Set the if statement and added an addition assignment to add the random raceNumber by 1000. 
if(runnersAge > 18 && registeredEarly) {
    raceNumber+=1000;
    
// Used else if statments to allow for more than two possible outcomes. Used a string interpolation (template literal) to print out the outcome in the console when the variable runnersAge is set.
    console.log(`Runner ${raceNumber}: Your race starts at 9:30am`);
} else if(runnersAge > 18 && !registeredEarly) {
    console.log('Your race starts at 11:00am');
} else if(runnersAge < 18){
    console.log('Your race starts at 12:30pm');
} else if(runnersAge = 18) {
    console.log('Please see the registration desk');
}

// Output: Runner (random number between 1000-1999): Your race starts at 9:30am.
