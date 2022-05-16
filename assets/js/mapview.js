const dataset1 = ["MapSPAM", "High-Resolution Global Maps of 21st-Century Forest Cover Change", "M.C. Hansen", "http://earthenginepartners.appspot.com", "INSPIRE Landcover + <br> + INSPIRE Landuse", "EPSG:4326", "1 arcsec", "2000-2019", "Global Forest Change 2000–2018 v1.6", "Landsat 5 + <br> + Landsat 7 ETM+", "P1Y", "May 26, 2021, 11:46 AM (UTC+01:00)"];

        // Klick-Event für Button "data1"
        document.getElementById("data1").onclick = function () {

            $(data_input).html('<tbody style="font-size: small;"><tr><td></i>Name</td><td class="text-end">MapSPAM</td></tr><tr><td></i>Documentation</td><td class="text-end">High-Resolution Global Maps of 21st-Century Forest Cover Change</td></tr><tr><td></i>Contact Point</td><td class="text-end">M.C. Hansen</td></tr><tr><td></i>Website</td><td class="text-end"><a href="http://earthenginepartners.appspot.com">http://earthenginepartners.appspot.com</a></td></tr><tr><td></i>Theme</td><td class="text-end">INSPIRE Landcover<br>INSPIRE Landuse</td></tr><tr><td></i>Coordinate Reference System</td><td class="text-end">EPSG:4326</td></tr><tr><td></i>Spatial Resolution</td><td class="text-end">1 arcsec</td></tr><tr><td></i>Temporal Extent</td><td class="text-end">2000-2019</td></tr><tr><td></i>Parent Dataset</td><td class="text-end">Global Forest Change 2000–2018 v1.6</td></tr><tr><td></i>Derived from</td><td class="text-end">Landsat 5<br>Landsat 7 ETM+<br>Landsat 8 OLI</td></tr><tr><td></i>Temporal Resolution</td><td class="text-end">P1Y</td></tr><tr><td></i>Created</td><td class="text-end">May 26, 2021, 11:46 AM (UTC+01:00)</td></tr><tr><td></i>Definition</td><td class="text-end">Forest loss was defined as a stand-replacement disturbance or the complete removal of tree cover canopy at the Landsat pixel scale.<br>Forest gain was defined as the inverse of loss, or the establishment of tree canopy from a nonforest state.</td></tr></tbody>');
            map1();
            map.removeLayer(mapdata_2);
        }

        // Klick-Event für Button "data2"
        document.getElementById("data2").onclick = function () {

            $(data_input).html('<tbody style="font-size: small;"><tr><td></i>Name</td><td class="text-end">Demand and supply of pollination on the European Union</td></tr><tr><td></i>Documentation</td><td class="text-end">https://doi.org/10.1016/j.ecolind.2013.07.014</td></tr><tr><td></i>Contact Point</td><td class="text-end">Catharina JE Schulp</td></tr><tr><td></i>Website</td><td class="text-end"><a href="http://earthenginepartners.appspot.com">http://earthenginepartners.appspot.com</a></td></tr><tr><td></i>Theme</td><td class="text-end">http://inspire.ec.europa.eu/theme/ad<br>http://inspire.ec.europa.eu/theme/hb<br>http://inspire.ec.europa.eu/theme/lu</td></tr><tr><td></i>Coordinate Reference System</td><td class="text-end">EPSG:4326</td></tr><tr><td></i>Spatial Resolution</td><td class="text-end">1000 m</td></tr><tr><td></i>Temporal Extent</td><td class="text-end">2000-2019</td></tr><tr><td></i>Parent Dataset</td><td class="text-end">Global Forest Change 2000–2018 v1.6</td></tr><tr><td></i>Temporal Resolution</td><td class="text-end">P1Y</td></tr><tr><td></i>Created</td><td class="text-end">January 26, 2021, 11:46 AM (UTC+01:00)<br></td></tr><tr><td></i>Definition</td><td class="text-end">Forest loss was defined as a stand-replacement disturbance or the complete removal of tree cover canopy at the Landsat pixel scale.<br>Forest gain was defined as the inverse of loss, or the establishment of tree canopy from a nonforest state.<br>Forest loss was defined as a stand-replacement disturbance or the complete removal of tree cover canopy at the Landsat pixel scale.</td></tr></tbody>');
            map2();
            map.removeLayer(mapdata_1);
        }

        // Hovering Button "data1"
        document.getElementById("data1").onmouseover = function () {
            var bounds = [[0, -90], [360, 90]];
            rect1 = L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);
            map.fitBounds(bounds);
            //map.removeLayer(rect2)
            $(data_input).html('<tbody style="font-size: small;"><tr><td></i>Name</td><td class="text-end">MapSPAM</td></tr><tr><td></i>Documentation</td><td class="text-end">High-Resolution Global Maps of 21st-Century Forest Cover Change</td></tr><tr><td></i>Contact Point</td><td class="text-end">M.C. Hansen</td></tr><tr><td></i>Website</td><td class="text-end"><a href="http://earthenginepartners.appspot.com">http://earthenginepartners.appspot.com</a></td></tr><tr><td></i>Theme</td><td class="text-end">INSPIRE Landcover<br>INSPIRE Landuse</td></tr><tr><td></i>Coordinate Reference System</td><td class="text-end">EPSG:4326</td></tr><tr><td></i>Spatial Resolution</td><td class="text-end">1 arcsec</td></tr><tr><td></i>Temporal Extent</td><td class="text-end">2000-2019</td></tr><tr><td></i>Parent Dataset</td><td class="text-end">Global Forest Change 2000–2018 v1.6</td></tr><tr><td></i>Derived from</td><td class="text-end">Landsat 5<br>Landsat 7 ETM+<br>Landsat 8 OLI</td></tr><tr><td></i>Temporal Resolution</td><td class="text-end">P1Y</td></tr><tr><td></i>Created</td><td class="text-end">May 26, 2021, 11:46 AM (UTC+01:00)</td></tr><tr><td></i>Definition</td><td class="text-end">Forest loss was defined as a stand-replacement disturbance or the complete removal of tree cover canopy at the Landsat pixel scale.<br>Forest gain was defined as the inverse of loss, or the establishment of tree canopy from a nonforest state.</td></tr></tbody>');
        }

        // Hovering Button "data2"
        document.getElementById("data2").onmouseover = function () {
            var bounds = [[47.3, 6], [55, 15.01]];
            rect2 = L.rectangle(bounds, { color: "#ff7800", weight: 1 }).addTo(map);
            map.fitBounds(bounds);
            //map.removeLayer(rect1)
            $(data_input).html('<tbody style="font-size: small;"><tr><td></i>Name</td><td class="text-end">Demand and supply of pollination on the European Union</td></tr><tr><td></i>Documentation</td><td class="text-end">https://doi.org/10.1016/j.ecolind.2013.07.014</td></tr><tr><td></i>Contact Point</td><td class="text-end">Catharina JE Schulp</td></tr><tr><td></i>Website</td><td class="text-end"><a href="http://earthenginepartners.appspot.com">http://earthenginepartners.appspot.com</a></td></tr><tr><td></i>Theme</td><td class="text-end">http://inspire.ec.europa.eu/theme/ad<br>http://inspire.ec.europa.eu/theme/hb<br>http://inspire.ec.europa.eu/theme/lu</td></tr><tr><td></i>Coordinate Reference System</td><td class="text-end">EPSG:4326</td></tr><tr><td></i>Spatial Resolution</td><td class="text-end">1000 m</td></tr><tr><td></i>Temporal Extent</td><td class="text-end">2000-2019</td></tr><tr><td></i>Parent Dataset</td><td class="text-end">Global Forest Change 2000–2018 v1.6</td></tr><tr><td></i>Temporal Resolution</td><td class="text-end">P1Y</td></tr><tr><td></i>Created</td><td class="text-end">January 26, 2021, 11:46 AM (UTC+01:00)<br></td></tr><tr><td></i>Definition</td><td class="text-end">Forest loss was defined as a stand-replacement disturbance or the complete removal of tree cover canopy at the Landsat pixel scale.<br>Forest gain was defined as the inverse of loss, or the establishment of tree canopy from a nonforest state.<br>Forest loss was defined as a stand-replacement disturbance or the complete removal of tree cover canopy at the Landsat pixel scale.</td></tr></tbody>');
        }

        // dehovering Button "data1"
        document.getElementById("data1").onmouseout = function () {
            map.removeLayer(rect1);
        }

        // dehovering Button "data2"
        document.getElementById("data2").onmouseout = function () {
            map.removeLayer(rect2);
        }