$(function () {
    'use strict';

    $('.password-toogle').click(function () {
        if ($(this).hasClass('show')) {
            $(this).prev().attr('type', 'text');
            $(this).removeClass('show').addClass('hide');
            $(this).find('i').removeClass('fa-solid fa-eye').addClass('fa-solid fa-eye-slash');
        }
        else {
            $(this).prev().attr('type', 'password');
            $(this).removeClass('hide').addClass('show');
            $(this).find('i').removeClass('fa-solid fa-eye-slash').addClass('fa-solid fa-eye');
        }
    });

    $('#searchClear').click(function () {
        $('#searchProduct').val('');
        $('#searchProduct').focus();
        $('.search-popup-result').removeClass('d-none').addClass('d-none');
        $('.search-popup-popular').removeClass('d-none');
    });

    $('#searchProduct').keyup(function () {
        $('.search-popup-result').removeClass('d-none').addClass('d-none');
        $('.search-popup-popular').removeClass('d-none');

        var searchField = $(this).val();
        if (searchField.length > 0) {
            $.getJSON('https://jsonplaceholder.typicode.com/photos?_limit=5&q=' + searchField, function (data) {
                //$.getJSON('assets/data/data.json', function (data) {
                console.log(data.length);
                console.log(data);
                if (data.length > 0) {
                    var output = '';
                    $.each(data, function (index, obj) {
                        output += '<a href="javascript:void(0);">';
                        output += '    <div class="d-flex align-items-center">';
                        output += '        <img src="' + obj.thumbnailUrl + '" />';
                        output += '        <div class="flex-1 ms-3">';
                        output += '            <h6 class="m-0">' + obj.title + '</h6>';
                        output += '        </div>';
                        output += '    </div>';
                        output += '</a>';
                    });
                    $('.search-result-list').html(output);

                    $('.search-popup-result').removeClass('d-none');
                    $('.search-popup-popular').addClass('d-none');
                }
                else {
                    $('.search-popup-result').addClass('d-none');
                    $('.search-popup-popular').removeClass('d-none');
                }
            });
        }
        else {
            $('.search-popup-result').addClass('d-none');
            $('.search-popup-popular').removeClass('d-none');
        }
    });

    $('.select-bm3').each(function () {
        var $this = $(this),
          numberOfOptions = $(this).children('option').length;

        $this.addClass('custom-select-hidden');
        $this.wrap('<div class="custom-select"></div>');
        $this.after('<div class="custom-select-selection"></div>');

        var $customSelection = $this.next('div.custom-select-selection');
        $customSelection.text($this.children('option').eq(0).text());

        var $list = $('<ul />', {
            'class': 'custom-select-option'
        }).insertAfter($customSelection);

        for (var i = 0; i < numberOfOptions; i++) {
            console.log($this.children('option').eq(i).attr("class"));

            $('<li />', {
                text: $this.children('option').eq(i).text(),
                value: $this.children('option').eq(i).val(),
                class: $this.children('option').eq(i).attr("class")
            }).appendTo($list);
        }

        var $listItems = $list.children('li');

        $customSelection.click(function (e) {
            e.stopPropagation();
            $('div.custom-select-selection.active').each(function () {
                $(this).removeClass('active').next('ul.custom-select-option').hide();
            });
            $(this).toggleClass('active').next('ul.custom-select-option').toggle();
        });

        $listItems.click(function (e) {
            e.stopPropagation();
            $customSelection.text($(this).text()).removeClass('active');
            $this.val($(this).attr('value'));
            $list.hide();

            var $selection = $this.val();
            if ($selection.indexOf("http://") == 0 || $selection.indexOf("https://") == 0) {
                window.location = $selection;
            }
            else {
                console.log($selection);
            }
        });

        $(document).click(function () {
            $customSelection.removeClass('active');
            $list.hide();
        });
    });

    var menuMobile = $('.zeynep').zeynep({
        onClosed: function () {
            $("body main").attr("style", "");
        },
        onOpened: function () {
            $("body main").attr("style", "pointer-events: none;");
        }
    });

    $(".background-overlay-zeynep").click(function () {
        menuMobile.close();
    });

    $(".menu-icon-toogle").click(function () {
        if ($("html").hasClass("zeynep-opened")) {
            menuMobile.close();
        } else {
            menuMobile.open();
        }
    });
});

function formLogin() {
    $('.form-login').removeClass('d-none');
    $('.form-register').removeClass('d-none').addClass('d-none');
    $('.form-success').removeClass('d-none').addClass('d-none');
}

function formRegister() {
    $('.form-login').removeClass('d-none').addClass('d-none');
    $('.form-register').removeClass('d-none');
    $('.form-success').removeClass('d-none').addClass('d-none');
}

function formSuccess() {
    $('.form-login').removeClass('d-none').addClass('d-none');
    $('.form-register').removeClass('d-none').addClass('d-none');
    $('.form-success').removeClass('d-none');
}

function searchPopup() {
    if ($('.menu-icon.menu-icon-search').hasClass('active')) {
        $('.menu-icon.menu-icon-search').removeClass('active');
        $('body').removeClass('search-popup-show');
    }
    else {
        $('.menu-icon.menu-icon-search').addClass('active');
        $('body').addClass('search-popup-show');
    }

    var searchClose = $('.background-overlay-search, [data-close-search-popup]');
    searchClose.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($('body').hasClass('search-popup-show')) {
            $('body').removeClass('search-popup-show');
            $('.menu-icon.menu-icon-search').removeClass('active');
        }
    });

    return false;
}

function accountPopup() {
    //remover otros popup
    $('body').removeClass('search-popup-show');
    $('.menu-icon.menu-icon-search').removeClass('active');

    if ($('.menu-icon.menu-icon-account').hasClass('active')) {
        $('.menu-icon.menu-icon-account').removeClass('active');
        $('body').removeClass('account-popup-show');
    }
    else {
        $('.menu-icon.menu-icon-account').addClass('active');
        $('body').addClass('account-popup-show');
    }

    var accountClose = $('.background-overlay-popup, [data-close-account-popup]');
    accountClose.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($('body').hasClass('account-popup-show')) {
            $('body').removeClass('account-popup-show');
            $('.menu-icon.menu-icon-account').removeClass('active');
        }
    });

    return false;
}

function financePopup() {
    //remover otros popup
    $('body').removeClass('search-popup-show');
    $('body').addClass('finance-popup-show');

    var financeClose = $('.background-overlay-popup, [data-close-finance-popup]');
    financeClose.on('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if ($('body').hasClass('finance-popup-show')) {
            $('body').removeClass('finance-popup-show');
        }
    });

    return false;
}
