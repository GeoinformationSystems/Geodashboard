var these = [];
class P5Node {

	constructor(id, x, y, r, label, description, node_classes, outgoing_edges, ingoing_edges) {
		this.x = x;
		this.y = y;
		this.id = id;
		this.label = label;
		this.description = description;
		// this.format	= format;
		this.r = r;
		this.classes = node_classes;
		this.color = 'rgb(180,180,180)';
		this.text_color = 0;
		this.target_x = null;
		this.target_y = null;
		this.clicked = false;
		this.selected = false;
		this.begin_hover;
		this.hovered_prolonged = false;
		this.hovered = false;
	}

	set_x(x) { this.x = x }
	set_y(y) { this.y = y }
	set_r(r) { this.r = r }
	get_x() { return this.x }
	get_y() { return this.y }
	set_target_x(x) { this.target_x = x }
	set_target_y(y) { this.target_y = y }
	get_target_x() { return this.target_x }
	get_target_y() { return this.target_y }
	get_id() { return this.id }
	get_classes() { return this.classes }
	get_ingoing_edges() { return this.ingoing_edges }
	get_outgoing_edges() { return this.outgoing_edges }


	focussed() {
		let focussed = false;
		if (this.hovered) focussed = true;
		return focussed;
	}

	double_clicked() {
		const distance = dist(mouseX, mouseY, this.x, this.y);
		if (distance < this.r) {
			return this.id;
		}
		else {
			return null
		}
	}

	strg_plus_left_clicked() {
		const distance = dist(mouseX, mouseY, this.x, this.y);
		if (distance < this.r) {
			this.clicked = false;
			window.open(this.id);
		}
	}

	left_clicked() {
		const distance = dist(mouseX, mouseY, this.x, this.y);
		if (distance < this.r) {
			this.clicked = true
			// this.hovered_prolonged = true;
		}
		return this.clicked;

	}

	left_selected() {
		const distance = dist(mouseX, mouseY, this.x, this.y);

		if (distance < this.r + 5) {

			if (this.selected == false) {
				this.selected = true

				these.push(this);

			}
			else if (this.selected == true) {
				this.selected = false;

				these.pop();
			}

		}


		console.log(these);
		return this.selected;
	}

	nodeClicked() {
        const distance = dist(mouseX, mouseY, this.x, this.y);
        if (distance < this.r) {
            // Call the populateTable function with the node data
            populateTable(this.id, this.description);
        }
    }


	released() {
		this.clicked = false
	}

	right_clicked() {
		const distance = dist(mouseX, mouseY, this.x, this.y);
		if (distance < this.r) {
			return this.id;
		}
		else {
			return null
		}
	}

	dragged() {
		if (this.clicked) {
			this.x = mouseX;
			this.target_x = null;
			this.y = mouseY;
			this.target_y = null;
			return true;
		}
		else {
			return false;
		}
	}

	hover() {
		const distance = dist(mouseX, mouseY, this.x, this.y);
		if (distance < this.r) {

			if (!(this.hovered)) {
				this.begin_hover = millis();
			}
			this.hovered = true;
			// console.log(millis() - this.begin_hover)
			if ((millis() - this.begin_hover) > 500) {
				this.hovered_prolonged = true;
			}
		}
		else {
			this.hovered = false;
			this.hovered_prolonged = false;
		}
	}

