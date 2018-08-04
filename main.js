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



//Functions
calculator.getFinalTime = function() {
  calculator.distanceInMiles = document.querySelector('input[name="distance"]:checked').value;
  let distance;
  if (calculator.ui.measureInMiles.checked) {
    distance = calculator.distanceInMiles;
  } else {
    distance = calculator.distanceInMiles * 1.609344;
  }

  let paceMinSelect = document.querySelector('#pace-time .min');
  let paceSecSelect = document.querySelector('#pace-time .sec');
  calculator.paceMinutes = getSelectedOption(paceMinSelect);
  calculator.paceSeconds = getSelectedOption(paceSecSelect);
  calculator.finalTimeInSeconds = (Number(calculator.paceSeconds) + Number(calculator.paceMinutes)) * distance;
  calculator.finalTime = secondsToHms(calculator.finalTimeInSeconds);
  console.log(`You will finish the race in ${calculator.finalTime}.`);
}


// Event Listeners
window.onload = calculator.createTimeOptions;

calculator.ui.calculateButton.addEventListener('click', function() {
  calculator.getFinalTime();
  
})