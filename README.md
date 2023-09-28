# Geo-Dashboard Prototype

This geodashboard prototype combines the components (1) Provenance, (2) Spatial Data Quality as well as (3) General Metadata in one user interface. It acts as a user interface component supporting the evaluation of datasets, which are managed in a metadata catalog, by utilizing dataset provenance and quality information. The required information is retrieved via SPARQL request against a triplestore.

_Software is still under development. During this phase, there might be issues related to the interaction with datasets while some aspects of node interaction may be affected._

## Structure

The Geodashboard Prototype is based on Javascript,  HTML and CSS. The main application can be found in the file _index.html_. The dashboard uses the RDFViz visualization as base for the Provenance Graph (https://github.com/rue-a/rdf_viz). PROV-Entities are indicated with red color, Activities with blue.
Different graphs from Plotly.js are used for displaying data quality measures in different charts. The maps used are provided by leaflet.js.

## Used Libraries

- Bootstrap: https://getbootstrap.com/
	- MIT License
- JQuery: https://jquery.com/
	- MIT License
- Plotly.js (v2.14.0): https://plotly.com/javascript/
	- MIT License
- Bootstrap Simple Admin Template: https://github.com/nairbanul/bootstrap-simple-admin-template
	- Apache license 2.0
- RDFViz: https://github.com/rue-a/rdf_viz
	- GNU General Public License v3.0
- Leaflet.js: https://leafletjs.com/
	-  BSD 2-Clause "Simplified" License

## Contact
Heiko Figgemeier (heiko.figgemeier@tu-dresden.de)