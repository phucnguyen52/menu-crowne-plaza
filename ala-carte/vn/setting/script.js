$(document).ready(function() {
    let imageHtml = '';
    for (var i = 1; i <= countImages; i++) {
        imageHtml += '<div><a data-fancybox="gallery" href="images/' + (nameImages + i) + '.jpg"><img src="images/' + (nameImages + i) + '.jpg" alt="Image Menu" class="slider-image"></a></div>';
    }
    $('.slider').append(imageHtml).addClass("slider2");

    setTimeout(function() {
        $('.slider2').slick({
            autoplay: false,
            dots: false,
            infinite: true,
            speed: 500,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 2,
            cssEase: 'linear',
            touchThreshold: 50,
            lazyLoad: 'ondemand'
        });
        $('.slick-cloned a').removeAttr('data-fancybox');
    }, 2000);
});