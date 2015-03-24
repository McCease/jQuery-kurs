<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Kino</title>
</head>
<body>
<?php
if(isset($_GET['id'])){
    include("connect.php");

    $sql = 'SELECT * FROM cinemas WHERE id="'.$_GET['id'].'"';
    $result = $conn->query($sql);

    if ($result->num_rows >0) {
        while ($row = $result->fetch_assoc()) {
            echo('<h1>' . $row['name'] . '</h1>');
            echo('<h3>Adres ' . $row['adress'] . '</h3>');
        }
    }
//wyswietlanie filmow
    $sql = 'SELECT DISTINCT movies.id, name, rating FROM showings JOIN movies ON showings.movie_id=movies.id WHERE cinema_id="'.$_GET['id'].'"';

    $result = $conn->query($sql);

    if ($result->num_rows >0) {
        echo('<h3> Grają: </h3><ul>');
        while ($row = $result->fetch_assoc()) {
            echo('<li><h4><a href="movie.php?id=' . $row['id'] .' ">' . $row["name"] . '</h4></a>');
            echo('<span>Ocena: ' . $row['rating'] . '</span></li>');
        }
        echo('</ul>');
    }

}else{
    echo("<br> Blad danych <br>");
}
?>
</body>
</html>