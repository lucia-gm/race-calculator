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
    calculator.unit = "mi";
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
  calculator.paceTimeInSeconds = calculator.paceSeconds + calculator.paceMinutes;
  calculator.finalTime = getTotalTime(calculator.paceTimeInSeconds, calculator.distance);

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
  calculator.displayResult(time);
}


calculator.displayResult = function() {
  const tableContainer = document.querySelector('table');
  const paceCalculated = Math.floor(calculator.paceTimeInSeconds);
  const pace5SecSlower = Math.floor(calculator.paceTimeInSeconds - 5);
  const pace5SecFaster = Math.floor(calculator.paceTimeInSeconds + 5);
  let pace = paceCalculated;
  let paceSlower = pace5SecSlower;
  let paceFaster = pace5SecFaster;

  let firstRow = document.createElement('tr');
  firstRow.innerHTML = 
    `<th>Distance(${calculator.unit})</th>
    <th>${secondsToHms(paceSlower)}/${calculator.unit}</th>
    <th>${secondsToHms(pace)}/${calculator.unit}</th>
    <th>${secondsToHms(paceFaster)}/${calculator.unit}</th>`;
  tableContainer.append(firstRow);
  
  for (let row = 1; row < calculator.distance; row++) {
    let gridRow = document.createElement('tr');
    gridRow.innerHTML = `<th>${row}</th><td>${secondsToHms(paceSlower)}</td><td>${secondsToHms(pace)}</td><td>${secondsToHms(paceFaster)}</td>`;
    tableContainer.append(gridRow);
    pace += paceCalculated;
    paceSlower += pace5SecSlower;
    paceFaster += pace5SecFaster;
  }
  
  let lastRow = document.createElement('tr');
  let distanceName = document.querySelector('input[name="distance"]:checked').id;

  lastRow.innerHTML = 
    `<th>${distanceName}</th>
    <td>${getTotalTime(pace5SecSlower, calculator.distance)}</td>
    <td>${getTotalTime(paceCalculated, calculator.distance)}</td>
    <td>${getTotalTime(pace5SecFaster, calculator.distance)}</td>`;
  tableContainer.append(lastRow);
}


// Event Listeners
window.onload = calculator.createTimeOptions;

calculator.ui.calculateButton.addEventListener('click', calculator.getTimeRequested);
