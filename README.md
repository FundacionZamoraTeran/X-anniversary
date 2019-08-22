# x-anniversary

Informe gráfico del X Aniversario de Fundación Zamora Terán


## [MustacheJS](https://mustache.github.io/), manejador de plantillas

La mayor parte de trabajo se realiza pasando datos desde JavaScript a html,
llegado a este punto en la mayoría de los casos se requerirá usar un sistema de
plantillas para aligerar la carga.

Lo primero es descargar [mustache.js](https://raw.githubusercontent.com/janl/mustache.js/master/mustache.min.js)
y colocarlo en la carpeta `lib` de nuestro proyecto.

Luego solo hace falta incluirlo en las definiciones del nuestro archivo
`index.html` y empezar a usarlo.

```HTML
<script src="assets/js/lib/mustache.min.js"></script>
```
## WebSlides

Todo lo que necesita para hacer presentaciones HTML, aterrizajes y formatos
largos de una manera hermosa. Solo se requiere un conocimiento básico de HTML y
CSS. Los diseñadores, comercializadores y periodistas ahora pueden centrarse en
el contenido.

### Características

- Navegación (deslizamiento horizontal y vertical): presentadores remotos,
  panel táctil, atajos de teclado y deslizar.
- Contador de diapositivas.
- Enlaces permanentes: vaya a una diapositiva específica.
- Autoslide.
- Haga clic para navegar.
- Alineaciones simples de CSS. Coloca contenido donde quieras (centrado
  vertical ...)
- Más de 40 componentes: imágenes de fondo / videos, citas, tarjetas, portadas
  ...
- Bloques flexibles con autocompletado e igual altura.
- Fuentes: Roboto, Maitree (Serif) y San Francisco.
- Ritmo vertical (use múltiplos de 8).

## Margen

- El código es limpio y escalable. Utiliza marcado intuitivo con convenciones
  de nomenclatura populares. No hay necesidad de abusar de las clases o anidar.
- Cada elemento principal `<sección>` en el elemento `# webslides` es una
  diapositiva individual.

```HTML
<article id = "webslides">
    <sección>
        <h1> Diapositiva 1 </h1>
    </section>
    <section class = "bg-black aligncenter">
    <! - .wrap = contenedor 1200px ->
        <div class = "wrap">
            <h1> Diapositiva 2 </h1>
        </div>
    </section>
</article>
```

### Deslizamiento vertical

```HTML
<article id = "webslides" class = "vertical">
```
