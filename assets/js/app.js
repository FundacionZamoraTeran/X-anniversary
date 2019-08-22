function cargarDatos(slides) {
    var datos = Mustache.render(data[0][slides].tpl);
    $('#webslides').html(datos);
}

$(document).ready(function () {
    // cargarDatos("slide_1");
    $('#path55').on("click", function () {
        alert('hello');
    });

    // cargarDatos("slide_2");
    $('#path55-5').on("click", function () {

    });

    // Derecha-Alumnos
    $("#path40").on('click', function () {
        alert("flecha");
    });
});
