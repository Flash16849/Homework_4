const WIDTH = 900, HEIGHT = 500;

/**
 * @type {HTMLCanvasElement}
 */

let canvas = document.getElementById("myCanvas");
let pen = canvas.getContext("2d");

pen.canvas.width = WIDTH;
pen.canvas.height = HEIGHT;
canvas.style.border = "2px solid black";