const b=document.querySelector('.menu'),n=document.querySelector('.nav nav');
b?.addEventListener('click',()=>n.classList.toggle('open'));
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));

// Los datos visibles se actualizan desde data/playstore.json. GitHub Actions refresca ese
// archivo diariamente desde las fichas públicas de Google Play, evitando CORS y scraping
// desde el navegador del visitante.
(async()=>{
  try{
    const r=await fetch('/exvatitan-privacy/data/playstore.json',{cache:'no-store'}); if(!r.ok) return;
    const d=await r.json();
    document.querySelectorAll('[data-play-package]').forEach(card=>{
      const a=d.apps?.[card.dataset.playPackage]; if(!a)return;
      card.querySelectorAll('[data-play-name]').forEach(e=>e.textContent=a.name||e.textContent);
      card.querySelectorAll('[data-play-description]').forEach(e=>{if(a.description)e.textContent=a.description});
      card.querySelectorAll('[data-play-link]').forEach(e=>e.href=a.url||e.href);
      card.querySelectorAll('[data-play-icon]').forEach(e=>{if(a.icon){e.src=a.icon;e.hidden=false}});
    });
    document.querySelectorAll('[data-developer-name]').forEach(e=>e.textContent=d.developer?.name||e.textContent);
    document.querySelectorAll('[data-developer-link]').forEach(e=>e.href=d.developer?.url||e.href);
    document.querySelectorAll('[data-developer-description]').forEach(e=>{if(d.developer?.description)e.textContent=d.developer.description});
    const stamp=document.querySelector('[data-play-updated]'); if(stamp&&d.updated_at) stamp.textContent=d.updated_at;
  }catch(e){/* La página conserva contenido fallback y todos los enlaces siguen funcionando. */}
})();
