// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *  Counter 1 has a closure where the function nested within the function counterMaker() has access to the local variable 'count' 
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 1 uses a closure. It is both a function nested within a function and references a local variable from it's parent 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter 1 offers a level of protection not available to counter 2. At first glance, counter 2 looks like it would accomplish what we need it too, but the variable 'count' can be adjusted through any script on our page. It serves a singular purpose so this leaves it exposed. Count 1, on the other hand, offers protection because the only adjustment can be made / inacted by it's nested function. 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  return Math.floor(Math.random() * 3); 
}

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(numInnings, callback){
  let gameScore = {'Home': 0, 'Away': 0}
  for (let i = 1; i <= numInnings; i++) {
    gameScore['Home'] += callback();
    gameScore['Away'] += callback();
  } return gameScore;
  }

console.log(finalScore(9, inning));  

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

function inning(){
  return Math.floor(Math.random() * 3); 
}

function getInningScore(cbInning) {
  let gameScore = {'Home': 0, 'Away': 0};
  gameScore['Home'] += cbInning();
  gameScore['Away'] += cbInning(); 
  return gameScore;
}

function scoreboard(getInningScore, inning, numInning) {
  let wordEnd = ['st', 'nd', 'rd', 'th'];
  const boxScore = [];
  let home = 0;
  let away = 0;
  for (var i = 1; i <= numInning; i++) {
    const currentInning = getInningScore(inning);
    home += currentInning['Home'];
    away += currentInning['Away'];
    if (i > 4) {
      boxScore.push(`${i + wordEnd[3]} Inning: Away ${away} - Home ${home}`)  
  } else {
    boxScore.push(`${i + wordEnd[i - 1]} Inning: Away ${away} - Home ${home}`)
  }
} return boxScore;

}

console.log('task 4', scoreboard(getInningScore, inning, 7));


