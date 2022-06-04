<template>
  <b-container fluid>
    <b-row class="justify-content-md-center my-table mt-5">
      <b-col class="blue text-center" cols="5" md="5">Title</b-col>
      <b-col class="blue play" cols="5" md="3">Duration</b-col>
      <b-col class="blue play" cols="5" md="2">Demo-Play</b-col>
      <b-col class="blue play text-right pr-0" cols="5" md="2">Favorite</b-col>
    </b-row>
   <b-row class="my-table" v-for="(song, index) in songs" :key="index">
      <b-col cols="12" md="6" class="b-col-md-7 b-col-6 data">
        <img class="image-track" :src="song.image" alt="">
          {{song.artist}} - {{song.title}}
      </b-col>
      <b-col cols="5" md="1" class="b-col-md-3 b-col-6 duration">
        {{song.trackDuration}}
      </b-col>
      <b-col cols="12 d-flex justify-content-center" md="4" class="b-col-md-3 b-col-12">
        <audio class="audio" :src="song.preview" controls></audio>
      </b-col>
      <b-col cols="12" md="1" class="b-col-md-2 b-col-6 favorite">
        <center><svg width="2rem" height="2rem" viewBox="0 0 64 64"><title/><g id="Love-favorite"><path @click="removeFavorite(song)" class="cls-1" d="M62,21a15.28,15.28,0,0,1-4.14,10.47L32,59,6.14,31.42A15.28,15.28,0,0,1,2,21C2,7.8,17.34,1,27.8,8.85L32,12l4.2-3.15C46.7,1,62,7.83,62,21Z"/><path class="cls-2" d="M32,61c-1.25,0,.87,1.86-27.32-28.21A17.28,17.28,0,0,1,0,21C0,6.13,17.24-1.56,29,7.25L32,9.5l3-2.25C46.77-1.56,64,6.14,64,21a17.31,17.31,0,0,1-4.68,11.84C31.2,62.78,33.24,61,32,61ZM17.83,7.53A13.45,13.45,0,0,0,4.93,25.85C6.22,29.09,5.8,28.13,32,56.08,59.14,27.14,57.8,29,59.07,25.84A13.3,13.3,0,0,0,57.85,13.7C53.46,7,43.94,5.55,37.4,10.45L33.2,13.6C30.13,15.9,27.33,7.53,17.83,7.53Z"/></g></svg></center>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
    name: 'FavoriteList',
    layout: 'Favorite',
    computed: {
      songs: function(){
        return this.$store.getters['favorite/getFavorite']
      }
    },
    methods: {
      removeFavorite(music){
        let id = music.id
        this.$store.commit('favorite/removeFavorite', id)
      },
      convertToCSV(objArray) {
        const array = typeof objArray !== 'object' ? JSON.parse(objArray) : objArray;
        let str = '';
        for (let i = 0; i < array.length; i++) { 
          let line = '';
          for (const index in array[i]) { 
            if (line !== '') line += ',';
            line += array[i][index];
          }
          str += line + '\r\n';
        }
        return str;
      },
    exportCSVFile(items, fileTitle) {
      const jsonObject = JSON.stringify(items);
      const csv = this.convertToCSV(jsonObject);
      const exportedFilenmae = fileTitle + '.csv' || 'export.csv'; 
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, exportedFilenmae);
      } else {
        const link = document.createElement('a');
        if (link.download !== undefined) {
          const url = URL.createObjectURL(blob);
          link.setAttribute('href', url);
          link.setAttribute('download', exportedFilenmae);
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    }
  }
}


</script>

<style scoped>
.play{
  text-align: center;
}
@media (max-width: 768px){
  .play{
    display: none
  }
  .duration{
    display: none;
  }
  .audio{
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
   .favorite{
   margin-top: 2rem;
   }
   .my-table{
    width: auto!important;
}
}
#Love .cls-1{
  fill:#000000;
  }
#Love .cls-2{
  fill:#5DC1B9;
  }
#Love-favorite .cls-1 {
  fill: #5DC1B9;
}
#Love-favorite .cls-2 {
  fill: #808080;
} 
.blue{
  color:#5DC1B9;
  font-weight: 600;
  letter-spacing: .4rem;
}
.my-table{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #5DC1B9;
    width: 100%;
    padding: 15px 5px;
    color: grey;
}
.image-track{
  margin-right: 15px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
audio::-webkit-media-controls-panel {
  background-color: #5DC1B9;
}

audio::-webkit-media-controls-volume-slider {
  background-color: #4c9993;
  border-radius: 25px;
  padding-left: 8px;
  padding-right: 8px;
}
</style>