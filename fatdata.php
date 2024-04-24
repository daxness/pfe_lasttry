<?php
include 'dbh.php';
//retrieving data from database with queries
header('Content-Type: application/json');

//1.fats:
$sqlfat = "SELECT * FROM fat";
$stmtfat = $pdo->prepare($sqlfat);
$stmtfat->execute();

$fats = $stmtfat->fetchAll(); // Fetch all records
echo json_encode($fats);

/*
//print result for testing 
if ($fats) {
    foreach ($fats as $row) {
        echo $row['id'] . " - " 
            . $row['Latitudes'] . " - "
            . $row['Longitudes'] . " - " 
            . $row['online_ports'] . " - "
            . $row['free_ports'] . " - " 
            . $row['split_ratio']. " - "
            . $row['id_fdt'] . " - " 
            . $row['type'] ."<br>";
    }
} else {
    echo "No results found.";
}
*/




