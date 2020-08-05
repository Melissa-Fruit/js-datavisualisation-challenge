// Remote data, in real-time, via ajax

let canvasA = document.createElement("canvas");
var node = document.createTextNode("This is new.");
canvasA.appendChild(node);

var elementA = document.getElementById("bodyContent");
var child = document.getElementById("mw-content-text");
elementA.insertBefore(canvasA, child);

document.getElementsByTagName("canvas")[0].setAttribute("id", "myChart3");

//inline data Tableau 1
let canvas = document.createElement("canvas");

document.body.appendChild(canvas);

var element = document.getElementById("mw-content-text");
var child = document.getElementById("table1");
element.insertBefore(canvas, child);

document.getElementsByTagName("canvas")[1].setAttribute("id", "myChart1");

//inline Data Tableau 2

let canvas1 = document.createElement("canvas");
var node = document.createTextNode("This is new.");
canvas1.appendChild(node);

var element1 = document.getElementById("mw-content-text");
var child1 = document.getElementById("table2");
element1.insertBefore(canvas1, child1);

document.getElementsByTagName("canvas")[2].setAttribute("id", "myChart2");

let doc = document.getElementById("myChart2");

document.getElementsByTagName("tbody")[0].setAttribute("id", "myData");

// tableau chart.js pour le canvas id = myChart1

let table = document.getElementById("table1");
let table2 = document.getElementById("table2");

function tableToJson(table) {
  let data = [];
  for (i = 1; i < table.rows.length; i++) {
    let tableRow = table.rows[i];
    let rowData = [];
    for (j = 1; j < tableRow.cells.length; j++) {
      rowData.push(tableRow.cells[j].innerHTML);
    }
    data.push(rowData);
  }
  return data;
}
table = tableToJson(table);

//tableau 2
function tableToJson(table2) {
  let data = [];
  for (i = 1; i < table2.rows.length; i++) {
    let tableRow = table2.rows[i];
    let rowData = [];
    for (j = 1; j < tableRow.cells.length; j++) {
      rowData.push(tableRow.cells[j].innerHTML);
    }
    data.push(rowData);
  }
  return data;
}
table2 = tableToJson(table2);

//fonction pour supprimer l'index choisi

const arrayWithoutElementAtIndex = function (arr, index) {
  let ret = arr.slice(); //make a copy
  ret.splice(index, 1); //remove item from given index
  return ret; //return the copy
};

//fonction pour transformer l'aray de string en float et remplacer les virgule par des points

function arrayStringToFloat(table) {
  data = [];
  for (i = 0; i < table.length; i++) {
    table[i] = table[i].replace(",", ".");
    data.push(table[i]);
  }
  return data;
}
//fonction pour couleur random
function randomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = "rgb(" + red + "," + green + "," + blue + ")";
  return rgb;
}

console.log(randomColor());

function tableAllZero(arr) {
  let data = [];
  for (i = 0; i < arr.length; i++) {
    data[i] = arr[i][0];
  }
  data[7] = "England & Wales (uk)";
  return data;
}

function tableAllOne(arr) {
  let data = [];
  for (i = 0; i < arr.length; i++) {
    data[i] = arr[i][1];
  }
  return data;
}

function tableAllTwo(arr) {
  let data = [];
  for (i = 0; i < arr.length; i++) {
    data[i] = arr[i][2];
  }
  return data;
}
let ctx = document.getElementById("myChart1").getContext("2d");

var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: arrayWithoutElementAtIndex(table[0], 0),
    datasets: [
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[1], 0)),
        label: table[1][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[2], 0)),
        label: table[2][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[3], 0)),
        label: table[3][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[4], 0)),
        label: table[4][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[5], 0)),
        label: table[5][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[6], 0)),
        label: table[6][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[7], 0)),
        label: table[7][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[8], 0)),
        label: table[8][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[9], 0)),
        label: table[9][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[10], 0)),
        label: table[10][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[11], 0)),
        label: table[11][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[12], 0)),
        label: table[12][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[13], 0)),
        label: table[13][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[14], 0)),
        label: table[14][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[15], 0)),
        label: table[15][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[16], 0)),
        label: table[16][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[17], 0)),
        label: table[17][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[18], 0)),
        label: table[18][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[19], 0)),
        label: table[19][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[20], 0)),
        label: table[20][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[21], 0)),
        label: table[21][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[22], 0)),
        label: table[22][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[23], 0)),
        label: table[23][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[24], 0)),
        label: table[24][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[25], 0)),
        label: table[25][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[26], 0)),
        label: table[26][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[27], 0)),
        label: table[27][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[28], 0)),
        label: table[28][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[29], 0)),
        label: table[29][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[30], 0)),
        label: table[30][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[31], 0)),
        label: table[31][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[32], 0)),
        label: table[32][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[33], 0)),
        label: table[33][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[34], 0)),
        label: table[34][0],
        borderColor: randomColor(),
        fill: false,
      },
      {
        data: arrayStringToFloat(arrayWithoutElementAtIndex(table[35], 0)),
        label: table[35][0],
        borderColor: randomColor(),
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Number (in thousands)",
    },
  },
});
// ne fonctione pas encore

let myChart2 = new Chart(doc, {
  type: "bar",
  data: {
    labels: tableAllZero(table2),
    datasets: [
      {
        label: "2007-09",
        backgroundColor: "#3e95cd",
        data: tableAllOne(table2),
      },
      {
        label: "2010-12",
        backgroundColor: "#8e5ea2",
        data: tableAllTwo(table2),
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: "Prison population, average per year (per 100.000 inhabitants",
    },
  },
});
