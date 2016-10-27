"use strict";

function Thermostat() {
    this._DEFAULT_TEMPERATURE = 20;
    this._current_temperature = this._DEFAULT_TEMPERATURE;
    this._powerSaving = true;
    this._POWER_SAVING_ON_MAX_TEMP = 25;
    this._POWER_SAVING_OFF_MAX_TEMP = 32;
};

Thermostat.prototype.temperature = function() {
    return this._current_temperature;
};

Thermostat.prototype.up = function() {
    if (this._powerSaving === true && this._current_temperature === this._POWER_SAVING_ON_MAX_TEMP) {
        throw new Error('Power saving on - maximum temperature reached: 25 degrees');
    } else if (this._powerSaving === false && this._current_temperature === this._POWER_SAVING_OFF_MAX_TEMP) {
        throw new Error('Power saving off - maximum temperature reached: 32 degrees');
    }
    return this._current_temperature = this._current_temperature + 1;
};

Thermostat.prototype.down = function() {
    if (this._current_temperature === 10) {
        throw new Error('Minimum temperature reached: 10 degrees')
    }
    return this._current_temperature = this._current_temperature - 1;
};

Thermostat.prototype.powerSavingOff = function() {
    this._powerSaving = false;
};

Thermostat.prototype.powerSavingOn = function() {
    if (this._current_temperature > this._POWER_SAVING_ON_MAX_TEMP) {
        this._current_temperature = this._POWER_SAVING_ON_MAX_TEMP;
    }
    this._powerSaving = true;
};

Thermostat.prototype.reset = function() {
    this._current_temperature = this._DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUse = function() {
    if (this._current_temperature > 24 )  {
        return 'high-usage';
    } else if (this._current_temperature > 18 ) {
        return 'medium-usage';
    } else {
        return 'low-usage';
    }
};

// module.exports = Thermostat;