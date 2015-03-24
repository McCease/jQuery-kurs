<?php
$servername = "localhost";
$username = "user1";
$password = "passwd";
$baseName = "cwiczenia";

$conn= new mysqli($servername, $username, $password, $baseName);

$sql= "ALTER TABLE Movies ADD rating float";

$result = $conn->query($sql);

if ($result === TRUE){
    echo "Modyfikacja - DONE ";
} else {
    echo "Modyfikacja - FAIL " . $conn->error;
}


$conn->close();
$conn = null;