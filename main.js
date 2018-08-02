const calculator = {
  ui: {},
  createTimeOptions: function() {
    createHourOptions();
    createMinSecOptions();
  }
}

calculator.ui.hourSelect = document.querySelector('.hour');
calculator.ui.minSelect = document.querySelectorAll('.min');
calculator.ui.secSelect = document.querySelectorAll('.sec');


window.onload = calculator.createTimeOptions;