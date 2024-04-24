<?php
include 'dbh.php';

$eq_id = null;
$eq_type = null;
$success = null;

if($_SERVER["REQUEST_METHOD"]== "POST"){

    if(isset($_POST["deleteBtn"])){

        $eq_id = filter_input(INPUT_POST, "eq_id", FILTER_SANITIZE_SPECIAL_CHARS);
        $eq_type = filter_input(INPUT_POST, "equipment", FILTER_SANITIZE_SPECIAL_CHARS);
        $valid = true;

        if(empty($eq_type)){
            $valid = false;
        }
        elseif(empty($eq_id)){
            $valid= false;
        }
        


        if ($valid) {
        
            if ($eq_type=="OLT") {
                try {
                
                    $query = "DELETE FROM olt 
                                WHERE id = :olt_id;";
    
                    $stmt = $pdo->prepare($query);
    
                    $stmt->bindParam(":olt_id",$eq_id);
    
                    $stmt->execute();
    
                    $pdo=null;
                    $stmt=null;
                    
                    header("Location: Home.php");
    
                } catch (PDOException $e) {
    
                    //if some error stop process
                    die("Query failed : ". $e->getMessage());
                }
            }
            else if ($eq_type=="FDT") {
                try {
                    $query = "DELETE FROM fdt 
                                WHERE id = :fdt_id;";
    
                    $stmt = $pdo->prepare($query);
    
                    $stmt->bindParam(":fdt_id",$eq_id);
    
                    $stmt->execute();
    
                    $pdo=null;
                    $stmt=null;
                    
                    header("Location: Home.php");
    
                } catch (PDOException $e) {
    
                    //if some error stop process
                    die("Query failed : ". $e->getMessage());
                }
            }
            else{
                try {
                
                    $query = "DELETE FROM fat 
                                WHERE id = :fat_id;";
    
                    $stmt = $pdo->prepare($query);
    
                    $stmt->bindParam(":fat_id",$eq_id);
    
                    $stmt->execute();
    
                    $pdo=null;
                    $stmt=null;
                    
                    header("Location: Home.php");
    
                } catch (PDOException $e) {
    
                    //if some error stop process
                    die("Query failed : ". $e->getMessage());
                }
            }
        }

    }
}
else{
    //if tried to access directly through the url send him backtq
    header("Location: Home.php");
}