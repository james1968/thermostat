"use strict";

function Thermostat() {
    this._DEFAULT_TEMPERATURE = 20;
    this._current_temperature = this._DEFAULT_TEMPERATURE;
    this._POWER_SAVING = false;
};

Thermostat.prototype.temperature = function() {
    return this._current_temperature;
};

Thermostat.prototype.up = function() { 
    return this._current_temperature = this._current_temperature + 1;
};

Thermostat.prototype.down = function() {
    if(this._current_temperature === 10 ) {
        throw new Error('Minimum temperature reached: 10 degrees')
    }
    return this._current_temperature = this._current_temperature - 1;
};


// module.exports = Thermostat;