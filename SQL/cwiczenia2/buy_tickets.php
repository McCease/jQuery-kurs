<!DOCTYPE html>
<html>
<head lang="pl">
    <meta charset="UTF-8">
    <title>Wybierz kino albo film</title>
</head>
<body>
<?php
include("connect.php");
?>
<div>
        <form method='post' action="ticket.php">
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
            <button type="submit">Wybierz kino</button>
        </form>

    <form method='post' action="ticket.php">
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

<button type="submit">Wybierz film</button>
</form>
</div>

</body>
</html>