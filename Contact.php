<?php
$name = $_POST['name'];
$email = $_POST['email'];
$textarea = $_POST['textarea'];

$conn = new mysqli('localhost','root','','indtern_contact');
if($conn->connect_error){
    die('Connection Failed: '.$conn->connect_error);
}else{
    $stmt = $conn->prepare("Insert Into Contact(name,email,textarea)values(?,?,?)");
    $stmt->bind_param("sss",$name,$email,$textarea);
    $stmt->execute();
    echo"Contacted Successfully...";
    $stmt->close();
    $conn->close();
}
?>