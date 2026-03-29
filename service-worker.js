const CACHE_NAME = "entrecapas-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js"
];

// instala e salva arquivos
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// intercepta requisições
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});