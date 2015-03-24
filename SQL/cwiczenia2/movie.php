<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Film</title>
</head>
<body>
<?php
    if(isset($_GET['id'])){
        include("connect.php");

        $sql = 'SELECT * FROM movies WHERE id="'.$_GET['id'].'"';
        $result = $conn->query($sql);

        if ($result->num_rows >0) {
            while ($row = $result->fetch_assoc()) {
                echo('<h2>' . $row['name'] . '</h2>');
                echo('<h3>Ocena ' . $row['rating'] . '</h3>');
                echo('<div>Opis ' . $row['description'] . '</div>');
            }
        }
//wyswietlanie kin
        $sql = 'SELECT DISTINCT cinemas.id, name, adress FROM showings JOIN cinemas ON showings.cinema_id=cinemas.id WHERE movie_id="'.$_GET['id'].'"';

        $result = $conn->query($sql);

        if ($result->num_rows >0) {
            echo('<h2> Grają w: </h2><ul>');
            while ($row = $result->fetch_assoc()) {
                echo('<li><h3><a href="cinema.php?id=' . $row['id'] .' ">' . $row["name"] . '</h3></a>');
                echo('<span>' . $row['adress'] . '</span></li>');
            }
            echo('</ul>');
        }

    }else{
        echo("<br> Blad danych <br>");
    }
?>
</body>
</html>
