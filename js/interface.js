$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature());

  $("#image1").click(function(){
    $("#image1").fadeOut(3000);
  });
  $("#current-city").mouseover(function(){
    $("#image1").fadeIn(3000);
  });
  $("#temp-up").click(function(){
    var fontSize = parseInt($("#temperature").css("font-size"));
    fontSize = fontSize+10+"px";
    $('#temperature').css({'font-size':fontSize});
  })
  $("#temp-down").click(function(){
    var fontSize = parseInt($("#temperature").css("font-size"));
    fontSize = fontSize-10+"px";
    $('#temperature').css({'font-size':fontSize});
  })


  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
      $('#temperature').text(data.main.temp);
    })
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature());
    $('#temperature').attr('class', thermostat.energyUse());
  }

  $('#temp-up').click(function() {
    if ((thermostat.temperature() > 24) && (thermostat._powerSaving == true)) {
      alert("Power saving on - maximum temperature reached: 25 degrees")
    }
    else if ((thermostat.temperature() > 31) && (thermostat._powerSaving == false)) {
      alert("Power saving off - maximum temperature reached: 32 degrees")
    }
    thermostat.up();
    updateTemperature();
  });

  $('#temp-down').click(function() {
    if (thermostat.temperature() < 11) {
      alert("Minimum temperature reached: 10 degrees")
    }
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
