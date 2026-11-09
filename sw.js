const C='aldi-vst-v2026-11';
const A=['./','./index.html','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png','./stores_data.json'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=e.request.url;
  if(/tile\.openstreetmap\.org/.test(u)){
    e.respondWith(caches.open(C).then(cache=>cache.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r&&r.ok)cache.put(e.request,r.clone());return r;}).catch(()=>c))));
    return;
  }
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html'))));
});
