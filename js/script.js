window.onload = function () {
    main = document.getElementById("main");

}

function showA() {
    main.style.display = "block";
    main.style.top = "200px";
}

function hideA() {
    main.style.display = "none";
}



//МАСКА ДЛЯ ТЕЛЕФОНА

jQuery(function ($) {
    $("#phone").mask("+375(99)999-99-99");
});

jQuery(function ($) {
    $("#phone2").mask("+375(99)999-99-99");
});


//СЛАЙДЕР

$(function () {
    $(".rslides").responsiveSlides({
        auto: false,
        speed: 800,
        pager: true,
        nav: true,
        prevText: "<i class='fas fa-chevron-left fa-2x'></i>",
        nextText: "<i class='fas fa-chevron-right fa-2x'></i>",
        manualControls: ".custom",

    });
});



//    КАРТЫ

$.fn.lpMapInit = function () {

    var lpMapOptions = {
        center: [55.769018, 37.657188],
        zoom: 16,
        controls: ['fullscreenControl', 'zoomControl']
    }

    if (window.innerWidth < 600) {
        lpMapOptions.behaviors = ['multiTouch'];
    } else {
        lpMapOptions.behaviors = ['drag'];
    }

    var lpMap = new ymaps.Map("lp-map", lpMapOptions);

    lpPlacemark = new ymaps.Placemark(lpMapOptions.center, {
        balloonContent: 'г. Москва, ул. Новая Басманная 12с2',
        balloonContentHeader: 'офис 316'
    });

    lpMap.geoObjects.add(lpPlacemark);
};
