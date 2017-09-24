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
              $("#conditions").html(data.currently.summary);
      
              var tempF = Math.round(data.currently.temperature);
              $("#tempF").html(tempF + "\xB0F");
              
              var now = data.currently.icon;  
              var six = data.hourly.data[5].icon;
              var twelve = data.hourly.data[11].icon;
              var eighteen = data.hourly.data[17].icon;
              var twentyFour = data.hourly.data[23].icon;
              var thirty = data.hourly.data[29].icon;
              var thirtySix = data.hourly.data[35].icon;
              var fourtyTwo = data.hourly.data[41].icon;
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

              // Get data for two day forecast
              $("#12hr-tempF").html(Math.round(data.hourly.data[11].temperature) + "\xB0F");
              $("#12hr-conditions").html(data.hourly.data[11].summary);

              $("#24hr-tempF").html(Math.round(data.hourly.data[23].temperature) + "\xB0F");
              $("#24hr-conditions").html(data.hourly.data[23].summary);

              $("#36hr-tempF").html(Math.round(data.hourly.data[35].temperature) + "\xB0F");
              $("#36hr-conditions").html(data.hourly.data[35].summary);

              $("#48hr-tempF").html(Math.round(data.hourly.data[48].temperature) + "\xB0F");
              $("#48hr-conditions").html(data.hourly.data[48].summary);
              
              // Unit conversion button
              function tempConversion() {
                var tempC = Math.round((tempF - 32) * (5/9));
                $("#convert").click(function() {
                  if ($("#tempF").is(":contains('\xB0F')")) {
                    $("#tempF").html("Current Temperature: <br/>" + tempC + "\xB0C");
                  } else {
                    $("#tempF").html("Current Temperature: <br/>" + tempF + "\xB0F");
                  }
                });
              }
              tempConversion();
              })
        } // End getData function
        getData();
    }) // End json call
}) // End doc ready