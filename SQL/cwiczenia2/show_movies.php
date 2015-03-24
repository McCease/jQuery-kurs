<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Wyswietlanie filmow</title>
</head>
<body>
<h2>Spis filmow</h2><br>
    <ul>
    <?php
    include("connect.php");

    $sql = "SELECT * FROM movies";
    $result = $conn->query($sql);

    if ($result->num_rows >0) {
        while ($row = $result->fetch_assoc()) {
            echo('<li><a href="movie.php?id=' . $row['id'] .' ">' . $row["name"] . '</li>');
        }
    }
    ?>
    </ul>
</body>
</html>
