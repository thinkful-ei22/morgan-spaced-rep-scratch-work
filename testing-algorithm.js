'use strict';
const LinkedList = require('./linkedList');



const northAmerica = [
  {
    id: '000000000000000000000001',
    url: 'http://www.freeworldmaps.net/northamerica/canada/location.gif', 
    country: 'canada'
  },
  {
    id: '000000000000000000000002',
    url: 'http://www.freeworldmaps.net/northamerica/united-states/location.gif', 
    country: 'united states of america'
  },
  {
    id: '000000000000000000000003',
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Mexico_in_the_world_%28W3%29.svg', 
    country: 'mexico'
  },
  {
    id: '000000000000000000000004',
    url: 'http://www.freeworldmaps.net/centralamerica/cuba/location.gif', 
    country: 'cuba'
  },
  {
    id: '000000000000000000000005',
    url: 'https://i3.wp.com/maps.maphill.com/bahamas/location-maps/savanna-style-map/highlighted-continent/savanna-style-location-map-of-bahamas-highlighted-continent.jpg?fit=450,300&zoom=2&strip=all', 
    country: 'bahamas'
  },
  {
    id: '000000000000000000000006',
    url: 'http://maps.maphill.com/el-salvador/location-maps/savanna-style-map/savanna-style-location-map-of-el-salvador.jpg', 
    country: 'el salvador'
  },
  {
    id: '000000000000000000000007',
    url: 'http://maps.maphill.com/haiti/location-maps/gray-map/highlighted-continent/gray-location-map-of-haiti-highlighted-continent.jpg', 
    country: 'Haiti'
  },
  {
    id: '000000000000000000000008',
    url: 'https://www.liveandinvestoverseas.com/wp-content/uploads/2015/08/map-of-panama.jpg', 
    country: 'panama'
  },
  {
    id: '000000000000000000000009',
    url: 'http://maps.maphill.com/jamaica/location-maps/savanna-style-map/highlighted-continent/savanna-style-location-map-of-jamaica-highlighted-continent.jpg', 
    country: 'jamaica'
  },
  {
    id: '000000000000000000000010',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Greenland_in_the_world_%28W3%29.svg/2000px-Greenland_in_the_world_%28W3%29.svg.png',
    country: 'greenland'
  }
];



const initialUserData = {
  id: '111111111111111111111111',
  username: 'testuser',
  questionLevels: ['', '', '', '', '', '', '', '', '', '']  //each index corresponds to question1, question2, question3,...
};

const initialUserData2 = {
  id: '111111111111111111111111',
  username: 'testuser',
  questionLevels: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]  //each index corresponds to question1, question2, question3,...
};


//takes in current user data, outputs nothing but updates the question list
function generateNewQuestions(userData){
  const questionList = new LinkedList();

  //initilaize question 1 at Level-1
  if(userData.questionLevels[0] === ''){
    userData.questionLevels[0] = 1;
  }

  //check for lowest level
  let lowestLevel = 5;
  for(let i = 0; i < userData.questionLevels.length; i++){
    if(userData.questionLevels[i] !== '' && userData.questionLevels[i] < lowestLevel){
      lowestLevel = userData.questionLevels[i];
    }
  }

  //for all questions at the lowest level, insert them into question list
  for(let i = 0; i < userData.questionLevels.length; i++){
    if(userData.questionLevels[i] === lowestLevel){
      questionList.insertFirst(northAmerica[i]);
    }
  }

  //update the state with the question list
  currentListState = questionList;
}



function addQuestion(userData){

  //add new question if all levels are above 1
  const addNewQuestion = !userData.questionLevels.find(val => typeof val === 'number' && val < 2); //Is there NOT a question level that is less than 2?
  if(addNewQuestion){
    for(let i = 0; i < userData.questionLevels.length; i++){
      if(userData.questionLevels[i] === ''){
        userData.questionLevels[i] = 1;
        break;
      }
    }
  }
}



function handleAnswer(userData, questNum, isCorrect){
  if(isCorrect === true){
    userData.questionLevels[questNum]++;
    addQuestion(userData);
    currentListState.removeFirst();
    if(currentListState.head === null){
      generateNewQuestions(userData);
    }
  } else if (isCorrect === false) {
    userData.questionLevels[questNum] = 1;
    generateNewQuestions(userData);
  }
}

let currentListState = new LinkedList();

function testCorrectPath1(){
  console.log('INITIAL LEVELS:',initialUserData.questionLevels);
  console.log('INITIALIZE LIST : ', JSON.stringify(currentListState, null, 2));

  generateNewQuestions(initialUserData);
  console.log('QUESTION LEVELS BEFORE Q1',initialUserData.questionLevels);
  console.log('LIST BEFORE Q1: ', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData, 0, true);
  console.log('QUESTION LEVELS AFTER Q1:',initialUserData.questionLevels);
  console.log('LIST AFTER Q1: ', JSON.stringify(currentListState, null, 2));


  //end of list, so generate new questions
  generateNewQuestions(initialUserData);
  console.log('QUESTION LEVELS BEFORE Q2',initialUserData.questionLevels);
  console.log('LIST BEFORE Q2: ', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData, 1, true);
  console.log('QUESTION LEVELS AFTER Q2:',initialUserData.questionLevels);
  console.log('LIST AFTER Q2', JSON.stringify(currentListState, null, 2));


  generateNewQuestions(initialUserData);
  console.log('QUESTION LEVELS BEFORE Q3',initialUserData.questionLevels);
  console.log('LIST BEFORE Q3: ', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData, 2, true);
  console.log('QUESTION LEVELS AFTER Q3:',initialUserData.questionLevels);
  console.log('LIST AFTER Q3', JSON.stringify(currentListState, null, 2));

  
  generateNewQuestions(initialUserData);
  console.log('QUESTION LEVELS BEFORE Q3',initialUserData.questionLevels);
  console.log('LIST BEFORE Q3: ', JSON.stringify(currentListState, null, 2));
}


function testCorrectPath2(){
  console.log('INITIAL LEVELS:',initialUserData2.questionLevels);
  console.log('INITIALIZE LIST : ', JSON.stringify(currentListState, null, 2));

  generateNewQuestions(initialUserData2);
  console.log('QUESTION LEVELS BEFORE Q1',initialUserData2.questionLevels);
  console.log('LIST BEFORE Q1: ', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData2, 9, true);
  console.log('QUESTION LEVELS AFTER Q1:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q1: ', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData2, 8, true);
  console.log('QUESTION LEVELS AFTER Q2:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q2', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData2, 7, true);
  console.log('QUESTION LEVELS AFTER Q3:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q3', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData2, 6, false);
  console.log('QUESTION LEVELS AFTER Q4:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q4', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData2, 6, true);
  console.log('QUESTION LEVELS AFTER Q5:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q5', JSON.stringify(currentListState, null, 2));
}

// testCorrectPath1();
testCorrectPath2();





//INPUT: array of questions, userData.questionLevels, correct