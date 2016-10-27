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

        it('defaults to power saving mode to be true aka on', function() {
            expect(thermostat._powerSaving).toEqual(true);
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

        beforeEach(function() {
            thermostat.powerSavingOff();
        });

        it('can be switched off', function() {
            expect(thermostat._powerSaving).toEqual(false);
        });

        it('if current temp is greater than power saving max temp, thermostat lowers to power saving max temp when power saving switched on', function() {
            var i;
            for (i = 1; i < (thermostat._POWER_SAVING_ON_MAX_TEMP - thermostat._DEFAULT_TEMPERATURE + 2); i++) {
                thermostat.up();
            }
            thermostat.powerSavingOn();
            expect(thermostat.temperature()).toEqual(thermostat._POWER_SAVING_ON_MAX_TEMP);
        });

        it('maximum temperature is 32 degrees at power saving mode off', function() {
            var i;
            for (i = 1; i < 13; i++) {
                thermostat.up();
            }
            expect(function() { thermostat.up(); }).toThrowError('Power saving off - maximum temperature reached: 32 degrees')
        });

        it('can be switched on', function() {
            thermostat.powerSavingOn();
            expect(thermostat._powerSaving).toEqual(true);
        });

        it('maximum temperature is 25 degrees at power saving mode on', function() {
            thermostat.powerSavingOn();
            var i;
            for (i = 1; i < 6; i++) {
                thermostat.up();
            }
            expect(function() { thermostat.up(); }).toThrowError('Power saving on - maximum temperature reached: 25 degrees')
        });



    });

    it('can be reset', function() {
        thermostat.up();
        thermostat.reset();
        expect(thermostat.temperature()).toEqual(thermostat._DEFAULT_TEMPERATURE)
    });


    describe('checking current energy use', function() {

        it('shows low-usage at lesser than 18 degrees', function() {
            var i;
            for (i = 1; i < 4; i++) {
                thermostat.down();
            }
            expect(thermostat.energyUse()).toEqual('low-usage')
        });

        it('shows medium-usage at lesser than 25 degrees', function() {
            thermostat.up();
            expect(thermostat.energyUse()).toEqual('medium-usage')
        });

        it('shows high-usage at >= 25 degrees', function() {
            thermostat.powerSavingOff();
            var i;
            for (i = 1; i < 7; i++) {
                thermostat.up();
            }
            expect(thermostat.energyUse()).toEqual('high-usage')
        });

    });


});
