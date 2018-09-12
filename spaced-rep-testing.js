'use strict';

/* -------------------------------- LINKED LIST CLASS --------------------------- */
class _Node {
  constructor(value, next=null){
    this.value = value;
    this.next = null;
  }
}


class LinkedList {
  constructor(){
    this.head = null;
  }

  insertFirst(value){
    const newNode = new _Node(value);

    if(!this.head){
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  removeFirst(){
    if(this.head){
      this.head = this.head.next;
    } else {
      this.head.value = null;
      this.head.next = null;
    }
  }

  insertLast(value){
    const newNode = new _Node(value);

    if(!this.head){
      this.head = newNode;
    } else {
      let currentNode = this.head;
      let nextNode = this.head.next;
      while(currentNode.next !== null){
        currentNode = nextNode;
        nextNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  }
}



/* ----------------- DUMMY QUESTION DATA ------------------ */
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


/* ----------------- DUMMY USER DATA ------------------ */

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






/* ----------------- HERE'S THE ALGORITHM ------------------ */

//takes in current user data, outputs nothing but updates the question list
function generateNewQuestions(userData, startIndex = 0){
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
  for(let i = startIndex; i < userData.questionLevels.length + startIndex; i++){
    const questionIndex = i % northAmerica.length;
    if(userData.questionLevels[questionIndex] === lowestLevel){
      questionList.insertLast(northAmerica[questionIndex]);
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


/* ----------------------- THIS IS THE MAIN FUNCTION THAT CALLS ALL THE OTHER FUNCTIONS ------------------------ */
function handleAnswer(userData, questNum, isCorrect){
  if(isCorrect === true){
    userData.questionLevels[questNum]++;
    addQuestion(userData);
    currentListState.removeFirst();
    if(currentListState.head === null){
      generateNewQuestions(userData, questNum + 1);
    }
  } else if (isCorrect === false) {
    userData.questionLevels[questNum] = 1;
    generateNewQuestions(userData);
  }
}




let currentListState = new LinkedList();

function testCorrectPath1(){
  console.log('-------------------------------------------------------------------------------------------------------------------------------------------' +
  '-------------------------------------------------------------------------------------------------------------------------------------------' + 
  '-------------------------------------------------------------------------------------------------------------------------------------------');

  generateNewQuestions(initialUserData);
  console.log('INITIAL LEVELS:',initialUserData.questionLevels);
  console.log('INITIALIZE LIST : ', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData, 0, true);
  console.log('QUESTION LEVELS AFTER Q1 CORRECT:',initialUserData.questionLevels);
  console.log('LIST AFTER Q1 CORRECT: ', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData, 1, true);
  console.log('QUESTION LEVELS AFTER Q2 CORRECT:',initialUserData.questionLevels);
  console.log('LIST AFTER Q2 CORRECT:', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData, 2, true);
  console.log('QUESTION LEVELS AFTER Q3 CORRECT: ',initialUserData.questionLevels);
  console.log('LIST AFTER Q3 CORRECT:', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData, 3, true);
  console.log('QUESTION LEVELS AFTER Q4 CORRECT: ',initialUserData.questionLevels);
  console.log('LIST AFTER Q4 CORRECT:', JSON.stringify(currentListState, null, 2));
}


function testCorrectPath2(){
  console.log('-------------------------------------------------------------------------------------------------------------------------------------------' +
  '-------------------------------------------------------------------------------------------------------------------------------------------' + 
  '-------------------------------------------------------------------------------------------------------------------------------------------');

  generateNewQuestions(initialUserData2);
  console.log('QUESTION LEVELS BEFORE Q1:',initialUserData2.questionLevels);
  console.log('LIST BEFORE Q1: ', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData2, 0, true);
  console.log('QUESTION LEVELS AFTER Q1 CORRECT:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q1 CORRECT: ', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData2, 1, true);
  console.log('QUESTION LEVELS AFTER Q2 CORRECT:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q2 CORRECT:', JSON.stringify(currentListState, null, 2));


  handleAnswer(initialUserData2, 2, true);
  console.log('QUESTION LEVELS AFTER Q3 CORRECT:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q3 CORRECT:', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData2, 3, false);
  console.log('QUESTION LEVELS AFTER Q4 WRONG:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q4 WRONG:', JSON.stringify(currentListState, null, 2));

  handleAnswer(initialUserData2, 3, true);
  console.log('QUESTION LEVELS AFTER Q5 CORRECT:',initialUserData2.questionLevels);
  console.log('LIST AFTER Q5 CORRECT:', JSON.stringify(currentListState, null, 2));
}

// testCorrectPath1();
testCorrectPath2();

