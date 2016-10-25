'use strict'

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.increaseTemperature = function() {
  this.temperature += 1;
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
};
