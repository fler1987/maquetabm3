﻿(function ($) {
    var iconNext = '<i class="fa-solid fa-chevron-right"></i>',
        iconPrev = '<i class="fa-solid fa-chevron-left"></i>';

    window.onload = function () {
        bm3.init();
    }

    $('body').ready(function () {
        bm3.ready();
    });

    $(window).resize(function () {
        bm3.resize();
    });

    var bm3 = {
        init: function () {
            //console.log('init');
            this.initSliderBanner();
            this.initSliderBrand();
            this.initSlideCategory();
            this.initSliderPopular();
            this.initSliderProduct();
            this.initToggleSidebar();
            this.initCollapseSidebar();
            this.initCollapseProduct();
            this.initSliderProductoOwl();
        },
        ready: function () {
            var url = window.location.pathname;
            var urlRegExp = new RegExp(url.replace(/\/$/, '') + "$");

            if (url != '/') {
                $('a').each(function () {
                    if (urlRegExp.test(this.href.replace(/\/$/, ''))) {
                        $(this).addClass('active');
                    }
                });
            }
        },
        resize: function () {
            var windowWidth = window.innerWidth;

            if (windowWidth > 768) {
                //if (
                //collapseTitle.addClass('is-clicked');
                //collapseContent.css("display", "block");
            }
        },
        initToggleSidebar: function () {
            var sidebarOpen = $('[data-sidebar]'),
                sidebarClose = $('.sidebar-close');

            sidebarOpen.click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                $('body').addClass('open-mobile-sidebar');
            });

            sidebarClose.click(function (e) {
                e.preventDefault();
                e.stopPropagation();

                if ($('body').hasClass('open-mobile-sidebar')) {
                    $('body').removeClass('open-mobile-sidebar');
                }
            });
        },
        initCollapseSidebar: function () {
            var windowWidth = window.innerWidth;
                collapseTitle = $('.sidebar-block-wrapper .sidebar-block-heading'),
                collapseContent = $('.sidebar-block-content');

            $('.sidebar-block-wrapper .sidebar-block-heading').click(function (e) {
                var collapseTarget = $(event.currentTarget),
                    collapseBlock = collapseTarget.parent().siblings();

                if (collapseTarget.hasClass('is-clicked')) {
                    collapseTarget.removeClass('is-clicked');
                    collapseBlock.slideUp('slow');
                } else {
                    collapseTarget.addClass('is-clicked');
                    collapseBlock.slideDown('slow');
                }
            });

            if (windowWidth < 1025) {
                collapseTitle.addClass('is-clicked');
                collapseContent.css("display", "block");
            }
        },
        initCollapseProduct: function () {
            var windowWidth = window.innerWidth,
                collapseTitle = $('.product-view-tech-title, .product-view-toogle-title'),
                collapseContent = $('.product-view-tech-content, .product-view-toogle-content');

            collapseTitle.click(function (e) {
                var collapseTarget = $(event.currentTarget),
                    collapseBlock = collapseTarget.siblings();

                if (collapseTarget.hasClass('is-clicked')) {
                    collapseTarget.removeClass('is-clicked');
                    collapseBlock.slideUp('slow');
                } else {
                    collapseTarget.addClass('is-clicked');
                    collapseBlock.slideDown('slow');
                }
            });

            if (windowWidth < 1025) {
                collapseTitle.removeClass('is-clicked');
                collapseContent.css("display", "none");
            }
        },
        initSliderBanner: function () {
            var dataSlide = $('[data-banner-slide]');

            dataSlide.each(function () {
                var dataItems = $(this).find(".slide-items");

                if (dataItems.length > 0) {
                    if (!dataItems.hasClass('slick-initialized')) {
                        dataItems.slick({
                            mobileFirst: true,
                            fade: true,
                            adaptiveHeight: false,
                            infinite: true,
                            vertical: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            dots: true,
                            arrows: true,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            responsive: [{
                                breakpoint: 1200,
                                settings: {
                                    dots: true,
                                    arrows: true,
                                    slidesToShow: 1,
                                    slidesToScroll: 1,
                                }
                            }]
                        });
                    }
                }
            });
        },
        initSliderBrand: function () {
            var dataSlide = $('[data-brand-slide]');

            dataSlide.each(function () {
                var dataItems = $(this).find(".slide-items"),
                    itemsLG = $(this).data("items-lg"),
                    itemsMD = $(this).data("items-md"),
                    itemsSM = $(this).data("items-sm"),
                    itemsXS = $(this).data("items-xs");

                if (dataItems.length > 0) {
                    if (!dataItems.hasClass('slick-initialized')) {
                        dataItems.slick({
                            mobileFirst: true,
                            adaptiveHeight: false,
                            infinite: true,
                            vertical: false,
                            slidesToShow: 2,
                            //slidesToScroll: 10,
                            swipe: true,
                            swipeToSlide: true,
                            autoplay: true,
                            autoplaySpeed: 3000,
                            dots: false,
                            arrows: true,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            responsive: [{
                                breakpoint: 1400,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsLG
                                    //slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 1024,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsMD
                                    //slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsSM
                                    //slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 380,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsXS
                                    //slidesToScroll: 1
                                }
                            }]
                        });
                    }
                }
            });
        },
        initSlideCategory: function () {
            var dataSlide = $('[data-category-slide]');

            dataSlide.each(function () {
                var dataItems = $(this).find(".slide-items"),
                    itemsLG = $(this).data("items-lg"),
                    itemsMD = $(this).data("items-md"),
                    itemsSM = $(this).data("items-sm"),
                    itemsXS = $(this).data("items-xs");

                if (dataItems.length > 0) {
                    if (!dataItems.hasClass('slick-initialized')) {
                        dataItems.slick({
                            mobileFirst: true,
                            adaptiveHeight: false,
                            infinite: true,
                            vertical: false,
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            dots: false,
                            arrows: true,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsLG,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsMD,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 512,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsSM,
                                    slidesToScroll: 1
                                }
                            },
                            {
                                breakpoint: 380,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsXS,
                                    slidesToScroll: 1
                                }
                            }]
                        });
                    }
                }
            });
        },
        initSliderPopular: function () {
            var dataSlide = $('[data-product-slide]');

            dataSlide.each(function () {
                var dataItems = $(this).find(".slide-items"),
                    itemsLG = $(this).data("items-lg"),
                    itemsMD = $(this).data("items-md"),
                    itemsSM = $(this).data("items-sm"),
                    itemsXS = $(this).data("items-xs");

                if (dataItems.length > 0) {
                    if (!dataItems.hasClass('slick-initialized')) {
                        dataItems.slick({
                            mobileFirst: true,
                            adaptiveHeight: false,
                            infinite: true,
                            vertical: false,
                            slidesToShow: 2,
                            slidesToScroll: 3,
                            touchMove: true,
                            swipe: true,
                            dots: false,
                            arrows: true,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            responsive: [{
                                breakpoint: 1024,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsLG,
                                    slidesToScroll: 1                                    
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    dots: false,
                                    arrows: true,
                                    slidesToShow: itemsMD,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    //centerMode: true
                                }
                            },
                            {
                                breakpoint: 512,
                                settings: {
                                    dots: true,
                                    arrows: true,
                                    slidesToShow: itemsSM,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    mobileFirst: true,
                                    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                                    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                                }
                            },
                            {
                                breakpoint: 380,
                                settings: {
                                    dots: true,
                                    arrows: true,
                                    slidesToShow: itemsXS,
                                    slidesToScroll: 1,
                                    autoplay: true,
                                    mobileFirst: true,
                                    nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                                    prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                                }
                            }]
                        });
                    }
                }
            });
        },
        initSliderProduct: function () {
            var sliderFor = $(".product-view").find('.product-view-for'),
                sliderNav = $(".product-view").find('.product-view-nav');

            if (sliderNav.hasClass('product-view-nav-fullwidth')) {
                if ($(window).width() < 768) {
                    if (!sliderNav.hasClass('slick-initialized')) {
                        sliderNav.slick({
                            dots: false,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: 1,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>'
                        });
                    }
                }
            } else {
                if (!sliderFor.hasClass('slick-initialized') && !sliderNav.hasClass('slick-initialized')) {
                    if (sliderNav.hasClass('product-view-nav-gallery')) {
                        sliderNav.slick({
                            rows: 2,
                            dots: false,
                            arrows: false,
                            infinite: true,
                            speed: 300,
                            slidesToShow: 1,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            responsive: [
                                {
                                    breakpoint: 768,
                                    settings: {
                                        slidesToShow: 4
                                    }
                                }
                            ],
                            adaptiveHeight: true
                        });
                    } else {
                        sliderFor.slick({
                            slidesToShow: 7,
                            asNavFor: sliderNav,
                            arrows: false,
                            dots: false,
                            draggable: false,
                            focusOnSelect: true,
                            vertical: false,
                            verticalSwiping: false,
                            infinite: false,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            responsive: [{
                                breakpoint: 1280,
                                settings: {
                                    slidesToShow: 5
                                }
                            },
                            {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: 4,
                                    dots: false
                                }
                            }],
                            adaptiveHeight: true
                        });
                        sliderNav.slick({
                            adaptiveHeight: true,
                            fade: true,
                            arrows: false,
                            dots: false,
                            infinite: false,
                            slidesToShow: 1,
                            nextArrow: '<button type="button" class="slick-arrow slick-next" aria-label="Siguiente">' + iconNext + '</button>',
                            prevArrow: '<button type="button" class="slick-arrow slick-prev" aria-label="Anterior">' + iconPrev + '</button>',
                            asNavFor: sliderFor,
                            adaptiveHeight: true
                        });
                    }

                }
            }
        },
        initSliderProductoOwl: function () {
            $('.block-slider-product-owl').owlCarousel({
                loop:true,
                margin:20,
                autoplay:true,
                autoplayHoverPause: true,
                nav:true,
                navText: ["<i class='fa-solid fa-chevron-left'></i>","<i class='fa-solid fa-chevron-right'></i>"],
                dots:false,
                responsive:{
                    0:{
                        items:1.5
                    },
                    380:{
                        items:2.5
                    },
                    768:{
                        items:2.5
                    },
                    1024:{
                        items:3.5
                    },
                    1400:{
                        items:3.5
                    }
                }
            });
        },
    };
})(jQuery);