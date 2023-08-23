<?php  

$action = $_POST['action'];
$firstName = $_POST['firstNamePHP'];
$lastName = $_POST['lastNamePHP'];
$email = $_POST['emailPHP'];
$password = $_POST['passwordPHP'];
$gender = $_POST['genderPHP'];

$db_server= 'localhost';
$db_user = 'root';
$db_password = '';
$db_name = 'logindb';
$conn= null;
$conn= mysqli_connect($db_server, $db_user, $db_password, $db_name);
if(!empty($email))
{
	try
	{
        $hash=password_hash($password,PASSWORD_DEFAULT);
		$sql = "INSERT INTO registration(firstName, lastName, email, password, gender) VALUES('$firstName', '$lastName', '$email', '$hash', '$gender')";
        $result= mysqli_query($conn, $sql);   
        echo "$result";
	}
    catch (mysqli_sql_exception) {
        echo "Email aldready exists";
    }
}
else{
    echo "Enter Valid Credentials";
}
mysqli_close($conn);
?>
