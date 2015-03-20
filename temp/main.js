/*globals document, setInterval, jQuery, Audio */
(function ($) {
    "use strict";
    $(document).on('ready', function () {
        $('#map').easyMap({
			lat: 52.2085,
			lng: 21.0247,
			zoom:17,
			styles: true
		});
    });
}(jQuery));