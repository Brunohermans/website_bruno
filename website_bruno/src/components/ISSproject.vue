<template lang="html">
  <div id="app1" style="height: 500px; width: 100%">
     <p>{{ coords }}</p>
     <l-map ref="myMap"
      :zoom="settings.zoom"
      :center="settings.center"
      :options="settings.mapOptions"
      style="height: 80%"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate">
        <!-- <l-tile-layer
      :url="settings.url"
      :attribution="settings.attribution"
        /> -->
     </l-map>
  </div>
</template>

<script>
import axios from 'axios';
//import L from 'leaflet';
import { latLng } from "leaflet";
//import { LMap, LTileLayer, LMarker, LPopup, LTooltip } from "vue2-leaflet";
//import LMap from "vue2-leaflet";

export default {
  name: 'map',
  components: {

    //LTileLayer,
    //LMarker,
    //LPopup,
    //LTooltip
  },
  data() {
    return {coords: {'latitude': null , 'longitude': null},
            settings:{zoom: 13,
                      center: latLng(47.41322, -1.219482),
                      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                      attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                      withPopup: latLng(47.41322, -1.219482),
                      withTooltip: latLng(47.41422, -1.250482),
                      currentZoom: 11.5,
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
      .then(response => this.coords = response.data.iss_position)
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
    }
  }
}


</script>

<style lang="css" scoped>
</style>
