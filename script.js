// Tableau 0 Remote data, in real-time, via ajax id mychart3 en desous he h1
//créer canvas
let canvasA = document.createElement("canvas");
document.body.appendChild(canvasA);

//créer element et son enfant pour inserer le canvas dans le DOM
let elementA = document.getElementById("bodyContent");
let childA = document.getElementById("mw-content-text");
elementA.insertBefore(canvasA, childA);

//créer un id  au tag canvas avec setAttribute et inserer dans le DOM
document.getElementsByTagName("canvas")[0].setAttribute("id", "myChart3");

//inline data Tableau 1
//créer canvas
let canvas = document.createElement("canvas");
document.body.appendChild(canvas);

//créer element et son enfant pour inserer le canvas dans le DOM
let element = document.getElementById("mw-content-text");
let child = document.getElementById("table1");
element.insertBefore(canvas, child);

//créer un id  au tag canvas avec setAttribute et inserer dans le DOM
document.getElementsByTagName("canvas")[1].setAttribute("id", "myChart1");
//créer une variable qui apelle l'id pour utiliser dans chart.js
let ctx = document.getElementById("myChart1").getContext("2d");

//inline Data Tableau 2
//créer canvas
let canvas1 = document.createElement("canvas");
document.body.appendChild(canvas1);

//créer element et son enfant pour inserer le canvas sdans le DOM
let element1 = document.getElementById("mw-content-text");
let child1 = document.getElementById("table2");
element1.insertBefore(canvas1, child1);

//créer un id  au tag canvas avec setAttribute et inserer dans le DOM
document.getElementsByTagName("canvas")[2].setAttribute("id", "myChart2");
//créer une variable qui apelle l'id pour utiliser dans chart.js
let doc = document.getElementById("myChart2");

//créer un id  au tag canvas avec setAttribute et inserer dans le DOM
document.getElementsByTagName("tbody")[0].setAttribute("id", "myData");

// créer une variable qui fait appel a l'id table1 pour utiliser pour convertir en json
let table = document.getElementById("table1");

//fonction pour convertir en json tableau1
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

//fonction pour supprimer l'index choisi (pas besoin de l'index 0 dans tableau1)
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

// tableau chart.js pour le canvas id = myChart1
const myChart = new Chart(ctx, {
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
// créer une variable qui fait appel a l'id table2 (pour convertir en json) tableau2
let table2 = document.getElementById("table2");

//fonction pour convertir en json tableau2
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

//fonction pour ajouter England & Wales (uk) dans tableau2 avec id table2
function tableAllZero(arr) {
  let data = [];
  for (i = 0; i < arr.length; i++) {
    data[i] = arr[i][0];
  }
  data[7] = "England & Wales (uk)";
  return data;
}
//fonction pour ajouter la data index[1] dans tableau2 avec id table2
function tableAllOne(arr) {
  let data = [];
  for (i = 0; i < arr.length; i++) {
    data[i] = arr[i][1];
  }
  return data;
}
//fonction pour ajouter la data index[2] dans tableau2 avec id table2
function tableAllTwo(arr) {
  let data = [];
  for (i = 0; i < arr.length; i++) {
    data[i] = arr[i][2];
  }
  return data;
}
// tableau chart.js pour le canvas id = myChart2
const myChart2 = new Chart(doc, {
  type: "bar",
  data: {
    labels: tableAllZero(table2),
    datasets: [
      {
        label: "2007-09",
        backgroundColor: randomColor(),
        data: tableAllOne(table2),
      },
      {
        label: "2010-12",
        backgroundColor: randomColor(),
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
//Remote data, in real-time, via ajax
//créer une variable pour l'url
const data_url = "https://canvasjs.com/services/data/datapoints.php";

//créer 2 variable, 1 pour l'axe x et une pour l'axe y
const xxs = [];
const yys = [];

// fonction getData pour  faire appel a l'url avec fetch
async function getData() {
  const response = await fetch(data_url);
  const data = await response.json();
  console.log(data);
  const xs = data.map(function (e) {
    return parseInt(e["0"]);
  });
  console.log(xs);
  for (u = 0; u < 10; u++) {
    xxs.push(xs[u]);
  }
  const ys = data.map(function (e) {
    return parseInt(e["1"]);
  });
  console.log(ys);
  for (u = 0; u < 10; u++) {
    yys.push(ys[u]);
  }
}
console.log(yys);

getData();

// setinterval pour  rafraichir chaque seconde
let timerData1 = setInterval(() => getData(), 1000);

// tableau chart.js pour le canvas id = myChart3
const chart = new Chart(document.getElementById("myChart3"), {
  type: "line",
  data: {
    labels: xxs,
    datasets: [
      {
        data: yys,
        label: "EU",
        borderColor: randomColor(),
        fill: false,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: " crime and criminal justice in the European Union",
    },
  },
});
// fonction addData pour ajouter la data et le set interval
function addData() {
  chart.data.datasets[0].data = yys;
  chart.update();
}
let timerData2 = setInterval(() => addData(), 1000);
//ajax - Chart differente possibilité de faire appel a l'url avec fetch
/* fetch
let url = "https://canvasjs.com/services/data/datapoints.php";

fetch(url)
  .then((res) => res.json())
  .then((out) => {
    console.log("Checkout this JSON! ", out);
  })
  .catch((err) => {
    throw err;
  });
const resultA = data.filter(function (item) {
  return item[1];
});

/ ou

let url = "https://canvasjs.com/services/data/datapoints.php";
async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  console.log(data[1]);
}
getData();
const result = data.filter(function (item) {
  return item[1];
});
*/
