class P5ArrowConnector {
  constructor(nodeTo, nodeFrom, label) {
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo
    this.label = label
  }



  show(color, font) {

    angleMode(DEGREES)
    let a = abs(this.nodeTo.get_y() - this.nodeFrom.get_y());
    let b = abs(this.nodeTo.get_x() - this.nodeFrom.get_x());
    let phi = atan(a / b);
    if (this.nodeFrom.get_y() < this.nodeTo.get_y() && this.nodeFrom.get_x() > this.nodeTo.get_x()) {
      phi = 90 + 90 - atan(a / b);
    }
    if (this.nodeFrom.get_y() > this.nodeTo.get_y() && this.nodeFrom.get_x() > this.nodeTo.get_x()) {
      phi = 90 + 90 + atan(a / b);
    }
    if (this.nodeFrom.get_y() > this.nodeTo.get_y() && this.nodeFrom.get_x() < this.nodeTo.get_x()) {
      phi = 360 - atan(a / b);
    }

    let x = cos(phi) * this.nodeFrom.r
    let y = sin(phi) * this.nodeFrom.r

    let arrowheadX = this.nodeTo.get_x() - x
    let arrowheadY = this.nodeTo.get_y() - y
    let arrowLength = 8;
    let arrowAngle = 40;
    let x1 = arrowheadX - cos(phi + arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));
    let y1 = arrowheadY - sin(phi + arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));
    let x2 = arrowheadX - cos(phi - arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));
    let y2 = arrowheadY - sin(phi - arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));

    let conn_color = "dimgray"
    if (color) conn_color = color
    stroke(conn_color);

    line(this.nodeFrom.get_x(), this.nodeFrom.get_y(), this.nodeTo.get_x(), this.nodeTo.get_y());
    noStroke();
    fill(conn_color)
    triangle(arrowheadX, arrowheadY, x1, y1, x2, y2)




    push()

    noStroke();
    textAlign(CENTER, CENTER);
    textFont(font);
    const text_size = 12;
    textSize(text_size);
    const line_height = textLeading()
    translate(
      (this.nodeTo.get_x() + this.nodeFrom.get_x()) / 2,
      (this.nodeTo.get_y() + this.nodeFrom.get_y()) / 2
    )
    rotate(phi)

    text(this.label, 0, -line_height / 2 - 1)

    pop()
  }
}