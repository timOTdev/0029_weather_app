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
      
              var icon = data.currently.icon;         

              var tempF = Math.round(data.currently.temperature);
              $("#tempF").html(tempF + "\xB0F");
      
              var precipProbability = data.currently.precipProbability;
              $("#precipProbability").html(precipProbability + "%");
                          
              console.log(tempF);
              console.log(precipProbability);
              console.log("break");
              var sat = data.hourly.data[0];
              var sun = data.hourly.data[1];
              var mon = data.hourly.data[2];
              console.log(sat);
              console.log(sun);
              console.log(mon);

              // Render weather icon
              var skycons = new Skycons({"color": "orange"});
              function weatherIcon(){
                if (icon === "clear-day") {
                  skycons.add("icon1", Skycons.CLEAR_DAY);
                } else if (icon === "clear-night") {
                  skycons.add("icon1", Skycons.CLEAR_NIGHT);
                } else if (icon === "rain") {
                  skycons.add("icon1", Skycons.RAIN);
                } else if (icon === "snow") {
                  skycons.add("icon1", Skycons.SNOW);
                } else if (icon === "sleet") {
                  skycons.add("icon1", Skycons.SLEET);
                } else if (icon === "wind") {
                  skycons.add("icon1", Skycons.WIND);
                } else if (icon === "fog") {
                  skycons.add("icon1", Skycons.FOG);
                } else if (icon === "cloudy") {
                  skycons.add("icon1", Skycons.CLOUDY);
                } else if (icon === "partly-cloudy-day") {
                  skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
                } else if (icon === "partly-cloudy-night") {
                  skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
                } else {
                  console.log("Dark Sky icon did not return a matching case");
                }
                skycons.play();
                }
                weatherIcon();
              
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