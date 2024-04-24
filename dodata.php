<?php
include 'dbh.php';
//retrieving data from database with queries
header('Content-Type: application/json');

//4.dos:
$sqldo = "SELECT * FROM dirop";
$stmtdo = $pdo->prepare($sqldo);
$stmtdo->execute();

$dos = $stmtdo->fetchAll(); // Fetch all records
echo json_encode($dos);


//print result for testing 
/*
if ($dos) {
    foreach ($dos as $row) {
        echo $row['id'] . " - " 
            . $row['nom'] . " - "
            . $row['adress'] ."<br>";
    }
} else {
    echo "No results found.";
}
*/