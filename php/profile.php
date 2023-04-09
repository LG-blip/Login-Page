<?php

include "login.php";

$m = new MongoDBClient();
	
echo "Connection to database successfully";
 
$db = $m->profileData;
	
echo "Database mydb selected";

$action = $_POST['display'];
$profile_genderPHP = $_POST['profile_gender'];
$profile_agePHP = $_POST['profile_age'];
$profile_contactPHP = $_POST['profile-contact'];
$profile_firstnamePHP = $_POST['profile-firstname'];
$profile_lastnamePHP = $_POST['profile-lastname'];
$profile_dob = $_POST['profile-dob'];

require_once _DIR_ . '/vendor/autoload.php';
$conn = new \MongoDB\Client(
   'mongodb+srv://lganeshprofiledb:<Ganesh@67rec>@cluster0.c3tphws.mongodb.net/?retryWrites=true&w=majority');


$db = $conn->profileData;
$table = $db->profileTable;
$table->insertOne(["firstname" => $profile_emailPHP,
                       "lastname" => $profile_lastnamePHP,
                       "dob" => $profile_dob,
                       "gender" => $profile_genderPHP,
                       "age" => $profile_agePHP,
                       ]);
    echo("Data inserted!");


?>

