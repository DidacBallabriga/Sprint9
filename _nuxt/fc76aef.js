(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{543:function(t,e,o){var content=o(560);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(71).default)("5354ebce",content,!0,{sourceMap:!1})},559:function(t,e,o){"use strict";o(543)},560:function(t,e,o){var r=o(70)(!1);r.push([t.i,".play[data-v-3debfc1f]{text-align:center}@media (max-width:768px){.duration[data-v-3debfc1f],.play[data-v-3debfc1f]{display:none}.audio[data-v-3debfc1f]{margin-top:1rem;display:flex;align-items:center;justify-content:center}.favorite[data-v-3debfc1f]{margin-top:2rem}.my-table[data-v-3debfc1f]{width:auto!important}}#Love .cls-1[data-v-3debfc1f]{fill:#000}#Love-favorite .cls-1[data-v-3debfc1f],#Love .cls-2[data-v-3debfc1f]{fill:#5dc1b9}#Love-favorite .cls-2[data-v-3debfc1f]{fill:grey}.blue[data-v-3debfc1f]{color:#5dc1b9;font-weight:600;letter-spacing:.4rem}.my-table[data-v-3debfc1f]{display:flex;align-items:center;border-bottom:1px solid #5dc1b9;width:100%;padding:15px 5px;color:grey}.image-track[data-v-3debfc1f]{margin-right:15px;width:70px;height:70px;border-radius:50%}audio[data-v-3debfc1f]::-webkit-media-controls-panel{background-color:#5dc1b9}audio[data-v-3debfc1f]::-webkit-media-controls-volume-slider{background-color:#4c9993;border-radius:25px;padding-left:8px;padding-right:8px}",""]),t.exports=r},569:function(t,e,o){"use strict";o.r(e);var r=o(54),c=(o(34),o(56),o(62),o(367),o(253),{name:"FavoriteList",layout:"Favorite",computed:{songs:function(){return this.$store.getters["favorite/getFavorite"]}},methods:{removeFavorite:function(t){var e=t.id;this.$store.commit("favorite/removeFavorite",e)},convertToCSV:function(t){for(var e="object"!==Object(r.a)(t)?JSON.parse(t):t,o="",i=0;i<e.length;i++){var line="";for(var c in e[i])""!==line&&(line+=","),line+=e[i][c];o+=line+"\r\n"}return o},exportCSVFile:function(t,e){var o=JSON.stringify(t),r=this.convertToCSV(o),c=e+".csv"||!1,l=new Blob([r],{type:"text/csv;charset=utf-8;"});if(navigator.msSaveBlob)navigator.msSaveBlob(l,c);else{var link=document.createElement("a");if(void 0!==link.download){var d=URL.createObjectURL(l);link.setAttribute("href",d),link.setAttribute("download",c),link.style.visibility="hidden",document.body.appendChild(link),link.click(),document.body.removeChild(link)}}}}}),l=(o(559),o(40)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:""}},[o("b-row",{staticClass:"justify-content-md-center my-table mt-5"},[o("b-col",{staticClass:"blue text-center",attrs:{cols:"5",md:"5"}},[t._v("Title")]),t._v(" "),o("b-col",{staticClass:"blue play",attrs:{cols:"5",md:"3"}},[t._v("Duration")]),t._v(" "),o("b-col",{staticClass:"blue play",attrs:{cols:"5",md:"2"}},[t._v("Demo-Play")]),t._v(" "),o("b-col",{staticClass:"blue play text-right pr-0",attrs:{cols:"5",md:"2"}},[t._v("Favorite")])],1),t._v(" "),t._l(t.songs,(function(e,r){return o("b-row",{key:r,staticClass:"my-table"},[o("b-col",{staticClass:"b-col-md-7 b-col-6 data",attrs:{cols:"12",md:"6"}},[o("img",{staticClass:"image-track",attrs:{src:e.image,alt:""}}),t._v("\n        "+t._s(e.artist)+" - "+t._s(e.title)+"\n    ")]),t._v(" "),o("b-col",{staticClass:"b-col-md-3 b-col-6 duration",attrs:{cols:"5",md:"1"}},[t._v("\n      "+t._s(e.trackDuration)+"\n    ")]),t._v(" "),o("b-col",{staticClass:"b-col-md-3 b-col-12",attrs:{cols:"12 d-flex justify-content-center",md:"4"}},[o("audio",{staticClass:"audio",attrs:{src:e.preview,controls:""}})]),t._v(" "),o("b-col",{staticClass:"b-col-md-2 b-col-6 favorite",attrs:{cols:"12",md:"1"}},[o("center",[o("svg",{attrs:{width:"2rem",height:"2rem",viewBox:"0 0 64 64"}},[o("title"),o("g",{attrs:{id:"Love-favorite"}},[o("path",{staticClass:"cls-1",attrs:{d:"M62,21a15.28,15.28,0,0,1-4.14,10.47L32,59,6.14,31.42A15.28,15.28,0,0,1,2,21C2,7.8,17.34,1,27.8,8.85L32,12l4.2-3.15C46.7,1,62,7.83,62,21Z"},on:{click:function(o){return t.removeFavorite(e)}}}),o("path",{staticClass:"cls-2",attrs:{d:"M32,61c-1.25,0,.87,1.86-27.32-28.21A17.28,17.28,0,0,1,0,21C0,6.13,17.24-1.56,29,7.25L32,9.5l3-2.25C46.77-1.56,64,6.14,64,21a17.31,17.31,0,0,1-4.68,11.84C31.2,62.78,33.24,61,32,61ZM17.83,7.53A13.45,13.45,0,0,0,4.93,25.85C6.22,29.09,5.8,28.13,32,56.08,59.14,27.14,57.8,29,59.07,25.84A13.3,13.3,0,0,0,57.85,13.7C53.46,7,43.94,5.55,37.4,10.45L33.2,13.6C30.13,15.9,27.33,7.53,17.83,7.53Z"}})])])])],1)],1)}))],2)}),[],!1,null,"3debfc1f",null);e.default=component.exports}}]);