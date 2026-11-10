// 바로오피스 서비스 워커: 다른 앱(카톡 등)에서 "공유"로 보낸 파일을 받아 앱으로 넘긴다
const BOX='baro-share';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='POST'||!u.pathname.endsWith('/share'))return;
  e.respondWith((async()=>{
    try{
      const fd=await e.request.formData(),f=fd.get('file');
      if(f&&f.size){const c=await caches.open(BOX);await c.put('/__shared',new Response(f,{headers:{'Content-Type':f.type||'application/octet-stream','X-Name':encodeURIComponent(f.name||'파일')}}))}
    }catch(err){}
    return Response.redirect('./?shared=1',303);
  })());
});
