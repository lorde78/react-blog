<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');
require './connexion.php';


$getuser = "SELECT * FROM `user`";
$userList = [];

try {
    $query = mysqli_query($conn, $getuser);

    while($row = mysqli_fetch_array($query)) {
        $userList[] = $row;
    }
    echo json_encode($userList);
} catch(\Exception $e) {
    die('MySQL Error : ' . $e->getMessage());
}