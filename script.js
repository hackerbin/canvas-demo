$(document).ready(function () {
    var fadeInSec = 3;
    var fadeOutSec = 3;
    var waitSec = 2;
    var zoomInSec = 3;
    var zoomOutSec = 3;

    $('#submit_button').click(function (event) {
        event.preventDefault();
        submitted();
    })


    $( "#submit_form").submit(function( event ) {
        // alert( "Handler for .submit() called." );
        event.preventDefault();
    });


    function submitted() {
        var _name = $('#name_id').val();
        $('#name_id').val("");
        // fadeOut(_name);
        fadeIn(_name);
    }


    var canvas = document.getElementById("myCanvas");

    var context = canvas.getContext('2d');

    function fadeOut(text) {
        var alpha = 1.0,   // full opacity
            interval = setInterval(function () {
                canvas.width = canvas.width; // Clears the canvas
                context.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
                context.font = "italic 12px Arial";
                context.textAlign='center';
                context.fillText(text, 200, 200);
                alpha = alpha - 0.05; // decrease opacity (fade out)
                if (alpha < 0) {
                    // canvas.width = canvas.width;
                    clearInterval(interval);
                }
            }, 50*fadeOutSec);
    }

    function fadeIn(text) {
        var alpha = 0.0,   // full opacity

            intervalIn = setInterval(function () {
                canvas.width = canvas.width; // Clears the canvas
                context.fillStyle = "rgba(255, 0, 0, " + alpha + ")";
                context.font = "italic 12px Arial";
                context.textAlign='center';
                context.fillText(text, 200, 200);
                alpha = alpha + 0.05; // increase opacity (fade in)
                if (alpha > 1) {
                    // canvas.width = canvas.width;
                    zoomIn(text);
                    clearInterval(intervalIn);
                }
            }, 50*fadeInSec);
    }

    function zoomIn(text) {
        var txtSize = 12;
        intervalZoomin = setInterval(function () {
            canvas.width = canvas.width;
            context.fillStyle = "rgba(255, 0, 0, 1)";
            context.font = "italic "+txtSize+"px Arial";
            context.textAlign='center';
            context.fillText(text, 200, 200);
            txtSize = txtSize + 1;
            // console.log(txtSize);
            if (txtSize > 36) {
                // canvas.width = canvas.width;
                clearInterval(intervalZoomin);

                setTimeout(function () {
                    zoomOut(text)
                },1000*waitSec)
            }
        },50*zoomInSec)
    }

    function zoomOut(text) {
        var txtSize = 36;
        intervalZoomout = setInterval(function () {
            canvas.width = canvas.width;
            context.fillStyle = "rgba(255, 0, 0, 1)";
            context.font = "italic "+txtSize+"px Arial";
            context.textAlign='center';
            context.fillText(text, 200, 200);
            txtSize = txtSize - 1;
            // console.log(txtSize);
            if (txtSize < 12) {
                // canvas.width = canvas.width;
                clearInterval(intervalZoomout);

                fadeOut(text);
            }
        },50*zoomOutSec)
    }


})