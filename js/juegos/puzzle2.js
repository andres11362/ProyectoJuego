$(document).ready(function(){
    $("#puzzle").tilePuzzle({
        "level": 4, // a level, can be 3+
        "maxWidth": 800, // could also be $(window).width() or width of puzzle container div
        "imageUrl": "img/romp2/goku.jpg" // URL of an image
    });
});
