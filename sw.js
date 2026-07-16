// Minimale service worker. Enkel nodig zodat Chrome deze site als
// installeerbare app herkent (PWA-vereiste). Er wordt niets offline
// gecachet, alles gaat gewoon via het netwerk zoals normaal.

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(fetch(event.request));
});

