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

    // Revert style of previous. 
    previous.style = defaultStyle;

    // Set new previous. 
    previous = country;

    // If you've selected a country. 
    if (id !== "svgMap") {
        // Set country style 
        country.style = "fill:#0004ff;";
        // Output name of country 
        document.getElementById("mapOutput").innerHTML = "Country is: " + id;
    } else // if you've selected the ocean. 
    {
        document.getElementById("mapOutput").innerHTML = "Please select a country.";
    }

});

/* The JavaScript Code for Navigation Dynamic Behavior */
// Our Cache - Stores the partial .HTML pages.
var partialsCache = {} // Important that this is at the top, or it won't work. 
/* If no Fragment Identifier is provided then we default to home */
if (!location.hash) { // Uses the falsy concept
    location.hash = "#home";
} 
/* Navigate once to the initial hash value */
navigate();
/* Listen for fragment identifier value changes (The # at the end of the URL is the fragment) */
/* Navigate whenever the fragment identifier value changes */
window.addEventListener("hashchange", navigate);
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
    request.open("GET", path); // Initialize the request. HTTP GET request + PATH
    request.send(null); // Finalize the request.
}

/* Gets the appropriate content for the given fragment identifier */
// Implements a cache.
function getContent(fragment, callback) {
    // If the page has been fetched before:
    if (partialsCache[fragment]) {
        // Just use the cached version:
        callback(partialsCache[fragment]);
    } else {
        fetchFile(fragment + ".html", function (content) {
            // Store the fetched content in the cache
            partialsCache[fragment] = content;
            // Pass the content to the callback
            callback(content);
        });
    }
}

/* Updates Dynamic content based on the fragment identifier */
// Is hoisted.
function navigate() {
    // Get a reference to the content Div
    var contentDiv = document.getElementById("content");
    // Get a reference to the fragment. We use substr(1) to remove the '#' hash from the start of the string. 
    var fragment = location.hash.substr(1);
    // Set the content div innerHTML based on the fragment identifier.
    getContent(fragment, function (content) {
        contentDiv.innerHTML = content;
        // INSERT HERE NEW CONTENT
        switch (fragment) {
            case "get":
                endpoints();
                break;
        }
    });
    
}
/* End of JavaScript code for dynamic navigation behavior */
