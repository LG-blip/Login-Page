
const login_email = document.getElementById('Email');
const login_password = document.getElementById('Password');
const loginbtn = document.querySelector('.button');

loginbtn.addEventListener('click', (e) => {
    e.preventDefault();
    let LoginPage_email = login_email.value;
    let LoginPage_password = login_password.value;
    $.ajax({
        url:"php/login.php",
        method:"post",
        data :{
            login_emailPHP : LoginPage_email,
            login_passwordPHP : LoginPage_password,
            action : 'login'
        },
        success: function(response){
            if(response == "Login success"){
                console.log(localStorage.setItem("email", LoginPage_email));
                console.log(localStorage.setItem("login_session", "Login success"));
                window.location.href = "profile.html";
            }
            const display = document.querySelector('.display');
            display.innerHTML = response;
        }
    });
});

if(localStorage.getItem('login_session')=='Login success'){
    console.log(localStorage.getItem('login_session'))
    console.log(localStorage.getItem('email'))
    localStorage.clear();               // This clears the login session once the user enter the login page once again.
}


