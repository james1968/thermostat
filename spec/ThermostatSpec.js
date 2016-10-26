'use strict';

describe('Thermostat', function() {

    var thermostat;

    it('defaults to 20 degrees', function() {
        thermostat = new Thermostat();
        expect(thermostat.temperature()).toEqual(20);
    });

});