(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{520:function(t,c,e){var content=e(526);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(71).default)("53af54b9",content,!0,{sourceMap:!1})},525:function(t,c,e){"use strict";e(520)},526:function(t,c,e){var l=e(70)(!1);l.push([t.i,".play[data-v-0043fd8c]{text-align:center}@media (max-width:768px){.duration[data-v-0043fd8c],.play[data-v-0043fd8c]{display:none}.audio[data-v-0043fd8c]{margin-top:1rem;display:flex;align-items:center;justify-content:center}.favorite[data-v-0043fd8c]{margin-top:2rem}.my-table[data-v-0043fd8c]{width:auto!important}}#Love .cls-1[data-v-0043fd8c]{fill:#000}#Love-favorite .cls-1[data-v-0043fd8c],#Love .cls-2[data-v-0043fd8c]{fill:#5dc1b9}#Love-favorite .cls-2[data-v-0043fd8c]{fill:grey}.blue[data-v-0043fd8c]{color:#5dc1b9;font-weight:600;letter-spacing:.4rem}.my-table[data-v-0043fd8c]{display:flex;align-items:center;border-bottom:1px solid #5dc1b9;width:100%;padding:15px 5px;color:grey}.image-track[data-v-0043fd8c]{margin-right:15px;width:70px;height:70px;border-radius:50%}audio[data-v-0043fd8c]::-webkit-media-controls-panel{background-color:#5dc1b9}audio[data-v-0043fd8c]::-webkit-media-controls-volume-slider{background-color:#4c9993;border-radius:25px;padding-left:8px;padding-right:8px}",""]),t.exports=l},533:function(t,c,e){"use strict";e.r(c);var l={name:"ResultSearch",computed:{musics:function(){return this.$store.getters["music/getMusic"]},show:function(){return this.musics.length}},methods:{addFavorite:function(){alert("This is a PREMIUM function.")}}},o=(e(525),e(40)),component=Object(o.a)(l,(function(){var t=this,c=t.$createElement,e=t._self._c||c;return 0!==t.show?e("b-container",{attrs:{fluid:""}},[e("b-row",{staticClass:"justify-content-md-center my-table mt-5"},[e("b-col",{staticClass:"blue text-center",attrs:{cols:"5",md:"5"}},[t._v("Title")]),t._v(" "),e("b-col",{staticClass:"blue play",attrs:{cols:"5",md:"3"}},[t._v("Duration")]),t._v(" "),e("b-col",{staticClass:"blue play",attrs:{cols:"5",md:"2"}},[t._v("Demo-Play")]),t._v(" "),e("b-col",{staticClass:"blue play text-right pr-0",attrs:{cols:"5",md:"2"}},[t._v("Favorite")])],1),t._v(" "),t._l(t.musics,(function(c,l){return e("b-row",{key:l,staticClass:"my-table"},[e("b-col",{staticClass:"b-col-md-7 b-col-6 data",attrs:{cols:"12",md:"6"}},[e("img",{staticClass:"image-track",attrs:{src:c.image,alt:""}}),t._v("\n        "+t._s(c.artist)+" - "+t._s(c.title)+"\n    ")]),t._v(" "),e("b-col",{staticClass:"b-col-md-3 b-col-6 duration",attrs:{cols:"5",md:"1"}},[t._v("\n      "+t._s(c.trackDuration)+"\n    ")]),t._v(" "),e("b-col",{staticClass:"b-col-md-3 b-col-12",attrs:{cols:"12 d-flex justify-content-center",md:"4"}},[e("audio",{staticClass:"audio",attrs:{src:c.preview,controls:""}})]),t._v(" "),e("b-col",{staticClass:"b-col-md-2 b-col-6 favorite",attrs:{cols:"12",md:"1"}},[e("center",[e("svg",{attrs:{width:"2rem",height:"2rem",viewBox:"0 0 64 64"}},[e("title"),e("g",{attrs:{id:"Love"}},[e("path",{staticClass:"cls-1",attrs:{d:"M62,21a15.28,15.28,0,0,1-4.14,10.47L32,59,6.14,31.42A15.28,15.28,0,0,1,2,21C2,7.8,17.34,1,27.8,8.85L32,12l4.2-3.15C46.7,1,62,7.83,62,21Z"},on:{click:function(c){return t.addFavorite()}}}),e("path",{staticClass:"cls-2",attrs:{d:"M32,61c-1.25,0,.87,1.86-27.32-28.21A17.28,17.28,0,0,1,0,21C0,6.13,17.24-1.56,29,7.25L32,9.5l3-2.25C46.77-1.56,64,6.14,64,21a17.31,17.31,0,0,1-4.68,11.84C31.2,62.78,33.24,61,32,61ZM17.83,7.53A13.45,13.45,0,0,0,4.93,25.85C6.22,29.09,5.8,28.13,32,56.08,59.14,27.14,57.8,29,59.07,25.84A13.3,13.3,0,0,0,57.85,13.7C53.46,7,43.94,5.55,37.4,10.45L33.2,13.6C30.13,15.9,27.33,7.53,17.83,7.53Z"}})])])])],1)],1)}))],2):t._e()}),[],!1,null,"0043fd8c",null);c.default=component.exports}}]);