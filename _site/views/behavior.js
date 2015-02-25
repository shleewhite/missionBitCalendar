(function () {

    function onMonthClick(event) {
        var target = $(event.target);
        var x = target.data('monthName');
        document.location.href= x + '.html';
    }
    
    $(document).on('click', '.month', onMonthClick);
    
}());