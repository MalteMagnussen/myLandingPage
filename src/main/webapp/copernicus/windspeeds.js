
// 2018 100m button
var m2018100 = document.getElementById("2018100m");
m2018100.addEventListener("click", function(){
    contentWindspeed.innerHTML = '<img src="../images/EUAvg2018100m.png" alt="Weather Data" style="max-width:100%;max-height:100%;height:auto;">'
});

// 2018 150m button
var m2018150 = document.getElementById("2018150m");
m2018150.addEventListener("click", function(){
    contentWindspeed.innerHTML = '<img src="../images/EUAvg2018150m.png" alt="Weather Data" style="max-width:100%;max-height:100%;height:auto;">'
});

// Output for content for average wind speeds
var contentWindspeed = document.getElementById("contentAvgWindSpeeds");

// Vestas 164, 100m button
var m2018150 = document.getElementById("V164100m");
m2018150.addEventListener("click", function(){
    contentProduction.innerHTML = '<img src="../images/EUHourAvgV1642018100m.png" alt="Weather Data" style="max-width:100%;max-height:100%;height:auto;">'
});

// Output for content for average wind speeds
var contentProduction = document.getElementById("contentAvgProduction");

// Case Example Button
var caseExample = document.getElementById("caseExample");
caseExample.addEventListener("click", function(){
    contentCaseExample.innerHTML = '<img src="../images/REPLACEME.gif" alt="Weather Data" style="max-width:100%;max-height:100%;height:auto;">'
});

// Output for content for average wind speeds
var contentCaseExample = document.getElementById("contentCaseExample");
