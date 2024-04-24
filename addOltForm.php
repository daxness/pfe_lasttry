<?php
include 'dbh.php';

$olt_id         = null;
$lat            = null;
$lng            = null;
$op             = null;
$fp             = null;
$host_site        = null;
$type           = null;
$success        = null;
$olt_id_err     = null;
$lat_err        = null;
$lng_err        = null;
$host_site_err    = null;
$type_err       = null;

//check if the user actually submited a form
if($_SERVER["REQUEST_METHOD"]== "POST"){

    if(isset($_POST["submitOlt"])){
        
        //sanitize and validate data after it works !!!
        $olt_id = filter_input(INPUT_POST,"oltId",FILTER_SANITIZE_SPECIAL_CHARS);
        $lat = filter_input(INPUT_POST,"latitude",FILTER_VALIDATE_FLOAT);
        $lng = filter_input(INPUT_POST,"longitude",FILTER_VALIDATE_FLOAT);
        $op= filter_input(INPUT_POST,"onlinePorts",FILTER_VALIDATE_INT);
        $fp= filter_input(INPUT_POST,"freePorts",FILTER_VALIDATE_INT);
        $host_site = filter_input(INPUT_POST,"hostSite",FILTER_SANITIZE_SPECIAL_CHARS);
        $type = filter_input(INPUT_POST,"type",FILTER_SANITIZE_SPECIAL_CHARS);
        
        $success = false;
        if(empty($olt_id) || strlen($olt_id)!=6 ){
            $olt_id_err = "Invalid OLT ID";
        }
        else if(empty($lat)){
            $lat_err = "Invalid Latitude";
        
        }
        else if(empty($lng)){
            $lng_err = "Invalid Longitude";
            
        }
        else if(empty($host_site) || strlen($host_site)!=6 ){
            $host_site_err = "Invalid Host Site";
        
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
                
                $query = "INSERT INTO olt 
                            VALUES(:olt_id, :lat, :lng, :op, :fp, :host_site, :typee);";

                $stmt = $pdo->prepare($query);

                $stmt->bindParam(":olt_id",$olt_id);
                $stmt->bindParam(":lat",$lat);
                $stmt->bindParam(":lng",$lng);
                $stmt->bindParam(":op",$op);
                $stmt->bindParam(":fp",$fp);
                $stmt->bindParam(":host_site",$host_site);
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
        else {
            header("Location: Home.php");
        }
    }
}
else{
    //if tried to access directly through the url send him backtq
    header("Location: Home.php");
}