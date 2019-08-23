function cargarDatos(slide) {
    var datos = Mustache.render(data[0][slide].tpl);
    $('#webslides').html(datos);
}

function cargarSwal(id, url){
    $(id).on('click', function () {
        Swal.fire({
            imageUrl: url,
            width: '70%',
            showConfirmButton: false,
        })
    });
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

    // Carga modal lengua y literatura
    cargarSwal('#button_lyl',  'assets/img/graduate.svg');

    // Carga modal matemáticas
    cargarSwal('#button_mat',  'assets/img/matematicas.svg');
});
