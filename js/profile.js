document.getElementById('logout_btn').addEventListener('click', (e) => 
{
    window.location.href = "index.html";
    localStorage.clear();
})

console.log(localStorage.getItem("login_session", JSON.parse(localStorage.getItem('email'))));
 
const profile_firstname = document.getElementById("profile-firstname")
const profile_lastname = document.getElementById("profile-lastname")
const profile_gender = document.getElementById("profile-gender");
const profile_age = document.getElementById("profile-age");
const profile_dob = document.getElementById("profile-dob");
const profile_contactInfo = document.getElementById("profile-contact");
const profile_country = document.getElementById("profile-country");
const profile_state = document.getElementById("profile-state");

const updatebtn = document.querySelector('.btn');

updatebtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let profileFirstname = profile_firstname.value;
    let profileLastname = profile_lastname.value;
    let profileCountry = profile_email.value;
    let profileState= profile_password.value;
    let profileAge = profile_age.value;
    let profileGender = profile_gender.value;
    let profileDob = profile_dob.value;
    let profileContactinfo = profile_contactInfo.value;

    $.post("php/profile.php", 
    {
        profileCountryPHP : profileCountry,
            profileStatePHP : profileState,
            profileFirstnamePHP : profileFirstname,
            profileLastnamePHP : profileLastname,
            profileAgePHP : profileAge,
            profileGenderPHP : profileGender,
            profileDobPHP : profileDob,
            profileContactinfoPHP : profileContactinfo
        }, 
        function(val) {
        if(val == "Data inserted!") {
            alert("Your profile has been created successfully!");
            document.querySelector('.view').innerHTML = "Database Updated"
        }
    })
});

