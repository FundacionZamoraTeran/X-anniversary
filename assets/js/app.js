function cargarDatos(slices) {
    var datos = Mustache.render(data[0][slices].tpl);
    $('#webslides').html(datos);
}

$(document).ready(function () {
    // cargarDatos("slide_1");

    $('#path55').on("click", function () {
        alert('hello');
    });

    $('#path55-5').on("click", function () {
        // cargarDatos("slide_2");
    });

    //    Derecha-Alumnos
    $("#path40").on('click', function () {
        alert("flecha");
    });

    $("#button_lyl").on('click', function () {
        Swal.fire({
            imageUrl: 'assets/img/graduate.svg',
            width: '70%',
            showConfirmButton: false,
        })
    });
});
