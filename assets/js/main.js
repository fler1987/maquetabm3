
var searchTimeout;
function Search() {
    clearTimeout(searchTimeout);

    var searchURL = $("#searchURL").val();    
    if (searchURL) {
        
        searchTimeout = setTimeout(function () {
            var url = searchURL;

            var priceMin = $("[name=fromPrice]").val();
            var priceMax = $("[name=toPrice]").val();
            var catalog = $("#inputCatalog").val();
            
            var pageNro = $("[name=pageNro]").val();

            var sortBy = $("[name=sortBy]:enabled").val();
            //var recordSize = $("[name=recordSize]:enabled").val();
            var nameMarca = "";

            var marcas = document.getElementsByName('grupoMarca');

            for (i = 0; i < marcas.length; i++) {
                if (marcas[i].checked)
                    nameMarca = marcas[i].value;
            }

            var variantDetailNames = $("#variantesDetailNameVariant").val();
            var variantName = $("#variantesNameVariant").val();           

            var varianteURl = formaURlVariante(variantName.split(","), variantDetailNames.split(","));

            console.log(varianteURl);

            if (url.includes("?")) {
                let urlsplit = url.split('?');
                url = urlsplit[0];
                console.log("url");
                console.log(url);
            }
            if (catalog != "") {
                url = url + (!url.includes("?") ? "?" : "&") + "catalog=" + catalog;
            }
            var searchTerm = $("#SearchTerm").val();
            if (searchTerm != "") {
                url = url + (!url.includes("?") ? "?" : "&") + "q=" + searchTerm;
            }

            if (nameMarca != "") {
                url = url + (!url.includes("?") ? "?" : "&") + "marca=" + nameMarca;
            }
            
            if (pageNro > 0) {
                url = url + (!url.includes("?") ? "?" : "&") + "pageNo=" + pageNro;
            }

            //if (priceMin) {
            //    url = url + (!url.includes("?") ? "?" : "&") + "from=" + priceMin;
            //}

            if (priceMax > 0) {
                url = url + (!url.includes("?") ? "?" : "&") + "from=" + priceMin;
                url = url + (!url.includes("?") ? "?" : "&") + "to=" + priceMax;
            }
            if (sortBy) {
                url = url + (!url.includes("?") ? "?" : "&") + "sortby=" + sortBy;
            }
            //if (recordSize) {
            //    url = url + (!url.includes("?") ? "?" : "&") + "recordsize=" + recordSize;
            //}
            if (variantDetailNames) {

                url = url + (!url.includes("?") ? "?" : "&") + "filter=" + encodeURIComponent(varianteURl);
            }
            console.log(url);
            window.location.href = url;
        }, 100);
    }
}



function formaURlVariante(array1, array2) {
    var resultado = [];
    var combinaciones = {};

    for (var i = 0; i < array1.length; i++) {
        var clave = array1[i];
        var valor = array2[i];

        if (!combinaciones[clave]) {
            combinaciones[clave] = [];
        }
        combinaciones[clave].push(valor);
    }

    for (var key in combinaciones) {
        var combinado = key + '[' + combinaciones[key].join('#') + ']';
        resultado.push(combinado);
    }

    return resultado;
}

function Buscar() {
    clearTimeout(searchTimeout);

    var searchURL = $("#searchURL").val();
    if (searchURL) {

        searchTimeout = setTimeout(function () {
            var url = searchURL;

            console.log("searchURL");
            console.log(searchURL);

            var priceMin = $("[name=fromMoto]").val();
            var priceMax = $("[name=toMoto]").val();

            var sortBy = $("[name=sortBy]:enabled").val();
            var recordSize = $("[name=recordSize]:enabled").val();


            var variantIDs = $("#variantesDetailIDs").val();
            var variantName = $("#variantesNameVariant").val();            
            var searchTerm = $("#SearchTerm").val();

            var varianteURl = formaURlVariante(variantName.split(","), variantIDs.split(","));

            if (searchTerm != "") {
                url = url + (!url.includes("?") ? "?" : "&") + "q=" + searchTerm;
            }

            if (priceMin) {
                url = url + (!url.includes("?") ? "?" : "&") + "from=" + priceMin;
            }
            if (priceMax) {
                url = url + (!url.includes("?") ? "?" : "&") + "to=" + priceMax;
            }
            if (sortBy) {
                url = url + (!url.includes("?") ? "?" : "&") + "sortby=" + sortBy;
            }
            if (recordSize) {
                url = url + (!url.includes("?") ? "?" : "&") + "recordsize=" + recordSize;
            }
            if (variantIDs) {

                url = url + (!url.includes("?") ? "?" : "&") + "filter=" + encodeURIComponent(varianteURl);
            }

            console.log("url search: " + url);

            window.location.href = url;
        }, 100);
    }
}

function actionSelect(id, value) {

    if (id == "sortBy") {
        changeSortBy();
    }
    if (id == "sortByMarca") {
        changeMarcaFromCatalogo(value);
    }
    if (id == "sortByPrice") {
        changePriceFromCatalogo(value);
    }

}