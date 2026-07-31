// Service worker mínimo — só existe para habilitar a instalação como app (PWA).
// Não faz cache agressivo para não causar telas desatualizadas.
self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // passa direto para a rede — sem cache offline por enquanto
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
