require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrap: 'vendor/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        }
    }
});

function initialize() {
    var mapOptions = {
        zoom: 15,
        center: new google.maps.LatLng(48.1994947, 16.3457666),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        zoomControl: false,
        panControl: false,
        streetViewControl: false
    };

    var map = new google.maps.Map(document.getElementById("map-wrapper"), mapOptions);

    var marker = new google.maps.Marker({
        position: map.getCenter(),
        map: map
    });
}

require(['app', 'jquery', 'bootstrap'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);

    var maps = {
        api_key: 'AIzaSyDrlR0qwD4Xw6LzhFfv0HiXjtTL_CMi1fc',
        address: 'Lindengasse 56, 1070 Wien'
    };

    function loadScript() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.googleapis.com/maps/api/js?key=" + maps.api_key + "&sensor=false&callback=initialize";
        document.body.appendChild(script);
    };

    loadScript();
});