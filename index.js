
// Initialize and add the map (global)
let map;

async function initMap() {
  // The location of ALGT HQ
  const position = { lat: 36.7247290, lng: 3.1540214 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");

  // The map, centered at ALGT HQ
  map = new Map(document.getElementById("map"), {
    zoom: 11,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  //marker customization 
  const pinElement = new PinElement({
    scale : 2.5,
    background :"#E2151D",
    glyphColor : "white",
  });
  
  // The marker, positioned at ALGT HQ
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "ALGT HQ",
    content : pinElement.element,
  });
}
async function loadFatMarkers(id,lat,lng,op,fp,sr,id_fdt,type){
  /* 
  lat = latitude    lng= longitude
  op = online port  fp= free port
  sr = split ratio   
  */

  //import the library for markers and pins
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  
  //create the content of the infow window
  const contentString = 
    "<b>ID : </b>"+id+"<br>"+
    "<b>Latitude : </b>"+lat+"<br>"+
    "<b>Longitude : </b>"+lng+"<br>"+
    "<b>Online Ports : </b>"+op+"<br>"+
    "<b>Free Ports : </b>"+fp+"<br>"+
    "<b>Split Ratio: </b>"+sr+"<br>"+
    "<b>Source FDT: </b>"+id_fdt+"<br>"+
    "<b>Type : </b>"+type+"<br>"
  ;

  //create the infow widow object and pass the content 
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    arialLabel: "Info",     //
  });

  //create and customize the pin element 
  const pinElement = new PinElement({
    scale : 0.75,
    background :"#27F400",
  });

  //create the marker
  var marker =  new AdvancedMarkerElement({
    map: map,
    position: {lat: parseFloat(lat),lng: parseFloat(lng)},
    title: "FAT",
    content : pinElement.element,
  });

  //adding a event listener for clicks to open the window info
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });
}

async function loadDoMarkers(id,name,adress,lat,lng){
   /* 
  lat = latitude    lng= longitude
  op = online port  fp= free port
  sr = split ratio   
  */

  //import the library for markers and pins
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  
  //create the content of the infow window
  const contentString = 
  "<b>ID : </b>"+id+"<br>"+
  "<b>Name : </b>"+name+"<br>"+
  "<b>Adress : </b>"+adress+"<br>"+
  "<b>Latitude : </b>"+lat+"<br>"+
  "<b>Longitude : </b>"+lng+"<br>"
  ;
  
  //create the infow widow object and pass the content
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    arialLabel: "Info",
  });
  
  //create and customize the pin element 
  const pinElement = new PinElement({
    scale : 1.5,
    background :"#1231A2",
  });
  
  //create the marker
  var marker =  new AdvancedMarkerElement({
    map: map,
    position: {lat: parseFloat(lat),lng: parseFloat(lng)},
    title: "DOT",
    content : pinElement.element,
  });
  
  //adding a event listener for clicks to open the window info
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

}
async function loadOltMarkers(id,lat,lng,on,fp,id_site,type){
  /* 
  lat = latitude    lng= longitude
  op = online port  fp= free port
  sr = split ratio   
  */

  //import the library for markers and pins
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  
  //create the content of the infow window
  const contentString = 
  "<b>ID : </b>"+id+"<br>"+
  "<b>Latitude : </b>"+lat+"<br>"+
  "<b>Longitude : </b>"+lng+"<br>"+
  "<b>Online Ports : </b>"+on+"<br>"+
  "<b>Free Ports : </b>"+fp+"<br>"+
  "<b>Host site : </b>"+id_site+"<br>"+
  "<b>Type : </b>"+type+"<br>"
  ;
  
  //create the infow widow object and pass the content
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    arialLabel: "Info",
  });
  
  //create and customize the pin element 
  const pinElement = new PinElement({
    scale : 2,
    background :"#004F20",
  });
  
  //create the marker
  var marker =  new AdvancedMarkerElement({
    map: map,
    position: {lat: parseFloat(lat),lng: parseFloat(lng)},
    title: "OLT",
    content : pinElement.element,
  });
  
  //adding a event listener for clicks to open the window info
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

}
async function loadFdtMarkers(id,lat,lng,op,fp,sr,id_olt,type){
   /* 
  lat = latitude    lng= longitude
  op = online port  fp= free port
  sr = split ratio   
  */

  //import the library for markers and pins
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker");
  
  //create the content of the infow window
  const contentString = 
  "<b>ID : </b>"+id+"<br>"+
  "<b>Latitude : </b>"+lat+"<br>"+
  "<b>Longitude : </b>"+lng+"<br>"+
  "<b>Online Ports : </b>"+op+"<br>"+
  "<b>Free Ports : </b>"+fp+"<br>"+
  "<b>Split Ratio: </b>"+sr+"<br>"+
  "<b>Source FDT: </b>"+id_olt+"<br>"+
  "<b>Type : </b>"+type+"<br>"
  ;
  
  //create the infow widow object and pass the content
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    arialLabel: "Info",
  });
  
  //create and customize the pin element 
  const pinElement = new PinElement({
    scale : 1,
    background :"#138BDF",
  });

  //create the marker
  var marker =  new AdvancedMarkerElement({
    map: map,
    position: {lat: parseFloat(lat),lng: parseFloat(lng)},
    title: "FDT",
    content : pinElement.element,
  });
  
  //adding a event listener for clicks to open the window info
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

}


