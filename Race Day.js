let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;

let runnersAge = 45;

if(runnersAge > 18 && registeredEarly) {
    raceNumber+=1000;

    console.log(`Runner ${raceNumber}: Your race starts at 9:30am`);
} else if(runnersAge > 18 && !registeredEarly) {
    console.log('Your race starts at 11:00am');
} else if(runnersAge < 18){
    console.log('Your race starts at 12:30pm');
} else if(runnersAge = 18) {
    console.log('Please see the registration desk');
}