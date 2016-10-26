'use strict';

describe('Thermostat', function() {
    // var Thermostat = require('./src/Thermostat.js');
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });


    it('defaults to 20 degrees', function() {
        // thermostat = new Thermostat();
        expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE);
    });

    it('increase temperature with up function', function() {
        expect(thermostat.up()).toEqual(thermostat._DEFAULT_TEMPERATURE + 1);
    });
});