$(function(){

    let animationList = ["heartBeat", "bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello"]
    
    var atnSeeker = animationList[Math.floor(Math.random() * animationList.length)];

    var prefix =    "animate__";
    var animation = prefix + atnSeeker;
    $("#randomAnimateTitle").addClass(animation);


    $('#birthday').pickadate({ format: 'mmmm, d' });

     // uncheck all checkboxes (FireFox)
     $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible')
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    });
});