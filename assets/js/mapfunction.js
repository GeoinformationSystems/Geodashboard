var legend = L.control({ position: 'bottomright' });
var info = L.control();
var mapdata = "";
var germany_data =L.geoJson();
function map1() {
	legend.remove(map);
	info.remove(map);
	germany_data.remove(map);
	// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder

	mapdata = $.getJSON("assets/data/germany.geojson", function(data) {
		function onEachFeature(feature, layer) {
			

			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight
			});
		}

		// L.geoJson function is used to parse geojson file and load on to map
		germany_data = L.geoJson(data, { style: style, onEachFeature: onEachFeature }).addTo(map);
	});

	

	info.onAdd = function(map) {
		this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		this.update();
		return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info.update = function(props) {
		this._div.innerHTML = '<h4>Thematic classification correctness</h4>' + (props ?
			'<b>' + props.NAME_1 + '</b><br />' + props.quality + ' %'
			: 'Hover over polygon');
	};

	info.addTo(map);



	legend.onAdd = function(map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 70, 80, 85, 90, 94, 97],
			labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
				grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		}

		return div;
	};
	

	legend.addTo(map);
}

function map2() {
	legend.remove(map);
	info.remove(map);
	germany_data.remove(map);
	// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
	mapdata = $.getJSON("assets/data/germany.geojson", function(data) {
		function onEachFeature(feature, layer) {
			

			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight
			});
		}

		// L.geoJson function is used to parse geojson file and load on to map
		germany_data = L.geoJson(data, { style: style2, onEachFeature: onEachFeature }).addTo(map);
	});

	

	info.onAdd = function(map) {
		this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		this.update();
		return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	info.update = function(props) {
		this._div.innerHTML = '<h4>Quantitative attribute accuracy</h4>' + (props ?
			'<b>' + props.NAME_1 + '</b><br />' + props.quality + ' %'
			: 'Hover over polygon');
	}; info.addTo(map);



	legend.onAdd = function(map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 70, 80, 85, 90, 94, 97],
			labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor2(grades[i] + 1) + '"></i> ' +
				grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		}



		return div;
	}; legend.addTo(map);
}

function map3() {
	legend.remove(map);
	info.remove(map);
	germany_data.remove(map);
	// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
	mapdata = $.getJSON("assets/data/asia.geojson", function(data) {
		function onEachFeature(feature, layer) {
			

			layer.on({
				mouseover: highlightFeature,
				mouseout: resetHighlight
			});
		}

		// L.geoJson function is used to parse geojson file and load on to map
		germany_data = L.geoJson(data, { style: style, onEachFeature: onEachFeature }).addTo(map);
	});

	

	info.onAdd = function(map) {
		this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
		this.update();
		return this._div;
	};

	// method that we will use to update the control based on feature properties passed
	/*info.update = function (props) {
		this._div.innerHTML = '<h4>Thematic classification correctness</h4>' + (props ?
			'<b>' + props.NAME_1 + '</b><br />' + props.quality + ' %'
			: 'Hover over polygon');
	};

	info.addTo(map);*/



	legend.onAdd = function(map) {

		var div = L.DomUtil.create('div', 'info legend'),
			grades = [0, 70, 80, 85, 90, 94, 97],
			labels = [];

		// loop through our density intervals and generate a label with a colored square for each interval
		for (var i = 0; i < grades.length; i++) {
			div.innerHTML +=
				'<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
				grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
		}

		return div;
	}; legend.addTo(map);
}

function getColor(d) {
	return d > 97 ? '#50c878' :
		d > 94 ? '#9bcf6d' :
			d > 90 ? '#d2d373' :
				d > 80 ? '#ffd789' :
					d > 70 ? '#faa968' :
						d > 50 ? '#f07859' :
							'#de425b';
}

function style(feature) {
	return {
		fillColor: getColor(feature.properties.quality),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.8
	};
}

function highlightFeature(e) {
	var layer = e.target;

	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});

	if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
		layer.bringToFront();
	}
	info.update(layer.feature.properties);
}

function resetHighlight(e) {
	germany_data.resetStyle(e.target);
	info.update();
}

//_______________________________

function getColor2(d) {
	return d > 97 ? 'green' :
		d > 94 ? 'red' :
			d > 90 ? 'black' :
				d > 80 ? '#ffd789' :
					d > 70 ? '#faa968' :
						d > 50 ? '#f07859' :
							'#de425b';
}

function style2(feature) {
	return {
		fillColor: getColor2(feature.properties.quality),
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.8
	};
}
