const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairsBtn = document.getElementById('show-millionaires');
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
    money: Math.floor(Math.random() * 10000000)
  };
  addData(newUser);
}

// Add new Obj to data arr
function addData(obj) {
  data.push(obj);

  updateDom();
}

// Update DOM
function updateDom(providedData = data) {
  // Clear main div
  main.innerHTML = '<h2><strong>Person</strong> Wealth</h2>';

  providedData.forEach(item => {
    const element = document.createElement('div');
    element.classList.add('person');
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money
function formatMoney(number) {
  return    '$'+number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'); // 12,345.67
}

// Double the money
function doubleMoney() {
  data = data.map(user => {
    return { ...user, money: user.money * 2 };
  });
  updateDom();
}

// Sort by richest
function sortByRichest() {
  console.log('clicked');
  data.sort((a, b) => b.money - a.money);
  updateDom();
}

// Show millionair
function showMillionair(){
 data=data.filter(item=>item.money>1000000)
    updateDom()
}

// Calculate Wealth
function calculateWealth(){
    const wealth = data.reduce((a,b)=>(a+=b.money),0)
    
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML=`<h3>Total Wealth: <strong>${formatMoney(wealth)}</strong></h3>`
    main.appendChild(wealthEl);
}

// Event Listeners
addUserBtn.addEventListener('click', getRandomUser);
doubleBtn.addEventListener('click', doubleMoney);
sortBtn.addEventListener('click', sortByRichest);
showMillionairsBtn.addEventListener('click',showMillionair)
calculateWealthBtn.addEventListener('click',calculateWealth)
