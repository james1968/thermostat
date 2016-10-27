$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature());

function updateTemperature() {
  $('#temperature').text(thermostat.temperature());
}

$('#temp-up').click(function() {
  thermostat.up();
  updateTemperature();
});


$('#temp-down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#psm-on').click(function() {
  thermostat.powerSavingOn();
  $('#power-saving-status').text('ON')
  updateTemperature();
});

$('#psm-off').click(function() {
  thermostat.powerSavingOff();
  $('#power-saving-status').text('OFF')
  updateTemperature();
});

$('#reset').click(function() {
  thermostat.reset();
  updateTemperature();
});

})
