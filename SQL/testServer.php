<?php
/**
 * Created by PhpStorm.
 * User: Mc XiZ
 * Date: 2015-03-23
 * Time: 10:54
 */

$servername = "localhost";
$username = "user1";
$password = "passwd";
$baseName = "test_base";

//Tworzenie połączenia
$conn= new mysqli($servername, $username, $password, $baseName);

//Sprawdzenie połączenia
if ($conn->connect_error){
    die("Połączenie nieudane. Błąd: " . $conn->connect_error);
}
echo "Połączenie udane ";
/*
$sql="CREATE TABLE MyGuests (user_id int AUTO_INCREMENT,
                            user_name varchar(255),
                            user_email varchar(255) UNIQUE,
                            PRIMARY KEY(user_id))";

$result = $conn->query($sql);

if ($result === TRUE){
    echo "Tabela Users została utwrzonoa poprawnie";
} else {
    echo "Blad podczas tworzenia tabeli: " . $conn->error;
}
*/

$sql='INSERT INTO MyGuests (user_name, user_email)
      VALUES ("dupa4@dupa.com" , "dupa2")';

$result = $conn->query($sql);

if ($result === TRUE){
    echo "uzytkownik dodany ";
} else {
    echo "uzytkownik nie dodany: " . $conn->error;
}

$sql='INSERT INTO MyGuests (user_name, user_email)
      VALUES ("dupa5@dupa.com" , "dupa3")';

$result = $conn->query($sql);

if ($result === TRUE){
    echo "uzytkownik dodany ";
} else {
    echo "uzytkownik nie dodany: " . $conn->error;
}



$sql = "SELECT  user_id, user_name FROM MyGuests";

$result = $conn->query($sql);

if($result -> num_rows > 0) {
    //Wypisz dane na ekran
    while($row = $result->fetch_assoc()) {
        echo("id ".$row["user_id"]). "imie ".$row["user_name"];
    }
}
else {
    echo "Brak wyników";
}





//Zamykamy połączenie

$conn->close();
$conn = null;