//create the map 
initMap();
//console.log("zefdgjdqs");

//get the data from database

//get fats from fatdata.php
$.ajax({
  url:'fatdata.php',
  success: function(data) {
    //check what inside the returned object
    console.log(data); 
    var id = data[0].id;
    console.log(id);

    //insert the fats to the map
    for (let i = 0; i< data.length; i++) {
        loadFatMarkers(data[i].id , 
                      data[i].Latitudes , 
                      data[i].Longitudes , 
                      data[i].online_ports , 
                      data[i].free_ports , 
                      data[i].split_ratio , 
                      data[i].id_fdt ,
                      data[i].type
                    ); 
    }
  }
});

//get fdts from fdtdata.php
$.ajax({
  url:'fdtdata.php',
  success: function(data) {
    //check what inside the returned object
    console.log(data); 
    var id = data[0].id;
    console.log(id);

    //insert the fdts to the map
    for (let i = 0; i< data.length; i++) {
      loadFdtMarkers(data[i].id , 
                    data[i].Latitudes , 
                    data[i].Longitudes , 
                    data[i].online_ports , 
                    data[i].free_ports , 
                    data[i].split_ratio , 
                    data[i].id_olt ,
                    data[i].type
      ); 
    }
  }
});

//get olts from oltdata.php
$.ajax({
  url:'oltdata.php',
  success: function(data) {
    //check what inside the returned object
    console.log(data); 
    var id = data[0].id;
    console.log(id);
    //insert the olts to the map
    for (let i = 0; i< data.length; i++) {
        loadOltMarkers( data[i].id,
                        data[i].Latitudes , 
                        data[i].Longitudes, 
                        data[i].online_ports,
                        data[i].free_ports, 
                        data[i].id_site,
                        data[i].type
                      );
    }
  }
  });
  
//get dos from dodata.php
$.ajax({
  url:'dodata.php',
  success: function(data) {
    //check what inside the returned object
    console.log(data); 
    var name = data[0].nom;
    console.log(name);

    //insert the dos to the map
    for (let i = 0; i< data.length; i++) {
        loadDoMarkers(data[i].id,
                      data[i].nom,
                      data[i].adress,
                      data[i].Latitudes , 
                      data[i].Longitudes); 
    }
  }
});

//-----------------ADD-----EDIT--------DELETE----------------------------------------

//get modals elements  
const addModal = document.getElementById('addModal');
const editModal = document.getElementById('editModal');
const deleteModal = document.getElementById('deleteModal');
const SearchModal = document.getElementById('SearchModal');

