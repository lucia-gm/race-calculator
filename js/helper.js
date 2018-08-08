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
    return Number(select.options[select.selectedIndex].value);
}

// Function inspired by https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/37096512
function secondsToHms(d) {
  d = Number(d);
  let h = Math.floor(d / 3600);
  let m = Math.floor(d % 3600 / 60);
  let s = Math.floor(d % 3600 % 60);

  let hDisplay = h == 0 ? '' : (h < 10 ? `0${h}:` : `${h}:`);
  let mDisplay = m < 10 ? `0${m}:` : `${m}:`;
  let sDisplay = s < 10 ? `0${s}` : `${s}`;  

  return hDisplay + mDisplay + sDisplay;
}