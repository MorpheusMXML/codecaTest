'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "46247288d1aac3a14a745ab141070ee8",
"assets/assets/anleitung/Anleitung1.png": "2c217861683056b6a210d5c33f7d737e",
"assets/assets/anleitung/Anleitung2.png": "a0b2d5f5f62c5b8b21a58ae3f9b78ae1",
"assets/assets/anleitung/Anleitung3.png": "b3e1fbd2e9c8a879a915555accfd17e3",
"assets/assets/anleitung/Anleitung4.png": "e00a4f20948ecb021f6a0afd07de7abe",
"assets/assets/dialogflow_service.json": "58906c84e9430f1df0bc8cdc3209a9a9",
"assets/assets/Draggables/bubbel1.png": "437ea0dbf3213a2e9c3d4b4431029b2f",
"assets/assets/Draggables/bubbel1_platzhalter.png": "215b5ae0e31741c83f01d426ae8ae251",
"assets/assets/Draggables/bubbel2.png": "299b0a351a9ed5a49a8799212945a7f0",
"assets/assets/Draggables/bubbel2_platzhalter.png": "924ad9413df0a5fed467e31958ce1a56",
"assets/assets/Draggables/eingabe1.png": "cb34fa65e7b08788e977605b9854eef9",
"assets/assets/Draggables/eingabe1_platzhalter.png": "c51ef20beda71fa9773a8b462c718aa9",
"assets/assets/Draggables/eingabe3.png": "92b178a3b7db1e9e24753c7b44c3cf72",
"assets/assets/Draggables/eingabe3_platzhalter.png": "1b37a6c41438341a3cc7bc5b2f4fc291",
"assets/assets/Draggables/Head1.png": "64ca1df1804acc1fc8e1fcd41cced7ac",
"assets/assets/Draggables/Head1_platzhalter.png": "73588ad6bc865abac3edca3303879f7b",
"assets/assets/Draggables/Head2.png": "70ab93446963ef5adb264db1a411401c",
"assets/assets/Draggables/Head2_platzhalter.png": "5b3f9b2f8b6778dd2b65188e7e8a94e9",
"assets/assets/Draggables/head3.png": "cea39e4a23295768de73686bd6537134",
"assets/assets/Draggables/head3_platzhalter.png": "247b11353c3b89e9d8b2a0c3b06e55b5",
"assets/assets/Draggables/kabel1.png": "808a467422b56140120e0efe10fe9efd",
"assets/assets/Draggables/kabel1_platzhalter.png": "827082d078781fb0d2192c769bd4e40a",
"assets/assets/Draggables/Kabel2.png": "23797c6b65ff75469947e73c284dfe58",
"assets/assets/Draggables/Kabel2_platzhalter.png": "f837fdc3f2ebc55aa2d6d0f1101df704",
"assets/assets/Draggables/kabel3.png": "d1077f039c9a9130335210b870404e78",
"assets/assets/Draggables/kabel3_platzhalter.png": "6bfca9aa160b2a877fa38a2c9012e5a9",
"assets/assets/Draggables/kabel4.png": "2b0e843a413226dd3a01d76d744bfdee",
"assets/assets/Draggables/kabel4_platzhalter.png": "07ef658410300b41ac8cfb5dded51691",
"assets/assets/Draggables/kabel5.png": "2f59d8c5ef6881c37a90192b2eacae1d",
"assets/assets/Draggables/kabel5_platzhalter.png": "61490fc5d77d24aa5acc3aef36f5dfb2",
"assets/assets/Draggables/kabel6.png": "86f8bc71f8bbae877c2959351480253d",
"assets/assets/Draggables/kabel6_platzhalter.png": "553bf3df0f4218984fead411361fc313",
"assets/assets/Draggables/NLP.png": "27ea27cdb11d30cd1a87a74d91bca175",
"assets/assets/Draggables/NLP_placeholder.png": "1926dd1644ae25f7712b94eeb7f2dd48",
"assets/assets/Draggables/QnA1.png": "92b5cde7d9da1e332d896fa53708a289",
"assets/assets/Draggables/QnA1_platzhalter.png": "8c204133a658fb37ad7aafe422d15744",
"assets/assets/Draggables/QnA2.png": "f435a600184676cca599bc90eca71780",
"assets/assets/Draggables/QnA2_platzhalter.png": "e84c0aeeb6797d43fd7a76177c863ba9",
"assets/assets/Draggables/send.png": "f5f3749af7d408ab625da190978b341f",
"assets/assets/Draggables/send_platzhalter.png": "a9637f3d5945a6b39f805fcc854e2f4c",
"assets/assets/Draggables/speicher.png": "cc48874c9b4f7aec030217c85146280b",
"assets/assets/Draggables/speicher_platzhalter.png": "3f7cc5bc7922fc749d08ba700504ffb1",
"assets/assets/Draggables/SysBank.png": "e5d244bacbf1adf041811bd2ccaa923c",
"assets/assets/Draggables/SysBank_placeholder.png": "0bd9f2447943cf9c594f68d96702223e",
"assets/assets/Hintergrund/A1.png": "798cdf044b421241bec69362f60e57c3",
"assets/assets/Hintergrund/A2.png": "32f2747a2b2ae246ecfb1d16f86b8b33",
"assets/assets/Hintergrund/A3.png": "428bf3ca5c8b7ab51dfbccdddc011401",
"assets/assets/Hintergrund/A4.png": "c843857c668f47da70a56fa912fde338",
"assets/assets/Hintergrund/A5.png": "a89d1f1dae041f8c9c5aae80489d1848",
"assets/assets/Hintergrund/B1.png": "3a42973af50248bd2b8db5b01bc332e0",
"assets/assets/Hintergrund/B2.png": "5ea77ec1473b9a4a622fb4617e8a9328",
"assets/assets/Hintergrund/B3.png": "7da0c8b7b742d2927682120eea53a3df",
"assets/assets/Hintergrund/B4.png": "2c4ed71b904c921ab8c6f8db855a5bca",
"assets/assets/Hintergrund/B5.png": "8f24529b7ba66b89009f70b396071a70",
"assets/assets/Hintergrund/C1.png": "eda1eaf7f3e6fc9bcb0c80b2b31fb231",
"assets/assets/Hintergrund/C2.png": "936c30bc2ed12ba122c0ea2121f97127",
"assets/assets/Hintergrund/C3.png": "ac8ebbc96028228cd637902394baa0ad",
"assets/assets/Hintergrund/C4.png": "7459a8c00d7c9eaf19554c5691fcfe5b",
"assets/assets/Hintergrund/C5.png": "7bfc7d67583cb7c086dc6cfc555d3157",
"assets/assets/Hintergrund/D1.png": "fc5196e8855fea58d068df89734ff040",
"assets/assets/Hintergrund/D2.png": "d2f1ed088f6c3d085f7949e58724e598",
"assets/assets/Hintergrund/D3.png": "295e2f10d5c137daf87442ebb294c76c",
"assets/assets/Hintergrund/D4.png": "373dc00fc9b80ddbf71a80b90f66d2f5",
"assets/assets/Hintergrund/D5.png": "890517cac94d38da421308c78af55dd6",
"assets/assets/Hintergrund/E1.png": "3e17d64095a5d81dad331b0a96eb5736",
"assets/assets/Hintergrund/E2.png": "a0ca01fffdf1a02f1ddd6b108b492006",
"assets/assets/Hintergrund/E3.png": "799f51e4a868be15ffa232db5a3482ab",
"assets/assets/Hintergrund/E4.png": "dc3fb413a5182e4030652d0be98df774",
"assets/assets/Hintergrund/E5.png": "8bc3635c3cce4f2eee91bdbab0bbecd6",
"assets/assets/Hintergrund/F1.png": "911332e1723d286b11efe8af8e8e659f",
"assets/assets/Hintergrund/F2.png": "1cfc49114037fe9b4619a7a0ec7d0da2",
"assets/assets/Hintergrund/F3.png": "d03f122af92cffc30f23b8761d6b3209",
"assets/assets/Hintergrund/F4.png": "f3120b2c78686116612dd0f3961c9409",
"assets/assets/Hintergrund/F5.png": "547c6766de14f881aa250c0b9d594754",
"assets/assets/Hintergrund/G1.png": "ad31616bc23aecadc40099ae54534103",
"assets/assets/Hintergrund/G2.png": "38fb2ef77ec8a9e7a517310ce4ae5000",
"assets/assets/Hintergrund/G3.png": "2edbfe4229d2550e2b2e151be6124067",
"assets/assets/Hintergrund/G4.png": "408214796b388fb69bcfc87e68e99548",
"assets/assets/Hintergrund/G5.png": "97ca708848d1138eaf1647dd01d20323",
"assets/assets/Hintergrund/H1.png": "8fa4d0864afeb307c3fb45479e2d4f4b",
"assets/assets/Hintergrund/H2.png": "0547aa018649f2e698db7d535c973dac",
"assets/assets/Hintergrund/H3.png": "989cdb53e8843ed2bb036628f459e130",
"assets/assets/Hintergrund/H4.png": "ca4f07bafb541d5569c15f40806efe8e",
"assets/assets/Hintergrund/H5.png": "18d00c74fc2e3a35738180bcb2fcec1e",
"assets/assets/Hintergrund/I1.png": "aeb46007541b0f830b013680de43a8fc",
"assets/assets/Hintergrund/I2.png": "dd63ee2f2641920c46ff9503ad4698b3",
"assets/assets/Hintergrund/I3.png": "b6969acfb744ba722844f9d8b05650de",
"assets/assets/Hintergrund/I4.png": "e22c42f7af39539b8505e3a156ec97b7",
"assets/assets/Hintergrund/I5.png": "003de2c4d2ac803aed4d4c238f63fd5b",
"assets/assets/Placeholder/bubbel1_platzhalter.png": "215b5ae0e31741c83f01d426ae8ae251",
"assets/assets/Placeholder/bubbel2_platzhalter.png": "924ad9413df0a5fed467e31958ce1a56",
"assets/assets/Placeholder/eingabe1_platzhalter.png": "c51ef20beda71fa9773a8b462c718aa9",
"assets/assets/Placeholder/eingabe3_platzhalter.png": "1b37a6c41438341a3cc7bc5b2f4fc291",
"assets/assets/Placeholder/Head1_platzhalter.png": "6a2de0695a6c0480198c27cbaf53bc2a",
"assets/assets/Placeholder/Head2_platzhalter.png": "5b3f9b2f8b6778dd2b65188e7e8a94e9",
"assets/assets/Placeholder/Head3_platzhalter.png": "247b11353c3b89e9d8b2a0c3b06e55b5",
"assets/assets/Placeholder/kabel1_platzhalter.png": "827082d078781fb0d2192c769bd4e40a",
"assets/assets/Placeholder/Kabel2_platzhalter.png": "f837fdc3f2ebc55aa2d6d0f1101df704",
"assets/assets/Placeholder/kabel3_platzhalter.png": "6bfca9aa160b2a877fa38a2c9012e5a9",
"assets/assets/Placeholder/kabel4_platzhalter.png": "07ef658410300b41ac8cfb5dded51691",
"assets/assets/Placeholder/kabel5_platzhalter.png": "61490fc5d77d24aa5acc3aef36f5dfb2",
"assets/assets/Placeholder/kabel6_platzhalter.png": "553bf3df0f4218984fead411361fc313",
"assets/assets/Placeholder/NLP_placeholder.png": "52de218e11fa19b4ba1da48ee5d43c30",
"assets/assets/Placeholder/QnA1_platzhalter.png": "8c204133a658fb37ad7aafe422d15744",
"assets/assets/Placeholder/QnA2_platzhalter.png": "e84c0aeeb6797d43fd7a76177c863ba9",
"assets/assets/Placeholder/send_platzhalter.png": "e9280d7928e77f562899875ddd5384e1",
"assets/assets/Placeholder/speicher_platzhalter.png": "3f7cc5bc7922fc749d08ba700504ffb1",
"assets/assets/Placeholder/SysBank_placeholder.png": "ed9a13d05fcc7d8dc2c1ee5ffc3fc098",
"assets/assets/Survey/1_PH.json": "8331eb264a94ecc4be38c1deea59f4ff",
"assets/assets/Survey/2_PEoU.json": "9360ad18f12815f940847f24391b1f25",
"assets/assets/Survey/3_IME.json": "314514d4281e89f8a4fc5e8ebff06f4f",
"assets/assets/Survey/41_UEQ1.json": "c80c39d849fb50cc769687789f9c99e8",
"assets/assets/Survey/42_UEQ2.json": "e593cd6de1d7914611d5d89fccae241e",
"assets/assets/Survey/43_UEQ3.json": "21bbe979dd96b1d1bd676fb530f9fdf3",
"assets/assets/Survey/5_UEQplus.json": "03bf3cf47c037ff38f3ba71f40457a38",
"assets/assets/Survey/6_ItU1.json": "065445a6f90091f2b00e7edb474f5971",
"assets/assets/Survey/7_ItU2.json": "ab1346ab79d9fb683c6b3a611c04b374",
"assets/assets/Survey/8_NPS.json": "a735d8027f652a1716bd4f3e4394c02f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "cdb42690e090f1dd0c426501a932d028",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/research_package/assets/icons/analysis.png": "ff31bab59d70bd99192f05381e81b2c4",
"assets/packages/research_package/assets/icons/archive.png": "774dd5a71e4d911fe550cf55515632f6",
"assets/packages/research_package/assets/icons/deadline.png": "b84f6551cefb9a1fc843bc38b3c377c1",
"assets/packages/research_package/assets/icons/document.png": "baf5f7e19f4a40f0efbcb28e68816eb0",
"assets/packages/research_package/assets/icons/handshake.png": "42d786337771ddc6ad8847c26af3ac41",
"assets/packages/research_package/assets/icons/health.png": "be3ed6fb9fe7460b7e1fc9223c5f053a",
"assets/packages/research_package/assets/icons/id.png": "e82237beb95dd46c69d645c1f404f09e",
"assets/packages/research_package/assets/icons/location.png": "ae8041eb0eb7ef658ae90fd234e26f1d",
"assets/packages/research_package/assets/icons/management.png": "ca332c308380f95bae725ea460002f0d",
"assets/packages/research_package/assets/icons/networking.png": "5c32a1b960963f41dd7e93a370e5b06f",
"assets/packages/research_package/assets/icons/settings.png": "4e19b796edaaec7be67204987b9b6ac2",
"assets/packages/research_package/assets/icons/target.png": "20cd5efaaab93aca9b9b59a1cb0e5f67",
"assets/packages/research_package/assets/icons/task.png": "ff2254a13f8390240811dd0f48f3b7c8",
"assets/packages/research_package/assets/lang/da.json": "8226322230709bbdbedaf2c7b31e907b",
"assets/packages/research_package/assets/lang/en.json": "1d7025059e3ff6592542d53208eb8164",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "58eac08d9dd7a090451af99ecb6479db",
"/": "58eac08d9dd7a090451af99ecb6479db",
"main.dart.js": "ba28c09959728f32202c6a30dc7a4e44",
"manifest.json": "5da2f376a1b84906197a60110d4c4f61",
"version.json": "138d6006d57b1fa6a052814f3ae00255"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