//get the buttons that open the modals
const modalAddBtn = document.getElementById('modalAddBtn');
const modalEditBtn = document.getElementById('modalEditBtn');
const modalDeleteBtn = document.getElementById('modalDeleteBtn');
const modalSearchBtn = document.getElementById('modalSearchBtn');

//get close buttons 
const closeBtnAdd = document.getElementById('closeBtnAdd');
const closeBtnEdit = document.getElementById('closeBtnEdit');
const closeBtnDelete = document.getElementById('closeBtnDelete');
const closeBtnSearch = document.getElementById('closeBtnSearch');

//listen for clicks on the buttons
modalAddBtn.addEventListener('click', openAddModal);
modalEditBtn.addEventListener('click', openEditModal);
modalDeleteBtn.addEventListener('click', openDeleteModal);
modalSearchBtn.addEventListener('click', openSearchModal);

//listen for closing clicks 
closeBtnAdd.addEventListener('click', closeAddModal);
closeBtnEdit.addEventListener('click', closeEditModal);
closeBtnDelete.addEventListener('click', closeDeleteModal);
closeBtnSearch.addEventListener('click', closeSearchModal);

//listen for outside clicks
window.addEventListener('click', outsideClick);

//the add form / process----------------------------------------------------------

const addForm = document.getElementById('addForm');//get the div addForm

