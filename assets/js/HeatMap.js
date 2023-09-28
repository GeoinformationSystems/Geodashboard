var slider1 = document.getElementById("range-a");
var slider2 = document.getElementById("range-b");
var slidertrack = document.getElementById("slider-track");
var display1 = document.getElementById("range1");
var display2 = document.getElementById("range2");

var xValues = []; //will get Quality Metrix labels

var yValues = []; //will get Dataset labels

var zValues = []; //will get Dataset values



var zA = []; //Dataset array for Dataset A
var zAfin = []
var zAom = 41;
var zAcom = 64;
var zAqaa = 5;
var zAtcc = 25;

//erst alle in ein Array packen, auf Slider Eingabe prüfen (for schleife), output in neues Array

var zB = []; //Dataset array for Dataset B
var zBfin = []
var zBom = 68;
var zBcom = 51;
var zBqaa = 71;
var zBtcc = 100;

var zC = []; //Dataset array for Dataset C
var zCfin = []
var zCom = 92;
var zCcom = 7;
var zCqaa = 45;
var zCtcc = 10;

var color11 = 'rgb(201,70,28)';
var color12 = 'rgb(232,107,33)';
var color13 = 'rgb(247,187,50)';
var color14 = 'rgb(107,163,22)';

var color21 = 'rgb(255,255,204)';
var color22 = 'rgb(199,233,180)';
var color23 = 'rgb(65,182,196)';
var color24 = 'rgb(29,145,192)';

var color31 = 'rgb(247,247,247)';
var color32 = 'rgb(189,189,189)';
var color33 = 'rgb(150,150,150)';
var color34 = 'rgb(115,115,115)';

// predefine color gradients to choose from
var colorscaleValue = [

	[0, 'rgb(221,221,221)'],

	[0.4, 'rgb(221,221,221)'],

	[0.7, 'rgb(221,221,221)'],

	[1, 'rgb(221,221,221)']

];
var colorscaleValue1 = [


	[0, color11],

	[0.4, color12],

	[0.7, color13],

	[1, color14]

];

var colorscaleValue2 = [

	[0, 'rgb(255,255,204)'],

	[0.4, 'rgb(199,233,180)'],

	[0.7, 'rgb(65,182,196)'],

	[1, 'rgb(29,145,192)']

];

var colorscaleValue3 = [

	[0, 'rgb(247,247,247)'],

	[0.4, 'rgb(189,189,189)'],

	[0.7, 'rgb(150,150,150)'],

	[1, 'rgb(115,115,115)']

];

var colorselect = colorscaleValue;

function getRGB(step) {

	var rgb = [0, 0, 0];

	var colorArray1 = colorsplit(colorselect[0][1].substr(4).slice(0, -1));
	var colorArray2 = colorsplit(colorselect[1][1].substr(4).slice(0, -1));
	var colorArray3 = colorsplit(colorselect[2][1].substr(4).slice(0, -1));
	var colorArray4 = colorsplit(colorselect[3][1].substr(4).slice(0, -1));

	var percent = 0;

	if (step == 0) {
		rgb = colorArray1;
	}
	else if (step > 0 && step < 40) {
		percent = (step * 100 / 39) / 100;

		for (var i = 0; i < 3; i++) {
			rgb[i] = Math.floor(colorArray1[i] * (1 - percent) + colorArray2[i] * percent);
		}
	}
	else if (step == 40) {
		rgb = colorArray2;
	}

	else if (step > 40 && step < 70) {
		percent = ((step - 41) * 100 / 29) / 100;

		for (var i = 0; i < 3; i++) {
			rgb[i] = Math.floor(colorArray2[i] * (1 - percent) + colorArray3[i] * percent);
		}
	}
	else if (step == 70) {
		rgb = colorArray3;
	}
	else if (step > 70 && step < 100) {
		percent = ((step - 71) * 100 / 29) / 100;

		for (var i = 0; i < 3; i++) {
			rgb[i] = Math.floor(colorArray3[i] * (1 - percent) + colorArray4[i] * percent);
		}

	}
	else if (step == 100) {
		rgb = colorArray4;
	}

	return rgb;
}

