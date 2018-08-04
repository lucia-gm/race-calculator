function createHourOptions() {
  for (let i = 0; i < 11; i++) {
    const hourOption = document.createElement('option');

    hourOption.text = i + ' h';
    hourOption.value = i * 3600;

    calculator.ui.hourSelect.appendChild(hourOption);
  }
}


function createMinSecOptions() {
  for (let i = 0; i < 60; i++) {
    const minOption = document.createElement('option');
    const secOption = document.createElement('option');

    minOption.text = i + ' min';
    secOption.text = i + ' sec';
    minOption.value = i * 60;
    secOption.value = i;

    calculator.ui.minSelect.forEach(function(select) {
      select.appendChild(minOption.cloneNode(true));
    })

    calculator.ui.secSelect.forEach(function(select) {
      select.appendChild(secOption.cloneNode(true));
    }) 
  }
}


function getSelectedOption(select) {
    return select.options[select.selectedIndex].value;
}

// Function from https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  
  return hDisplay + mDisplay + sDisplay; 
}