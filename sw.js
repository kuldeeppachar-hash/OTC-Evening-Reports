// Minimal service worker — required by Chrome for the "Install App" prompt to appear.
// Does not cache anything; the form always loads fresh from the network.
self.addEventListener('install', (e) => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { self.clients.claim(); });
self.addEventListener('fetch', (e) => { /* pass-through, no caching */ });