//functions that sets up the eventlisterns for the changing elements(reseted)
function setupEventListeners(){

  //get the radios and next buttons
  const oltRadio = document.getElementById('olt1');
  const fdtRadio = document.getElementById('fdt1');
  const fatRadio = document.getElementById('fat1');
  const nextAddBtn = document.getElementById('nextBtn1');

  
  nextAddBtn.onclick = function(){
    if(fatRadio.checked){
      
      //change the html to an FAT form if Fat selected and next clicked  
      
      addForm.innerHTML = "<form action='addFatForm.php' method = 'post' id = 'fatForm'>"+
      "<h2>FAT Informations</h2>"+
      "<label for='fatId' >FAT ID :</label>"+
      "<input type='text' id='fatId' name='fatId' maxlength = '12' minlength = '12' required><br> "+
      "<div id = 'problemTxt1'></div>"+
      "<div> <?php echo $fat_id_err ?></div>"+
      
      "<label for='latitude'>Latitude :</label>"+
      "<input type='text' id='latitude' name='latitude' required><br> "+
      "<div id = 'problemTxt2'></div>"+
      "<div> <?php echo $lat_err ?></div>"+
      
      "<label for='longitude'>Longitude :</label>"+
      "<input type='text' id='longitude' name='longitude' required><br> "+
      "<div id = 'problemTxt3'></div>"+
      "<div> <?php echo $lng_err ?></div>"+
      
      "<label for='onlinePorts'>Online ports :</label>"+
      "<input type='text' id='onlinePorts' name='onlinePorts'><br>"+
      
      "<label for='freePorts'>Free ports :</label>"+
      "<input type='text' id='freePorts' name='freePorts'><br>"+
      
      "<label for='splitRatio'  >Split ratio :</label>"+
      "<input type='text' id='splitRatio' name='splitRatio' required><br>"+
      "<div id = 'problemTxt6'></div>"+
      "<div> <?php echo $sr_err ?></div>"+
      
      "<label for='sourceFdt'>Source FDT :</label>"+
      "<input type='text' id='sourceFdt' name='sourceFdt'maxlength = '9' minlength = '9'required><br> "+
      "<div id = 'problemTxt7'></div>"+
      "<div> <?php echo $src_fdt_err ?></div>"+
      
      "    <label>Type:</label>"+
      "    <label>"+
      "        <input type='radio' id='indoorTy' name='type' value='indoor' required> Indoor "+
      "    </label>"+
      "    <label>"+
      "        <input type='radio' id='outdoorTy' name='type' value='outdoor'required > Outdoor"+
      "    </label>"+
      "<div id = 'problemTxt8'></div>"+
      "<div> <?php echo $type_err ?></div>"+
      "<br>"+    
      "<button type='submit' id='submitFat' name ='submitFat' >Submit</button>"+
      "</form>";

      //add event listener for the submit button

      const form = document.getElementById('fatForm');
      
      form.addEventListener('submit', function(event) {  

        //get the div elements where the error msg is gonna be shown
        const pbtxt1 = document.getElementById('problemTxt1');
        const pbtxt2 = document.getElementById('problemTxt2');
        const pbtxt3 = document.getElementById('problemTxt3');
        const pbtxt6 = document.getElementById('problemTxt6');
        const pbtxt7 = document.getElementById('problemTxt7');
        const pbtxt8 = document.getElementById('problemTxt8');

        //get inputs 
        const fat_id= document.getElementById('fatId');
        const lat= document.getElementById('latitude');
        const lng= document.getElementById('longitude');
        const sr= document.getElementById('splitRatio');
        const src_fdt = document.getElementById('sourceFdt');
        const type1= document.getElementById('indoorTy');
        const type2= document.getElementById('outdoorTy');

        let valid = true;
        
        //validate FAT ID 
        if(fat_id.value == ""){
          pbtxt1.textContent = "FAT ID is required"
          valid = false;
        }
        else if(fat_id.value.length > 0 && fat_id.value.length < 12){
          pbtxt1.textContent = "Please enter a valid FAT ID with 12 characters"
          valid = false;
        }
        
        //validate latitude 
        if(lat.value == ""){
          pbtxt2.textContent = "Latitude is required"
          valid = false;
        }
        
        //validate longitude 
        if(lng.value == ""){
          pbtxt3.textContent = "Longitude is required"
          valid = false;
        }
        
        //validate split ratio 
        if(sr.value == ""){
          pbtxt6.textContent = "Split Ratio is required"
          valid = false;
        }
        
        //validate source fdt 
        if(src_fdt.value == ""){
          pbtxt7.textContent = "Source FDT is required"
          valid = false;
        }
        else if(src_fdt.value.length > 0 && src_fdt.value.length < 9){
          pbtxt7.textContent = "Please enter a valid Source FDT with 9 characters"
          valid = false;
        }
        
        //validate type
        if( (type1.checked  || type2.checked) == false){
          pbtxt8.textContent = "A type is required"
          valid = false;
        }

        //check validity
        //check without required att ONE LAST TIME!
        if (!valid) {
          event.preventDefault();  // Stop form submission
        }

      });

  
  }else if(fdtRadio.checked){
      //change the html to an FDT form if FDT selected and next clicked

      addForm.innerHTML = "<form action='addFdtForm.php' method = 'post' id='fdtForm'>"+
      "<h2>FDT Informations</h2>"+
      "<label for='fdtId'>FDT ID :</label>"+
      "<input type='text' id='fdtId' name='fdtId' maxlength = '9' minlength = '9' required><br> "+
      "<div id = 'problemTxt1'></div>"+
      "<div> <?php echo $fdt_id_err ?></div>"+

      "<label for='latitude'>Latitude :</label>"+
      "<input type='text' id='latitude' name='latitude' required><br> "+
      "<div id = 'problemTxt2'></div>"+
      "<div> <?php echo $lat_err ?></div>"+

      "<label for='longitude'>Longitude :</label>"+
      "<input type='text' id='longitude' name='longitude' required><br> "+
      "<div id = 'problemTxt3'></div>"+
      "<div> <?php echo $lng_err ?></div>"+

      "<label for='onlinePorts'>Online ports :</label>"+
      "<input type='text' id='onlinePorts' name='onlinePorts'><br>"+
  
      "<label for='freePorts'>Free ports :</label>"+
      "<input type='text' id='freePorts' name='freePorts'><br>"+
  
      "<label for='splitRatio'>Split ratio :</label>"+
      "<input type='text' id='splitRatio' name='splitRatio'required><br>"+
      "<div id = 'problemTxt6'></div>"+
      "<div> <?php echo $sr_err ?></div>"+
      
      "<label for='sourceOlt'>Source OLT :</label>"+
      "<input type='text' id='sourceOlt' name='sourceOlt' maxlength = '6' minlength = '6' required><br> "+
      "<div id = 'problemTxt7'></div>"+
      "<div> <?php echo $src_olt_err ?></div>"+
      
      "    <label>Type:</label>"+
      "    <label>"+
      "        <input type='radio' id='indoorTy' name='type' value='indoor' required> Indoor "+
      "    </label>"+
      "    <label>"+
      "        <input type='radio' id='outdoorTy' name='type' value='outdoor'required> Outdoor"+
      "    </label>"+
      "<div id = 'problemTxt8'></div>"+
      "<div> <?php echo $type_err ?></div>"+
      "<br>"+    
      "<button type='submit' id='submitFdt' name ='submitFdt' >Submit</button>"+
      "</form>";

    //add event listener for the submit button

    const form = document.getElementById('fdtForm');
      
    form.addEventListener('submit', function(event) {  

      //get the div elements where the error msg is gonna be shown
      const pbtxt1 = document.getElementById('problemTxt1');
      const pbtxt2 = document.getElementById('problemTxt2');
      const pbtxt3 = document.getElementById('problemTxt3');
      const pbtxt6 = document.getElementById('problemTxt6');
      const pbtxt7 = document.getElementById('problemTxt7');
      const pbtxt8 = document.getElementById('problemTxt8');

      //get inputs 
      const fdt_id= document.getElementById('fdtId');
      const lat= document.getElementById('latitude');
      const lng= document.getElementById('longitude');
      const sr= document.getElementById('splitRatio');
      const src_olt = document.getElementById('sourceOlt');
      const type1= document.getElementById('indoorTy');
      const type2= document.getElementById('outdoorTy');

      let valid = true;
      
      //validate FDT ID 
      if(fdt_id.value == ""){
        pbtxt1.textContent = "FDT ID is required"
        valid = false;
      }
      else if(fdt_id.value.length > 0 && fdt_id.value.length < 9){
        pbtxt1.textContent = "Please enter a valid FDT ID with 9 characters"
        valid = false;
      }
      
      //validate latitude 
      if(lat.value == ""){
        pbtxt2.textContent = "Latitude is required"
        valid = false;
      }
      
      //validate longitude 
      if(lng.value == ""){
        pbtxt3.textContent = "Longitude is required"
        valid = false;
      }
      
      //validate split ratio 
      if(sr.value == ""){
        pbtxt6.textContent = "Split Ratio is required"
        valid = false;
      }
      
      //validate source olt 
      if(src_olt.value == ""){
        pbtxt7.textContent = "Source OLT is required"
        valid = false;
      }
      else if(src_olt.value.length > 0 && src_olt.value.length < 6){
        pbtxt7.textContent = "Please enter a valid Source FDT with 9 characters"
        valid = false;
      }
      
      //validate type
      if( (type1.checked  || type2.checked) == false){
        pbtxt8.textContent = "A type is required"
        valid = false;
      }

      //check validity
      //check without required att ONE LAST TIME!
      if (!valid) {
        event.preventDefault();  // Stop form submission
      }

    });
      
    }
    else if(oltRadio.checked){

      //change the html to an OLT form if OLT selected and next clicked

      addForm.innerHTML = "<form action='addOltForm.php' method = 'post' id='oltForm1'>"+
      "<h2>OLT Informations</h2>"+
      "<label for='oltId'>OLT ID :</label>"+
      "<input type='text' id='oltId' name='oltId'maxlength = '6' minlength = '6' required><br> "+
      "<div id = 'problemTxt1'></div>"+
      "<div> <?php echo $olt_id_err ?></div>"+
  
      "<label for='latitude'>Latitude :</label>"+
      "<input type='text' id='latitude' name='latitude' required><br> "+
      "<div id = 'problemTxt2'></div>"+
      "<div> <?php echo $lat_err ?></div>"+
      
      "<label for='longitude'>Longitude :</label>"+
      "<input type='text' id='longitude' name='longitude'required><br> "+
      "<div id = 'problemTxt3'></div>"+
      "<div> <?php echo $lng_err ?></div>"+
      
      "<label for='onlinePorts'>Online ports :</label>"+
      "<input type='text' id='onlinePorts' name='onlinePorts'><br>"+
  
      "<label for='freePorts'>Free ports :</label>"+
      "<input type='text' id='freePorts' name='freePorts'><br>"+
    
      "<label for='hostSite'>Host site :</label>"+
      "<input type='text' id='hostSite' name='hostSite' maxlength = '6' minlength = '6' required><br> "+
      "<div id = 'problemTxt6'></div>"+
      "<div> <?php echo $host_site_err ?></div>"+
      
      "<label>Type:</label>"+
      "<label>"+
      "   <input type='radio' id='indoorTy' name='type' value='indoor' required> Indoor "+
      "</label>"+
      "<label>"+
      "   <input type='radio' id='outdoorTy' name='type' value='outdoor'required> Outdoor"+
      "</label>"+
      "<div id = 'problemTxt7'></div>"+
      "<div> <?php echo $type_err ?></div>"+
      "<br>"+    
      "<button type='submit' id='submitOlt' name ='submitOlt'>Submit</button>"+
    "</form>";
    
    //add event listener for the submit button
    const form = document.getElementById('oltForm1');
      
    form.addEventListener('submit', function(event) {  

      //get the div elements where the error msg is gonna be shown
      const pbtxt1 = document.getElementById('problemTxt1');
      const pbtxt2 = document.getElementById('problemTxt2');
      const pbtxt3 = document.getElementById('problemTxt3');
      const pbtxt6 = document.getElementById('problemTxt6');
      const pbtxt7 = document.getElementById('problemTxt7');

      //get inputs 
      const olt_id= document.getElementById('oltId');
      const lat= document.getElementById('latitude');
      const lng= document.getElementById('longitude');
      const src_site = document.getElementById('hostSite');
      const type1= document.getElementById('indoorTy');
      const type2= document.getElementById('outdoorTy');

      let valid = true;
      
      //validate OLT ID 
      if(olt_id.value == ""){
        pbtxt1.textContent = "OLT ID is required"
        valid = false;
        console.log("olt_id : valid falsae");
      }
      else if(olt_id.value.length > 0 && olt_id.value.length < 6){
        pbtxt1.textContent = "Please enter a valid OLT ID with 6 characters"
        valid = false;
      }
      
      //validate latitude 
      if(lat.value == ""){
        pbtxt2.textContent = "Latitude is required"
        valid = false;
      }
      
      //validate longitude 
      if(lng.value == ""){
        pbtxt3.textContent = "Longitude is required"
        valid = false;
      }
      
      //validate host site 
      if(src_site.value == ""){
        pbtxt6.textContent = "Host Site is required"
        valid = false;
      }
      else if(src_site.value.length > 0 && src_site.value.length < 6){
        pbtxt6.textContent = "Please enter a valid Host Site with 6 characters"
        valid = false;
      }   
      //validate type
      if( (type1.checked  || type2.checked) == false){
        pbtxt7.textContent = "A type is required"
        valid = false;
      }
      
      //check validity
      if (!valid) {
        event.preventDefault();  // Stop form submission
      }

    });
    }
  }
  
}

