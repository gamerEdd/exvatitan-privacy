#!/usr/bin/env python3
"""Refresh public Google Play metadata for the Exvacorp static GitHub Pages site.
Runs in GitHub Actions. The website itself never scrapes Google Play from a visitor browser.
"""
import json, re, html, urllib.request, datetime, pathlib
ROOT = pathlib.Path(__file__).resolve().parents[1]
OUT = ROOT / "data" / "playstore.json"
APPS = {
 "com.exvacorp.focustimer": "https://play.google.com/store/apps/details?id=com.exvacorp.focustimer&pcampaignid=web_share",
 "com.exvacorp.midinerodiario": "https://play.google.com/store/apps/details?id=com.exvacorp.midinerodiario&pcampaignid=web_share",
}
DEV_URL = "https://play.google.com/store/apps/dev?id=5237763171952946627"
HEADERS={"User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/130 Safari/537.36","Accept-Language":"es-419,es;q=0.9,en;q=0.7"}

def fetch(url):
    req=urllib.request.Request(url, headers=HEADERS)
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read().decode("utf-8","replace")

def meta(doc, prop):
    pats=[rf'<meta[^>]+(?:property|name)=["\']{re.escape(prop)}["\'][^>]+content=["\']([^"\']+)',
          rf'<meta[^>]+content=["\']([^"\']+)["\'][^>]+(?:property|name)=["\']{re.escape(prop)}["\']']
    for p in pats:
        m=re.search(p,doc,re.I)
        if m:return html.unescape(m.group(1)).strip()
    return ""

def title(doc):
    v=meta(doc,"og:title")
    if v:return re.sub(r"\s*-\s*Apps on Google Play\s*$","",v,flags=re.I).strip()
    m=re.search(r'<h1[^>]*>(.*?)</h1>',doc,re.I|re.S)
    return re.sub('<[^>]+>','',html.unescape(m.group(1))).strip() if m else ""

old={}
try: old=json.loads(OUT.read_text(encoding="utf-8"))
except Exception: pass
result={"developer":old.get("developer",{}),"apps":{},"updated_at":datetime.datetime.now(datetime.timezone.utc).isoformat()}
try:
    d=fetch(DEV_URL)
    result["developer"]={"name": title(d) or old.get("developer",{}).get("name","Exvacorp"),"url":DEV_URL,
                         "description":meta(d,"og:description") or old.get("developer",{}).get("description","")}
except Exception as e:
    print("developer refresh failed:",e)
for pkg,url in APPS.items():
    prev=old.get("apps",{}).get(pkg,{})
    try:
        d=fetch(url)
        result["apps"][pkg]={"name":title(d) or prev.get("name",pkg),"url":url,
          "icon":meta(d,"og:image") or prev.get("icon",""),
          "description":meta(d,"og:description") or prev.get("description","")}
    except Exception as e:
        print(pkg,"refresh failed:",e)
        result["apps"][pkg]={**prev,"url":url}
OUT.write_text(json.dumps(result,ensure_ascii=False,indent=2)+"\n",encoding="utf-8")