	wrap_text(str, maxWidth) {
		// hacked with logics from P5.js' function text(str, x, y, [x2], [y2])
		let line;
		let lines;
		let words;
		let testLine;
		let testWidth;
		// Replaces tabs with double-spaces and splits string on any line
		// breaks present in the original string
		str = str.replace(/(\t)/g, '  ');
		lines = str.split('\n');

		// Render lines of text according to settings of textWrap
		// Splits lines at spaces, for loop adds one word + space
		// at a time and tests length with next word added

		let nlines = [];
		for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
			line = '';
			words = lines[lineIndex].split(' ');
			for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {
				testLine = ''.concat(line + words[wordIndex]) + ' ';
				testWidth = textWidth(testLine);
				if (testWidth > maxWidth && line.length > 0) {
					nlines.push(line);
					line = ''.concat(words[wordIndex]) + ' ';
				} else {
					line = testLine;
				}
			}
			nlines.push(line);

		}
		return nlines;
	}

	populateTable() {
        const tableBody = document.getElementById('table-body');
        const newRow = tableBody.insertRow();
        
        // Insert cell for ID
        const idCell = newRow.insertCell(0);
        idCell.textContent = "this.id";
        
        // Insert cell for Description
        const descriptionCell = newRow.insertCell(1);
        descriptionCell.textContent = "this.description";
    }


	show(color, font, text_color) {
		let damp = 0.05
		if (this.target_x) {
			this.x += damp * (this.target_x - this.x);
			if (Math.abs(this.x - this.target_x) <= 0.1) {
				this.target_x = null;
			}
		}
		if (this.target_y) {
			this.y += damp * (this.target_y - this.y);
			if (Math.abs(this.y - this.target_y) <= 0.1) {
				this.target_y = null;
			}
		}

		push();
		translate(this.x, this.y);
		if (color) this.color = color

		if (this.hovered) {
			let corona_hsl = rgbToHsl(red(this.color), green(this.color), blue(this.color))
			let lightness = corona_hsl[2] - 0.2;
			if (lightness < 0) lightness = 0;
			let corona_color = hslToRgb(corona_hsl[0], corona_hsl[1], lightness)
			corona_color = 'rgb(' + floor(corona_color[0]) + ',' + floor(corona_color[1]) + ',' + floor(corona_color[2]) + ')'
			noStroke()
			fill(corona_color)
			circle(0, 0, 2.1 * this.r);
		}


		fill(this.color)
		noStroke()
		circle(0, 0, 2 * this.r);

		textFont(font);
		if (text_color) this.text_color = text_color
		const text_size = 14;
		textSize(text_size);
		const line_height = textLeading()

		let label_width = 300;
		const label_lines = this.wrap_text(this.label, label_width);
		label_width = 0;
		for (let line of label_lines) {
			if (textWidth(line) > label_width) label_width = textWidth(line);

		}
		const label_height = line_height * label_lines.length;


		fill(('rgba(255,255,255,0.6)'));
		noStroke()
		rect(-label_width / 2 - 8, -label_height / 2, label_width + 8, label_height);
		fill(this.text_color)
		textAlign(CENTER, TOP);
		text(this.label, -label_width / 2, -label_height / 2, label_width, label_height);



		if (this.selected && these.length > 1) {
			let lastthis = these[these.length - 2];

			stroke('rgba(0,0,0,1)');
			strokeWeight(2);
			fill('rgba(255,255,255,1)');
			circle(0, 0, 2.6 * lastthis.r);
			noStroke();
			fill(this.color);
			circle(0, 0, 2 * lastthis.r);

						
			for (let line of label_lines) {
				if (textWidth(line) > label_width) label_width = textWidth(line);

			}
			fill(('rgba(255,255,255,0.6)'));
			rect(-label_width / 2 - 8, -label_height / 2, label_width + 8, label_height);
			fill(this.text_color)
			textAlign(CENTER, TOP);
			text(this.label, -label_width / 2, -label_height / 2, label_width, label_height);
		}

		else if (this.selected) {

			stroke('rgba(0,0,0,1)');
			strokeWeight(2);
			fill('rgba(255,255,255,1)');
			circle(0, 0, 2.6 * this.r);
			noStroke();
			fill(this.color);
			circle(0, 0, 2 * this.r);

			fill('rgba(0,0,0,1)');
			circle(0, 0, 1 * this.r);


			for (let line of label_lines) {
				if (textWidth(line) > label_width) label_width = textWidth(line);

			}
			fill(('rgba(255,255,255,0.6)'));
			rect(-label_width / 2 - 8, -label_height / 2, label_width + 8, label_height);
			fill(this.text_color)
			textAlign(CENTER, TOP);
			text(this.label, -label_width / 2, -label_height / 2, label_width, label_height);
		}

		if (this.hovered_prolonged) {
			if (this.description) {
				const desc_width = 500;
				const desc_lines = this.wrap_text(this.description, desc_width);
				const desc_height = line_height * desc_lines.length;

				fill('rgba(130,130,130,0.9)');
				rect(-desc_width / 2 - 4, label_height / 2 + 3, desc_width + 4, desc_height + 4);
				fill(255);
				noStroke();
				textAlign(CENTER, TOP);
				text(this.description, -desc_width / 2, label_height / 2 + 3, desc_width, desc_height);
			}
		}
		pop();
	}
}