function colorsplit(colorRaw)//split rgb for calculation
{

	var colorR = colorRaw.substring(0, colorRaw.indexOf(','));
	var colorX = colorRaw.substring(colorRaw.indexOf(',') + 1);
	var colorG = colorX.substring(0, colorX.indexOf(','));
	var colorB = colorX.substring(colorX.indexOf(',') + 1);

	var result = [];
	result.push(parseInt(colorR), parseInt(colorG), parseInt(colorB));
	return result;
}

function colorinterpol() {

	var mapping = parseInt(slider2.value) - parseInt(slider1.value);
	var step0 = slider1.value;
	var step1 = Math.round((40 * mapping / 100) + parseInt(slider1.value));
	var step2 = Math.round((70 * mapping / 100) + parseInt(slider1.value));
	var step3 = slider2.value;

	var rgb1 = getRGB(step0);
	var rgb2 = getRGB(step1);
	var rgb3 = getRGB(step2);
	var rgb4 = getRGB(step3);

	colora = 'rgb(' + rgb1[0] + ',' + rgb1[1] + ',' + rgb1[2] + ')';
	colorb = 'rgb(' + rgb2[0] + ',' + rgb2[1] + ',' + rgb2[2] + ')';
	colorc = 'rgb(' + rgb3[0] + ',' + rgb3[1] + ',' + rgb3[2] + ')';
	colord = 'rgb(' + rgb4[0] + ',' + rgb4[1] + ',' + rgb4[2] + ')';

	var colorscaleValuenew = [


		[0, colora],

		[0.4, colorb],

		[0.7, colorc],

		[1, colord]

	];
	map.colorscale = colorscaleValuenew;

}


function range1() {
	if (parseInt(slider2.value) - parseInt(slider1.value) <= 0) {
		slider1.value = parseInt(slider2.value);

	}
}
function range2() {
	if (parseInt(slider2.value) - parseInt(slider1.value) <= 0) {
		slider2.value = parseInt(slider1.value);

	}
}

//seperate values from the data variable for better access
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
	autosize: false,
	width: 650,
	height: 200,

	margin: {
		t: 20,
		b: 20
	
	},

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

//add a checked-effect to the gradient buttons by changing css style
function colorchange(b) {

	if (b.className == "btn-hm btn-1") {
		slidertrack.style.backgroundImage = 'linear-gradient(to right, #c9461c 0%, #e86b21 30%, #f7bb32 60%, #6ba316 100%) ';

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

		} colorselect = colorscaleValue1;
	}
	if (b.className == "btn-hm btn-2") {
		slidertrack.style.backgroundImage = 'linear-gradient(to right, #ffffcc 0%, #c7e9b4 30%, #41b6c4 60%, #1d91c0 100%) ';

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

		} colorselect = colorscaleValue2;
	}
	if (b.className == "btn-hm btn-3") {
		slidertrack.style.backgroundImage = 'linear-gradient(to right, #f7f7f7 0%, #bdbdbd 30%, #969696 60%, #737373 100%) ';

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

		} colorselect = colorscaleValue3;
	}

	Plotly.newPlot('myDiv', data, layout);
}


