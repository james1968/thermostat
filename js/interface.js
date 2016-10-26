$(document).ready(function() {
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature)
  }
  updateTemperature()
  $('#temperature-up').on('click', function() {
    thermostat.increaseTemperature();
    updateTemperature()
  })
  $('#temperature-down').click(function() {
    thermostat.decreaseTemperature();
    updateTemperature()
  })
})
