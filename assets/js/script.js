$(document).ready(function() {
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
              $("#now-tempF").html(nowTemp + "\xB0F");              
              $("#12hr-tempF").html(twelveTemp + "\xB0F");              
              $("#24hr-tempF").html(twentyFourTemp + "\xB0F");              
              $("#36hr-tempF").html(thirtySixTemp+ "\xB0F");              
              $("#48hr-tempF").html(fourtyEightTemp + "\xB0F");

              // Get condition              
              $("#now-conditions").html(data.currently.summary);
              $("#12hr-conditions").html(data.hourly.data[11].summary);
              $("#24hr-conditions").html(data.hourly.data[23].summary);
              $("#36hr-conditions").html(data.hourly.data[35].summary);
              $("#48hr-conditions").html(data.hourly.data[47].summary);

              // Unix Time Conversion
              var twelveTime = new Date(data.hourly.data[11].time * 1000);
              var twentyFourTime = new Date(data.hourly.data[23].time * 1000);
              var thirySixTime = new Date(data.hourly.data[35].time * 1000);
              var fourtyEightTime = new Date(data.hourly.data[47].time * 1000);
              $("#twelveTime").html(twelveTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
              $("#twentyFourTime").html(twentyFourTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
              $("#thirtySixTime").html(thirySixTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
              $("#fourtyEightTime").html(fourtyEightTime.toLocaleString([], {weekday: 'long', hour: '2-digit', minute:'2-digit'}));
              
              // Get icon
              var now = data.currently.icon;  
              var twelve = data.hourly.data[11].icon;
              var twentyFour = data.hourly.data[23].icon;
              var thirtySix = data.hourly.data[35].icon;
              var fourtyEight = data.hourly.data[47].icon;

              var skycons = new Skycons({"color": "orange"});
              function weatherIcon(){
                if (now === "clear-day") {
                  skycons.add("now-icon", Skycons.CLEAR_DAY);
                } else if (now === "clear-night") {
                  skycons.add("now-icon", Skycons.CLEAR_NIGHT);
                } else if (now === "rain") {
                  skycons.add("now-icon", Skycons.RAIN);
                } else if (now === "snow") {
                  skycons.add("now-icon", Skycons.SNOW);
                } else if (now === "sleet") {
                  skycons.add("now-icon", Skycons.SLEET);
                } else if (now === "wind") {
                  skycons.add("now-icon", Skycons.WIND);
                } else if (now === "fog") {
                  skycons.add("now-icon", Skycons.FOG);
                } else if (now === "cloudy") {
                  skycons.add("now-icon", Skycons.CLOUDY);
                } else if (now === "partly-cloudy-day") {
                  skycons.add("now-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (now === "partly-cloudy-night") {
                  skycons.add("now-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (twelve === "clear-day") {
                  skycons.add("12hr-icon", Skycons.CLEAR_DAY);
                } else if (twelve === "clear-night") {
                  skycons.add("12hr-icon", Skycons.CLEAR_NIGHT);
                } else if (twelve === "rain") {
                  skycons.add("12hr-icon", Skycons.RAIN);
                } else if (twelve === "snow") {
                  skycons.add("12hr-icon", Skycons.SNOW);
                } else if (twelve === "sleet") {
                  skycons.add("12hr-icon", Skycons.SLEET);
                } else if (twelve === "wind") {
                  skycons.add("12hr-icon", Skycons.WIND);
                } else if (twelve === "fog") {
                  skycons.add("12hr-icon", Skycons.FOG);
                } else if (twelve === "cloudy") {
                  skycons.add("12hr-icon", Skycons.CLOUDY);
                } else if (twelve === "partly-cloudy-day") {
                  skycons.add("12hr-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (twelve === "partly-cloudy-night") {
                  skycons.add("12hr-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (twentyFour === "clear-day") {
                  skycons.add("24hr-icon", Skycons.CLEAR_DAY);
                } else if (twentyFour === "clear-night") {
                  skycons.add("24hr-icon", Skycons.CLEAR_NIGHT);
                } else if (twentyFour === "rain") {
                  skycons.add("24hr-icon", Skycons.RAIN);
                } else if (twentyFour === "snow") {
                  skycons.add("24hr-icon", Skycons.SNOW);
                } else if (twentyFour === "sleet") {
                  skycons.add("24hr-icon", Skycons.SLEET);
                } else if (twentyFour === "wind") {
                  skycons.add("24hr-icon", Skycons.WIND);
                } else if (twentyFour === "fog") {
                  skycons.add("24hr-icon", Skycons.FOG);
                } else if (twentyFour === "cloudy") {
                  skycons.add("24hr-icon", Skycons.CLOUDY);
                } else if (twentyFour === "partly-cloudy-day") {
                  skycons.add("24hr-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (twentyFour === "partly-cloudy-night") {
                  skycons.add("24hr-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (thirtySix === "clear-day") {
                  skycons.add("36hr-icon", Skycons.CLEAR_DAY);
                } else if (thirtySix === "clear-night") {
                  skycons.add("36hr-icon", Skycons.CLEAR_NIGHT);
                } else if (thirtySix === "rain") {
                  skycons.add("36hr-icon", Skycons.RAIN);
                } else if (thirtySix === "snow") {
                  skycons.add("36hr-icon", Skycons.SNOW);
                } else if (thirtySix === "sleet") {
                  skycons.add("36hr-icon", Skycons.SLEET);
                } else if (thirtySix === "wind") {
                  skycons.add("36hr-icon", Skycons.WIND);
                } else if (thirtySix === "fog") {
                  skycons.add("36hr-icon", Skycons.FOG);
                } else if (thirtySix === "cloudy") {
                  skycons.add("36hr-icon", Skycons.CLOUDY);
                } else if (thirtySix === "partly-cloudy-day") {
                  skycons.add("36hr-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (thirtySix === "partly-cloudy-night") {
                  skycons.add("36hr-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (fourtyEight === "clear-day") {
                  skycons.add("48hr-icon", Skycons.CLEAR_DAY);
                } else if (fourtyEight === "clear-night") {
                  skycons.add("48hr-icon", Skycons.CLEAR_NIGHT);
                } else if (fourtyEight === "rain") {
                  skycons.add("48hr-icon", Skycons.RAIN);
                } else if (fourtyEight === "snow") {
                  skycons.add("48hr-icon", Skycons.SNOW);
                } else if (fourtyEight === "sleet") {
                  skycons.add("48hr-icon", Skycons.SLEET);
                } else if (fourtyEight === "wind") {
                  skycons.add("48hr-icon", Skycons.WIND);
                } else if (fourtyEight === "fog") {
                  skycons.add("48hr-icon", Skycons.FOG);
                } else if (fourtyEight === "cloudy") {
                  skycons.add("48hr-icon", Skycons.CLOUDY);
                } else if (fourtyEight === "partly-cloudy-day") {
                  skycons.add("48hr-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (fourtyEight === "partly-cloudy-night") {
                  skycons.add("48hr-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }
                skycons.play();
              }
              weatherIcon();

              var rain = data.currently.precipProbability;
              $("#rain").html(rain + "%");
              
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
                  } else {
                    $("#now-tempF").html(nowTemp + "\xB0F");
                    $("#12hr-tempF").html(twelveTemp + "\xB0F");
                    $("#24hr-tempF").html(twentyFourTemp + "\xB0F");
                    $("#36hr-tempF").html(thirtySixTemp + "\xB0F");
                    $("#48hr-tempF").html(fourtyEightTemp + "\xB0F");
                  }
                });
              }
              tempConversion();
              })
        } // End getData function
        getData();
    }) // End json call
}) // End doc ready