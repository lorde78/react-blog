<?php

require './connexion.php';

$getpost = "SELECT * FROM `post`";
$postList = [];

try {
    $query = mysqli_query($conn, $getpost);

    while($row = mysqli_fetch_array($query)) {
        $postList[] = $row;
    }

    var_dump($postList);
    echo json_encode($postList);
} catch(\Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}