self.webpackChunkRemoteClient([68,78],{172:function(e,a,r){"use strict";r.r(a),r.d(a,"fromItem",(function(){return u})),r.d(a,"selectLayerClassPath",(function(){return o}));var t=r(0),n=r(16),l=r(54),i=r(108),y=r(389),c=r(271);function u(e){return!e.portalItem||e.portalItem instanceof i.default||(e={...e,portalItem:new i.default(e.portalItem)}),function(e){return e.load().then(o).then(s)}(e.portalItem).then(a=>{const r={portalItem:e.portalItem,...a.properties},t=a.constructor;return Promise.resolve(new t(r))})}function o(e){switch(e.type){case"Map Service":return function(e){return function(e){return m(e.url).then(e=>e.tileInfo)}(e).then(e=>e?{className:"TileLayer"}:{className:"MapImageLayer"})}(e);case"Feature Service":return function(e){return L(e).then(e=>{if("object"==typeof e){const a={};return null!=e.id&&(a.layerId=e.id),{className:"FeatureLayer",properties:a}}return{className:"GroupLayer"}})}(e);case"Feature Collection":return async function(e){return await e.load(),Object(y.a)(e,"Map Notes")?{className:"MapNotesLayer"}:Object(y.a)(e,"Route Layer")?{className:"RouteLayer"}:1===f(await e.fetchData())?{className:"FeatureLayer"}:{className:"GroupLayer"}}(e);case"Scene Service":return function(e){return L(e).then(a=>{if("object"==typeof a){const r={};let t;if(null!=a.id?(r.layerId=a.id,t=`${e.url}/layers/${a.id}`):t=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0){const a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};for(const r of Object.keys(a))if(-1!==e.typeKeywords.indexOf(r))return{className:a[r]}}return m(t).then(e=>{let a="SceneLayer";const t={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&t[e.layerType]&&(a=t[e.layerType]),{className:a,properties:r}})}return{className:"GroupLayer"}})}(e);case"Image Service":return async function(e){var a,r,t;await e.load();const n=null!=(a=null==(r=e.typeKeywords)?void 0:r.map(e=>e.toLowerCase()))?a:[];if(n.indexOf("elevation 3d layer")>-1)return{className:"ElevationLayer"};if(n.indexOf("tiled imagery")>-1)return{className:"ImageryTileLayer"};const l=await e.fetchData(),i=null==l?void 0:l.layerType;return"ArcGISTiledImageServiceLayer"===i?{className:"ImageryTileLayer"}:"ArcGISImageServiceLayer"===i?{className:"ImageryLayer"}:"map"===(null==(t=(await m(e.url)).cacheType)?void 0:t.toLowerCase())?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}(e);case"Stream Service":return{className:"StreamLayer"};case"Vector Tile Service":return{className:"VectorTileLayer"};case"KML":return{className:"KMLLayer"};case"WMTS":return{className:"WMTSLayer"};case"WMS":return{className:"WMSLayer"};default:return Promise.reject(new n.a("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function s(e){return(0,c.a[e.className])().then(a=>({constructor:a,properties:e.properties}))}function L(e){return!e.url||e.url.match(/\/\d+$/)?Promise.resolve({}):e.load().then(()=>e.fetchData()).then(a=>f(a)>0?d(a):m(e.url).then(d))}function d(e){return 1===f(e)&&{id:Object(t.n)(p(e))}}function p(e){const a=e.layers;if(a&&a.length)return a[0].id;const r=e.tables;return r&&r.length?r[0].id:null}function f(e){var a,r,t,n;return(null!=(a=null==e||null==(r=e.layers)?void 0:r.length)?a:0)+(null!=(t=null==e||null==(n=e.tables)?void 0:n.length)?t:0)}function m(e){return Object(l.default)(e,{responseType:"json",query:{f:"json"}}).then(e=>e.data)}},270:function(e,a,r){"use strict";r.d(a,"a",(function(){return i}));var t=r(40),n=r(4),l=r(117);async function i(e,a,r){const i=e&&e.getAtOrigin&&e.getAtOrigin("renderer",a.origin);if(i&&"unique-value"===i.type&&i.styleOrigin){const y=await Object(l.c)(i.populateFromStyle());if(Object(n.t)(r),!1===y.ok){const r=y.error;a&&a.messages&&a.messages.push(new t.a("renderer:style-reference","Failed to create unique value renderer from style reference: "+r.message,{error:r,context:a})),e.clear("renderer",a.origin)}}}},271:function(e,a,r){"use strict";r.d(a,"a",(function(){return t}));const t={BingMapsLayer:async()=>(await r.e(44).then(r.bind(null,426))).default,BuildingSceneLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(17),r.e(76)]).then(r.bind(null,408))).default,CSVLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(54)]).then(r.bind(null,427))).default,ElevationLayer:async()=>(await r.e(15).then(r.bind(null,418))).default,FeatureLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(60)]).then(r.bind(null,167))).default,GroupLayer:async()=>(await Promise.all([r.e(18),r.e(146)]).then(r.bind(null,356))).default,GeoRSSLayer:async()=>(await r.e(47).then(r.bind(null,393))).default,ImageryLayer:async()=>(await Promise.all([r.e(1),r.e(10),r.e(14),r.e(46)]).then(r.bind(null,409))).default,ImageryTileLayer:async()=>(await Promise.all([r.e(1),r.e(10),r.e(14),r.e(61)]).then(r.bind(null,407))).default,IntegratedMeshLayer:async()=>(await r.e(40).then(r.bind(null,415))).default,KMLLayer:async()=>(await Promise.all([r.e(1),r.e(34)]).then(r.bind(null,420))).default,MapImageLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(12),r.e(45)]).then(r.bind(null,360))).default,MapNotesLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(49)]).then(r.bind(null,421))).default,OpenStreetMapLayer:async()=>(await Promise.all([r.e(11),r.e(160)]).then(r.bind(null,397))).default,PointCloudLayer:async()=>(await r.e(33).then(r.bind(null,411))).default,RouteLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(55)]).then(r.bind(null,398))).default,SceneLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(3),r.e(17),r.e(161)]).then(r.bind(null,428))).default,StreamLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(41)]).then(r.bind(null,429))).default,TileLayer:async()=>(await Promise.all([r.e(1),r.e(2),r.e(12),r.e(48)]).then(r.bind(null,399))).default,UnknownLayer:async()=>(await r.e(73).then(r.bind(null,400))).default,UnsupportedLayer:async()=>(await r.e(74).then(r.bind(null,401))).default,VectorTileLayer:async()=>(await Promise.all([r.e(22),r.e(36)]).then(r.bind(null,410))).default,WebTileLayer:async()=>(await r.e(11).then(r.bind(null,311))).default,WMSLayer:async()=>(await r.e(37).then(r.bind(null,416))).default,WMTSLayer:async()=>(await Promise.all([r.e(11),r.e(162)]).then(r.bind(null,412))).default}},389:function(e,a,r){"use strict";function t(e,a){return!!e.typeKeywords&&e.typeKeywords.indexOf(a)>-1}r.d(a,"a",(function(){return t}))},648:function(e,a,r){"use strict";r.r(a),r.d(a,"populateOperationalLayers",(function(){return s}));r(3);var t=r(4),n=r(69),l=r(108),i=r(270),y=r(271),c=r(389);async function u(e,a,r,t){if(!e.layerType||"ArcGISFeatureLayer"!==e.layerType)return!1;if(e.url)return!1;if(e.featureCollectionType&&e.featureCollectionType===r)return!0;if(e.itemId){const r=new l.default({id:e.itemId,portal:a});return await r.load(),"Feature Collection"===r.type&&Object(c.a)(r,t)}return!1}var o=r(172);async function s(e,a,r){if(!a)return;const n=[];for(const e of a){const a=I(e,r);"GroupLayer"===e.layerType?n.push(T(a,e,r)):n.push(a)}const l=await Object(t.j)(n);for(const a of l)!a.value||r.filter&&!r.filter(a.value)||e.add(a.value)}const L={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},d={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer",RasterDataElevationLayer:"UnsupportedLayer"},p={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},f={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",SubtypeGroupLayer:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},m={ArcGISFeatureLayer:"FeatureLayer"},S={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"ImageryTileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};async function I(e,a){return async function(e,a,r){const t=new e;return t.read(a,r.context),"group"===t.type&&g(a)&&await async function(e,a,r){const t=y.a.FeatureLayer,n=await t(),l=a.featureCollection,i=l.showLegend,c=l.layers.map(e=>{const a=new n;return a.read(e,r),null!=i&&a.read({showLegend:i},r),a});e.layers.addMany(c)}(t,a,r.context),await Object(i.a)(t,r.context),t}(await async function(e,a){const r=a.context,t=function(e){let a;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":a=p;break;case"ground":a=d;break;default:a=L}break;default:switch(e.layerContainerType){case"basemap":a=S;break;case"tables":a=m;break;default:a=f}}return a}(r);let n=e.layerType||e.type;!n&&a&&a.defaultLayerType&&(n=a.defaultLayerType);const i=t[n];let c=i?y.a[i]:y.a.UnknownLayer;const s=r&&r.portal;if(w(e)){if(e.itemId){const a=new l.default({id:e.itemId,portal:s});await a.load();const r=(await Object(o.selectLayerClassPath)(a)).className||"UnknownLayer";c=y.a[r]}}else"ArcGISFeatureLayer"===n&&(await function(e,a){return u(e,a,"notes","Map Notes")}(e,s)?c=y.a.MapNotesLayer:await function(e,a){return u(e,a,"route","Route Layer")}(e,s)?c=y.a.RouteLayer:g(e)&&(c=y.a.GroupLayer));return e.wmtsInfo&&e.wmtsInfo.url&&e.wmtsInfo.layerIdentifier&&(c=y.a.WMTSLayer),c()}(e,a),e,a)}function g(e){if("ArcGISFeatureLayer"!==e.layerType||w(e))return!1;const a=e.featureCollection;return!!(a&&a.layers&&a.layers.length>1)}function w(e){return"Feature Collection"===e.type}async function T(e,a,r){const t=new n.a,l=s(t,Array.isArray(a.layers)?a.layers:[],r),i=await e;if(await l,"group"===i.type)return i.layers.addMany(t),i}}});