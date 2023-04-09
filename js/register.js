const firstName = document.getElementById('input-firstname');
const lastName = document.getElementById('input-lastname');
const emailaddr = document.getElementById('input-email');
const password = document.getElementById('input-password');
const gender = document.getElementById('input-gender');
const Signupbtn = document.querySelector('.btn');

Signupbtn.addEventListener('click', (e) =>
{
    e.preventDefault();
            let Email = emailaddr.value;
            let Password = password.value; 
            let Gender = gender.value;
            let FirstName = firstName.value;
            let LastName = lastName.value;
            $.ajax({                   
                url:"php/register.php", 
                method:"post",         // the url where we will send the details     
                data: {              
                    firstNamePHP : FirstName,
                    lastNamePHP : LastName,
                    emailPHP: Email, 
                    passwordPHP: Password,
                    genderPHP: Gender,
                    action: 'register'
                },
                success: function(response) {
                    if(response){
                        window.location.href = "login.html";
                        console.log(localStorage.setItem("reg_session","Register success"));
                    }
                    document.getElementById('.disp').innerHTML=response;
                }
            });
});

// if(localStorage.getItem('reg_session') == 'Register success'){
//     console.log(localStorage.getItem('reg-session'));
//     localStorage.clear();
// }
