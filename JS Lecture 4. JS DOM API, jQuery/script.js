$(document).ready(function () {
    $('#goods').on('keyup', function (e) {
        e.preventDefault();
        if (e.which == 13) {
            var newView = '<div class="view">' +
                '<input type="checkbox" class="finished"/><span>'+$("#goods").val()+'</span>' +
                '<a class="del"></a></div>';
            var newEdit = '<div class="edit"><input type="text"  value="'+$("#goods").val()+'"/></div>';
            $('.items').append('<div class="item">'+ newView + newEdit + '</div>');
            $("#goods").val('');
        }
    });

    $('.items').on('dblclick', '.view', function(){
        if($('.edit:visible').length==0) {
            $(this).next().toggle();
            $(this).toggle();
        }
    });

    $('.items').on('keyup', '.edit',function(e) {
        if (e.which == 13) {
            var newValue = $(this).find(':text').val();
            $(this).prev().find('span').html(newValue);
            $(this).toggle();
            $(this).prev().toggle();
        }
        if (e.which == 27) {
            var oldValue = $(this).prev().find('span').text();
            $(this).find(':text').prop('value',oldValue);
            $(this).toggle();
            $(this).prev().toggle();
        }
    });

    $('.items').on('mouseenter mouseleave','.view',function(){
        $(this).find('.del').toggle();
    });

    $('.items').on('click', '.finished', function(){
        $(this).parent().toggleClass("done");
    });

    $('.items').on('click', '.del', function(){
        $(this).closest('.item').remove();
    });

    $('#all').on('click',function(){
        if($(this).prop('checked')) {
            $('.finished').prop('checked', true);
            $('.finished').parent().addClass("done");
        } else{
            $('.finished').prop('checked', false);
            $('.finished').parent().removeClass("done");
        }
    });

    $('.clear').on('click', function(){
        $('.done').closest('.item').remove();
        $('#all').prop('checked', false);
    });
});
