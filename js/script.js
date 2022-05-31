document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        var allHtml = ''
        $ajaxUtils.sendGetRequest("/search.json",
            function(res) {
                var products = res.results.products;
                for (var i = 0; i < 100; i++) {
                    allHtml += 
                    '<div class="col-6"><div class="default"><img src="' 
                    + products[i].thumbnail 
                    + '" class="standart_image"><h6 class="name">'
                    + products[i].name 
                    + '</h6><div class="price">'  
                    + products[i].price
                    + ' &#8381</div></div></div>';
                }
                document.querySelector("#insert").innerHTML = allHtml;
        }
        );
    }
)



