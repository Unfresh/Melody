$(document).ready(function () {
    console.log('ready');
    var currentFloor = 2;
    var floorpath = $('.home-image path');
    floorpath.on('mouseover', function() {
        floorpath.removeClass('current-floor');
        currentFloor = $(this).attr('data-floor');
        $('.counter').text(currentFloor);
        
    });
    

    $('.counter-up').on('click', function() {
        if(currentFloor < 18) {
            currentFloor++;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGroupping: false});
            $('.counter').text(usCurrentFloor);
            floorpath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        } else {
            return;
        }
    });

    $('.counter-down').on('click', function() {
        if(currentFloor > 2) {
            currentFloor--;
            usCurrentFloor = currentFloor.toLocaleString('en-Us', {minimumIntegerDigits: 2, useGroupping: false});
            $('.counter').text(usCurrentFloor);
            floorpath.removeClass('current-floor');
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current-floor');
        } else {
            return;
        }
    });
});