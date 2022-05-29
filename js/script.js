document.addEventListener(
    "DOMContentLoaded",
    function (event) {
        var allHtml = ''
        $ajaxUtils.sendGetRequest("https://api.kealabs.ru/api/api/search?token=vug76zZABZ2mUFOfWI0AtWJUc34abWWY&range=price:0-999999&q=1&sort=priceup&limit=100&page=1&available=true",
            function(res) {
                var products = res.results.products;
                for (var i = 0; i < 100; i++) {
                    allHtml += 
                    '<div class="col-sm-6 col-12"><div class="default"><img src="' 
                    + products[i].thumbnail 
                    + '" class="standart_image"><h6 class="name">'
                    + products[i].name 
                    + '</h6><div class="price">'  
                    + products[i].price
                    + '</div></div></div>';
                }
                document.querySelector("#insert").innerHTML = allHtml;
        }
        );
    }
)


