$(function() {
    console.log('loaded');
    $('body').on('click', '.track-name', function(){
        const _this = $(this);
        const id = _this.data('id');

        console.log(id);

        const result = $.ajax({
            url: `/track/${id}`
        });
    })
})