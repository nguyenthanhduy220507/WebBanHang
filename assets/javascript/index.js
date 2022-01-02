// Kiểm tra xem có đăng nhập chưa
let isLogin = [];
function createIsLogin() {
    if (localStorage.getItem('isLogin') === null) {
        var temp = [{check: "0", username: "admin"}];
        localStorage.setItem('isLogin', JSON.stringify(temp));
        isLogin = JSON.parse(localStorage.getItem('isLogin'));
    } else {
        isLogin = JSON.parse(localStorage.getItem('isLogin'));
    }
}
createIsLogin();
// Khai báo người dùng và giỏ hàng tương ứng
let cartOfUser = [];
function createCartOfUser() {
    if (localStorage.getItem('cartOfUser') === null) {
        var temp = [{name: "admin", cart: "adminCart"}];
        localStorage.setItem('cartOfUser', JSON.stringify(temp));
        cartOfUser = JSON.parse(localStorage.getItem('cartOfUser'));
    } else {
        cartOfUser = JSON.parse(localStorage.getItem('cartOfUser'));
    }
}
createCartOfUser();
function getIndexOfUser() {
    for (var i = 0; i < cartOfUser.length; i++) {
        if (cartOfUser[i].name === isLogin[0].username) {
            return i;
        }
    }
    return 0;
}
// Khai báo sản phẩm
let Product = JSON.parse(localStorage.getItem('Product'));
function createProduct() {
    if (localStorage.getItem('Product') === null) {
        let product = [
            {
                id: "0",
                img: "./assets/img/iphone6.jpg",
                name: "iPhone 6s",
                description: `CPU: Apple A9 2 nhân 64-bit. 
                                RAM: 2 GB. 
                                Bộ nhớ trong: 16 GB / 64GB. 
                                Dung lượng pin: 1715 mAh.`,
                price: 113,
            },
            {
                id: "1",
                img: "./assets/img/iphone7.jpg",
                name: "iPhone 7",
                description: `CPU: Apple A10 Fusion 4 nhân 64-bit. 
                                RAM: 2 GB. 
                                Bộ nhớ trong: 32 GB. 
                                Dung lượng pin: 1960 mAh.`,
                price: 122,
            },
            {
                id: "2",
                img: "./assets/img/iphone8.jpg",
                name: "iPhone 8",
                description: `CPU: Apple A11 Bionic. 
                                RAM: 2 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 1821 mAh.`,
                price: 327,
            },
            {
                id: "3",
                img: "./assets/img/iphonex.jpg",
                name: "iPhone X",
                description: `CPU: Apple A11 Bionic APL1W72. 
                                RAM: 3 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 2716 mAh.`,
                price: 405,
            },
            {
                id: "4",
                img: "./assets/img/iphone11.jpg",
                name: "iPhone 11",
                description: `CPU: Apple A13 Bionic 6 nhân. 
                                RAM: 4 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 3110 mAh.`,
                price: 623,
            },
            {
                id: "5",
                img: "./assets/img/iphone12.jpg",
                name: "iPhone 12",
                description: `CPU: Apple A14 Bionic 6 nhân. 
                                RAM: 4 GB. 
                                Bộ nhớ trong: 64 GB. 
                                Dung lượng pin: 2815 mAh.`,
                price: 805,
            },
            {
                id: "6",
                img: "./assets/img/iphone13.jpg",
                name: "iPhone 13",
                description: `CPU: A15 Bionic. 
                                RAM: 4 GB. 
                                Bộ nhớ trong: 128 GB. 
                                Dung lượng pin: 3225 mAh.`,
                price: 1023,
            },
            {
                id: "7",
                img: "./assets/img/laptop1.jpg",
                name: "Surface Laptop Go",
                description: `CPU: Intel® Core™ i5-1035G1. 
                                Card: Intel UHD Graphics. 
                                RAM: 8 GB. 
                                SSD: 128 GB.`,
                price: 785,
            },
            {
                id: "8",
                img: "./assets/img/laptop2.jpg",
                name: "Laptop ASUS VivoBook 15 A515EA",
                description: `CPU: Intel® Core™ i3-1115G4. 
                                Card: Intel® UHD Graphics. 
                                RAM: 4 GB. 
                                SSD: 512 GB.`,
                price: 670,
            },
            {
                id: "9",
                img: "./assets/img/laptop3.jpg",
                name: "Laptop ASUS Gaming ROG Strix G15 G513IH-HN015T",
                description: `CPU: AMD Ryzen 7 4800H 2.9GHz up to 4.2GHz 8MB. 
                                Card: NVIDIA GeForce GTX 1650 4GB GDDR6. 
                                RAM: 8 GB. 
                                SSD: 512 GB.`,
                price: 990,
            }
        ]
        localStorage.setItem('Product', JSON.stringify(product))
        Product = JSON.parse(localStorage.getItem('Product'));
    } else Product = JSON.parse(localStorage.getItem('Product'));
}
createProduct();
// Khai báo giỏ hàng
let Cart;
Cart = JSON.parse(localStorage.getItem(cartOfUser[getIndexOfUser()].cart));
function createCart() {
    if (localStorage.getItem(cartOfUser[getIndexOfUser()].cart) === null) {
        var cart = [];
        localStorage.setItem(cartOfUser[getIndexOfUser()].cart, JSON.stringify(cart));
        Cart = JSON.parse(localStorage.getItem(cartOfUser[getIndexOfUser()].cart));
    } else {
        Cart = JSON.parse(localStorage.getItem(cartOfUser[getIndexOfUser()].cart));
    }
}
createCart();
// khai báo thống kê
let Statistics = [];
function createStatistics() {
    if (localStorage.getItem('Statistics') === null) {
        var temp = [{quantity: 0, sumOfTotal: 0}];
        localStorage.setItem('Statistics', JSON.stringify(temp));
        Statistics = JSON.parse(localStorage.getItem('Statistics'));
    } else {
        Statistics = JSON.parse(localStorage.getItem('Statistics'));
    }
}
createStatistics();
// Khai báo đặt hàng
let Invoice = JSON.parse(localStorage.getItem('Invoice'));
Invoice = [];
function createInvoice() {
    if (localStorage.getItem('Invoice') === null) {
        var temp = [];
        localStorage.setItem('Invoice', JSON.stringify(temp));
        Invoice = JSON.parse(localStorage.getItem('Invoice'));
    } else {
        Invoice = JSON.parse(localStorage.getItem('Invoice'));
    }
}
createInvoice();
// Hiển thị sản phẩm
function showProduct() {
    var product = document.querySelector('.product-list');
    var html = "";
    for (var i = 0; i < Product.length; i++) {
        var temp = `<div class="col l-3 m-4 sm-6 product">
                    <div class="container">
                        <img src="${Product[i].img}" onclick="showProductInfo(${Product[i].id});">
                        <a onclick="showProductInfo(${Product[i].id});" class="name-product">${Product[i].name}</a>
                        <span class="price-product">${Product[i].price}$</span>
                        <div><a class="add-to-cart" onclick="addToCart(${Product[i].id}, '1');"><i class="fas fa-cart-plus"></i></a></div>
                    </div>
                </div>`;
        html = html.concat(temp,"");
    }
    product.innerHTML = html;
}
showProduct();
// Tạo phân trang cho sản phẩm
function createPagination() {
    var products = document.querySelectorAll('.product');
    var pagination = document.querySelector('.pagination');
    var html = `<a class="page page-1 active" onclick="showPage(1);">1</a>`;
    for (var i = 1; i < products.length / 8; i++) {
        var temp = `<a class="page page-${i + 1}" onclick="showPage(${i + 1});">${i + 1}</a>`;
        html = html.concat(temp,"");
    }
    for (var i = 0; i < products.length; i++) {
        if (i <= 7)
            products[i].style.display = 'block';
        else
            products[i].style.display = 'none';
    }
    pagination.innerHTML = html;
}
function showPage(index) {
    var page = document.querySelector('.page-' + index);
    var pages = document.querySelectorAll('.page');
    var products = document.querySelectorAll('.product');
    for (var i = 0; i < products.length; i++) {
        if (i >= (index - 1)*8 && i < index*8)
            products[i].style.display = 'block';
        else
            products[i].style.display = 'none';
    }
    for (var i = 0; i < pages.length; i++) {
        if (pages[i].classList.length > 2)
            pages[i].classList.remove('active');
    }
    page.classList.add('active');
}
createPagination();
// Tạo sản phẩm
function showProductInfo(tempId) {
    var modal = document.querySelector('.modal-product');
    var html = "";
    for (var i = 0; i < Product.length; i++) {
        if (Product[i].id == tempId) {
            html = `<div class="modal-container fadeInDown">
                    <div class="grid">
                        <div class="row">
                            <div class="col l-6 m-6 sm-12 product-img">
                                <img src="${Product[i].img}">
                            </div>
                            <div class="col l-6 m-6 sm-12 product-info">
                                <div class="name">${Product[i].name}</div>
                                <div class="price">${Product[i].price}$</div>
                                <div class="description">${Product[i].description}</div>
                                <input class="quantity-product" type="number" name="quantity" value="1" min="1" max="5">
                                <div class="btn-buy" onclick="addToCart(${Product[i].id}, document.querySelector('.quantity-product').value);"><i class="fas fa-cart-plus"></i></div>
                                <div class="btn-close"><i class="fas fa-window-close"></i></div>
                            </div>
                        </div>
                    </div>
                </div>`;
            break;
        }
    }
    modal.innerHTML = html;
    modal.style.display = 'flex';
    var close = document.querySelector('.btn-close');
    close.addEventListener('click', function(){
        modal.innerHTML = "";
        modal.style.display = 'none';
    });
    modal.addEventListener('click', function() {
        modal.innerHTML = "";
        modal.style.display = 'none';
    });
    var container = document.querySelector('.modal-container');
    container.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}
