var map = document.getElementById("map");

var countries = map.querySelectorAll("path");

countries.forEach((country) => {
    country.addEventListener("click", function(){
        alert(this.id);
    });
});

// Previously selected country:
var previous = {};

// Get the country clicked:
document.getElementById("svgMap").addEventListener("click", function(event) {

    var country = event.target;

    // Name and id of country
    var id = event.target.id;
    var name = event.target.name;

    // Output name of country 
    document.getElementById("mapOutput").innerHTML = "Country is: " + name;

    // Default style of a country
    var defaultStyle = "fill='#ececec';stroke-linejoin='round';stroke-width='.1';stroke='black';stroke-linecap='round';";

    // Revert style of previous
    previous.style = defaultStyle;

    // Set new previous
    previous = country;

    // Set country style 
    country.style = "fill:#0004ff;";

    

});