self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("brainrot-cache").then(cache =>
      cache.addAll([
        "./",
        "index.html",
        "style.css",
        "script.js"
      ])
    )
  );
});
