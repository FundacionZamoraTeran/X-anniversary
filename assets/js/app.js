function cargarDatos(slide){
    var datos = Mustache.render(data[0][slide].tpl);
    $('#webslides').html(datos);
}



$( document ).ready(function() {
    cargarDatos("slide_1");

    $('#path55').on("click", function () {
        alert('hello');
    });
    
    $('#path55-5').on("click", function () {
       cargarDatos("slide_2");
    });
});
