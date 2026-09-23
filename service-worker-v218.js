const CACHE_NAME='muazzin-ka-kaam-v218';
const APP_SHELL=['./index.html','./Muazzin-Ka-Kaam-218-PWA.html','./manifest-v158.webmanifest','./icon-192.svg','./icon-512.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(APP_SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