//initial setep of listeners
document.addEventListener('DOMContentLoaded',function(){
  setupEventListeners();
});


//delete process----------------------------------------------------------
  
function deleteEquipment(){

  //getting the form
  const form = document.getElementById('deleteForm');
  
  //setting the event listner on the submit(delete) button 
  form.addEventListener('submit', function(event) { 
    
    //get the elements
    const oltRadio = document.getElementById('olt2');
    const fdtRadio = document.getElementById('fdt2');
    const fatRadio = document.getElementById('fat2');
    const eq_id = document.getElementById('eq_id');
    const pbtxt1 = document.getElementById('problemTxt1');
    const pbtxt2 = document.getElementById('problemTxt2');
    let valid2 = true;


    //validate the input
    if( !(oltRadio.checked || fdtRadio.checked || fatRadio.checked) ){
      pbtxt1.textContent = "Type selection is required"
      valid2=false;
    }
    else  if(eq_id.value == ""){
      valid2=false;
      pbtxt2.textContent =" An ID is required"
    }
    else if (oltRadio.checked && eq_id.value.length !== 6){
      pbtxt2.textContent =" Invalid Olt ID (6 characters required)"
      valid2=false;
    }
    else if (fdtRadio.checked && eq_id.value.length !== 9 ){
      pbtxt2.textContent =" Invalid FDT ID (9 characters required)"
    
      valid2=false;
    }
    else if (fatRadio.checked && eq_id.value.length !== 12 ){
      pbtxt2.textContent =" Invalid FAT ID (12 characters required)"
    
      valid2=false;
    }
    
    
    //checking if the input past the validation
    if (!valid2) {
      //stop the form from submiting 
      event.preventDefault();
    }

  });
  
}

