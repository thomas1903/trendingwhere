//DARREN WILLIAMSON, THOMAS MILLS, CALLUM MELIA, CALLUM ROBERTSON, CIARAN MILLER

//defining the center of the google map
var center = new google.maps.LatLng(55.864237,-4.251806);

//some google maps settings
function initialize() {
    var mapOptions = {
        center: center,
        zoom: 4,
        disableDefaultUI: true,
        styles: [{
            featureType: 'poi',
            stylers: [{ visibility: 'off' }]  // Turn off points of interest.
        }, {
            featureType: 'transit.station',
            stylers: [{ visibility: 'off' }]  // Turn off bus stations, train stations, etc.
        }],
        disableDoubleClickZoom: true
    };

    var map = new google.maps.Map(document.getElementById("map-canvas"),mapOptions);

    //pop up trends menu
    var content =
        '<section class="trendsMenuContainer">' +
            '<section class="cityTitle"></section>' +
                '<section class="trendsGroup">' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
            '</section>'+
            '<section class="trendsGroup">' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
            '</section>'+
            '<section class="trendsGroup">' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
                '<section class="trend"></section>' +
            '</section>' +
        '</section>';

    //The pop-up trends menu
    var infowindow = new google.maps.InfoWindow({
        content: content
    });

    // marker positions
    //glasgow
    var city1 = new google.maps.LatLng(55.864237,-4.251806);

    //edinburgh
    var city3 = new google.maps.LatLng(55.953252,-3.188267);

    //london
    var city4 = new google.maps.LatLng(51.507351,-0.127758);

    //new york  	2459115
    var city5 = new google.maps.LatLng(40.712784,-74.005941);

    //manchester    28218
    var city6 = new google.maps.LatLng(53.480759,-2.242631);

    //Madrid 	766273
    var city7 = new google.maps.LatLng(40.416775,-3.70379);

    //paris 615702
    var city8 = new google.maps.LatLng(48.856614,2.352222);

    //berlin    638242
    var city9 = new google.maps.LatLng(52.520007,13.404954);

    //moscow	2122265
    var city10 = new google.maps.LatLng(55.755826,37.6173);

    //Los Angeles	2442047
    var city11 = new google.maps.LatLng(34.052234,-118.243685);


    // marker options
    var marker1 = new google.maps.Marker({
        position: city1,
        map: map,
        title:"Glasgow"
    });

    var marker3 = new google.maps.Marker({
        position: city3,
        map: map,
        title:"Edinburgh"
    });

    var marker4 = new google.maps.Marker({
        position: city4,
        map: map,
        title:"London"
    });

    var marker5 = new google.maps.Marker({
        position: city5,
        map: map,
        title:"New York"
    });

    var marker6 = new google.maps.Marker({
        position: city6,
        map: map,
        title:"Manchester"
    });

    var marker7 = new google.maps.Marker({
        position: city7,
        map: map,
        title:"Madrid"
    });

    var marker8 = new google.maps.Marker({
        position: city8,
        map: map,
        title:"Paris"
    });

    var marker9 = new google.maps.Marker({
        position: city9,
        map: map,
        title:"Berlin"
    });

    var marker10 = new google.maps.Marker({
        position: city10,
        map: map,
        title:"Moscow"
    });

    var marker11 = new google.maps.Marker({
        position: city11,
        map: map,
        title:"Los Angeles"
    });

    ////////////////////////////marker listeners//////////////////////////////

    google.maps.event.addListener(marker1, 'click', function () {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=21125'), function (result) {

            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML=obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //getting tweet volume for each trend
            //also making sure the value if not null
            //for some reason twitter gives back null values for tweet_volume

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map, marker1);
    });

    google.maps.event.addListener(marker3, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=19344'), function (result) {
            var a = obj.responseJSON[0].trends[0].name;
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML=obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker3);
    });

    google.maps.event.addListener(marker4, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=44418'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML=obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker4);
    });

    google.maps.event.addListener(marker5, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=2459115'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map, marker5);
    });

    google.maps.event.addListener(marker6, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=28218'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map, marker6);
    });

    google.maps.event.addListener(marker7, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=766273'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker7);
    });

    google.maps.event.addListener(marker8, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=615702'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker8);
    });

    google.maps.event.addListener(marker9, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=638242'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker9);
    });

    google.maps.event.addListener(marker10, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=2122265'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker10);
    });

    google.maps.event.addListener(marker11, 'click', function() {
        var obj = $.getJSON('/twitter-proxy.php?url=' + encodeURIComponent('trends/place.json?id=2442047'), function (result) {
            //adding the city title to the pop-up menu
            var cityTitle = document.getElementsByClassName('cityTitle');
            cityTitle[0].innerHTML = obj.responseJSON[0].locations[0].name;

            //getting an array of the trend classes
            var trend = document.getElementsByClassName('trend');

            //taking the data received in JSON and adding the trends to the pop-up menu
            trend[0].innerHTML= '<a href="' + obj.responseJSON[0].trends[0].url + '" target="_blank">' + obj.responseJSON[0].trends[0].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[0].tweet_volume != null) ? obj.responseJSON[0].trends[0].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[1].innerHTML= '<a href="' + obj.responseJSON[0].trends[1].url + '" target="_blank">' + obj.responseJSON[0].trends[1].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[1].tweet_volume != null) ? obj.responseJSON[0].trends[1].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[2].innerHTML= '<a href="' + obj.responseJSON[0].trends[2].url + '" target="_blank">' + obj.responseJSON[0].trends[2].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[2].tweet_volume != null) ? obj.responseJSON[0].trends[2].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[3].innerHTML= '<a href="' + obj.responseJSON[0].trends[3].url + '" target="_blank">' + obj.responseJSON[0].trends[3].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[3].tweet_volume != null) ? obj.responseJSON[0].trends[3].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[4].innerHTML= '<a href="' + obj.responseJSON[0].trends[4].url + '" target="_blank">' + obj.responseJSON[0].trends[4].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[4].tweet_volume != null) ? obj.responseJSON[0].trends[4].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[5].innerHTML= '<a href="' + obj.responseJSON[0].trends[5].url + '" target="_blank">' + obj.responseJSON[0].trends[5].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[5].tweet_volume != null) ? obj.responseJSON[0].trends[5].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[6].innerHTML= '<a href="' + obj.responseJSON[0].trends[6].url + '" target="_blank">' + obj.responseJSON[0].trends[6].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[6].tweet_volume != null) ? obj.responseJSON[0].trends[6].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[7].innerHTML= '<a href="' + obj.responseJSON[0].trends[7].url + '" target="_blank">' + obj.responseJSON[0].trends[7].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[7].tweet_volume != null) ? obj.responseJSON[0].trends[7].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[8].innerHTML= '<a href="' + obj.responseJSON[0].trends[8].url + '" target="_blank">' + obj.responseJSON[0].trends[8].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[8].tweet_volume != null) ? obj.responseJSON[0].trends[8].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[9].innerHTML= '<a href="' + obj.responseJSON[0].trends[9].url + '" target="_blank">' + obj.responseJSON[0].trends[9].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[9].tweet_volume != null) ? obj.responseJSON[0].trends[9].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[10].innerHTML= '<a href="' + obj.responseJSON[0].trends[10].url + '" target="_blank">' + obj.responseJSON[0].trends[10].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[10].tweet_volume != null) ? obj.responseJSON[0].trends[10].tweet_volume + " tweets" + '</span>' : '</span><br>');
            trend[11].innerHTML= '<a href="' + obj.responseJSON[0].trends[11].url + '" target="_blank">' + obj.responseJSON[0].trends[11].name + '</a><br><span class="tweetVolume">' + ((obj.responseJSON[0].trends[11].tweet_volume != null) ? obj.responseJSON[0].trends[11].tweet_volume + " tweets" + '</span>' : '</span><br>');
        });
        infowindow.open(map,marker11);
    });

    // close pop-up menu
    google.maps.event.addListener(map, 'click', function() {
        infowindow.close();
    });

    google.maps.event.addListener(infowindow, 'domready', function() {
        var iwOuter = $('.gm-style-iw');
        var iwBackground = iwOuter.prev();
        iwBackground.children(':nth-child(2)').css({'display' : 'none'});
        iwBackground.children(':nth-child(4)').css({'display' : 'none'});
        iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(0, 0, 0, 0.6) 0px 1px 6px', 'z-index' : '1'});
        var iwCloseBtn = iwOuter.next();
        iwCloseBtn.css({opacity: '1', right: '40px', top: '3px', border: '7px solid white', 'border-radius': '13px', 'box-shadow': '0 0 5px black'});
    });
}
google.maps.event.addDomListener(window, 'load', initialize);