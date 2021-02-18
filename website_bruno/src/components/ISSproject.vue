<template lang="html">
  <div id="app1" style="height: 500px; width: 100%">
     <h1>Location of the international space station!</h1>
     <p>On 19th of february, 2021 I was bored because of a lockdown.
       To challenge myself I wanted to do a simple request in Vue and project the data nicely.
       Since I was quite new to vue.js I did not want to use a complicated API with authentication and many endpoints.
       Therefore, I chose to project the current location of the International Space station.
       The map is right below!</p>
     <l-map ref="myMap"
      :zoom="settings.zoom"
      :center="settings.withPopup"
      :options="settings.mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
        <l-tile-layer
         :url="settings.url"
         :attribution="settings.attribution"
       />
       <l-marker :lat-lng="settings.withPopup">
         <l-popup>
           <div @click="innerClick">
             I am a popup
             <p v-show="showParagraph">
               This is where the international space station currently is located!
             </p>
           </div>
         </l-popup>
       </l-marker>
     </l-map>
  </div>
</template>

<script>
import axios from 'axios';
import { latLng } from "leaflet";

export default {
  name: 'map',
  components: {
  },
  data() {
    return {coords: {'latitude': null , 'longitude': null},
            settings:{zoom: 3,
                      center: latLng(47.41322, -1.219482),
                      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                      withPopup: latLng(47.41322, -1.219482),
                      withTooltip: latLng(47.41422, -1.250482),
                      currentZoom: 3,
                      currentCenter: latLng(47.41322, -1.219482),
                      showParagraph: false,
                      mapOptions: {
                        zoomSnap: 0.5
                      },
                      showMap: true
                    }
            }
  },
  mounted() {
      axios.get('http://api.open-notify.org/iss-now.json')
      .then(response => this.settings.withPopup =
        latLng(response.data.iss_position.latitude, response.data.iss_position.longitude))
      .catch(error => {console.error('Error:', error);});
    },
  methods: {
    zoomUpdate(zoom) {
      this.settings.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.settings.currentCenter = center;
    },
    showLongText() {
      this.settings.showParagraph = !this.settings.showParagraph;
    },
    innerClick() {
      alert("Click!")
    },
  }
}


</script>

<style lang="css" scoped>
#app1 {
  padding: 10px;
}
</style>
