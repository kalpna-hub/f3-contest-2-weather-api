function getLocation() {
	// check if geolocation is supported by the browser
	if (navigator.geolocation) {
		// get current position
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showPosition(position) {
	// get latitude and longitude
	var lat = position.coords.latitude;
	var lon = position.coords.longitude;
    //
    function myFunction() {
        document.getElementById("weather").innerHTML = "Fetch Data";
      }

	// create a Google Map with the current location
	var map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: lat, lng: lon },
		zoom: 12
	});

    //
    var x = document.getElementById("fetch-data");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
    
function showPosition(position) {
    x.innerHTML="Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}

	// show the weather section
	document.getElementById("weather").style.display = "block";

	// fetch weather data using OpenWeatherMap API
	var apiKey = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";
	var url = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&units=metric&appid=" + apiKey;
	fetch(url)
		.then(function(response) {
			return response.json();
		})
		.then(function(data) {
			// handle weather data

            document.getElementById("location").textContent = data.location;
			document.getElementById("lat-long").textContent = data.main.temp + " °C";
			document.getElementById("time-zone").textContent = data.main.time_zone + " m/s";
			document.getElementById("wind-speed").textContent = data.main.wind_speed + " m/s";
			document.getElementById("pressure").textContent = data.wind.pressure + " m/s";
            document.getElementById("humidity").textContent = data.main.humidity + " °%";
			document.getElementById("wind-direction").textContent = data.main.wind_direction + " m/s";
			document.getElementById("uv-index").textContent = data.main.uv.index + "°C ";
            document.getElementById("feels-like").textContent = data.main.feels_like + " m/s";
		})
		.catch(function(error) {
			console.log(error);
			alert("Error: " + error.message);}

