<?php

$action = $_POST['login'];
$login_emailaddr = $_POST['login_emailPHP'];
$login_Password = $_POST['login_passwordPHP'];

$conn = mysqli_connect("localhost", "root", "", "logindb") or die("Connection Failed !");

    try {
        if(!empty($login_emailaddr) &&! empty($login_Password))
        {
          $sql = "SELECT * FROM registration WHERE email='".$login_emailaddr."'";
          if($result=mysqli_query($conn,$sql))
          {
            while($row=mysqli_fetch_assoc($result))
            {
              $db_email=$row["email"];
              $db_password=$row["password"];
            }
          }
          if(empty($db_email))
          {
            echo 'No user found!';
            exit;
          }
          if(password_verify($login_Password,$db_password))
          {
            echo 'Login success';
            exit;
          }
          else{
            echo 'Wrong password';  
            exit; 
            }
        }
        else{
          echo 'Enter email and password';
        }
      } catch (mysqli_sql_exception) {
        echo 'Error logging in, try again';
      }

mysqli_close($conn);
?>
