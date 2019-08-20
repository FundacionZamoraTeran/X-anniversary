function cargarDatos(){
    var datos = Mustache.render(data[0].slide_1.tpl);
    $('#section').html(datos);
}

$( document ).ready(function() {
    cargarDatos();

    $('#path55').on("click", function () {
        alert('hello');
    });
});
