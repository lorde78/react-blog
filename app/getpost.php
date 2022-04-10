<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');
require './connexion.php';
// require './cors.php';



$getpost = "SELECT * FROM `post`";
$postList = [];

try {
    $query = mysqli_query($conn, $getpost);

    while($row = mysqli_fetch_array($query)) {
        $postList[] = $row;
    }
    echo json_encode($postList);
} catch(\Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}