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

                if (day1Icon === "clear-day") {
                  skycons.add("day1-icon", Skycons.CLEAR_DAY);
                } else if (day1Icon === "clear-night") {
                  skycons.add("day1-icon", Skycons.CLEAR_NIGHT);
                } else if (day1Icon === "rain") {
                  skycons.add("day1-icon", Skycons.RAIN);
                } else if (day1Icon === "snow") {
                  skycons.add("day1-icon", Skycons.SNOW);
                } else if (day1Icon === "sleet") {
                  skycons.add("day1-icon", Skycons.SLEET);
                } else if (day1Icon === "wind") {
                  skycons.add("day1-icon", Skycons.WIND);
                } else if (day1Icon === "fog") {
                  skycons.add("day1-icon", Skycons.FOG);
                } else if (day1Icon === "cloudy") {
                  skycons.add("day1-icon", Skycons.CLOUDY);
                } else if (day1Icon === "partly-cloudy-day") {
                  skycons.add("day1-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day1Icon === "partly-cloudy-night") {
                  skycons.add("day1-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (day2Icon === "clear-day") {
                  skycons.add("day2-icon", Skycons.CLEAR_DAY);
                } else if (day2Icon === "clear-night") {
                  skycons.add("day2-icon", Skycons.CLEAR_NIGHT);
                } else if (day2Icon === "rain") {
                  skycons.add("day2-icon", Skycons.RAIN);
                } else if (day2Icon === "snow") {
                  skycons.add("day2-icon", Skycons.SNOW);
                } else if (day2Icon === "sleet") {
                  skycons.add("day2-icon", Skycons.SLEET);
                } else if (day2Icon === "wind") {
                  skycons.add("day2-icon", Skycons.WIND);
                } else if (day2Icon === "fog") {
                  skycons.add("day2-icon", Skycons.FOG);
                } else if (day2Icon === "cloudy") {
                  skycons.add("day2-icon", Skycons.CLOUDY);
                } else if (day2Icon === "partly-cloudy-day") {
                  skycons.add("day2-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day2Icon === "partly-cloudy-night") {
                  skycons.add("day2-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (day3Icon === "clear-day") {
                  skycons.add("day3-icon", Skycons.CLEAR_DAY);
                } else if (day3Icon === "clear-night") {
                  skycons.add("day3-icon", Skycons.CLEAR_NIGHT);
                } else if (day3Icon === "rain") {
                  skycons.add("day3-icon", Skycons.RAIN);
                } else if (day3Icon === "snow") {
                  skycons.add("day3-icon", Skycons.SNOW);
                } else if (day3Icon === "sleet") {
                  skycons.add("day3-icon", Skycons.SLEET);
                } else if (day3Icon === "wind") {
                  skycons.add("day3-icon", Skycons.WIND);
                } else if (day3Icon === "fog") {
                  skycons.add("day3-icon", Skycons.FOG);
                } else if (day3Icon === "cloudy") {
                  skycons.add("day3-icon", Skycons.CLOUDY);
                } else if (day3Icon === "partly-cloudy-day") {
                  skycons.add("day3-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day3Icon === "partly-cloudy-night") {
                  skycons.add("day3-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (day4Icon === "clear-day") {
                  skycons.add("day4-icon", Skycons.CLEAR_DAY);
                } else if (day4Icon === "clear-night") {
                  skycons.add("day4-icon", Skycons.CLEAR_NIGHT);
                } else if (day4Icon === "rain") {
                  skycons.add("day4-icon", Skycons.RAIN);
                } else if (day4Icon === "snow") {
                  skycons.add("day4-icon", Skycons.SNOW);
                } else if (day4Icon === "sleet") {
                  skycons.add("day4-icon", Skycons.SLEET);
                } else if (day4Icon === "wind") {
                  skycons.add("day4-icon", Skycons.WIND);
                } else if (day4Icon === "fog") {
                  skycons.add("day4-icon", Skycons.FOG);
                } else if (day4Icon === "cloudy") {
                  skycons.add("day4-icon", Skycons.CLOUDY);
                } else if (day4Icon === "partly-cloudy-day") {
                  skycons.add("day4-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day4Icon === "partly-cloudy-night") {
                  skycons.add("day4-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (day5Icon === "clear-day") {
                  skycons.add("day5-icon", Skycons.CLEAR_DAY);
                } else if (day5Icon === "clear-night") {
                  skycons.add("day5-icon", Skycons.CLEAR_NIGHT);
                } else if (day5Icon === "rain") {
                  skycons.add("day5-icon", Skycons.RAIN);
                } else if (day5Icon === "snow") {
                  skycons.add("day5-icon", Skycons.SNOW);
                } else if (day5Icon === "sleet") {
                  skycons.add("day5-icon", Skycons.SLEET);
                } else if (day5Icon === "wind") {
                  skycons.add("day5-icon", Skycons.WIND);
                } else if (day5Icon === "fog") {
                  skycons.add("day5-icon", Skycons.FOG);
                } else if (day5Icon === "cloudy") {
                  skycons.add("day5-icon", Skycons.CLOUDY);
                } else if (day5Icon === "partly-cloudy-day") {
                  skycons.add("day5-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day5Icon === "partly-cloudy-night") {
                  skycons.add("day5-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }

                if (day6Icon === "clear-day") {
                  skycons.add("day6-icon", Skycons.CLEAR_DAY);
                } else if (day6Icon === "clear-night") {
                  skycons.add("day6-icon", Skycons.CLEAR_NIGHT);
                } else if (day6Icon === "rain") {
                  skycons.add("day6-icon", Skycons.RAIN);
                } else if (day6Icon === "snow") {
                  skycons.add("day6-icon", Skycons.SNOW);
                } else if (day6Icon === "sleet") {
                  skycons.add("day6-icon", Skycons.SLEET);
                } else if (day6Icon === "wind") {
                  skycons.add("day6-icon", Skycons.WIND);
                } else if (day6Icon === "fog") {
                  skycons.add("day6-icon", Skycons.FOG);
                } else if (day6Icon === "cloudy") {
                  skycons.add("day6-icon", Skycons.CLOUDY);
                } else if (day6Icon === "partly-cloudy-day") {
                  skycons.add("day6-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day6Icon === "partly-cloudy-night") {
                  skycons.add("day6-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }
                
                if (day7Icon === "clear-day") {
                  skycons.add("day1-icon", Skycons.CLEAR_DAY);
                } else if (day7Icon === "clear-night") {
                  skycons.add("day7-icon", Skycons.CLEAR_NIGHT);
                } else if (day7Icon === "rain") {
                  skycons.add("day7-icon", Skycons.RAIN);
                } else if (day7Icon === "snow") {
                  skycons.add("day7-icon", Skycons.SNOW);
                } else if (day7Icon === "sleet") {
                  skycons.add("day7-icon", Skycons.SLEET);
                } else if (day7Icon === "wind") {
                  skycons.add("day7-icon", Skycons.WIND);
                } else if (day7Icon === "fog") {
                  skycons.add("day7-icon", Skycons.FOG);
                } else if (day7Icon === "cloudy") {
                  skycons.add("day7-icon", Skycons.CLOUDY);
                } else if (day7Icon === "partly-cloudy-day") {
                  skycons.add("day7-icon", Skycons.PARTLY_CLOUDY_DAY);
                } else if (day7Icon === "partly-cloudy-night") {
                  skycons.add("day7-icon", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }
                skycons.play();
              }
              weatherIcon();

              var rain = data.currently.precipProbability;
              $("#rain").html(rain + "%");            
            }) //End darksky call
        } // End getData function
        getData();
    }) // End ipinfo call 
}) // End doc ready