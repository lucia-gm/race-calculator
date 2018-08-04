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
calculator.ui.calculateButton = document.querySelector('#calculate-button');


//Functions
calculator.getFinalTime = function() {
  calculator.distance = document.querySelector('input[name="distance"]:checked').value;
  let paceMinSelect = document.querySelector('#pace-time .min');
  let paceSecSelect = document.querySelector('#pace-time .sec');
  calculator.paceMinutes = getSelectedOption(paceMinSelect);
  calculator.paceSeconds = getSelectedOption(paceSecSelect);
  calculator.finalTime = Number(calculator.paceSeconds) + Number(calculator.paceMinutes) * calculator.distance;
  console.log(calculator.finalTime);
}


// Event Listeners
window.onload = calculator.createTimeOptions;

calculator.ui.calculateButton.addEventListener('click', function() {
  calculator.getFinalTime();
})