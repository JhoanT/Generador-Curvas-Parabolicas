
var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGTH:39 
};

document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 450;
var y = 450;

dibujarLinea("red", 450, 450, 450, 450, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(evento)
{
    var colorcito = "red"
    var movimiento = 10;

    switch(evento.keyCode)
{
    case teclas.LEFT:
        dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
        x = x - movimiento;
        break;
    case teclas.RIGTH:
        dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
        x = x + movimiento;
        break;
    case teclas.UP:
        dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
        y = y - movimiento;
        break;
        case teclas.DOWN:
        dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
        y = y + movimiento;
        break;
    }
}
