(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Mbyl:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("COVID comparator")]),t._v(" "),n("div",{staticClass:"container"},[n("p",[t._v("Choose a country to compare with Switzerland:")]),t._v(" "),t.isLoadingCountries?n("p",[t._v("Loading all countries ...")]):t._e(),t._v(" "),n("VueSelect",{staticStyle:{padding:"14px",width:"70%",margin:"0 auto"},attrs:{options:t.countries,label:"Country"},model:{value:t.selectedCountry,callback:function(e){t.selectedCountry=e},expression:"selectedCountry"}})],1),t._v(" "),n("div",{staticClass:"container"},[t.isLoadingChartData?n("p",[t._v("Loading the comparison ... (fetching the data might be slow)")]):t._e(),t._v(" "),n("GChart",{staticStyle:{padding:"14px"},attrs:{type:"LineChart",data:t.chartData,options:t.chartOptions}})],1)])};r._withStripped=!0;n("ma9I"),n("TeQF"),n("oVuX"),n("sMBO"),n("07d7"),n("5s+n"),n("rB9j"),n("UxlC"),n("ls82");function a(t,e,n,r,a,o,i){try{var s=t[o](i),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,a)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function s(t){a(i,r,o,s,c,"next",t)}function c(t){a(i,r,o,s,c,"throw",t)}s(void 0)}))}}var i={compareCases:function(t){return o(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))()},fetchCountries:function(){return o(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},s=new Date(2020,0,1);function c(t){return u.apply(this,arguments)}function u(){return(u=o(regeneratorRuntime.mark((function t(e){var n,r,a,o,i,c,u,h,d,g,w,m,y,D,x,_,R,b,O,S,L,k,Y,T,A,F;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=new Date,r=C(s),a=C(n),console.log("Configured dates: from '".concat(r,"' to ").concat(a,".")),t.next=6,p();case 6:return o=t.sent,console.log("Selecting population data for ".concat("switzerland"," and ").concat(e," ...")),i=f(o,"switzerland"),c=f(o,e),t.next=12,v("switzerland",r,a);case 12:return u=t.sent,t.next=15,v(e,r,a);case 15:for(h=t.sent,console.log("Processing the data ..."),d=Math.min(u.length,h.length),g=0,w=0,m=!0,y=[],D=[],(x=[]).push(["spain","switzerland",e,"swiss-limit"]),_=0;_<d;_++)R=new Date(u[_].Date),b=u[_].Cases,O=h[_].Cases,m&&(g=b,w=O,m=!1),S=b-g,L=O-w,g=b,w=O,k=1e5*S/i,Y=1e5*L/c,y.push(k),D.push(Y),14,T=l(y,14),A=l(D,14),F=[R,T,A,T?T+60:null],x.push(F);return console.log("Done."),t.abrupt("return",x);case 28:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,e){if(t.length<e)return null;for(var n=0,r=0,a=t.length-e;a<t.length;a++)n+=t[a],r+=1;if(r!=e)throw"Expected count==".concat(e,", count was ").concat(r);return n}function p(){return h.apply(this,arguments)}function h(){return(h=o(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://restcountries.eu/rest/v2/all",console.log("Fetching population data from ".concat(e," ...")),t.next=4,d(e);case 4:return n=t.sent,t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t){return fetch(t,{mode:"cors"}).then((function(t){return t.json()})).catch((function(t){throw t}))}function f(t,e){var n=t.filter((function(t){return t.name.toLowerCase()==e}))[0];if(!n)throw"country '".concat(e,"' was not found in the population data");return n.population}function g(){return w.apply(this,arguments)}function w(){return(w=o(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.covid19api.com/countries",console.log("Fetching countries data from ".concat(e," ...")),t.next=4,d(e);case 4:return t.abrupt("return",t.sent);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t,e,n){return m.apply(this,arguments)}function m(){return(m=o(regeneratorRuntime.mark((function t(e,n,r){var a,o,i;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"%COUNTRY%","%FROM_DAY%","%TO_DAY%",a="https://api.covid19api.com/country/".concat("%COUNTRY%","/status/confirmed?from=").concat("%FROM_DAY%","T00:00:00Z&to=").concat("%TO_DAY%","T00:00:00Z"),o=a.replace("%COUNTRY%",e).replace("%FROM_DAY%",n).replace("%TO_DAY%",r),console.log("Fetching COVID data from ".concat(o," ...")),t.next=8,d(o);case 8:return i=t.sent,t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function C(t){var e=new Date(t),n=""+(e.getMonth()+1),r=""+e.getDate(),a=e.getFullYear();return n.length<2&&(n="0"+n),r.length<2&&(r="0"+r),[a,n,r].join("-")}var y=n("y0NN"),D=n("Snq/"),x={components:{GChart:y.GChart,VueSelect:D.VueSelect},data:()=>({countries:[],selectedCountry:null,isLoadingCountries:!1,isLoadingChartData:!1,chartData:null,chartOptions:{height:400,hAxis:{title:"Time"},vAxis:{title:"Cases per 100k people"},colors:["#003f5c","#bc5090","#ffa600"]}}),async mounted(){this.countries=await this.loadCountries()},watch:{async selectedCountry(t){t&&(console.log("Selected country: "+t.Slug),await this.loadChartData(t.Slug))}},methods:{async loadCountries(){this.isLoadingCountries=!0;const t=await i.fetchCountries();return this.isLoadingCountries=!1,t.sort((t,e)=>t.Slug.localeCompare(e.Slug)),t},async loadChartData(t){this.isLoadingChartData=!0;var e=await i.compareCases(t);this.chartData=e,this.isLoadingChartData=!1}}},_=(n("VzDA"),n("KHd+")),R=Object(_.a)(x,r,[],!1,null,null,null);R.options.__file="src/views/SwissBlacklistTracker.vue";e.default=R.exports},VzDA:function(t,e,n){"use strict";n("Yw5v")},Yw5v:function(t,e,n){var r=n("LboF"),a=n("drWp");"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[t.i,a,""]]);var o={insert:"head",singleton:!1};r(a,o);t.exports=a.locals||{}},drWp:function(t,e,n){}}]);