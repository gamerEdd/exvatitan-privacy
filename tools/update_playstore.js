const fs = require('fs');
const https = require('https');
const apps = [
  {id:'com.exvacorp.focustimer', fallbackName:'ExvaTitan POS Sales Register'},
  {id:'com.exvacorp.midinerodiario', fallbackName:'Finanzas Personales con IA'}
];
function get(url){return new Promise((resolve,reject)=>{https.get(url,{headers:{'User-Agent':'Mozilla/5.0'}},r=>{let d='';r.on('data',c=>d+=c);r.on('end',()=>resolve(d));}).on('error',reject);});}
function decode(s=''){return s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');}
(async()=>{
 const out={updatedAt:new Date().toISOString(),developer:{name:'Exvacorp Studios',url:'https://play.google.com/store/apps/dev?id=5237763171952946627'},apps:[]};
 for(const a of apps){
  const url=`https://play.google.com/store/apps/details?id=${a.id}&hl=es_419&gl=EC`;
  try{const h=await get(url); const title=decode((h.match(/<meta[^>]+property="og:title"[^>]+content="([^"]+)"/i)||[])[1]||a.fallbackName); const icon=decode((h.match(/<meta[^>]+property="og:image"[^>]+content="([^"]+)"/i)||[])[1]||''); out.apps.push({id:a.id,name:title,icon,url:`https://play.google.com/store/apps/details?id=${a.id}&pcampaignid=web_share`});}
  catch(e){out.apps.push({id:a.id,name:a.fallbackName,icon:'',url:`https://play.google.com/store/apps/details?id=${a.id}&pcampaignid=web_share`});}
 }
 fs.mkdirSync('data',{recursive:true}); fs.writeFileSync('data/playstore.json',JSON.stringify(out,null,2));
})();
