<?php

if(!empty($_POST)){
    echo 'Hello There';
    exit;
}
$fname = '';
$lname = '';
$email = '';
$message = '';
$recipient = 'sconwayportfolio9@gmail.com';

//some validation

if(isset($_POST['fname'])){
    $fname = filter_var($_POST['fname'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['lname'])){
    $lname = filter_var($_POST['lname'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $email = str_replace(array("\r", "\n","%0a","%0d"),'',$_POST['email']);
    $email = filter_var($email, FILTER_VALIDATE_EMAIL);
}


if(isset($_POST['message'])){
    $message = $_POST['message'];
}

$headers = [
    'From' => 'noreply@test.ca',
    'Reply-To' =>$fname. '<' .$email. '>'
];

if(mail($recipient, $subject, $message, $headers)){
    echo '<p>Thank you for contacting me,'.$fname.'. You will get a reply within 24 hours</p>';
}else{
    echo '<p>We are sorry but the email did not go through</p>';
}

?>