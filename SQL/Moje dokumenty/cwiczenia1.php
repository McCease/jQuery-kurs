<?php
$servername = "localhost";
$username = "user1";
$password = "passwd";
$baseName = "cwiczenia";

$conn= new mysqli($servername, $username, $password, $baseName);

$sql="CREATE TABLE Cinemas (user_id int AUTO_INCREMENT,
                        name varchar(255),
                        address varchar(255) UNIQUE,
                        PRIMARY KEY(user_id))";

$result = $conn->query($sql);

if ($result === TRUE){
    echo "Kina - DONE ";
} else {
    echo "Kina - FAIL " . $conn->error;
}

$sql="CREATE TABLE Movies (user_id int AUTO_INCREMENT,
                        name varchar(255),
                        opis varchar(255),
                        PRIMARY KEY(user_id))";

$result = $conn->query($sql);

if ($result === TRUE){
    echo "Filmy - DONE ";
} else {
    echo "Filmy - FAIL " . $conn->error;
}

$conn->close();
$conn = null;