//edit process---------------------------------------

//listner for the load details button
$("#loadDetails").click(function(){

  //get button by id
  const loadDetailsInput = document.getElementById('equipmentId');
  
  //set it to readonly so it can not be changed but still submited with the form
  loadDetailsInput.setAttribute('readonly', true);
  
  //get the details of the equipment
  fetchEquipmentDetails();
});


//function that fetches the  info and display it as form depending on the type
function fetchEquipmentDetails(){

  //get the inputed id and the chosen equipment type 
  var id = document.getElementById('equipmentId').value;
  var type = document.getElementById('equipmentType').value;
  
  //show the form depending on the chosen type
  if (type=="OLT") {
    
    // AJAX request to fetch the info
    $.post(
      'editOltForm.php', 
      {
        equipmentId: id,
        loadDetails: true
      }, 
      function(data) {

        //pass the html code of the form as string with the fetched informations
        const formHtml =  "<h2>OLT "+data.id+" Informations : </h2>"+ 

        
        "<label for='oltId'>OLT ID:</label>"+
        "<input type='text' id='oltId' name='oltId' value='"+data.id+"' maxlength = '6' minlength = '6' required><br>"+

        "<label for='latitude'>Latitudes:</label>"+
        "<input type='text' id='latitude' name='latitude' value='"+data.Latitudes+"'><br>"+

        "<label for='longitude'>Longitude:</label>"+
        "<input type='text' id='longitude' name='longitude' value='"+data.Longitudes+"' required><br>"+
        
        "<label for='onlinePorts'>Online ports:</label>"+
        "<input type='text' id='onlinePorts' name='onlinePorts' value='"+data.online_ports+"' ><br>"+

        "<label for='freePorts'>Free ports:</label>"+
        "<input type='text' id='freePorts' name='freePorts'  value='"+data.free_ports+"' ><br>"+

        "<label for='hostSite'>Host site:</label>"+
        "<input type='text' id='hostSite' name='hostSite' value='"+data.id_site+"' maxlength = '6' minlength = '6' required><br>"+
        
        "<label for='type'>Type :</label>"+
        "<input type='text' id='type' name='type' value='"+data.type+"' required><br>"+
        
        "<button type='submit' id='submitChanges' name='submitChanges'>Submit Changes</button>"; ;

        //execute the string as html code with the help of html
        $('#editDetails').html(formHtml);

        //add listener to submit changes button 
        $('#editForm').on('submit', function(e) {
          
          alert('Update Successful: ' );
        });

      }); 
  }
}



