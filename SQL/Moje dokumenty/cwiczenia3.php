<?php
$servername = "localhost";
$username = "user1";
$password = "passwd";
$baseName = "cwiczenia";

$conn= new mysqli($servername, $username, $password, $baseName);

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    var_dump($_POST);

    switch ($_POST["btn"]){

        case "kino":
            $sql='INSERT INTO cinemas (name, address) VALUES ("'.$_POST["name"].'" , "' .$_POST["address"]. '")';
            break;

        case "film":
            $sql='INSERT INTO movies (name, opis, rating) VALUES ("'.$_POST["name"].'" , "' .$_POST["opis"]. '" , "' .$_POST["rating"]. '")';
            break;

        case "bilet":
            $sql='INSERT INTO tickets (number, price) VALUES ("'.$_POST["number"].'" , "' .$_POST["price"]. '")';
            break;

        case "platnosc":
            $sql='INSERT INTO payment (type, date) VALUES ("'.$_POST["type"].'" , "' .$_POST["date"]. '")';
            break;

    }

}

$result = $conn->query($sql);

if ($result === TRUE){
    echo "Dane dodane";
} else {
    echo "Dane nie dodane " . $conn->error;
}


$conn->close();
$conn = null;