var map = document.getElementById("map");

var countries = map.querySelectorAll("path");

countries.forEach((country) => {
    country.addEventListener("click", function(country){
        console.log(country.id)
    });
});

