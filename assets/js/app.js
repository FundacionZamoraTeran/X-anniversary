function cargarDatos(slide){
    var datos = Mustache.render(data[0][slide].tpl);
    $('#webslides').html(datos);
}

$( document ).ready(function() {
    cargarDatos("slide_1");

    $('#path55').on("click", function () {
        alert('hello');
    });
<<<<<<< HEAD
    
    
=======

>>>>>>> 02719f197597450a6af6e8b79ff1fedae45d49af
    $('#path55-5').on("click", function () {
       cargarDatos("slide_2");
    });
    
//    Derecha-Alumnos
    $("#path40").on('click', function(){
       alert("flecha"); 
    });
});
