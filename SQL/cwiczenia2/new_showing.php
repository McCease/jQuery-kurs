<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Nowy Seans</title>
</head>
<body>
<?php
include("connect.php");
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $sql='INSERT INTO showings (cinema_id, movie_id, date) VALUES ("'.$_POST["cinema_id"].'" , "' .$_POST["movie_id"]. '" , "' .$_POST["date"]. '")';

    $result = $conn->query($sql);
    if ($result === TRUE){
        echo "Wpis dodany <br>";
    } else {
        echo "Blad: " . $conn->error . "<br>";
    }
}

?>

    <div>
        <form method='post' action="#">
            <select name="cinema_id">
                <?php

                $sql = "SELECT * FROM cinemas";
                $result = $conn->query($sql);

                if ($result->num_rows >0) {
                    while ($row = $result->fetch_assoc()) {
                        echo('<option value="' . $row['id'] . ' ">' . $row["name"] . '</option>');
                    }
                }
                ?>

            </select><br>
            <select name="movie_id">
                <?php

                $sql = "SELECT * FROM movies";
                $result = $conn->query($sql);

                if ($result->num_rows >0) {
                    while ($row = $result->fetch_assoc()) {
                        echo('<option value="' . $row['id'] . ' ">' . $row["name"] . '</option>');
                    }
                }
                ?>

            </select><br>

            <input type="date" name="date">

            <button type="submit">Stworz</button>
        </form>
    </div>
</body>
</html>