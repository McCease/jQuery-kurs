$(document).on('ready', function () {
    $('#kino').show();
    $('#film').hide();
    $('#bilet').hide();
    $('#platnosc').hide();

    $("#wybor_formularza").on('click', function(){

        switch ($('#wybor_formularza').val()) {
            case 'Kino':
                $('#kino').show();
                $('#film').hide();
                $('#bilet').hide();
                $('#platnosc').hide();
                break;

            case 'Film':
                $('#kino').hide();
                $('#film').show();
                $('#bilet').hide();
                $('#platnosc').hide();
                break;

            case 'Bilet':
                $('#kino').hide();
                $('#film').hide();
                $('#bilet').show();
                $('#platnosc').hide();
                break;

            case 'Platnosc':
                $('#kino').hide();
                $('#film').hide();
                $('#bilet').hide();
                $('#platnosc').show();
                break;
        }
    });

});