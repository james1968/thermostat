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

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature()
  })

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on')
  })

  $('#powersaving-off').click(function(){
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off')
  })

})
