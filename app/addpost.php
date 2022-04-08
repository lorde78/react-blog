<?php

require './connexion.php';
$addpost = "INSERT INTO `post` (`idPost`, `title`, `content`, `idUser`) VALUES (NULL, 'hello', 'ieijeijegijgijgigje', 3);";

// try {
//     mysqli_query($conn, $addpost);
// } catch (\Exception $e){
//     die('MySQL Error : ' . $e->getMessage());
// }

