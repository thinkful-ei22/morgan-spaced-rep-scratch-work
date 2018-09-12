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

const mapUrls = [
  //North America
  /* Antigua and Barbuda, Bahamas, Barbados, Belize, Canada, Costa Rica, Cuba, Dominica
  Dominican Republic, El Salvador, Grenada, Guatemala, Haiti, Honduras, Jamaica
  Mexico, Nicaragua, Panama, Saint Kitts and Nevis, Saint Lucia, Saint Vincent and the Grenadines
  Trinidad and Tobago, United States of America */
  {url: 'http://www.freeworldmaps.net/northamerica/canada/location.gif', country: 'canada'},
  {url: 'http://www.freeworldmaps.net/northamerica/united-states/location.gif', country: 'united states of america'},
  {url: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Mexico_in_the_world_%28W3%29.svg', country: 'mexico'},
  {url: 'http://www.freeworldmaps.net/centralamerica/cuba/location.gif', country: 'cuba'},
  {url: 'http://static.maphill.com/12/img/t.gif', country: 'bahamas'},
  {url: 'http://maps.maphill.com/el-salvador/location-maps/savanna-style-map/savanna-style-location-map-of-el-salvador.jpg', country: 'el salvador'},
  {url: 'http://maps.maphill.com/haiti/location-maps/gray-map/highlighted-continent/gray-location-map-of-haiti-highlighted-continent.jpg', country: 'Haiti'},
  {url: 'https://www.liveandinvestoverseas.com/wp-content/uploads/2015/08/map-of-panama.jpg', country: 'panama'},
  {url: 'http://maps.maphill.com/jamaica/location-maps/savanna-style-map/highlighted-continent/savanna-style-location-map-of-jamaica-highlighted-continent.jpg', country: 'jamaica'},

  //South America

  //Africa

  //Europe

  //Asia

  //Oceania
  /* American Samoa, Australia, Cook Islands, Fiji, French Polynesia, Guam,
  Howland Island, Marshall Islands, Federated States of Micronesia, Nauru,
  New Caledonia, New Zealand, Niue, Norfolk Island, Northern Mariana Islands,
  Palau, Papua New Guinea, Pitcairn Islands, Samoa, Solomon Islands, Tokelau,
  Tonga, Tuvalu, Vanuatu, Wallis and Futuna */
  'http://www.freeworldmaps.net/australia/location.gif',


  //Antarctica
  'https://upload.wikimedia.org/wikipedia/commons/b/b3/Antarctica_in_the_world_%28red%29_%28W3%29.svg'
];


const initialUserData = {
  id: '111111111111111111111111',
  username: 'testuser',
  questionLevels: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6
    // {'000000000000000000000002': 1, included: false},
    // {'000000000000000000000003': 1, included: false},
    // {'000000000000000000000004': 1, included: false},
    // {'000000000000000000000005': 1, included: false},
    // {'000000000000000000000006': 1, included: false},
    // {'000000000000000000000007': 1, included: false},
    // {'000000000000000000000008': 1, included: false},
    // {'000000000000000000000009': 1, included: false},
    // {'000000000000000000000010': 1, included: false}
  ]
};

let currentListState;
console.log(JSON.stringify(currentListState, null, 2));


function generateQuestions(userData){
  const questionList2 = new LinkedList();

  if(userData.questionLevels[0] > 5){
    userData.questionLevels[0] = 5;
  }

  for(let i = 5; i > 0; i--){
    for(let j = 0; j < userData.questionLevels.length; j++){
      if(userData.questionLevels[j] >= i && userData.questionLevels[j] < 6){
        questionList2.insertQuestion(northAmerica[j]);
      }
    }
  }

  return questionList2;
}

currentListState = generateQuestions(initialUserData);
console.log(JSON.stringify(currentListState, null, 2));


function handleAnswer(questNum, correct){
  if(correct === false){
    initialUserData.questionLevels[questNum] = 5;
    currentListState = generateQuestions(initialUserData);
    
  } else if (initialUserData.questionLevels[questNum] === 5) {
    if(initialUserData.questionLevels[questNum + 1] === 6){
      initialUserData.questionLevels[questNum]--;
      initialUserData.questionLevels[questNum + 1] = 5;
      currentListState = generateQuestions(initialUserData);
    }
  } else {
    initialUserData.questionLevels[questNum]--;
  }
}

handleAnswer(0, true);

// currentListState = generateQuestions(initialUserData);
console.log(JSON.stringify(currentListState, null, 2));


handleAnswer(1, true);

console.log(JSON.stringify(currentListState, null, 2));


//q1, q2, q1





// console.log('ORIGINAL USER DATA ----', userData);

// //questionList =    1 -> 2 -> 1

// const questionList = new LinkedList();

// //insert question 1
// // questionList.insertEmpty();
// questionList.insertQuestion(northAmerica[0]);

// //if correct, skip one space, increment question-1 level
// userData.questionLevels[0 + 1].included = true;
// // questionList.insertEmpty();
// userData.questionLevels[0]['000000000000000000000001']++;
// questionList.insertLast(northAmerica[1]);
// questionList.insertLast(northAmerica[0]);


// //if correct question 2, skip one space, increment question-2 level
// userData.questionLevels[1 + 1].included = true;
// // questionList.insertEmpty();
// userData.questionLevels[1]['000000000000000000000002']++;
// questionList.insertLast(northAmerica[2]);
// questionList.insertLast(northAmerica[1]);
// questionList.insertLast(northAmerica[0]);

// //question 1 will display again.  If correct, insert 2 empty spaces and increment question-1 level
// userData.questionLevels[0]['0000000000000000000000001']++;
// // questionList.insertEmpty();
// // questionList.insertEmpty();
// questionList.insertLast(northAmerica[2]);
// questionList.insertLast(northAmerica[1]);
// questionList.insertLast(northAmerica[0]);

// //question 3 will display.  If correct, insert 1 empty space and increment question-3 level. then increment questionsIncluded
// userData.questionLevels[2 + 1].included = true;
// userData.questionLevels[2]['000000000000000000000003']++;
// // questionList.insertEmpty();
// questionList.insertLast(northAmerica[4]);
// questionList.insertLast(northAmerica[3]);
// questionList.insertLast(northAmerica[2]);
// questionList.insertLast(northAmerica[1]);
// questionList.insertLast(northAmerica[0]);


// console.log('AFTER QUESTION 3 CORRECT ------', userData);

// console.log('QUESTION LIST -------- ', JSON.stringify(questionList, null, 2));


// /* 
// null
// |q1| -> null
// q1 -> |q2| -> null
// q1 -> q2 -> |q1| -> q2 -> q3 -> null
// q1 -> q2 -> q1 -> |q2| -> q3 -> null
// q1 -> q2 -> q1 -> q2 -> |q3| -> null
// q1 -> q2 -> q1 -> q2 -> q3 -> |q1| -> q2 -> q3 -> q4 -> null
// q1 -> q2 -> q1 -> q2 -> q3 -> q1 -> |q2| -> q3 -> q4 -> null
// q1 -> q2 -> q1 -> q2 -> q3 -> q1 -> q2 -> |q3| -> q4 -> null
// q1 -> q2 -> q1 -> q2 -> q3 -> q1 -> q2 -> q3 -> |q4| -> null
// q1 -> q2 -> q1 -> q2 -> q3 -> |q1| -> q2 -> q3 -> q4 -> 
// */

// /* 1, 2, 3, 4, 5, 6 */