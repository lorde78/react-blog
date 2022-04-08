<?php

require './connexion.php';
$adduser = "INSERT INTO `user` (`idUser`, `pseudo`, `password`) VALUES (NULL, 'zidane', '12345');";

// try {
//     mysqli_query($conn, $adduser);
// } catch (\Exception $e){
//     die('MySQL Error : ' . $e->getMessage());
// }

