var monday = document.getElementById('bar-mon');
var tuesday = document.getElementById('bar-tue');
var wednesday = document.getElementById('bar-wed');
var thursday = document.getElementById('bar-thu');
var friday = document.getElementById('bar-fri');
var saturday = document.getElementById('bar-sat');
var sunday = document.getElementById('bar-sun');

//monday mouseover 

var mondaySpent = document.getElementById("monday");
monday.addEventListener('mouseover', hoverMonday);
monday.addEventListener('mouseout', outMonday);

function hoverMonday() {
    mondaySpent.style.display = "block";
}

function outMonday() {
    mondaySpent.style.display = "none";
}

//tuesday mouseover

var tuesdaySpent = document.getElementById("tuesday");
tuesday.addEventListener('mouseover', hoverTuesday);
tuesday.addEventListener('mouseout', outTuesday);

function hoverTuesday() {
    tuesdaySpent.style.display = "block";
}

function outTuesday() {
    tuesdaySpent.style.display = "none";
}

//wednesday mouseover

var wednesdaySpent = document.getElementById("wednesday");
wednesday.addEventListener('mouseover', hoverWednesday);
wednesday.addEventListener('mouseout', outWednesday);

function hoverWednesday() {
    wednesdaySpent.style.display = "block";
}

function outWednesday() {
    wednesdaySpent.style.display = "none";
}

//thursday mouseover

var thursdaySpent = document.getElementById("thursday");
thursday.addEventListener('mouseover', hoverThursday);
thursday.addEventListener('mouseout', outThursday);

function hoverThursday() {
    thursdaySpent.style.display = "block";
}

function outThursday() {
    thursdaySpent.style.display = "none";
}

//friday mouseover

var fridaySpent = document.getElementById("friday");
friday.addEventListener('mouseover', hoverFriday);
friday.addEventListener('mouseout', outFriday);

function hoverFriday() {
    fridaySpent.style.display = "block";
}

function outFriday() {
    fridaySpent.style.display = "none";
}

//saturday mouseover

var saturdaySpent = document.getElementById("saturday");
saturday.addEventListener('mouseover', hoverSaturday);
saturday.addEventListener('mouseout', outSaturday);

function hoverSaturday() {
    saturdaySpent.style.display = "block";
}

function outSaturday() {
    saturdaySpent.style.display = "none";
}

//sunday mouseover

var sundaySpent = document.getElementById("sunday");
sunday.addEventListener('mouseover', hoverSunday);
sunday.addEventListener('mouseout', outSunday);

function hoverSunday() {
    sundaySpent.style.display = "block";
}

function outSunday() {
    sundaySpent.style.display = "none";
}