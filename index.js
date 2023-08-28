let addHomeScore = document.getElementById("homeScore");
let addGuestScore = document.getElementById("guestScore")
let count = 0;
let points = 0


function addHomeScoreOne() {
    addHomeScore.textContent = count += 1;
}

function addHomeScoreTwo() {
    addHomeScore.textContent = count += 2;
}

function addHomeScoreThree() {
    addHomeScore.textContent = count +=3 ;
}

function addGuestScoreOne() {
    addGuestScore.textContent = points += 1;
}

function addGuestScoreTwo() {
    addGuestScore.textContent = points += 2;
}

function addGuestScoreThree() {
    addGuestScore.textContent = points += 3;
}