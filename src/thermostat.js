'use strict'

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10
  this.temperature = 20
  this.powerSavingMode = true
  this.MAX_LIMIT_PSM_ON = 25
  this.MAX_LIMIT_PSM_OFF = 32
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
}

Thermostat.prototype.increaseTemperature = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
}

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.powerSavingMode = false
}

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.powerSavingMode = true
}

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  } else {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  };
};
