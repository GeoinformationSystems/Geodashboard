class P5ArrowConnector {
  constructor(nodeFrom, nodeTo, label, reverseDirection) {
    this.nodeFrom = nodeFrom;
    this.nodeTo = nodeTo
    if (reverseDirection) {
      this.nodeTo = nodeFrom;
      this.nodeFrom = nodeTo;
    }
    this.label = label
  }



  show(color) {

    angleMode(DEGREES)
    let a = abs(this.nodeTo.y - this.nodeFrom.y);
    let b = abs(this.nodeTo.x - this.nodeFrom.x);
    let phi = atan(a / b);
    if (this.nodeFrom.y < this.nodeTo.y && this.nodeFrom.x > this.nodeTo.x) {
      phi = 90 + 90 - atan(a / b);
    }
    if (this.nodeFrom.y > this.nodeTo.y && this.nodeFrom.x > this.nodeTo.x) {
      phi = 90 + 90 + atan(a / b);
    }
    if (this.nodeFrom.y > this.nodeTo.y && this.nodeFrom.x < this.nodeTo.x) {
      phi = 360 - atan(a / b);
    }

    let x = cos(phi) * this.nodeFrom.r
    let y = sin(phi) * this.nodeFrom.r

    let arrowheadX = this.nodeTo.x - x
    let arrowheadY = this.nodeTo.y - y
    let arrowLength = 8;
    let arrowAngle = 40;
    let x1 = arrowheadX - cos(phi + arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));
    let y1 = arrowheadY - sin(phi + arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));
    let x2 = arrowheadX - cos(phi - arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));
    let y2 = arrowheadY - sin(phi - arrowAngle / 2) * (arrowLength / cos(arrowAngle / 2));

    push(); //start new drawing state
    let conn_color = "dimgray"
    if (color) conn_color = color
    stroke(conn_color);
    line(this.nodeFrom.x, this.nodeFrom.y, this.nodeTo.x, this.nodeTo.y);
    noStroke();
    fill(conn_color)
    triangle(arrowheadX, arrowheadY, x1, y1, x2, y2)
    pop()
  }
}