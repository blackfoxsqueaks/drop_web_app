'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "bbd4273770dd2bd5974250e267217599",
"version.json": "fc3baa3eba09dfdbe09e06da9cc63e1a",
"index.html": "da8b38bea3267137c11b6b6baf693959",
"/": "da8b38bea3267137c11b6b6baf693959",
"styles.css": "501c7ee4703bc3eb076d9c5edce812bd",
"main.dart.js": "2405edce607d9323aca3c8ebde8649c1",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"drop-loading-animation.gif": "6a6c307a62b63acf67146b20e138808d",
"drop_header_desktop.webp": "d95a01e8489486fec07193ce6900ba83",
"drop_init.js": "4eeb70096b06bdc6a8b2c4b07072d441",
"favicon.png": "a28077fb0620298fe0d78c6627af39e2",
"icons/favicon.ico": "558c1126983e412da17a6d9a024a2625",
"icons/apple-touch-icon.png": "7f48f7e6a604593daa4fe68b3ed5880b",
"icons/icon-192.png": "564a3051710df03c3c2d3233ee426349",
"icons/Icon-maskable-192.png": "20c2a3ee4df167403da6704f2793afc7",
"icons/Icon-maskable-512.png": "a28077fb0620298fe0d78c6627af39e2",
"icons/icon-512.png": "32346893ec142edac55486b5c1a45a9d",
"manifest.json": "ee83ac1f64b2a11506e9c6223100f945",
"drop-download-code.png": "a127e8ea2736b6e4f3cb885546859280",
"assets/shorebird.yaml": "5a9d74009084930628efceddf8c7307d",
"assets/AssetManifest.json": "870c976fcaa636f98c497419bfc67416",
"assets/NOTICES": "9c017191a461b341b85fa683a7af16bd",
"assets/FontManifest.json": "135d2f113bd6753343c1a93f287d84ed",
"assets/AssetManifest.bin.json": "9f23a175318c424b78564ebf1d9c4178",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "123c50229e49550ebb48a1b965fcc72d",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/dash_chat_2/assets/placeholder.png": "ce1fece6c831b69b75c6c25a60b5b0f3",
"assets/packages/dash_chat_2/assets/profile_placeholder.png": "77f5794e2eb49f7989b8f85e92cfa4e0",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f1d22fe29b49f36f2807eecf940971db",
"assets/fonts/MaterialIcons-Regular.otf": "7f6b30240553cd97dc161bb23c01887d",
"assets/assets/check.png": "352d0ceda3038d2fdaedfb7df351fe35",
"assets/assets/egypt_flag.png": "0fedfea839ac07061a7df8ef1e4a7579",
"assets/assets/arrow_right.png": "3fa6296d8a76128ca26712868afb45a8",
"assets/assets/payment_visa.png": "3798b09b5b7d3721d663d5d8fd04681f",
"assets/assets/washdrop_button_animation.json": "d5040563fc9c5b55e4e8d0bb20268ab2",
"assets/assets/wallet.png": "b1db7b25272c947221891a774a375db8",
"assets/assets/drop_loading.gif": "6a6c307a62b63acf67146b20e138808d",
"assets/assets/support_ticket.png": "882075547b20908491ed4dce736f7cf9",
"assets/assets/washdrop_subscription.png": "9619ca491960ac231000e3556e83b017",
"assets/assets/drop_header.png": "3882970193139abb9d9ef957a712550e",
"assets/assets/burger_back.png": "938f95c4c2471c03b55fa16db3992d53",
"assets/assets/reservation_confirmed_animation.json": "b437c488dc1b697c60b827b21347044a",
"assets/assets/egypt_plates.png": "6d669902d55e3cfe967b6df3e9b35368",
"assets/assets/drop_logo_blue.png": "f116c057f7918e48f67f38cf1caf7277",
"assets/assets/burger_back_blue.png": "9a5765b8ecf38fe24292b039bff73793",
"assets/assets/location_office.png": "92a532b1625ed10396ab5de43c384427",
"assets/assets/fuel_pump.png": "583e859de8ba0849ea57eff24ebd6807",
"assets/assets/payment_pos.png": "e226a52bfac65c5da1d9a4b807651b16",
"assets/assets/onboarding_4.png": "5fe3b8d35f48b769e19e8fcc75f25ae6",
"assets/assets/image_placeholder.png": "370fa560f6e01d2b5111d1821d538ced",
"assets/assets/tire.png": "e664ad99a43ef5b85654a25f4e3f4edc",
"assets/assets/onboarding_1.png": "48608a129bdb769f3e009c8ba3796cc1",
"assets/assets/onboarding_3.png": "59d9b49a17663121074d55ce7c1a7733",
"assets/assets/onboarding_2.png": "c12c6760abdad1aa8377b72c5d579137",
"assets/assets/sounds/washdrop_jingle.mp3": "b5da0ffb64d9c812cd744d72d596c029",
"assets/assets/sounds/select.mp3": "b66b0143d8b936e3d145bc292f4500a1",
"assets/assets/sounds/deselect.mp3": "8ce0fc17d76a714a2b8f1c9c4baf6682",
"assets/assets/sounds/backward.mp3": "dc00d88a443540d4034663d0d441ac76",
"assets/assets/sounds/forward.mp3": "ce8552231c6d73a638e523fd307a0a70",
"assets/assets/sounds/appointment_jingle.mp3": "acbc396b88b2d61923172ac7b30a43cf",
"assets/assets/sounds/drop_jingle.mp3": "5b33e07b4d5f2c4d83ac1b511b723d63",
"assets/assets/payment_cash.png": "7f3cce80370099f8443dc4312594979c",
"assets/assets/drop_logo_white.png": "f5d1065a6a3f58270d61097ff9884409",
"assets/assets/signals_animation.json": "8d317f107bffeb47f4534c823ee2618d",
"assets/assets/drop_header_web.png": "c4cc82e79f1e93b2dcd307cbcabb331f",
"assets/assets/3d_car.png": "f4a66f8066a0e164029524bd9775b89a",
"assets/assets/payment_fawry.png": "53fa00624df22383cfccf6f916a11ff6",
"assets/assets/washdrop_header_web.png": "e0ccc08ce162456e571440ab26575f74",
"assets/assets/car_wash_done.json": "c685cd5fa24309f41b1cd8126d95f034",
"assets/assets/phone.png": "92447388c9389a4eb74c1358cf969866",
"assets/assets/ota_animation.json": "474c1022352b4f012d556628f61b7fd5",
"assets/assets/wallet_animation.json": "f91c89ead1a6dd58683cd105026c1046",
"assets/assets/car_animation.json": "8f0483c1c41f639731e6b3ea5553a9c9",
"assets/assets/car_wash_progress.json": "bb64b616f121c21b76f489b652eff84f",
"assets/assets/aila_blue_logo.png": "e4871d21283213de5600f224041e3bbb",
"assets/assets/washdrop_header.png": "60152fcb03411457556956bbf7135638",
"assets/assets/location_home.png": "b0a6ef8763ba27dca0b78dee36f92aa0",
"assets/assets/fonts/RidleyGroteskRegular.ttf": "32c79a7ff9b61e91d8fd2674657fe2cb",
"assets/assets/fonts/RidleyGroteskMedium.ttf": "1ee712a561445efefe8af0a53e7a3069",
"assets/assets/fonts/RidleyGroteskBold.ttf": "66ae001ab729e9988ede1104fb56a364",
"assets/assets/washdrop_icon.png": "6712114ac704a958635a1293fd084848",
"assets/assets/washdrop_appointment.json": "1dc8a105c30329d7f7e48cf6defc4386",
"assets/assets/location_school.png": "53233181e0eeb4c809bcafc3b8750c2a",
"assets/assets/burger.png": "323aaea4fbd6bad75478a0714a865ca2",
"assets/assets/pending.png": "ba1e91d5588bdfd16a19b7b91a7a68ad",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
        "index.html",
        "flutter_bootstrap.js",
        "assets/AssetManifest.bin.json",
        "assets/FontManifest.json",
        "canvaskit/skwasm.js",
        "canvaskit/skwasm.wasm",
        "canvaskit/canvaskit.js"
        ]; 

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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
