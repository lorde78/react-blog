<?php

$servername = 'db';
$username = 'exampleuser';
$password = 'examplepass';
$database = 'exampledb';

$conn = new mysqli($servername, $username, $password, $database);

if($conn->connect_error){
    die("Erreur : " . $conn->connect_error);
}
echo "Connexion réussie";

// $conn->close();


