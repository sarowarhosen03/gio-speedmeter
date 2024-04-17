const x = document.getElementById("demo");
const  actionBtn=  document.getElementById("action");
let id = null;

function getLocation() {

  
  if (navigator.geolocation) {
    
     if(id){
    navigator.geolocation.clearWatch(id)
  
       actionBtn.innerText="Start)"
       actionBtn.style.backgroundColor="green"
       
           x.innerHTML=`Latitude: 0
    <br>
Longitude: 0
<br>
Speed:0Km/h
    `
    id=null;
     }else {
          x.innerHTML=`Latitude: 0
    <br>
Longitude: 0
<br>
Speed:... Km/h
<br> Collecting Data.  ......
    `
       
       id=  navigator.geolocation.watchPosition(showPosition,()=>{},{
          enableHighAccuracy: true ,
  maximumAge: 0,
        });
        actionBtn.innerText="Stop "
        actionBtn.style.backgroundColor="red"
    
     }
    
      } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude +  "<br>Speed: " + (position.coords.speed>=0?(Number (position.coords.speed*3.6).toFixed(2)):0.00)+"Km/h";
}