<?php
include 'dbh.php';

//retrieving data from database with queries
header('Content-Type: application/json');

if ($_SERVER["REQUEST_METHOD"] == "POST"){

    
   if( isset($_POST["loadDetails"]) ){
        $id = $_POST["equipmentId"];

    try {
        $query = "SELECT * FROM olt WHERE id = :id";
        
        $stmt = $pdo->prepare($query);
        
        $stmt->bindParam(":id",$id);
        
        $stmt->execute();
        
        $result = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($result) {
            echo json_encode($result);
        } else {
            echo json_encode(['error' => 'No data found']);
        }
    } catch (PDOException $e) {
        // Properly handle exception here
        echo json_encode(['error' => $e->getMessage()]);
        }
    }
}