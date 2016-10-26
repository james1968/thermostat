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
        thermostat.up()
        expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE + 1);
    });

    it('decrease temperature with down function', function() {
        thermostat.down()
        expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE - 1);
    });

    it('minimum temperature is 10 degrees', function() {
        var i;
        for (i = 1; i < 11; i++) {
            thermostat.down();
        }
        expect(function() { thermostat.down(); }).toThrowError('Minimum temperature reached: 10 degrees')
    });

});