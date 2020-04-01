const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairsBtn = document.getElementById('show-millionairs');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');

let data = [];

// Fetch random users and add money
getRandomUser();
getRandomUser();
getRandomUser();

async function getRandomUser() {
  const URL = 'https://randomuser.me/api';
  const res = await fetch(URL);
  const data = await res.json();

  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000)
  };
  addData(newUser);
}

// Add new Obj to data arr
function addData(obj) {
  data.push(obj);
}
