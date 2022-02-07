$(function(){

    // create array of "attention seeker" names (still needs class name prefix)
    let animationList = ["heartBeat", "bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello"]
    // picks one at random
    var atnSeeker = animationList[Math.floor(Math.random() * animationList.length)];
    // adds prefix to complete class name, then applies it to appropriate element
    var prefix =    "animate__";
    var animation = prefix + atnSeeker;
    $("#randomAnimateTitle").addClass(animation);


    $('#birthday').pickadate({ format: 'mmmm, d' });

     // uncheck all checkboxes (FireFox)
     $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    var allButtonsChecked = false;

    // event listener for select all button
    $('#checkAllBalloons').on('click', function() {
        allButtonsChecked = !allButtonsChecked;

        // check all checkboxes
        $('.form-check-input').each(function () {
             //$(this).prop('checked', allButtonsChecked);
             $(this)[0].checked = allButtonsChecked;
             $(this).trigger("change");
        });
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

    // event listener for form submit
    $('#submit').on('click', function(event) {
        event.preventDefault();
        
    });

    
});