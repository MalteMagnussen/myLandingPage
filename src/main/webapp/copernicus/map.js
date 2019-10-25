var map = document.getElementById("map");

var countries = map.querySelectorAll("path");

countries.forEach((country) => {
    country.addEventListener("click", function(){
        alert(this.id);
    });
});

