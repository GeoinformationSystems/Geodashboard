var xValues = ['Omission', 'Comission', 'Quant. attr. accuracy', 'Them. class. correctness'];

var yValues = [];

var zValues = [];

var z5 = [7, 78, 54, 99];
var z6 = [11, 51, 70, 36];
var z7 = [92, 5, 45, 78];

var colorscaleValue = [

  [0, '#dddddd'],

  [0.4, '#dddddd'],

  [0.7, '#dddddd'],

  [1, '#dddddd']

];
var colorscaleValue1 = [


  [0, '#c9461c'],

  [0.4, '#e86b21'],

  [0.7, '#f7bb32'],

  [1, '#6ba316']

];

var colorscaleValue2 = [

  [0, '#ffffcc'],

  [0.4, '#c7e9b4'],

  [0.7, '#41b6c4'],

  [1, '#1d91c0']

];

var colorscaleValue3 = [

  [0, '#f7f7f7'],

  [0.4, '#bdbdbd'],

  [0.7, '#969696'],

  [1, '#737373']

];

var map = {

  x: xValues,

  y: yValues,

  z: zValues,

  type: 'heatmap',

  colorscale: colorscaleValue,

  showscale: true

};
var data = [map];

var layout = {

  annotations: [],

  xaxis: {

    ticks: '',

    side: 'buttom',

  },
  yaxis: {

    ticks: '',

    ticksuffix: ' ',

  }

};
var checked = '';

function colorchange(b) {

  if (b.className == "btn-hm btn-1") {
    if (checked.style != undefined) {
      checked.style.background = "";
      checked.style.boxShadow = "0px 1px 2px ";
      checked = "";
      map.colorscale = colorscaleValue1;
      b.style.boxShadow = "-1px -1px 2px ";
      b.style.background = "#dddddd";
      checked = b;
    } else {
      map.colorscale = colorscaleValue1;
      b.style.boxShadow = "-1px -1px 2px ";
      b.style.background = "#dddddd";
      checked = b;
    }
  }
  if (b.className == "btn-hm btn-2") {
    if (checked.style != undefined) {
      checked.style.background = "";
      checked.style.boxShadow = "0px 1px 2px ";
      checked = "";
      map.colorscale = colorscaleValue2;
      b.style.boxShadow = "-1px -1px 2px ";
      b.style.background = "#dddddd";
      checked = b;
    } else {
      map.colorscale = colorscaleValue2;
      b.style.boxShadow = "-1px -1px 2px ";
      b.style.background = "#dddddd";
      checked = b;
    }
  }
  if (b.className == "btn-hm btn-3") {
    if (checked.style != undefined) {
      checked.style.background = "";
      checked.style.boxShadow = "0px 1px 2px ";
      checked = "";
      map.colorscale = colorscaleValue3;
      b.style.boxShadow = "-1px -1px 2px ";
      b.style.background = "#dddddd";
      checked = b;
    } else {
      map.colorscale = colorscaleValue3;
      b.style.boxShadow = "-1px -1px 2px ";
      b.style.background = "#dddddd";
      checked = b;
    }
  }
  Plotly.newPlot('myDiv', data, layout);
}

function choose(e) {

  if (document.getElementById("l5").checked && zValues.includes(z5) == false) {

    layout.annotations = [];
    yValues.push('Landsat 5');
    zValues.push(z5);

  } else if (document.getElementById("l5").checked == false && zValues.includes(z5) == true) {
    layout.annotations = [];
    var del1 = yValues.indexOf('Landsat 5');
    var del2 = zValues.indexOf(z5);
    yValues.splice(del1, 1);
    zValues.splice(del2, 1);

  } else if (document.getElementById("l6").checked && zValues.includes(z6) == false) {

    layout.annotations = [];
    yValues.push('Landsat 6');
    zValues.push(z6);

  } else if (document.getElementById("l6").checked == false && zValues.includes(z6) == true) {

    layout.annotations = [];
    var del1 = yValues.indexOf('Landsat 6');
    var del2 = zValues.indexOf(z6);
    yValues.splice(del1, 1);
    zValues.splice(del2, 1);

  } else if (document.getElementById("l7").checked && zValues.includes(z7) == false) {

    layout.annotations = [];
    yValues.push('Landsat 7');
    zValues.push(z7);

  } else if (document.getElementById("l7").checked == false && zValues.includes(z7) == true) {

    layout.annotations = [];
    var del1 = yValues.indexOf('Landsat 7');
    var del2 = zValues.indexOf(z7);
    yValues.splice(del1, 1);
    zValues.splice(del2, 1);

  }

  for (var i = 0; i < yValues.length; i++) {

    for (var j = 0; j < xValues.length; j++) {

      var result = {

        x: xValues[j],

        y: yValues[i],

        text: zValues[i][j],

        showarrow: false,

        font: {

          color: 'black'

        }

      };

      if (result.text != null) {
        result.text = zValues[i][j];
        layout.annotations.push(result);

      }
    }
  }
  Plotly.newPlot('myDiv', data, layout);
}
