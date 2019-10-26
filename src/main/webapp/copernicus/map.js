// Previously selected country:
var previous = {};

// Get the country clicked:
document.getElementById("svgMap").addEventListener("click", function (event) {

    // The clicked target. 
    var country = event.target;

    // Name and id of country. 
    var id = event.target.id;
    var name = event.target.name;

    // Default style of a country. 
    var defaultStyle = "fill='#ececec';stroke-linejoin='round';stroke-width='.1';stroke='black';stroke-linecap='round';";

    // If you've selected a country. 
    if (id !== "svgMap" && id !== "windTurbine" && id!=="windTurbine2") {
        // Revert style of previous. 
        previous.style = defaultStyle;
        // Set new previous. 
        previous = country;
        // Set country style 
        country.style = "fill:#0004ff;";
        // Output name of country 
        document.getElementById("mapOutput").innerHTML = "Country is: " + id;
        // ADD DYNAMIC BEHAVIOR HERE BASED ON ID. CALL NAVIGATE. 
    } else if (id === "windTurbine" || id==="windTurbine2") // If we've clicked the wind turbine left of denmark
    { 
        // Output
        document.getElementById("mapOutput").innerHTML = "You've selected the wind turbine";
    }
    else // if you've selected the ocean. 
    {
        document.getElementById("mapOutput").innerHTML = "Please select a country.";
    }

});

/* The JavaScript Code for Navigation Dynamic Behavior */
/* Encapsulates an HTTP GET request using XMLHttpRequest
Fetches the file at the given path, then calls the 
callback with the content of the file. */
function fetchFile(path, callback) {
    // Create a new AJAX request for fetching the partial HTML file.
    var request = new XMLHttpRequest();
    // Call the callback with the content loaded from the file. 
    request.onload = function () { // This is the function that gets invoked once the file is loaded.
        callback(request.responseText); // We get the content here. 
    };
    // Fetch the partial HTML File given the fragment.
    request.open("GET", path + '.html'); // Initialize the request. HTTP GET request + PATH
    request.send(null); // Finalize the request.
}

/* Updates Dynamic content based on the fragment identifier */
// Is hoisted.
function navigate(id) {
    // Get a reference to the content Div - This is where we place the .html partial.
    var contentDiv = document.getElementById("content");
    // Set the content div innerHTML based on the fragment identifier.
    fetchFile(id, function (content) {
        contentDiv.innerHTML = content;
    });
}
/* End of JavaScript code for dynamic navigation behavior */
