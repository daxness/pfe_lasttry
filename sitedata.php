<?php
include 'dbh.php';
//retrieving data from database with queries
header('Content-Type: application/json');

//5.sites:
$sqlsite = "SELECT * FROM site";
$stmtsite = $pdo->prepare($sqlsite);
$stmtsite->execute();

$sites = $stmtsite->fetchAll(); // Fetch all records
$json5 = json_encode($sites);

/*
//print result for testing 
if ($sites) {
    foreach ($sites as $row) {
        echo $row['id'] . " - " 
            . $row['nom'] . " - "
            . $row['id_do'] . " - " 
            . $row['Latitudes'] . " - "
            . $row['Longitudes'] ."<br>";
    }
} else {
    echo "No results found.";
}
*/