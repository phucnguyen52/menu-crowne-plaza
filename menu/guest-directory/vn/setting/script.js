
$(document).ready(function () {
    let imageHtml = "";

    for (var i = 1; i <= countImages; i++) {
        imageHtml +=
            '<div><a data-fancybox="gallery" href="images/' +
            (nameImages + i) +
            '.jpg"><img src="images/' +
            (nameImages + i) +
            '.jpg" alt="Image Menu" class="slider-image"></a></div>';
    }

    $(".slider").append(imageHtml).addClass("slider2");

    setTimeout(function () {
        $(".slider2").slick({
            autoplay: false,
            dots: false,
            infinite: true,
            speed: 400,
            vertical: true,
            verticalSwiping: true,

            // Mặc định trên desktop
            slidesToShow: 2,
            slidesToScroll: 1,

            cssEase: "ease-out",
            touchThreshold: 5,
            lazyLoad: "ondemand",
            waitForAnimate: true,

            // Mobile: mỗi lần hiển thị một ảnh
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        vertical: true,
                        verticalSwiping: true
                    }
                }
            ]
        });

        $(".slick-cloned a").removeAttr("data-fancybox");

    }, 2000);
});