// Thêm vào giỏ hàng
function addToCart(tempId, tempQuantity) {
    if (isLogin[0].check == 0) { // Chưa đăng nhập
        if (confirm("Chưa đăng nhập, bạn có muốn đăng nhập?")) {
            showLogin();
        }
        return;
    }
    alert("Đã thêm vào giỏ hàng");
    if (Cart != null) {
        for (var i = 0; i < Cart.length; i++) {
            if (Cart[i].id == tempId) {
                Cart[i].quantity = Number(Cart[i].quantity) +  Number(tempQuantity);
                localStorage.setItem(cartOfUser[getIndexOfUser()].cart, JSON.stringify(Cart));
                return;
            }
        }
    }
    for (var i = 0; i < Product.length; i++) {
        if (Product[i].id == tempId) {
            var tmp = {id: Product[i].id, name: Product[i].name, price: Product[i].price, img: Product[i].img, quantity: Number(tempQuantity)};
            Cart.push(tmp);
        }
    }
    localStorage.setItem(cartOfUser[getIndexOfUser()].cart, JSON.stringify(Cart));
}
// Xóa 1 sản phẩm khỏi giỏ hàng
function deleteFromCart(index) {
    Cart.splice(index, 1);
    localStorage.setItem(cartOfUser[getIndexOfUser()].cart, JSON.stringify(Cart));
    showCart();
}
// Chuyển đổi giữa giỏ hàng và đặt hàng
function switchButton(index) {
    var containers = document.querySelectorAll('.cart-content');
    var options = document.querySelectorAll('.option');
    if (index != 1) {
        containers[0].classList.remove('main');
        containers[1].classList.add('main');
        options[0].classList.remove('active');
        options[1].classList.add('active');
    } else {
        containers[0].classList.add('main');
        containers[1].classList.remove('main');
        options[0].classList.add('active');
        options[1].classList.remove('active');
    }
}
var cart = document.querySelector('.modal-cart');
// Hiển thị giỏ hàng
function showCart() {
    var sumOfTotal = 0;
    var temp = "";
    if (Cart == null || isLogin[0].check == 0) {
        temp = "";
    } else {
        for (var i = 0; i < Cart.length; i++) {
            var tmp = `<tr>
                            <td><img src="${Cart[i].img}"></td>
                            <td>${Cart[i].name}</td>
                            <td>${Cart[i].price}$</td>
                            <td>${Cart[i].quantity}</td>
                            <td><i class="fas fa-trash" onclick="deleteFromCart(${i});"></i></td>
                        </tr>`;
            temp = temp.concat(tmp, "");
            sumOfTotal += (Cart[i].price * Cart[i].quantity);
        }
    }
    var html = `<div class="cart-container fadeInDown">
                    <div class="cart-top">
                        <a class="option active" onclick="switchButton(1);">Giỏ hàng</a>
                        <a class="option" onclick="switchButton(2);">Đặt hàng</a>
                        <span>Tổng tiền: ${sumOfTotal}</span>
                        <a class="btn-close"><i class="fas fa-window-close"></i></a>
                    </div>
                    <div class="cart-content main">
                        <table>
                            <tr>
                                <th>Hình ảnh</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Số lượng</th>
                                <th>Xóa</th>
                            </tr>
                            ${temp}
                        </table>
                    </div>
                    <div class="cart-content payment">
                        <label for="name-customer">Tên người nhận:</label>
                        <input type="text" name="name" id="name-customer">
                        <label for="phone-number">Số điện thoại:</label>
                        <input type="text" name="sdt" id="phone-number">
                        <label for="address">Địa chỉ:</label>
                        <input type="text" name="address" id="address">
                        <label for="mail">Email:</label>
                        <input type="text" name="mail" id="mail">
                        <p>Phí ship: 2$</p>
                        <p>Thành tiền: ${sumOfTotal + 2}$</p>
                        <input onclick="addInvoice();" type="submit" value="Đặt hàng">
                    </div>
                </div>`
    cart.innerHTML = html;
    cart.style.display = 'flex';
    var close = document.querySelector('.btn-close');
    close.addEventListener('click', function() {
        cart.innerHTML = "";
        cart.style.display = 'none';
    });
    cart.addEventListener('click', function() {
        cart.innerHTML = "";
        cart.style.display = 'none';
    })
    var container = document.querySelector('.cart-container');
    container.addEventListener('click', function(e) {
        e.stopPropagation();
    });
}
// Thêm đơn đặt hàng mới
function addInvoice() {
    if (isLogin[0].check == 0) { // Chưa đăng nhập
        if (confirm("Chưa đăng nhập, bạn có muốn đăng nhập?")) {
            showLogin();
        }
        return;
    }
    var regex;
    var payment = document.querySelector('.payment');
    var temps = payment.getElementsByTagName('input');
    var nameCustomer = temps[0].value;
    var phoneCustomer = temps[1].value;
    var addressCustomer = temps[2].value;
    var mailCustomer = temps[3].value;
    var Info = "";
    if (nameCustomer == "" && phoneCustomer == "" && addressCustomer == "" && mailCustomer == "") {
        alert("Điền đầy đủ thông tin!");
        return;
    }
    // Kiểm tra điều kiện số điện thoại
    regex = /0\d{9}$/;
    if (!regex.test(phoneCustomer)) {
        alert("Số điện thoại không hợp lệ");
        return;
    }
    // Kiểm tra điều kiện email
    regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(mailCustomer)) {
        alert("Email không hợp lệ");
        return;
    }
    var Sum = 0;
    for (var i = 0; i < Cart.length; i++) {
        Info = Info + " " + Cart[i].name;
        Sum = Sum + (Cart[i].price * Cart[i].quantity);
    }
    var newInvoice = {name: nameCustomer, phone: phoneCustomer, address: addressCustomer, mail: mailCustomer, info: Info, sum: Sum + 2};
    Invoice.push(newInvoice);
    localStorage.setItem('Invoice', JSON.stringify(Invoice));
    Cart = [];
    localStorage.setItem(cartOfUser[getIndexOfUser()].cart, JSON.stringify(Cart));
    alert("Đã đặt hàng");
    cart.innerHTML = "";
    cart.style.display = 'none';
}