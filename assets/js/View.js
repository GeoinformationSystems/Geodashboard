class View {
    constructor(model, width, height, horizontal_margin, vertical_margin, node_size) {
        this.model = model;
        this.width = width;
        this.height = height;
        this.horizontal_margin = horizontal_margin;
        this.vertical_margin = vertical_margin;
        this.p5nodes = {};
        this.p5edges = [];
        this.zoom_level = 1;
        this.r = node_size;
        this.mode = 'horizontal'
    }

    translate_nodes(x, y, coords_old) {

        let dist_x = mouseX - x;
        let dist_y = mouseY - y;



        for (let p5node of Object.values(this.p5nodes)) {

            p5node.set_x(coords_old[p5node.get_id()].x + dist_x);
            p5node.target_x = null;
            p5node.set_y(coords_old[p5node.get_id()].y + dist_y);
            p5node.target_y = null;
        }
    }

    zoom_in() {
        let scale_factor = 1.1;
        if (this.zoom_level < 2) this.zoom_level += 0.1

        for (let p5node of Object.values(this.p5nodes)) {
            let dist_x = mouseX - p5node.get_x();
            dist_x *= scale_factor;
            let x_new = mouseX - dist_x;
            p5node.set_x(x_new);
            p5node.target_x = null;

            let dist_y = mouseY - p5node.get_y();
            dist_y *= scale_factor;
            let y_new = mouseY - dist_y;
            p5node.set_y(y_new);
            p5node.target_y = null;

            p5node.set_r(this.r * this.zoom_level)
        }
    }

    zoom_out() {
        let scale_factor = 0.9
        if (this.zoom_level > 0) this.zoom_level -= 0.1

        for (let p5node of Object.values(this.p5nodes)) {
            let dist_x = mouseX - p5node.get_x();
            dist_x *= scale_factor;
            let x_new = mouseX - dist_x;
            p5node.set_x(x_new);
            p5node.target_x = null;

            let dist_y = mouseY - p5node.get_y();
            dist_y *= scale_factor;
            let y_new = mouseY - dist_y;
            p5node.set_y(y_new);
            p5node.target_y = null;

            p5node.set_r(this.r * this.zoom_level)
        }
    }


    get_nodes() {
        return Object.values(this.p5nodes)
    }


    update_nodes(meta, layout) {
        this.zoom_level = 1
        for (let id of Object.keys(meta)) {
            let coords = this.fit(layout[id].x, layout[id].y)
            if (Object.keys(this.p5nodes).includes(id)) {
                const p5node = this.p5nodes[id];
                p5node.set_target_x(coords[0]);
                p5node.set_target_y(coords[1]);
                p5node.set_r(this.r * this.zoom_level)
            }
            else {
                this.p5nodes[id] = (new P5Node(
                    id,
                    coords[0],
                    coords[1],
                    this.r * this.zoom_level,
                    meta[id].label,
                    meta[id].description,
                    meta[id].class
                ));
            }
        }
    }

    remove_node(node_id) {
        delete this.p5nodes[node_id];
    }

    update_edges(edges) {
        for (let i = this.p5edges.length - 1; i >= 0; i--) {
            delete this.p5edges[i];
        }
        this.p5edges = []
        for (let edge of edges) {
            this.p5edges.push(new P5ArrowConnector(this.p5nodes[edge.from], this.p5nodes[edge.to], edge.label))
        }
    }

    fit(x, y) {
        let new_x;
        let new_y;

        if (this.mode == 'horizontal') {
            new_x = y * (this.width - 2 * this.horizontal_margin) + this.horizontal_margin;
            new_y = x * (this.height - 2 * this.vertical_margin) + this.vertical_margin;
        }
        else {
            new_x = x * (this.width - 2 * this.horizontal_margin) + this.horizontal_margin;
            new_y = y * (this.height - 2 * this.vertical_margin) + this.vertical_margin;

        }
        return [new_x, new_y]
    }



    switch_mode() {
        if (this.mode == 'horizontal') this.mode = 'vertical';
        else this.mode = 'horizontal';
    }


    update_data(exclude_node_id = false) {
        let exclude_node = null;
        if (exclude_node_id) {
            exclude_node = this.p5nodes[exclude_node_id]
        }

        this.update_nodes(this.model.get_meta(), this.model.get_layout())

        if (exclude_node_id) {
            this.p5nodes[exclude_node_id] = exclude_node;
        }
        this.update_edges(this.model.get_edges())

    }



    update_canvas() {
        // this.adjust_to_properties()

        for (let p5edge of this.p5edges) {
            p5edge.show()
        }
        for (let p5node of Object.values(this.p5nodes)) {
            let node_color = null;
            if (p5node.class.includes("http://www.w3.org/ns/prov#Entity")) node_color = "lightcoral"
            if (p5node.class.includes("http://www.w3.org/ns/prov#Activity")) node_color = "skyblue"
            p5node.show(node_color)
        }

    }
}