// Tìm kiếm
function searchProducts() {
    // Tìm theo tên
    var tempProduct = Product;
    Product = [];
    var search = document.getElementById("search-js").value;
    for (var i = 0; i < tempProduct.length; i++) {
        if (search == "") {
            Product.push(tempProduct[i]);
            continue;
        }
        if (tempProduct[i].name.toLowerCase().indexOf(search.toLowerCase()) != -1) {
            Product.push(tempProduct[i]);
        }
    }
    // Tìm trong khoảng giá
    var tempProduct2 = Product;
    Product = [];
    var select = document.querySelector('.sort-by-price');
    var temp = select.getElementsByTagName('input');
    var min = temp[0].value;
    var max = temp[1].value;
    if (min == '' && max == '') {
        for (var i = 0; i < tempProduct.length; i++) {
            if (tempProduct[i].price > max) {
                max = tempProduct[i].price;
            }
        }
        min = 0;
    } else if (max == '') {
        for (var i = 0; i < tempProduct.length; i++) {
            if (tempProduct[i].price > max) {
                max = tempProduct[i].price;
            }
        }
    } else if (min == '') {
        min = 0;
    }
    for (var i = 0; i < tempProduct2.length; i++) {
        if (tempProduct2[i].price >= Number(min) && tempProduct2[i].price <= Number(max)) {
            Product.push(tempProduct2[i]);
        }
    }
    localStorage.setItem('Product', JSON.stringify(Product));
    sortProducts();
    createPagination();
    localStorage.setItem('Product', JSON.stringify(tempProduct));
    Product = JSON.parse(localStorage.getItem('Product'));
}
// Hàm .sort chú thích: sort(function(a,b) {a-b}) nếu a > b sort() sắp a trước b
// a < b thì b trước a, a = b giữ nguyên
// Sắp xếp theo lựa chọn
function sortProducts() {
    var sort = document.getElementById('sort1');
    var temp = sort.options[sort.selectedIndex].value;
    if (temp == 'BT') {
        Product.sort(function(a,b) {
            return a.id - b.id;
        });
        localStorage.setItem('Product', JSON.stringify(Product));
    } else if (temp == 'TD') {
        Product.sort(function(a,b) {
            return a.price - b.price;
        });
        localStorage.setItem('Product', JSON.stringify(Product));
    } else if (temp == 'GD') {
        Product.sort(function(a,b) {
            return b.price - a.price;
        });
        localStorage.setItem('Product', JSON.stringify(Product));
    } else if (temp == 'AZ') {
        Product.sort(function(a,b) {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x == y ? 0 : (x > y) ? 1 : -1;
        })
        localStorage.setItem('Product', JSON.stringify(Product));
    } else if (temp == 'ZA') {
        Product.sort(function(a,b) {
            let x = a.name.toLowerCase();
            let y = b.name.toLowerCase();
            return x == y ? 0 : (x > y) ? -1 : 1;
        })
        localStorage.setItem('Product', JSON.stringify(Product));
    }
    showProduct();
    createPagination();
}