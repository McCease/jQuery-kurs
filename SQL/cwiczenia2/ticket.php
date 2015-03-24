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

}

if(isset($_POST['movie_id'])){
   echo('<select name="cinema_id">');

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
<button type="submit">Kup bilet</button>
</form>