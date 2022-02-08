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
             $(this).prop('checked', allButtonsChecked);
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

    // event listener for label hover
    $('.colorSwitcher').mouseover(function(){
        var colorChange = $(this).prop("for");
        $("h1").css({'color': colorChange});
    });

    // event listener for mouseleave 
    $('.colorSwitcher').mouseleave(function(){
        var colorChange = $(this).prop("for");
        $("h1").css({'color': "slategray"});
    });

    // preload audio
    var toast = new Audio('media/toast.wav');

    // event listener for form submit
    $('#submit').on('click', function(event) {
        event.preventDefault();

        // check to see how many boxes are checked
        var $balloonBoxes = $('.balloonSelector:checked');

        // if none are, display toast
        if($balloonBoxes.length == 0)
        {
           // first pause the audio (in case it is still playing)
            toast.pause();
            // reset the audio
            toast.currentTime = 0;
            // play audio
            toast.play();
            $('#toast').toast({ autohide: false }).toast('show');
        }
        else{
            // hide toast if user hits submit AND has selected a balloon
            $('#toast').toast('hide');
        }
        
    });

    // toast is hidden (closed) when escape key is hit
    $(document).keydown(function(e) {
        if (e.key === "Escape") { 
            $('#toast').toast('hide');
       }
   });

    
});