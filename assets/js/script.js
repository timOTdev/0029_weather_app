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
        var weatherURL = corsURL + darkSkyKey + darkSkyAPI + "/" + latitude + "," + longitude;
    })

    // Make call to Dark Sky API

    // Retrieve and render weather data
    
    // Unit conversion button

}) // End doc ready