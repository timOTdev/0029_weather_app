$(document).ready(function() {
  // Accordion
  function close_accordion_section() {
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function(e) {
      // Grab current anchor value
      var currentAttrValue = $(this).attr('href');

      if($(e.target).is('.active')) {
          close_accordion_section();
      } else {
          close_accordion_section();

          // Add active class to section title
          $(this).addClass('active');
          // Open up the hidden content panel
          $('.accordion ' + currentAttrValue).slideDown(300).addClass('open'); 
      }

      e.preventDefault();
  });

  // Get city, state, latitude, and longitude
  // Form query string to send to Dark Sky
  $.getJSON("https://ipinfo.io/", function(response) {
      $("#location").html(response.city + ", " + response.region);
      var corsURL = "https://cors-anywhere.herokuapp.com/";
      var darkSkyKey = "1fdf13244735936bf1a2b5d6de49d125";
      var darkSkyAPI = "https://api.darksky.net/forecast/";
      var latitude = response.loc.split(",")[0];
      var longitude = response.loc.split(",")[1];
      var weatherURL = corsURL + darkSkyAPI + darkSkyKey + "/" + latitude + "," + longitude;

      // Make call to Dark Sky API
      function getData() {        
          // Render weather data
          $.getJSON(weatherURL, function(data) {                   
            // Get temperature
            var nowTemp = Math.round(data.currently.temperature);
            var twelveTemp = Math.round(data.hourly.data[11].temperature);
            var twentyFourTemp = Math.round(data.hourly.data[23].temperature);
            var thirtySixTemp = Math.round(data.hourly.data[35].temperature);
            var fourtyEightTemp = Math.round(data.hourly.data[47].temperature);
            var day1TempMin = Math.round(data.daily.data[1].temperatureMin);
            var day1TempMax = Math.round(data.daily.data[1].temperatureMax);
            var day2TempMin = Math.round(data.daily.data[2].temperatureMin);
            var day2TempMax = Math.round(data.daily.data[2].temperatureMax);
            var day3TempMin = Math.round(data.daily.data[3].temperatureMin);
            var day3TempMax = Math.round(data.daily.data[3].temperatureMax);
            var day4TempMin = Math.round(data.daily.data[4].temperatureMin);
            var day4TempMax = Math.round(data.daily.data[4].temperatureMax);
            var day5TempMin = Math.round(data.daily.data[5].temperatureMin);
            var day5TempMax = Math.round(data.daily.data[5].temperatureMax);
            var day6TempMin = Math.round(data.daily.data[6].temperatureMin);
            var day6TempMax = Math.round(data.daily.data[6].temperatureMax);
            var day7TempMin = Math.round(data.daily.data[7].temperatureMin);
            var day7TempMax = Math.round(data.daily.data[7].temperatureMax);
            $("#now-tempF").html(nowTemp + "\xB0F");              
            $("#12hr-tempF").html(twelveTemp + "\xB0F");              
            $("#24hr-tempF").html(twentyFourTemp + "\xB0F");              
            $("#36hr-tempF").html(thirtySixTemp+ "\xB0F");              
            $("#48hr-tempF").html(fourtyEightTemp + "\xB0F");
            $("#day1-tempF").html(day1TempMin + "\xB0 / " + day1TempMax + "\xB0");
            $("#day2-tempF").html(day2TempMin + "\xB0 / " + day2TempMax + "\xB0");
            $("#day3-tempF").html(day3TempMin + "\xB0 / " + day3TempMax + "\xB0");
            $("#day4-tempF").html(day4TempMin + "\xB0 / " + day4TempMax + "\xB0");
            $("#day5-tempF").html(day5TempMin + "\xB0 / " + day5TempMax + "\xB0");
            $("#day6-tempF").html(day6TempMin + "\xB0 / " + day6TempMax + "\xB0");
            $("#day7-tempF").html(day7TempMin + "\xB0 / " + day7TempMax + "\xB0");
            
            // Temperature Unit conversion 
            function convertToCelsius(temp) {                
              return Math.round((temp - 32) * (5/9));
            }
            function tempConversion() {
              $("#convert").click(function() {
                if ($("#now-tempF").is(":contains('\xB0F')")) {
                  $("#now-tempF").html(convertToCelsius(nowTemp) + "\xB0C");
                  $("#12hr-tempF").html(convertToCelsius(twelveTemp) + "\xB0C");
                  $("#24hr-tempF").html(convertToCelsius(twentyFourTemp) + "\xB0C");
                  $("#36hr-tempF").html(convertToCelsius(thirtySixTemp) + "\xB0C");
                  $("#48hr-tempF").html(convertToCelsius(fourtyEightTemp) + "\xB0C");
                  $("#day1-tempF").html(convertToCelsius(day1TempMin) + "\xB0 / " + convertToCelsius(day1TempMax) + "\xB0");
                  $("#day2-tempF").html(convertToCelsius(day2TempMin) + "\xB0 / " + convertToCelsius(day2TempMax) + "\xB0");
                  $("#day3-tempF").html(convertToCelsius(day3TempMin) + "\xB0 / " + convertToCelsius(day3TempMax) + "\xB0");
                  $("#day4-tempF").html(convertToCelsius(day4TempMin) + "\xB0 / " + convertToCelsius(day4TempMax) + "\xB0");
                  $("#day5-tempF").html(convertToCelsius(day5TempMin) + "\xB0 / " + convertToCelsius(day5TempMax) + "\xB0");
                  $("#day6-tempF").html(convertToCelsius(day6TempMin) + "\xB0 / " + convertToCelsius(day6TempMax) + "\xB0");
                  $("#day7-tempF").html(convertToCelsius(day7TempMin) + "\xB0 / " + convertToCelsius(day7TempMax) + "\xB0");
                } else {
                  $("#now-tempF").html(nowTemp + "\xB0F");
                  $("#12hr-tempF").html(twelveTemp + "\xB0F");
                  $("#24hr-tempF").html(twentyFourTemp + "\xB0F");
                  $("#36hr-tempF").html(thirtySixTemp + "\xB0F");
                  $("#48hr-tempF").html(fourtyEightTemp + "\xB0F");
                  $("#day1-tempF").html(day1TempMin + "\xB0 / " + day1TempMax + "\xB0");
                  $("#day2-tempF").html(day2TempMin + "\xB0 / " + day2TempMax + "\xB0");
                  $("#day3-tempF").html(day3TempMin + "\xB0 / " + day3TempMax + "\xB0");
                  $("#day4-tempF").html(day4TempMin + "\xB0 / " + day4TempMax + "\xB0");
                  $("#day5-tempF").html(day5TempMin + "\xB0 / " + day5TempMax + "\xB0");
                  $("#day6-tempF").html(day6TempMin + "\xB0 / " + day6TempMax + "\xB0");
                  $("#day7-tempF").html(day7TempMin + "\xB0 / " + day7TempMax + "\xB0");
                }
              })
            }
            tempConversion();

            // Get condition              
            $("#now-conditions").html(data.currently.summary);
            $("#12hr-conditions").html(data.hourly.data[11].summary);
            $("#24hr-conditions").html(data.hourly.data[23].summary);
            $("#36hr-conditions").html(data.hourly.data[35].summary);
            $("#48hr-conditions").html(data.hourly.data[47].summary);
            $("#day1-conditions").html(data.daily.data[1].summary);
            $("#day2-conditions").html(data.daily.data[2].summary);
            $("#day3-conditions").html(data.daily.data[3].summary);
            $("#day4-conditions").html(data.daily.data[4].summary);
            $("#day5-conditions").html(data.daily.data[5].summary);
            $("#day6-conditions").html(data.daily.data[6].summary);
            $("#day7-conditions").html(data.daily.data[7].summary);

            // Unix Time Conversion
            var twelveTime = new Date(data.hourly.data[11].time * 1000);
            var twentyFourTime = new Date(data.hourly.data[23].time * 1000);
            var thirySixTime = new Date(data.hourly.data[35].time * 1000);
            var fourtyEightTime = new Date(data.hourly.data[47].time * 1000);
            var day1Time = new Date(data.daily.data[1].time * 1000);
            var day2Time = new Date(data.daily.data[2].time * 1000);
            var day3Time = new Date(data.daily.data[3].time * 1000);
            var day4Time = new Date(data.daily.data[4].time * 1000);
            var day5Time = new Date(data.daily.data[5].time * 1000);
            var day6Time = new Date(data.daily.data[6].time * 1000);
            var day7Time = new Date(data.daily.data[7].time * 1000);
            $("#twelveTime").html(twelveTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
            $("#twentyFourTime").html(twentyFourTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
            $("#thirtySixTime").html(thirySixTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
            $("#fourtyEightTime").html(fourtyEightTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
            $("#day1-time").html(day1Time.toLocaleString([], {weekday: 'long'}));
            $("#day2-time").html(day2Time.toLocaleString([], {weekday: 'long'}));
            $("#day3-time").html(day3Time.toLocaleString([], {weekday: 'long'}));
            $("#day4-time").html(day4Time.toLocaleString([], {weekday: 'long'}));
            $("#day5-time").html(day5Time.toLocaleString([], {weekday: 'long'}));
            $("#day6-time").html(day6Time.toLocaleString([], {weekday: 'long'}));
            $("#day7-time").html(day7Time.toLocaleString([], {weekday: 'long'}));
            
            // Get icon
            var now = data.currently.icon;  
            var twelve = data.hourly.data[11].icon;
            var twentyFour = data.hourly.data[23].icon;
            var thirtySix = data.hourly.data[35].icon;
            var fourtyEight = data.hourly.data[47].icon;
            var day1Icon = data.daily.data[1].icon;
            var day2Icon = data.daily.data[2].icon;
            var day3Icon = data.daily.data[3].icon;
            var day4Icon = data.daily.data[4].icon;
            var day5Icon = data.daily.data[5].icon;
            var day6Icon = data.daily.data[6].icon;
            var day7Icon = data.daily.data[7].icon;
            
            var skyconRain = new Skycons({"color": "blue"});
            var skycons = new Skycons({"color": "orange"});

            function weatherIcon(condition, icon){
              skyconRain.add(document.getElementById("rain-icon"), Skycons.SLEET);
              skyconRain.play();

              if (condition === "clear-day") {
                skycons.add(icon, Skycons.CLEAR_DAY);
              } else if (condition === "clear-night") {
                skycons.add(icon, Skycons.CLEAR_NIGHT);
              } else if (condition === "rain") {
                skycons.add(icon, Skycons.RAIN);
              } else if (condition === "snow") {
                skycons.add(icon, Skycons.SNOW);
              } else if (condition === "sleet") {
                skycons.add(icon, Skycons.SLEET);
              } else if (condition === "wind") {
                skycons.add(icon, Skycons.WIND);
              } else if (condition === "fog") {
                skycons.add(icon, Skycons.FOG);
              } else if (condition === "cloudy") {
                skycons.add(icon, Skycons.CLOUDY);
              } else if (condition === "partly-cloudy-day") {
                skycons.add(icon, Skycons.PARTLY_CLOUDY_DAY);
              } else if (condition === "partly-cloudy-night") {
                skycons.add(icon, Skycons.PARTLY_CLOUDY_NIGHT);
              } else {
                console.log("Dark Sky icon did not return a matching case");
              }
              skycons.play();
            }
            weatherIcon(now, "now-icon");
            weatherIcon(twelve, "12hr-icon");
            weatherIcon(twentyFour, "12hr-icon");
            weatherIcon(twentyFour, "24hr-icon");
            weatherIcon(thirtySix, "36hr-icon");
            weatherIcon(fourtyEight, "48hr-icon");
            weatherIcon(day1Icon, "day1-icon");
            weatherIcon(day2Icon, "day2-icon");
            weatherIcon(day3Icon, "day3-icon");
            weatherIcon(day4Icon, "day4-icon");
            weatherIcon(day5Icon, "day5-icon");
            weatherIcon(day6Icon, "day6-icon");
            weatherIcon(day7Icon, "day7-icon");

            var rain = data.currently.precipProbability;
            $("#rain").html(rain + "%");            
          }) //end darksky call
      } //end getData function
      getData();
  }) //end ipinfo call 
}) //end doc ready