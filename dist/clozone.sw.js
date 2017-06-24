"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["clozone-2.1.8.css","b2e2df15dd55df522f8835be720f2116"],["clozone-2.1.8.js","580e56da352517550d7e3c1eae280946"],["index.html","676e8300715405cdb5637561b9efe523"],["libs/font-awesome/fonts/FontAwesome-2.1.8.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["libs/font-awesome/fonts/fontawesome-webfont-2.1.8.eot","674f50d287a8c48dc19ba404d20fe713"],["libs/font-awesome/fonts/fontawesome-webfont-2.1.8.svg","912ec66d7572ff821749319396470bde"],["libs/font-awesome/fonts/fontawesome-webfont-2.1.8.ttf","b06871f281fee6b241d60582ae9369b9"],["libs/font-awesome/fonts/fontawesome-webfont-2.1.8.woff","fee66e712a8a08eef5805a46892932ad"],["libs/font-awesome/fonts/fontawesome-webfont-2.1.8.woff2","af7ae505a9eed503f8b8e6982036873e"],["logo/android-icon-144x144.png","b89f6dcf0425bf0c1f9219019e291514"],["logo/android-icon-192x192.png","98173721fea8006aa9b76800f3b60ea4"],["logo/android-icon-36x36.png","6e8786139faea1491c9a9afc2d9f0a59"],["logo/android-icon-48x48.png","41f133550125cc0df27419e8a9ce648a"],["logo/android-icon-72x72.png","8a112d2d95c86b0b35c00bd90417f03c"],["logo/android-icon-96x96.png","4ced2d84c042aec00fe01440c279aa72"],["logo/apple-icon-114x114.png","602d277ddda11bd7c07caef3197e3918"],["logo/apple-icon-120x120.png","1e185415a9440a5c8ab2ba8b86253384"],["logo/apple-icon-144x144.png","b89f6dcf0425bf0c1f9219019e291514"],["logo/apple-icon-152x152.png","9f752500e505b9b366677c565adb695a"],["logo/apple-icon-180x180.png","538f49da834e3b272af965dda47eec83"],["logo/apple-icon-57x57.png","459058b6d5b5dc5aff9718406e29b9e0"],["logo/apple-icon-60x60.png","9d2c0342cfa0b4322d6accf766258d0f"],["logo/apple-icon-72x72.png","8a112d2d95c86b0b35c00bd90417f03c"],["logo/apple-icon-76x76.png","9e89c969f370ebb5eabc920cf79759e0"],["logo/apple-icon-precomposed.png","174bdb9d91d95b26ee45f9a26b9ec87a"],["logo/apple-icon.png","174bdb9d91d95b26ee45f9a26b9ec87a"],["logo/clozone-512x512.png","d4bfb547a582962da28be4ab70f898ac"],["logo/favicon-16x16.png","b6aa6b2bf8c18efd0c3f452587301a35"],["logo/favicon-32x32.png","52ffb84e0ec1b719452ef1267bbb8861"],["logo/favicon-96x96.png","4ced2d84c042aec00fe01440c279aa72"],["logo/ms-icon-144x144.png","b89f6dcf0425bf0c1f9219019e291514"],["logo/ms-icon-150x150.png","bcc418c8e0c0cd3aa2166ab221577a23"],["logo/ms-icon-310x310.png","abdb3cba35ef9e3ddde87d4c20f7ec8b"],["logo/ms-icon-70x70.png","4c5926dae2c0a2b64752a66234d6b3da"],["modules/game/audio/gameFinished-2.1.8.wav","65cbc60e91197ef965b008f275481d9a"],["modules/game/audio/segmentConsumed-2.1.8.wav","14d2045abc08778cfdeaa1d9b31b8fb4"],["modules/game/audio/zoneClosed-2.1.8.wav","44ba01f4881faa17fd71b7ebe301fd34"],["modules/game/game-2.1.8.html","95d6f0b91203486115bc13a187520a9c"],["modules/home/home-2.1.8.html","abcf22eab30aaabbdc0ccc78efff5fdd"]],cacheName="sw-precache-v3-2.1.8-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,n){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=n),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(n){return new Response(n,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,n,a,o){var t=new URL(e);return o&&t.pathname.match(o)||(t.search+=(t.search?"&":"")+encodeURIComponent(n)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,n){if(0===e.length)return!0;var a=new URL(n).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,n){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return n.every(function(n){return!n.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var n=e[0],a=e[1],o=new URL(n,self.location),t=createCacheKey(o,hashParamName,a,/./);return[o.toString(),t]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!n.has(a)){var o=new Request(a,{credentials:"same-origin"});return fetch(o).then(function(n){if(!n.ok)throw new Error("Request for "+a+" returned a response with status "+n.status);return cleanResponse(n).then(function(n){return e.put(a,n)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!n.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var n,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);n=urlsToCacheKeys.has(a);n||(a=addDirectoryIndex(a,"index.html"),n=urlsToCacheKeys.has(a));n&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(n){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,n),fetch(e.request)}))}});