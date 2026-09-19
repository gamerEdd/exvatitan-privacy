# Exvacorp Studios — sitio oficial para GitHub Pages

Versión completa del sitio estático de **Exvacorp Studios**, preparada para publicarse en el repositorio `gamerEdd/exvatitan-privacy` mediante GitHub Pages.

## URL configurada

- Sitio: `https://gameredd.github.io/exvatitan-privacy/`
- ExvaTitan POS: `https://gameredd.github.io/exvatitan-privacy/productos/exvatitan/`
- Política de privacidad: `https://gameredd.github.io/exvatitan-privacy/privacy/`
- app-ads.txt: `https://gameredd.github.io/exvatitan-privacy/app-ads.txt`
- Sitemap: `https://gameredd.github.io/exvatitan-privacy/sitemap.xml`
- Robots: `https://gameredd.github.io/exvatitan-privacy/robots.txt`

No es necesario reemplazar `https://exvacorp.github.io/`: canonical, Open Graph, JSON-LD, sitemap y robots ya están configurados para la ruta real del repositorio.

## Contenido incluido

El ZIP conserva el sitio completo: página principal, estilos globales, JavaScript, imágenes, Productos, ExvaTitan, Soluciones, Blog y sus artículos, Nosotros, Contacto, Privacidad, página 404, `robots.txt`, `sitemap.xml`, `app-ads.txt`, manifest y `.nojekyll`.

## app-ads.txt

El archivo está en la raíz y contiene:

```text
google.com, pub-8633526262899564, DIRECT, f08c47fec0942fa0
```

Para que AdMob lo valide, Google debe poder abrir públicamente `https://gameredd.github.io/exvatitan-privacy/app-ads.txt`. Además, el dominio/sitio web declarado para la aplicación debe corresponder con la ubicación desde la que Google espera encontrar este archivo.

## SEO técnico incluido

- Canonical por página.
- Meta title y meta description.
- `robots` con vista previa ampliada.
- Open Graph y Twitter Card.
- Datos estructurados Schema.org/JSON-LD.
- Identidad `Organization` de Exvacorp Studios.
- Datos `SoftwareApplication` para ExvaTitan POS.
- Sitemap XML con las páginas públicas.
- robots.txt enlazado al sitemap.
- Metadatos orientados a software, POS, punto de venta, ventas, inventario, caja, clientes, crédito, cuentas por cobrar y reportes.
- Enlaces internos y páginas de contenido para ampliar cobertura orgánica.
- Imágenes con texto alternativo y carga diferida donde ya corresponde.
- Diseño responsive conservado mediante `styles.css` y comportamiento mediante `script.js`.

## Publicación

1. Extrae el ZIP.
2. Sube **todo el contenido**, incluyendo carpetas, `styles.css`, `script.js`, `app-ads.txt`, `robots.txt`, `sitemap.xml`, `site.webmanifest` y `.nojekyll`, a la raíz del repositorio `gamerEdd/exvatitan-privacy`.
3. En GitHub abre **Settings → Pages**.
4. Usa **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
5. Tras el despliegue, comprueba el sitio y especialmente `/app-ads.txt`, `/robots.txt` y `/sitemap.xml`.

## Google Search Console

Después de publicar, registra la URL del sitio en Search Console y envía `sitemap.xml`. El sitemap ayuda al descubrimiento, pero no garantiza indexación inmediata.

## Datos de Google Play

La web enlaza a la ficha oficial de ExvaTitan en Google Play. No se inventan descargas, puntuaciones ni reseñas. Esos datos deben consultarse en Google Play salvo que en el futuro se conecte una fuente autorizada y estable.

## Nota

SEO web y ASO de Google Play son canales distintos. Esta web está preparada para reforzar la entidad **Exvacorp Studios / ExvaTitan POS**, mientras que el título, descripción, capturas y demás elementos ASO se administran desde Google Play Console.


## Enlace de privacidad

Los enlaces del sitio apuntan explícitamente a `privacy/index.html` para que la Política de Privacidad funcione tanto en GitHub Pages como al abrir el proyecto localmente desde Windows. `privacidad/index.html` queda como alias/redirección a la URL principal de privacidad.
