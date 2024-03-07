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
        $('#searchClear').hide();
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
                actionSelect($this.attr('id'), $selection);
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

    $(".background-overlay-zeynep, .zeynep-close").click(function () {
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

    var searchClose = $('[data-close-search-popup], .background-overlay-search');

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

    var accountClose = $('[data-close-account-popup]');
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

function financePopup(idMarca,idProduct,nomMarca) {

 
    //remover otros popup
    $('body').removeClass('finance-popup-show');
    $('body').addClass('finance-popup-show');

    listarMarcas(idMarca, nomMarca);
    listarProductosPorMarca(idMarca, idProduct);

    var financeClose = $('[data-close-finance-popup]');
    financeClose.on('click', function (e) {
       
        e.preventDefault();
        e.stopPropagation();

        if ($('body').hasClass('finance-popup-show')) {
            $('body').removeClass('finance-popup-show');
    
        }
    });

    return false;
}


function cerrarPopup() {
 
    if ($('body').hasClass('finance-popup-show')) {
        $('body').removeClass('finance-popup-show');
    }



    $('#txtNombre').val('');
    $('#txtCelular').val('');
    $('#txtFechaNacimiento').val('');
    $('#txtCorreo').val('');
    $('#cboTipoDocumento').val('0');
    $('#txtNroDocumento').val('');

    // Limpiar campos laborales
    $('input[name="data-laboral"]').prop('checked', false);
    $('input[name="data-laboral"]:first').prop('checked', true);
    $('#data-cuotaminima').val('');
    $('#txtIngresoNeto').val('');
    $("#data-dependiente, #data-independiente").prop("checked", false);

    // Limpiar campos de la moto
    $('#cboMarca').val('0');
    $('#cboModelo').val('0');
    $('#PoliticaPrivacidad').prop('checked', false);
    $('#AceptoComunicaciones').prop('checked', false);

    $("<style>")
        .prop("type", "text/css")
        .html(".block-finance  .block-form:nth-child(2):before { background: #949494; }")
        .appendTo("head");

    //s realizar acciones adicionales si es necesario

    $(".block-form:eq(1)").css("opacity", "0.5");

    $("<style>")
        .prop("type", "text/css")
        .html(".block-finance .block-form:nth-child(3):before { background: #949494; }")
        .appendTo("head");

    $(".block-form-end").css("opacity", "0.5");



}


function productColorSelection(valor, texto, precio, descuento, tipoMoneda, tipoCambio) {
    var select = $('.product-view-for').find("[data-product-nav='" + valor + "']");
    var slide = select.parent("div").parent("div");
    var slideno = slide.attr('data-slick-index');

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    let PENSoles = new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
    });

    console.log(`The formated version of ${precio} is ${USDollar.format(precio)}`);

    if (slideno !== undefined) {
        $('.product-view-for').slick('slickGoTo', slideno);
    }

    $('[data-color-option]').html(texto);

    let iconoMoneda = "S/";

    //Change Precio
    if (tipoMoneda == 2) {

        iconoMoneda = "$";
        let precioChange = 0;

        if (descuento > 0) {
            $('#priceOffer').show();
            $('#priceOld').show();
            //$('#priceOld').text(iconoMoneda + precio.toFixed(2));
            //$('#priceOffer').text(iconoMoneda + descuento.toFixed(2));
           
            $('#priceOld').text(USDollar.format(precio));
            $('#priceOffer').text(USDollar.format(descuento));
            precioChange = descuento * tipoCambio;

        } else {

            $('#priceOffer').show();
            $('#priceOld').hide();

            if (precio != undefined) {

                precioChange = precio * tipoCambio;

                $('#priceOffer').show();
                //$('#priceOffer').text(iconoMoneda + precio.toFixed(2));
                $('#priceOffer').text(USDollar.format(precio));
            } else {
                $('#priceOffer').hide();
            }
        }
        $("#priceChange").text(PENSoles.format(precioChange));
    } else {

        if (descuento > 0) {
            $('#priceOld').show();
            $('#priceOffer').show();
            //$('#priceOld').text(iconoMoneda + precio.toFixed(2));
            //$('#priceOffer').text(iconoMoneda + descuento.toFixed(2));
            $('#priceOld').text(PENSoles.format(precio));
            $('#priceOffer').text(PENSoles.format(descuento));
        } else {

            $('#priceOld').hide();
            if (precio != undefined) {
                $('#priceOffer').show();
                $('#priceOffer').text(PENSoles.format(precio));
            } else {
                $('#priceOffer').hide();
            }
        }
        $("#priceChange").hide();
    }   
}

$('#searchProduct').keyup(function () {
    var textCount = $(this).val().length;
    if (textCount == 0) {
        $('#searchClear').hide();
    } else {
        $('#searchClear').show();
    }
    $('.search-popup-result').removeClass('d-none').addClass('d-none');
    $('.search-popup-popular').removeClass('d-none');

    var searchField = $(this).val();
    if (searchField.length >= 3) {

        var url = '/Home/SearchAuto?q=' + searchField;

        $.getJSON(url, function (data) {
            if (data.length > 0) {

                console.log(data);
                $('#searchResults').empty(); // Limpia los resultados anteriores
                var output = '';
                for (var i = 0; i < data.length; i++) {

                    var pictureURLs = data[i].PictureURLs;
                    var name = data[i].Name;

                    // Verificar si 'PictureURLs' no es nulo y no está vacío
                    if (pictureURLs && pictureURLs.length > 0) {
                        // Recorre el arreglo 'PictureURLs'
                        for (var j = 0; j < pictureURLs.length; j++) {
                            var pictureURL = pictureURLs[j];

                            /*output += '<a href="javascript:void(0);">';*/
                            output += '<a href="/busqueda?q=' + name + '" class="result-item" data-name="' + name + '">';
                            output += '    <div class="d-flex align-items-center">';
                            output += '        <img src="content/images/' + pictureURL + '" />';
                            output += '        <div class="flex-1 ms-3">';
                            output += '            <h6 class="m-0">' + name + '</h6>';
                            output += '        </div>';
                            output += '    </div>';
                            output += '</a>';
                        }
                    }
                }

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

$('.result-item').click(function (e) {

    e.preventDefault();
    var selectedName = $(this).data('name');
    $("#searchProduct").val(selectedName);
    var url = '/Catalogo/Busqueda?q=' + selectedName;
    window.location.href = url;
});