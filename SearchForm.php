<?php
include 'dbh.php';

//retrieving data from database with queries


$eq_id5 = null;
$eq_type5 = null;
$success = null;

if($_SERVER["REQUEST_METHOD"]== "POST"){

    if(isset($_POST['Search'])){

        $eq_id5 = $_POST["equipmentId5"];
        $eq_type5 = $_POST["equipmentType5"];
        $valid5 = true;

        
        if(empty($eq_type5)){
            $valid5 = false;
            
        }
        elseif(empty($eq_id5)){
            $valid5 = false;
            
        }
        


        if ($valid5) {
            
            if ($eq_type5=="OLT") {
                try {
                
                    $sqlsearch= "SELECT * FROM olt WHERE id = :olt_id;";
    
                    $stmtn = $pdo->prepare( $sqlsearch);
    
                    $stmtn->bindParam(":olt_id",$eq_id5);
    
                    $stmtn->execute();
    
                    $result5 =$stmtn->fetch(PDO::FETCH_ASSOC);
                    if ($result5) {
                        header('Content-Type: application/json');
                        echo json_encode($result5);

                    } else {
                        echo json_encode(['error' => 'No data found']);
                        
                    }
                } catch (PDOException $e) {
                  // Properly handle exception here
                    echo json_encode(['error' => $e->getMessage()]);
                    
                }
            }
            else if ($eq_type5=="FDT") {
                try {
                    $sqlsearch = "SELECT * FROM fdt 
                                WHERE id = :fdt_id;";
    
                    $stmtn = $pdo->prepare($sqlsearch);
    
                    $stmtn->bindParam(":fdt_id",$eq_id5);
    
                    $stmtn->execute();
                    $result5 =$stmtn->fetch(PDO::FETCH_ASSOC);
                    if ($result5) {
                        header('Content-Type: application/json');
                        echo json_encode($result5);
                    } else {
                        echo json_encode(['error' => 'No data found']);
                    }
    
                   
    
                } catch (PDOException $e) {
    
                    // Properly handle exception here
                    echo json_encode(['error' => $e->getMessage()]);
                }
            }
            else{
                try {
                
                    $sqlsearch = "SELECT * FROM fat 
                                WHERE id = :fat_id;";
    
                    $stmtn = $pdo->prepare($sqlsearch);
    
                    $stmtn->bindParam(":fat_id",$eq_id5);
    
                    $stmtn->execute();
    
                    $result5 =$stmtn->fetch(PDO::FETCH_ASSOC);
                    if ($result5) {
                        header('Content-Type: application/json');
                        echo json_encode($result5);
                    } else {
                        echo json_encode(['error' => 'No data found']);
                    }
    
    
                } catch (PDOException $e) {
    
                    // Properly handle exception here
                    echo json_encode(['error' => $e->getMessage()]);
                }
            }
        }

    }
}
else{
    //if tried to access directly through the url send him backtq
    header("Location: Home.php");
}