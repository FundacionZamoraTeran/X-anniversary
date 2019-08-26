function cargarDatos(slide) {
    var datos = Mustache.render(data[0][slide].tpl);
    $('#webslides').html(datos);
}

function cargarSwal(id, url) {
    $(id).on('click', function () {
        Swal.fire({
            imageUrl: url,
            width: '70%',
            showConfirmButton: false,
        })
    });
}

$(document).ready(function () {
    cargarDatos("slide_main");
    // cargarDatos("slide_1");
    // cargarDatos("slide_4");

    $('#path55').on("click", function () {
        alert('hello');
    });

    $('#arrow-main').on('click', function () {
        cargarDatos('slide_1');

        $('#alumnos').on("click", function () {
            cargarDatos("slide_2");

            // Derecha-Alumnos
            $("#path40").on("click", function () {
                cargarDatos("slide_3");

                // Carga modal lengua y literatura
                cargarSwal('#button_lyl', 'assets/img/graduate.svg');

                // Carga modal matemáticas
                cargarSwal('#button_mat', 'assets/img/matematicas.svg');

                $("#path41").on("click", function () {
                    cargarDatos("slide_2");
                });
            });
        });
    });






    


});
