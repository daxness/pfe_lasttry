<?php
include 'dbh.php';
//retrieving data from database with queries
header('Content-Type: application/json');

//3.olts::
$sqlolt = "SELECT * FROM olt";
$stmtolt = $pdo->prepare($sqlolt);
$stmtolt->execute();

$olts = $stmtolt->fetchAll(); // Fetch all records
echo json_encode($olts);

//print result for testing 
/*
if ($olts) {
    foreach ($olts as $row) {
        echo $row['id'] . " - " 
        . $row['Latitudes'] . " - "
        . $row['Longitudes'] . " - " 
        . $row['online_ports'] . " - "
        . $row['free_ports'] . " - " 
        . $row['id_site'] . " - " 
        . $row['type'] ."<br>";
    }
} else {
    echo "No results found.";
}
*/