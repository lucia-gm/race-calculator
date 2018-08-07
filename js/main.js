const calculator = {
  ui: {},
  createTimeOptions: function() {
    createHourOptions();
    createMinSecOptions();
  }
}

// DOM Selectors
calculator.ui.hourSelect = document.querySelector('.hour');
calculator.ui.minSelect = document.querySelectorAll('.min');
calculator.ui.secSelect = document.querySelectorAll('.sec');
calculator.ui.measureInMiles = document.querySelector('#miles');
calculator.ui.measureInKm = document.querySelector('#km');
calculator.ui.calculateButton = document.querySelector('#calculate-button');


// Logical Variables
calculator.distance;
calculator.unit;
let option='pace';


//Functions
calculator.getDistance = function() {
  calculator.distanceInMiles = document.querySelector('input[name="distance"]:checked').value;

  if (calculator.ui.measureInMiles.checked) {
    calculator.distance = calculator.distanceInMiles;
    calculator.unit = "mile";
  } else {
    calculator.distance = calculator.distanceInMiles * 1.609344;
    calculator.unit = "km";
  }

  return calculator.distance;
}


calculator.getFinalTime = function() {
  let paceMinSelect = document.querySelector('#pace-time .min');
  let paceSecSelect = document.querySelector('#pace-time .sec');

  calculator.paceMinutes = getSelectedOption(paceMinSelect);
  calculator.paceSeconds = getSelectedOption(paceSecSelect);
  calculator.finalTimeInSeconds = (calculator.paceSeconds + calculator.paceMinutes) * calculator.distance;
  calculator.finalTime = secondsToHms(calculator.finalTimeInSeconds);

  return `You will finish the race in ${calculator.finalTime}.`;
}


calculator.getPaceTime = function() {
  let finalHourSelect = document.querySelector('#final-time .hour');
  let finalMinSelect = document.querySelector('#final-time .min');
  let finalSecSelect = document.querySelector('#final-time .sec');

  calculator.finalHours = getSelectedOption(finalHourSelect);
  calculator.finalMinutes = getSelectedOption(finalMinSelect);
  calculator.finalSeconds = getSelectedOption(finalSecSelect);
  calculator.finalTimeInSeconds = calculator.finalHours + calculator.finalMinutes + calculator.finalSeconds;
  calculator.paceTimeInSeconds =  calculator.finalTimeInSeconds / calculator.distance;
  calculator.paceTime = secondsToHms(calculator.paceTimeInSeconds);

  return `You will have to run at ${calculator.paceTime} per ${calculator.unit}.`;
}


calculator.getTimeRequested = function() {
  calculator.getDistance();
  let time;
  
  if (option === 'pace') {
    time = calculator.getPaceTime();
  } else {
    time = calculator.getFinalTime();
  }
  console.log(time);
}


// Event Listeners
window.onload = calculator.createTimeOptions;

calculator.ui.calculateButton.addEventListener('click', calculator.getTimeRequested);
