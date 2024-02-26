$(document).ready(function() {
    $('#changeColorBtn').click(function() {
        // Gera uma cor aleatória em formato hexadecimal
        var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Define a cor de fundo da página como a cor aleatória
        $('body').css('background-color', randomColor);
    });
});