function build() {
	layout.annotations = [];

	xValues = [];

	yValues = [];

	zValues = [];

	display1.textContent = slider1.value;
	display2.textContent = slider2.value;

	var zom1 = [zAom, zBom, zCom];
	var zcom1 = [zAcom, zBcom, zCcom];
	var zqaa1 = [zAqaa, zBqaa, zCqaa];
	var ztcc1 = [zAtcc, zBtcc, zCtcc];
	var zom2 = [];
	var zcom2 = [];
	var zqaa2 = [];
	var ztcc2 = [];


	for (var i = 0; i < zom1.length; i++) {

		if (zom1[i] >= slider1.value && zom1[i] <= slider2.value) {
			zom2.push(zom1[i]);


		} else {
			zom2.push(null);
		}
	}

	for (var j = 0; j < zcom1.length; j++) {

		if (zcom1[j] >= slider1.value && zcom1[j] <= slider2.value) {
			zcom2.push(zcom1[j]);


		} else {
			zcom2.push(null);
		}
	}

	for (var k = 0; k < zqaa1.length; k++) {

		if (zqaa1[k] >= slider1.value && zqaa1[k] <= slider2.value) {
			zqaa2.push(zqaa1[k]);


		} else {
			zqaa2.push(null);
		}
	}

	for (var l = 0; l < ztcc1.length; l++) {

		if (ztcc1[l] >= slider1.value && ztcc1[l] <= slider2.value) {
			ztcc2.push(ztcc1[l]);


		} else {
			ztcc2.push(null);
		}
	}

	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

	if (document.getElementById("om").checked) {

		zA.splice(0, 1, zom2[0]);
		zB.splice(0, 1, zom2[1]);
		zC.splice(0, 1, zom2[2]);


		xValues[0] = 'Omission as rate';

	}
	if (document.getElementById("om").checked == false) {

		zA.splice(0, 1, null);
		zB.splice(0, 1, null);
		zC.splice(0, 1, null);

	}

	if (document.getElementById("com").checked) {

		zA.splice(1, 1, zcom2[0]);
		zB.splice(1, 1, zcom2[1]);
		zC.splice(1, 1, zcom2[2]);


		xValues[1] = 'QAA as R²';

	}
	if (document.getElementById("com").checked == false) {

		zA.splice(1, 1, null);
		zB.splice(1, 1, null);
		zC.splice(1, 1, null);

	}

	if (document.getElementById("qaa").checked) {


		zA.splice(2, 1, zqaa2[0]);
		zB.splice(2, 1, zqaa2[1]);
		zC.splice(2, 1, zqaa2[2]);

		xValues[2] = 'QAA as RMSE';

	}

	if (document.getElementById("qaa").checked == false) {

		zA.splice(2, 1, null);
		zB.splice(2, 1, null);
		zC.splice(2, 1, null);
	}

	if (document.getElementById("tcc").checked) {

		zA.splice(3, 1, ztcc2[0]);
		zB.splice(3, 1, ztcc2[1]);
		zC.splice(3, 1, ztcc2[2]);

		xValues[3] = 'Spatial Resolution';

	}

	if (document.getElementById("tcc").checked == false) {


		zA.splice(3, 1, null);
		zB.splice(3, 1, null);
		zC.splice(3, 1, null);

	}

	//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

	if (document.getElementById("dA").checked && zValues.includes(zA) == false) {


		zValues.push(zA);
		yValues.push('GPW v4.0');

	}
	if (document.getElementById("dA").checked == false && zValues.includes(zA) == true) {

		var del5 = yValues.indexOf('GPW v4.0');
		yValues.splice(del5, 1);

		var del6 = zValues.indexOf(zA);
		zValues.splice(del6, 1);

	}
	if (document.getElementById("dB").checked && zValues.includes(zB) == false) {


		zValues.push(zB);
		yValues.push('WDPA v1.6');

	}
	if (document.getElementById("dB").checked == false && zValues.includes(zB) == true) {

		var del7 = yValues.indexOf('WDPA v1.6');
		yValues.splice(del7, 1);

		var del2 = zValues.indexOf(zB);
		zValues.splice(del2, 1);

	}
	if (document.getElementById("dC").checked && zValues.includes(zC) == false) {


		zValues.push(zC);
		yValues.push('GAEZ v3.0');

	}
	if (document.getElementById("dC").checked == false && zValues.includes(zC) == true) {

		var del8 = yValues.indexOf('GAEZ v3.0');
		yValues.splice(del8, 1);

		var del9 = zValues.indexOf(zC);
		zValues.splice(del9, 1);

	}

	if (document.getElementById("om").checked == false && document.getElementById("com").checked == false && document.getElementById("qaa").checked == false && document.getElementById("tcc").checked == false) {

		xValues = [];
		yValues = [];
		zValues = [];

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
	colorinterpol();

	map.x = xValues;
	map.y = yValues;
	map.z = zValues;

	data = [map];

	Plotly.newPlot('myDiv', data, layout,{ displayModeBar: false });

}
