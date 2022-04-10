<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Headers: authorization');
header('Access-Control-Allow-Credentials: true');
require './connexion.php';

var_dump($_SERVER);

echo json_encode([
	'username' => $_SERVER['PHP_AUTH_USER'],
	'password' => $_SERVER['PHP_AUTH_PW']
]);

try {
	$token = strval(bin2hex(random_bytes(25)));
} catch (Exception $e) {
}

$username = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];
var_dump($username);

$adduser = "INSERT INTO `user` (`idUser`, `username`, `password`, `token`) VALUES (NULL, '{$username}', '{$password}', '{$token}' );";

try {
	mysqli_query($conn, $adduser);
} catch (\Exception $e) {
	die('MySQL Error : ' . $e->getMessage());
}
