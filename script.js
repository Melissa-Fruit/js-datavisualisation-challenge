// Remote data, in real-time, via ajax

let canvasA = document.createElement("canvas");
var node = document.createTextNode("This is new.");
canvasA.appendChild(node);

var elementA = document.getElementById("bodyContent");
var child = document.getElementById("mw-content-text");
elementA.insertBefore(canvasA, child);

document.getElementsByTagName("canvas")[0].setAttribute("id", "content3");

//inline data Tableau 1
let canvas = document.createElement("canvas");
var node = document.createTextNode("This is new.");
canvas.appendChild(node);

var element = document.getElementById("mw-content-text");
var child = document.getElementById("table1");
element.insertBefore(canvas, child);

document.getElementsByTagName("canvas")[1].setAttribute("id", "content1");

//inline Data Tableau 2

let canvas1 = document.createElement("canvas");
var node = document.createTextNode("This is new.");
canvas1.appendChild(node);

var element1 = document.getElementById("mw-content-text");
var child1 = document.getElementById("table2");
element1.insertBefore(canvas1, child1);

document.getElementsByTagName("canvas")[2].setAttribute("id", "content2");
