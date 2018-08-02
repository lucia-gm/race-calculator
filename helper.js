function createHourOptions() {
  for (let i = 0; i < 11; i++) {
    const hourOption = document.createElement('option');

    hourOption.text = i + ' h';
    hourOption.value = i;

    calculator.ui.hourSelect.appendChild(hourOption);
  }
}

function createMinSecOptions() {
  for (let i = 0; i < 60; i++) {
    const minOption = document.createElement('option');
    const secOption = document.createElement('option');

    minOption.text = i + ' min';
    secOption.text = i + ' sec';
    minOption.value = i;
    secOption.value = i;

    calculator.ui.minSelect.forEach(function(select) {
      select.appendChild(minOption.cloneNode(true));
    })

    calculator.ui.secSelect.forEach(function(select) {
      select.appendChild(secOption.cloneNode(true));
    }) 
  }
}