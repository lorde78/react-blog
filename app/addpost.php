<?php

require './connexion.php';
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');

$addpost = "INSERT INTO `post` (`idPost`, `title`, `content`, `idUser`) VALUES (NULL, 'hello', 'ieijeijegijgijgigje', 3);";

// try {
//     mysqli_query($conn, $addpost);
// } catch (\Exception $e){
//     die('MySQL Error : ' . $e->getMessage());
// }

