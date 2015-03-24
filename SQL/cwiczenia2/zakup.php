<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Kupiles bilet</title>
</head>
<body>
<?php
include("connect.php");
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $sql='INSERT INTO tickets (price, quantity, showings_id) VALUES ("'.$_POST["price"].'" , "' .$_POST["quantity"]. '" , "' .$_POST["showing_id"]. '")';

    $result = $conn->query($sql);
    if ($result === TRUE){
        echo "Bilet zakupiony <br>";
    } else {
        echo "Blad: " . $conn->error . "<br>";
    }
}
var_dump($_POST);
?>