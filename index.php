<!DOCTYPE html>
<html>
<head>
<title>
trendingwhere?
</title>
<!--CSS link-->
<link rel="stylesheet" type="text/css" href="style.css">
<!--Google Maps API link-->
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.20"></script>
<!-- Use jquery script -->
<script type="text/javascript" src="jquery.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<!--Importing fonts from Google-->
<link href='https://fonts.googleapis.com/css?family=Oleo+Script:400,700' rel='stylesheet' type='text/css'>
<link href='https://fonts.googleapis.com/css?family=Bitter:700' rel='stylesheet' type='text/css'>
</head>
<body>
<div id="overlay">
</div>
<div id="infoContainer">
<span class="smallTitle">#trendingWhere?</span>
<div id="info">
<h3 style="margin:0px;font-size:30px;">How to use</h3>
<p style="font-size:13px;">
Start by selecting a red marker over a city.
</p>
<p style="font-size:13px;">
Click on each trend to search for it on Twitter.
</p>
<p style="font-size:13px;">
The amount of tweets about each trend is also displayed.
</p>
<p style="font-size:13px;">
</p>
<p style="font-size:13px;">
Developed by Thomas Mills, Darren Williamson, Ciaran Miller, Callum Melia, Callum Robertson
</p>
</div>
</div>
<div id="map-canvas">
</div>
<div id="mainMenu">
<div id="menuItem1">
<span class="title">#trending<span class="titleColourEdit">Where?</span></span>
<br>
<span class="subtitle">
<script>
$(document).ready(function () {
$(".start").click(function () {
$('#overlay').fadeOut();
$('#mainMenu').fadeOut();
$('#overlay2').fadeIn();
$('#infoContainer').fadeIn();
});
});
</script>
Explore trending topics of cities around the world!</br>
</span>
<br>
<br>
<img src="maps.png" class="trendingWhereInterface">
<span class="bulletPointText">
<ul>
<li>Pan across the map by clicking and dragging your mouse.</li>
<li>Select your chosen city by clicking on the marker.</li>
<li>The top 12 trending topics for that city will be displayed.</li>
<li>Get started by clicking the button below!</li>
</ul>
<a href="#" class='start'><span class="button">Start</a></span>
</span>
</div>
</div>
</body>
</html>