//search process---------------------------------------
//listner for the load details button
$("#Search").click(function(){

  //get button by id
  const SearchDetailsInput = document.getElementById('equipmentId5');
  
  //set it to readonly so it can not be changed but still submited with the form
  SearchDetailsInput.setAttribute('readonly', true);
  
 
   //get the inputed id and the chosen equipment type 
   var id = document.getElementById('equipmentId5').value;
   var type = document.getElementById('equipmentType5').value;
   
   
   
     
     // AJAX request to fetch the info
     $.ajax({
      url:'searchForm.php',
      type: "POST",
      dataType: "json",
      success: function(data) {
        //check what inside the returned object
        console.log(data); 
        var id = data.id;
        console.log(id);
  
  
        //pass the html code of the form as string with the fetched informations
      const formHtml5 =  "<h2>equipement Informations : </h2>"+ 
  
      "<p> data id is"+data.id+"</p><br>"+
  
      "<p> latitude is"+data.Latitudes+"</p><br>"+
      
      "<p> longitude is"+data.Longitudes+"</p>"+
         
      "<p>online ports are"+data.online_ports+"</p><br>"+
      
      "<p>free ports are"+data.free_ports+"</p><br>"+
  
      "<p> the host site is"+data.id_site+"</p><br>"+
  
      "<p> the type is"+data.type+"</p><br>"; ;
      
      //execute the string as html code with the help of html
      $('#editDetails5').html(formHtml5);
  
     }
  });
   }
);





