/* Variables */
const hourSelect = document.getElementById('final-time-hour');
const minSelect = document.querySelectorAll('.min');
const secSelect = document.querySelectorAll('.sec');


// Creates the different hour options to select
for (let i = 0; i < 11; i++) {
  const hourOption = document.createElement('option');

  hourOption.text = i + ' h';
  hourOption.value = i;
  
  hourSelect.appendChild(hourOption);
}

// Creates the different minutes and seconds options to select
for (let i = 0; i < 60; i++) {
  const minOption = document.createElement('option');
  const secOption = document.createElement('option');

  minOption.text = i + ' min';
  secOption.text = i + ' sec';
  minOption.value = i;
  secOption.value = i;

  minSelect.forEach(function(select) {
    select.appendChild(minOption.cloneNode(true));
  })

  secSelect.forEach(function(select) {
    select.appendChild(secOption.cloneNode(true));
  }) 
}
