//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
function createManager(managerName, managerAge, currentTeam, trophiesWon) {
  var Manager = [managerName, managerAge, currentTeam, trophiesWon];

  return Manager;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(a) {
  if (a.length == 0) {
    return null;
  }
  let form1 = {
    defender: a[0],
    midfield: a[1],
    forward: a[2],
  };
  return form1;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year) {
  let p = [];
  for (let i = 0; i < players.length; i++) {
    if (year == players[i].debut) {
      p.push(players[i]);
    }
  }
  return p;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position) {
  let p = [];
  for (let i = 0; i < players.length; i++) {
    if (position == players[i].position) {
      p.push(players[i]);
    }
  }
  return p;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName) {
  let p = [];
  if (awardName == null) {
    return [];
  }
  for (let i = 0; i < players.length; i++) {
    for (let j = 0; j < players[i].awards.length; j++) {
      if (awardName == players[i].awards[j].name) {
        p.push(players[i]);
      }
    }
  }
  return p;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes) {
  let p = [];
  // if(awardName=="The Best FIFA Men's Player" && noOfTimes==2){
  //   players[];
  // }
  // if (awardName == null) {
  //   return [];
  // }
  for (let i = 0; i < players.length; i++) {
    let counter = 0;
    for (let j = 0; j < players[i].awards.length; j++) {
      if (awardName == players[i].awards[j].name) {
        counter += 1;
      }
    }
    if (counter == noOfTimes) {
      p.push(players[i]);
    }
    counter = 0;
  }
  return p;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country) {
  let p = [];

  for (let i = 0; i < players.length; i++) {
    if (players[i].country == country) {
      for (let j = 0; j < players[i].awards.length; j++) {
        if (awardName == players[i].awards[j].name) {
          p.push(players[i]);
          break;
        }
      }
    }
  }
  return p;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age) {
  let p = [];

  for (let i = 0; i < players.length; i++) {
    if (
      players[i].awards.length == noOfAwards &&
      players[i].team == team &&
      players[i].age == age
    ) {
      p.push(players[i]);
    }
  }
  return p;
}

//Progression 9 - Sort players in descending order of their age
function SortByAge() {
  p = [];
  for (let i = 0; i < players.length - 1; i++) {
    for (let j = i + 1; j < players.length - i - 1; j++) {
      if (players[i] < players[j]) {
        // players type;
      }
    }
  }
  return p;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order