//function that close modals if an outside click is detected
function outsideClick(e){
  
  if(e.target == addModal ){
    //hide the modal
    addModal.style.display='none';
    
    //reset the html to the initial one 
    addForm.innerHTML = "<b>Please select the type of the equipment you want to add :</b><br>"+
    "<input type='radio' name='equipment' id ='olt1'>OLT"+
    "<input type='radio' name='equipment' id = 'fdt1'>FDT"+
    "<input type='radio' name='equipment' id = 'fat1'>FAT<br>"+
    "<button id = 'nextBtn1'>Next</button>";

    // re-setup the listeners after resetting the content
    setupEventListeners(); 
  }
  
  if (e.target == editModal) {
    
    //hide the modal
    editModal.style.display='none';
    
    //delete loaded data/form
    $('#editDetails').html('');
    
    // Reset input field
    $('#equipmentId').prop('readonly', false).val('').attr('placeholder', 'Enter Equipment ID'); 
  }
  
  if (e.target == deleteModal) {
    deleteModal.style.display='none';
  }

  if(e.target == SearchModal){

    //hide the modal
    SearchModal.style.display='none';

    //delete loaded data/form
    $('#editDetails5').html('');

    // Reset input field
    $('#equipmentId5').prop('readonly', false).val('').attr('placeholder', 'Enter Equipment ID'); 

  }
}

// fucntions that open each modal 
function openAddModal( ){
  addModal.style.display = 'block';
}
function openEditModal( ){
  editModal.style.display = 'block';
}
function openDeleteModal( ){
  deleteModal.style.display = 'block';
  deleteEquipment();
}
function openSearchModal( ){
  SearchModal.style.display = 'block';
}

//functions that close modals 
function closeAddModal(){
  //hide the modal
  addModal.style.display='none';
  
  //reset the html to the initial one
  addForm.innerHTML = "<b>Please select the type of the equipment you want to add :</b><br>"+
  "<input type='radio' name='equipment' id ='olt1'>OLT"+
  "<input type='radio' name='equipment' id = 'fdt1'>FDT"+
  "<input type='radio' name='equipment' id = 'fat1'>FAT<br>"+
  "<button id = 'nextBtn1'>Next</button>";
  
  // re-setup the listeners after resetting the content
  setupEventListeners(); 
}
function closeEditModal(){
  
  //hide the modal
  editModal.style.display='none';


  // reset the input : Set readonly to false , val to "" , placeholder to  Enter Equipment ID
  $('#equipmentId').prop('readonly', false).val('').attr('placeholder', 'Enter Equipment ID');


  //deleted the loaded info
  $('#editDetails').html('');
}
function closeDeleteModal(){
  deleteModal.style.display='none';
}
function closeSearchModal(){
  
  //hide the modal
  SearchModal.style.display='none';


  // reset the input : Set readonly to false , val to "" , placeholder to  Enter Equipment ID
  $('#equipmentId5').prop('readonly', false).val('').attr('placeholder', 'Enter Equipment ID');


  //deleted the loaded info
  $('#editDetails5').html('');
}
