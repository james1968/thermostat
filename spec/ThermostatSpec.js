'use strict';

describe('Thermostat', function() {
    // var Thermostat = require('./src/Thermostat.js');
    var thermostat;

    beforeEach(function() {
        thermostat = new Thermostat();
    });

    describe('defaults', function() {
        it('defaults to 20 degrees', function() {
        expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE);
       });

       it('defaults to normal mode', function() {
        expect(thermostat.powerSaving()).toEqual(false);
       });
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

    describe('Power saving mode', function() {
        
        it('can be switched on', function() {
            thermostat.powerSavingModeOn();
            expect(thermostat._powerSaving()).toEqual(true);
        });
        
        it('can be switched off', function() {
            thermostat.powerSavingModeOff();
            expect(thermostat._powerSaving()).toEqual(false);
        });
    });
});