self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open("jastol-cache-v1").then((cache) => {
            return cache.addAll([
                "/jastol/",
                "/jastol/index.html",
                "/jastol/manifest.json",
                "/jastol/icons/icon-192.png",
                "/jastol/icons/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
