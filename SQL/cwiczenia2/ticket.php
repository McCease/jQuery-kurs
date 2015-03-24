<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Wybierz kino albo film</title>
</head>
<body>
<?php
include("connect.php");
    var_dump($_POST);
?>
<form method='post' action="zakup.php">

<?php
if(isset($_POST['cinema_id'])){
    echo('<select name="showing_id">');

    $sql = 'SELECT date, movies.name, movies.id, showings.id AS bilet FROM showings JOIN movies ON showings.movie_id=movies.id WHERE cinema_id='. $_POST["cinema_id"];
    echo($sql);
    $result = $conn->query($sql);

    if ($result->num_rows >0) {
        while ($row = $result->fetch_assoc()) {
            echo('<option value="' . $row['bilet'] . ' ">' . $row["name"] . ' ' . $row["date"] .' </option>');
        }
    }


}

if(isset($_POST['movie_id'])){
   echo('<select name="showing_id">');

        $sql = 'SELECT date, cinemas.name, cinemas.id, showings.id AS bilet FROM showings JOIN cinemas ON showings.cinema_id=cinemas.id WHERE movie_id='. $_POST["movie_id"];
        echo($sql);
        $result = $conn->query($sql);

        if ($result->num_rows >0) {
            while ($row = $result->fetch_assoc()) {
                echo('<option value="' . $row['bilet'] . ' ">' . $row["name"] . ' ' . $row["date"] .' </option>');
            }
        }
}

?>
    </select>
    <br>
    <span>Cena:</span><input type="number" name="price">
    <br>
    <span>Ilość:</span><input type="number" name="quantity">
<button type="submit">Kup bilet</button>
</form>