<?php
include 'dbh.php';
//retrieving data from database with queries
header('Content-Type: application/json');

//2.fdts:
$sqlfdt = "SELECT * FROM fdt";
$stmtfdt = $pdo->prepare($sqlfdt);
$stmtfdt->execute();

$fdts = $stmtfdt->fetchAll(); // Fetch all records
echo json_encode($fdts);

/*
//print result for testing 
if ($fdts) {
    foreach ($fdts as $row) {
        echo $row['id'] . " - " 
            . $row['Latitudes'] . " - "
            . $row['Longitudes'] . " - " 
            . $row['online_ports'] . " - "
            . $row['free_ports'] . " - " 
            . $row['split_ratio'] . " - "
            . $row['id_olt'] . " - " 
            . $row['type'] . "<br>";
    }
} else {
    echo "No results found.";
}
*/