(function () { 


    // SLIDER
    $('.slider').slick({
        infinite: true,
        vertical: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        draggable: false
    });

    $('.news__content').slick({
        infinite: true,
        vertical: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        draggable: true,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive : [ {
            breakpoint: 900,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 545,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
    });

})();
// MAP

function initMap() {

    let myMap = document.getElementById('map');
    let myCenter = {
        lat: 40.667879,
        lng: -73.890639
    };
    let markerCenter = {
        lat: 40.677531,
        lng: -73.901117
    };
    let mapOptions = {
        zoom: 13,
        center: myCenter,
    }

    let map = new google.maps.Map(myMap, mapOptions);

    let marker = new google.maps.Marker({
        position: markerCenter,
        map: map,
        icon: './img/marker.svg'
    });
}

