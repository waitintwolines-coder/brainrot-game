const CACHE_NAME = "brainrot-cache-v1";

const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",

  // 画像をすべて列挙（★ここが重要）
  "./images/tuntunsaful.png",
  "./images/torara.png",
  "./images/barerina.png",
  "./images/bombardiro.png",
  "./images/buruburu.png",
  "./images/timpanjini.png",
  "./images/captino.png",
  "./images/riririrarira.png",
  "./images/trippitroppi.png",
  "./images/bonekaanbarabu.png",
  "./images/mateo.png",
  "./images/frigokamero.png",
  "./images/raino.png",
  "./images/ravaka.png",
  "./images/pichone.png",
  "./images/jiraffa.png",
  "./images/oragutini.png",
  "./images/bulbitto.png",
  "./images/pothotspot.png",
  "./images/torararerokotini.png",
  "./images/zibrazubra.png",
  "./images/pipipoteto.png",
  "./images/zigmaboy.png",
  "./images/burbaroni.png",
  "./images/totototosaful.png",
  "./images/buruberini.png",
  "./images/furiruhurira.png",
  "./images/gurorubo.png",
  "./images/bonbonbinigusini.png",
  "./images/boburito.png",
  "./images/orukarero.png",
  "./images/berugero.png",
  "./images/rabituri.png",
  "./images/rosu.png",
  "./images/udindin.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// ★ これがないとオフラインで返せない
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
