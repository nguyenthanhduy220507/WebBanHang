cartOfUser = JSON.parse(localStorage.getItem('cartOfUser'));
// Kiểm tra đã đăng nhập chưa
isLogin = JSON.parse(localStorage.getItem('isLogin'));
if (isLogin[0].check == 1) { // Là tài khoản admin
    document.querySelector('.admin').style.display = 'inline-block';
    document.querySelector('.sign-out').style.display = 'inline-block';
    document.querySelector('.sign-in').style.display = 'none';
} else if (isLogin[0].check == 2) { // Là tài khoản người dùng
    document.querySelector('.sign-out').style.display = 'block';
    document.querySelector('.sign-in').style.display = 'none';
} else {} // Chưa đăng nhập isLogin[0].check == 0
var loginRegister = document.querySelector('#login-register');
// Hiển thị đăng nhập
function showLogin() {
    var html = `<div class="login-container fadeInDown" id="login">
                    <div class="switch-btn" onclick="switchButtonLogin();">Or <a>sign up</a></div>
                    <div class="login-close"><i class="fas fa-window-close"></i></div>
                    <input type="text" class="username" name="login" placeholder="username">
                    <span class="regex-username"></span>
                    <input type="password" class="password" name="login" placeholder="password">
                    <span class="regex-password"></span>
                    <input type="submit" onclick="Login();" value="Log In">
                    <div class="login-footer">
                        <a class="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
                <div class="login-container fadeInDown" id="register">
                    <div class="switch-btn" onclick="switchButtonLogin();">Go back <a>login</a></div>
                    <div class="login-close"><i class="fas fa-window-close"></i></div>
                    <input type="text" class="username" name="login" placeholder="username">
                    <span class="regex-username"></span>
                    <input type="password" class="password" name="login" placeholder="password">
                    <span class="regex-password"></span>
                    <input type="password" class="password-again" name="login" placeholder="repeat your password">
                    <span class="regex-password-again"></span>
                    <input type="submit" onclick="Register();" value="Sign Up">
                </div>`;
    loginRegister.innerHTML = html;
    loginRegister.style.display = 'flex';
    document.querySelector('#login').style.display = 'flex';
    var closes = document.querySelectorAll('.login-close');
    for (var i = 0; i < closes.length; i++) {
        closes[i].addEventListener('click', function() {
            loginRegister.innerHTML = "";
            loginRegister.style.display = 'none';
        });
    }
    loginRegister.addEventListener('click', function() {
        loginRegister.innerHTML = "";
        loginRegister.style.display = 'none';
    });
    var container = document.querySelectorAll('.login-container');
    for (var i = 0; i < container.length; i++) {
        container[i].addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
}
// Chuyển đổi giữa đăng nhập và đăng ký
function switchButtonLogin() {
    var login = document.querySelector('#login');
    var register = document.querySelector('#register');
    if (login.style.display == 'flex') {
        login.style.display = 'none';
        register.style.display = 'flex';
    } else {
        login.style.display = 'flex';
        register.style.display = 'none';
    }
}
// Tạo tài khoản
var user = [];
function newAccount() {
    if (localStorage.getItem('Account') === null) {
        user = [{username:'admin', password:'admin', properties:'0'}];
        localStorage.setItem('Account',JSON.stringify(user));
    } else {
        user = JSON.parse(localStorage.getItem('Account'));
    }
}
newAccount();
// Kiểm tra đăng ký
function Register() {
    var isRegister = true;
    var regex;
    var register = document.getElementById('register');
    var Username = register.querySelector('.username').value;
    var Password = register.querySelector('.password').value;
    var Password2 = register.querySelector('.password-again').value;
    regex = /^(?=.*[a-zA-Z])[\w._]{6,20}$/;
    if (!regex.test(Username)) {
        register.querySelector('.regex-username').innerHTML = "Tên người dùng không hợp lệ! (từ 6-20 ký tự, gồm các kí tự a-z,A-Z,0-9)";
        isRegister = false;
    } else {
        register.querySelector('.regex-username').innerHTML = "";
    }
    regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if(!regex.test(Password)) {
        register.querySelector('.regex-password').innerHTML = "Mật khẩu không hợp lệ! (ít nhất 8 ký tự, 1 chữ cái thường, 1 chữ cái in hoa và 1 số)";
        isRegister = false;
    } else {
        register.querySelector('.regex-password').innerHTML = "";
    }
    if (Password != Password2) {
        register.querySelector('.regex-password-again').innerHTML = "Mật khẩu không khớp";
		isRegister = false;
    } else {
        register.querySelector('.regex-password-again').innerHTML = "";
    }
    for (var index in user) {
        if (Username == user[index].username) {
            isRegister = false;
            register.querySelector('.regex-username').innerHTML = "Tên người dùng đã tồn tại";
            break;
        }
    }
    if (isRegister) {
        var newUser = {username: Username, password: Password, properties:'1'}
        user.push(newUser);
        localStorage.setItem('Account',JSON.stringify(user));
        var temp = {name: newUser.username, cart: newUser.username + "Cart"};
        cartOfUser.push(temp);
        alert("Đăng ký thành công");
        switchButtonLogin();
    }
}
// Kiểm tra đăng nhập
function Login() {
    var check = 0;
    var login = document.getElementById('login');
    var Username = login.querySelector('.username').value;
    var Password = login.querySelector('.password').value;
    if (Username == "" && Password == "") {
        alert("Nhập đầy đủ thông tin.");
    } else {
        for (var i = 0; i < user.length; i++) {
            if (Username == user[i].username && Password == user[i].password) {
                alert("Đăng nhập thành công.");
                if (user[i].properties == '0') {
                    document.querySelector('.admin').style.display = 'inline-block';
                    document.querySelector('.sign-out').style.display = 'inline-block';
                    document.querySelector('.sign-in').style.display = 'none';
                    isLogin = [{check: 1, username: "admin"}];
                    localStorage.setItem('isLogin', JSON.stringify(isLogin));
                    loginRegister.innerHTML = "";
                    loginRegister.style.display = 'none';
                    createCart();
                    return;
                }
                isLogin = [{check: 2, username: user[i].username}];
                localStorage.setItem('isLogin', JSON.stringify(isLogin));
                document.querySelector('.sign-out').style.display = 'block';
                document.querySelector('.sign-in').style.display = 'none';
                loginRegister.innerHTML = "";
                loginRegister.style.display = 'none';
                createCart();
                return;
            }
            else {
                check = 0;
                check++;
            }
        }
        if (check > 0) {
            alert("Sai tài khoản hoặc mật khẩu.");
        }
    }
}
// Đăng xuất
function logout() {
    document.querySelector('.admin').style.display = 'none';
    document.querySelector('.sign-out').style.display = 'none';
    document.querySelector('.sign-in').style.display = 'block';
    cart.innerHTML = "";
    isLogin = [{check: "0", username: "admin"}];
    localStorage.setItem('isLogin', JSON.stringify(isLogin));
    alert("Đã đăng xuất");
}