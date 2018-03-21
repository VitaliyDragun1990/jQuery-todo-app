// Check Off Specific Todos By Clicking
$('ul').on('click', 'li', function () {
    $(this).toggleClass('completed');
});

// Click on X to delete Todos
$('ul').on('click', 'span', function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    // prevent event bubbling
    event.stopPropagation();
});

// Keypress on input field
$('input[type="text"]').keypress(function (event) {
    if (event.which === 13) {
        // grab todo text from input
        let todoText = $(this).val().trim();
        $(this).val('');
        if (todoText) {
            // create new li and add to ul
            $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + todoText + '</li>');
        }
    }
});

$('.fa-plus').click(function () {
   $('input[type="text"]').fadeToggle();
});