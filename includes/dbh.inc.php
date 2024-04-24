<?php

$dsn = "mysql:host=localhost;dbname=ftth_network";
$dbusername = "root";
$dbpassword = "";

//connect to the database
try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);   //create a phpdataobject
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection faild : " . $e->getMessage(); //print error message
}