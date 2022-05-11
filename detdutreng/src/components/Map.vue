<script setup lang="ts">
import leaflet from "leaflet";
import { onMounted, ref } from "vue";
let mymap;

 const location =ref()
 const errorStr =ref()



 onMounted(async()=>{


mymap = leaflet.map("mapid").setView([42.5145, -83.0147], 9);

leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);

   await locateMe();


leaflet.marker([location.value.coords.latitude, location.value.coords.longitude]).addTo(mymap)
    .bindPopup('Du er her')
    .openPopup();
})



  const locateMe = async() => {
      
      try {
        
        location.value = await getLocation();

        
        
      } catch (e:any) {
        
        errorStr.value = e.message;
      }
      finally{
        return true
      }
    }

    const getLocation = async() => {
      return new Promise((resolve, reject) => {
        if (!("geolocation" in navigator)) {
          reject(new Error("Geolocation is not available."));
        }

        navigator.geolocation.getCurrentPosition(
          (pos:GeolocationPosition) => {
            resolve(pos);
          },
          (err) => {
            reject(err);
          }
        );
      });
    }
</script>


<template>
<div class="grid">

    <div class="col">

 <div id="mapid" ></div>

 </div>
 </div>
</template>

<style>

#mapid{
    height: 100vh;
}

</style>