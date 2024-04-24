<?php
include 'dbh.php';

?>
<!doctype html>

<html lang = "en">
  <head>
    <title>FTTH Networks</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  </head>
  <body>

   <nav>
   <button id="modalSearchBtn" class="button">Search</button>
    <div id="SearchModal" class="modal">
        <div class ="modal-content">
            <span class ="closeBtn"  id ="closeBtnSearch">&times;</span>
           
              <form id="SearchForm" method="POST" action="SearchForm.php">
                <select name="equipmentType5" id="equipmentType5">
                    <option value="OLT5">OLT</option>
                    <option value="FDT5">FDT</option>
                    <option value="FAT5">FAT</option>
                </select>
                
                <input type="text" id="equipmentId5" name="equipmentId5" placeholder="Enter Equipment ID" required>
                <button type="button" id="Search" name="Search">search</button>

                <!-- Placeholders for data to edit -->
                <div id="editDetails5">
                    <!-- Dynamically filled based on selected equipment -->
                </div>
            </form>
         
        </div>
    </div>
    
      <form>
        <button>logout</button>
</form>    
   </nav>

    <h3>My Google Maps Demo</h3>
    <!--The div element for the map -->
    <div id="map"></div>
    
    
    
    <button id="modalAddBtn" class="button">Add</button><!--modalBtn-->
    <div id="addModal" class="modal"><!--simple modal-->
        <div class ="modal-content">
            <span class ="closeBtn" id ="closeBtnAdd">&times;</span>
            <div id = "addForm">
                <b>Please select the type of the equipment you want to add :</b><br>
                <input type="radio" name="equipment" id ="olt1">OLT
                <input type="radio" name="equipment" id = "fdt1">FDT
                <input type="radio" name="equipment" id = "fat1">FAT<br>
                <button id = "nextBtn1">Next</button>
            </div>
        </div>
    </div>
    
    <button id="modalEditBtn" class="button">Edit</button>
    <div id="editModal" class="modal">
        <div class ="modal-content">
            <span class ="closeBtn"  id ="closeBtnEdit">&times;</span>
            <form id="editForm" method="post" action="saveOltChanges.php">
                <select name="equipmentType" id="equipmentType">
                    <option value="OLT">OLT</option>
                    <option value="FDT">FDT</option>
                    <option value="FAT">FAT</option>
                </select>
                
                <input type="text" id="equipmentId" name="equipmentId" placeholder="Enter Equipment ID" required>
                <button type="button" id="loadDetails" name="loadDetails">Load Details</button>

                <!-- Placeholders for data to edit -->
                <div id="editDetails">
                    <!-- Dynamically filled based on selected equipment -->
                </div>

            </form>
        </div>
    </div>
    
    <button id="modalDeleteBtn" class="button">Delete</button>
    <div id="deleteModal" class="modal">
        <div class ="modal-content">
            <span class ="closeBtn" id ="closeBtnDelete">&times;</span>
            <form id="deleteForm" action="deleteForm" method="post" >

                <label>Please select the type of equipment you want to delete :</label><br>
                <input type="radio" name="equipment" id ="olt2" value="OLT" required>OLT
                <input type="radio" name="equipment" id = "fdt2" value="FDT" required>FDT
                <input type="radio" name="equipment" id = "fat2" value="FAT" required>FAT<br>
                <div id = 'problemTxt1'></div>
                <label>Please enter the ID of equipment you want to delete :</label><br>
                <input type="text" id="eq_id" name="eq_id" placeholder="ID of Equipment"><br>
                <div id = 'problemTxt2'></div>
                <button type="submit" id="deleteBtn" name="deleteBtn">Delete</button>

            </form>
        </div>
    </div>






    <!-- prettier-ignore -->
    <script>(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})
        ({key: "AIzaSyD72FKGFmDd9xcGa1nXpxCwBBpw3ojHWCk", v: "weekly"});
    </script>
  </body>
  <script type="module" src="./index.js"></script>
</html>

