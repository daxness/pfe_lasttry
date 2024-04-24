<?php
include 'dbh.php';

$fdt_id         = null;
$lat            = null;
$lng            = null;
$op             = null;
$fp             = null;
$sr             = null;
$src_olt        = null;
$type           = null;
$success        = null;
$fdt_id_err     = null;
$lat_err        = null;
$lng_err        = null;
$sr_err         = null;
$src_olt_err    = null;
$type_err       = null;

//check if the user actually submited a form
if($_SERVER["REQUEST_METHOD"]== "POST"){

    if(isset($_POST["submitFdt"])){
        
        //sanitize and validate data after it works !!!
        $fdt_id = filter_input(INPUT_POST,"fdtId",FILTER_SANITIZE_SPECIAL_CHARS);
        $lat = filter_input(INPUT_POST,"latitude",FILTER_VALIDATE_FLOAT);
        $lng = filter_input(INPUT_POST,"longitude",FILTER_VALIDATE_FLOAT);
        $op= filter_input(INPUT_POST,"onlinePorts",FILTER_VALIDATE_INT);
        $fp= filter_input(INPUT_POST,"freePorts",FILTER_VALIDATE_INT);
        $sr = filter_input(INPUT_POST,"splitRatio",FILTER_SANITIZE_SPECIAL_CHARS);
        $src_olt= filter_input(INPUT_POST,"sourceOlt",FILTER_SANITIZE_SPECIAL_CHARS);
        $type = filter_input(INPUT_POST,"type",FILTER_SANITIZE_SPECIAL_CHARS);
        
        $success = false;
        if(empty($fdt_id) || strlen($fdt_id)!=9 ){
            $fdt_id_err = "Invalid FDT ID";
        }
        else if(empty($lat)){
            $lat_err = "Invalid Latitude";
        
        }
        else if(empty($lng)){
            $lng_err = "Invalid Longitude";
            
        }
        else if(empty($sr)){
            $sr_err = "Invalid Split Ratio";
        
        }
        else if(empty($src_olt) || strlen($src_olt)!=6 ){
            $src_olt_err = "Invalid Source OLT";
        
        }
        else if(empty($type)){
            $type_err = "Invalid Type";
            
        }
        else{
            $success = true;
        }
        //isnt handled properly without the js and html which are weak
        
        if ($success) {
            
            try {
                
                $query = "INSERT INTO fdt 
                            VALUES(:fdt_id, :lat, :lng, :op, :fp, :sr, :src_olt, :typee);";

                $stmt = $pdo->prepare($query);

                $stmt->bindParam(":fdt_id",$fdt_id);
                $stmt->bindParam(":lat",$lat);
                $stmt->bindParam(":lng",$lng);
                $stmt->bindParam(":op",$op);
                $stmt->bindParam(":fp",$fp);
                $stmt->bindParam(":sr",$sr);
                $stmt->bindParam(":src_olt",$src_olt);
                $stmt->bindParam(":typee",$type);

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
            header("Location: Home.php");
        }
    }
}
else{
    //if tried to access directly through the url send him backtq
    header("Location: Home.php");
}