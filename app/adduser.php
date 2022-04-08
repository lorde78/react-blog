<?php

require './connexion.php';
require './tokengenerator.php';

$token = strval(bin2hex($bytes));

$adduser = "INSERT INTO `user` (`idUser`, `username`, `password`, `token`) VALUES (NULL, 'bravo', '12345', '{$token}' );";


// try {
//     mysqli_query($conn, $adduser);
// } catch (\Exception $e){
//     die('MySQL Error : ' . $e->getMessage());
// }

