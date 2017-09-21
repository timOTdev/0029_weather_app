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
            //retrieve weather data
            $.getJSON(weatherURL, function(data) {
            $("#conditions").html(data.currently.summary);
    
            var tempF = Math.round(data.currently.temperature);
            $("#tempF").html("Current Temperature: <br/>" + tempF + "\xB0F");
    
            var icon = data.currently.icon;
            $("#icon").html("Icon: <br/>");
    
            var windSpeed = data.currently.windSpeed;
            $("#windSpeed").html("Current Wind Speed: <br/>" + windSpeed + " mph");
    
            var precipProbability = data.currently.precipProbability;
            $("#precipProbability").html("Chance of Precipitation: <br/>" + precipProbability + "%");
            
            var humidity = data.currently.humidity;
            $("#humidity").html("Humidity: <br/>" + humidity + "%");
            console.log(data.currently.summary);
            })
        }
        getData();
    }) // End json call

    

    // Retrieve and render weather data
    
    // Unit conversion button

}) // End doc ready