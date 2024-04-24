<?php
include "dbh.php";

$olt_id         = null;
$lat            = null;
$lng            = null;
$op             = null;
$fp             = null;
$host_site        = null;
$typee           = null;
$success        = null;
$olt_id_err     = null;
$lat_err        = null;
$lng_err        = null;
$host_site_err    = null;
$type_err       = null;

//check if the user actually submited a form
if($_SERVER["REQUEST_METHOD"]== "POST"){
    
    if(isset($_POST["submitChanges"])){
        
        //sanitize and validate data after it works !!!
        $olt_id = filter_input(INPUT_POST,"oltId",FILTER_SANITIZE_SPECIAL_CHARS);
        $lat = filter_input(INPUT_POST,"latitude",FILTER_VALIDATE_FLOAT);
        $lng = filter_input(INPUT_POST,"longitude",FILTER_VALIDATE_FLOAT);
        $op= filter_input(INPUT_POST,"onlinePorts",FILTER_VALIDATE_INT);
        $fp= filter_input(INPUT_POST,"freePorts",FILTER_VALIDATE_INT);
        $host_site = filter_input(INPUT_POST,"hostSite",FILTER_SANITIZE_SPECIAL_CHARS);
        $typee = filter_input(INPUT_POST,"type",FILTER_SANITIZE_SPECIAL_CHARS);
        $old_olt_id = filter_input(INPUT_POST,"equipmentId",FILTER_SANITIZE_SPECIAL_CHARS);


        $success = false;
        if(empty($olt_id) ){
            $olt_id_err = "Invalid OLT ID";
            error_log("olt id empty\n",3,"debug.log");
        }
        elseif (  strlen(trim($olt_id)) != 6 ) {
            $olt_id_err = "Invalid OLT ID";
            error_log("olt id !=6   length=".strlen(trim($olt_id)),3,"debug.log");
        }
        else if(empty($lat)){
            $lat_err = "Invalid Latitude";
            error_log("lat empty",3,"debug.log");
            
        }
        else if(empty($lng)){
            $lng_err = "Invalid Longitude";
            error_log("lng empty",3,"debug.log");
            
        }
        else if(empty($host_site) ){
            $host_site_err = "Invalid Host Site";
            error_log("site empty",3,"debug.log");
            
        }
        elseif (strlen(trim($host_site))  !=6) {
            $host_site_err = "Invalid Host Site";
            error_log("site !=6",3,"debug.log");
        }
        else if(empty($typee)){
            $type_err = "Invalid Type";
            error_log("type empty",3,"debug.log");
            
        }
        else if( !($typee == "indoor" || $typee == "outdoor")){
            $type_err = "Invalid Type";
            error_log("type invalid",3,"debug.log");
        }
        else{
            $success = true;
            error_log("passed validation",3,"debug.log");
        }
        //isnt handled properly without the js and html which are weak
        
        if ($success) {
            
            try {
                
                $query = "UPDATE olt 
                          SET id        =  :new_id ,       
                            Latitudes   =  :new_lat,         
                            Longitudes  =  :new_lng,        
                            online_ports=  :new_op,          
                            free_ports  =  :new_fp,
                            id_site     =  :new_id_site, 
                            type        =  :new_type 
                          WHERE  id =  :old_id  ;";

                $stmt = $pdo->prepare($query);

                $stmt->bindParam(":new_id",$olt_id);
                $stmt->bindParam(":new_lat",$lat);
                $stmt->bindParam(":new_lng",$lng);
                $stmt->bindParam(":new_op",$op);
                $stmt->bindParam(":new_fp",$fp);
                $stmt->bindParam(":new_id_site",$host_site);
                $stmt->bindParam(":new_type",$typee);
                $stmt->bindParam(":old_id",$old_olt_id);

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
