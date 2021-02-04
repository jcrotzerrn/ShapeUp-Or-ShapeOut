class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.div = $('<div class="shape"></div>');
        this.randomPos();
        this.div.dblclick(() => this.div.remove());
        this.div.dblclick(() => $('.description').val(''));
        this.div.click(() => this.describe());
    }

    randomVal(min, max) {
        return Math.floor(Math.random() * (max - min));
    }
    randomPos() {
        this.div.css({
            top: `${this.randomVal(this.height, 600)}px`,
            left: `${this.randomVal(this.width, 600)}px`,
            height: this.height,
            width: this.width,
        });
        $('#shapeBoard').append(this.div);
    }
    describe() {
        $('#describe-height').val(this.height);
        $('#describe-width').val(this.width);
    }
    getArea() {
        let area = this.width * this.height;
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = (this.width *this.height) * 2;
        $('#describe-perimeter').val(perimeter);
    }
}

class Circle extends Shape {
    constructor(radius) {
        super(2 * radius, 2 * radius);
        this.radius = Number(radius);
        this.div.attr('id', 'circle');
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#describe-shape').val('Circle'));
        this.div.click(() => $('#describe-radius').val(this.radius));
    }
    getArea() {
        let radius = this.width / 2;
        let area = Math.PI * Math.pow(radius, 2);
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = 2 * Math.PI * this.radius;
        $('#describe-perimeter').val(perimeter);
    }
}
$('#circle-btn').click(function () {
    let radius = $('#radius-px').val();
    new Circle(radius);
    $('#radius-px').val('');
})

class Triangle extends Shape {
    constructor(height) {
        super(height, height);
        this.height = Number(height);
        this.div.attr('id', 'triangle');
        this.triStyles();
        this.div.click(() => this.getArea());
        this.div.click(() => this.getPerimeter());
        this.div.click(() => $('#describe-shape').val('Triangle'));
    }
    getArea() {
        let area = 0.5 * this.height * this.height;
        $('#describe-area').val(area);
    }
    getPerimeter() {
        let perimeter = 2 * this.height + Math.SQRT2 * this.height;
        $('#describe-perimeter').val(perimeter);
    }
    triStyles() {
        this.div.css({
            height: '0',
            width: '0',
            borderBottom: `${this.height}px solid yellow`,
            borderRight: `${this.height}px solid transparent`,
        })
    }
}

$('#triangle-btn').click(function() {
    let triHeight = $('#triangle-height').val();
    new Triangle(triHeight);
    $('#triangle-height').val('');
})

class Rectangle extends Shape {
    constructor(width, height) {
      super(width, height);
      this.height = Number(height);
      this.width = Number(width);
      this.div.attr('id', 'rectangle');
      this.div.click(() => this.getArea());
      this.div.click(() => this.getPerimeter());
      this.div.click(() => $('#describe-shape').val('Rectangle'));
    }
}
$('#rectangle-btn').click(function() {
    let rectWidth = $('#width-px').val();
    let rectHeight = $('#rect-height-px').val();
    new Rectangle(rectWidth, rectHeight);
    $('#width-px').val('');
    $('#rect-height-px').val('');
});

class Square extends Shape {
    constructor(height, width) {
      super(height, width);
      this.height = Number(height);
      this.width = Number(width);
      this.div.attr('id', 'square');
      this.div.click(() => this.getArea());
      this.div.click(() => this.getPerimeter());
      this.div.click(() => $('#describe-shape').val('Square'));
    }
    // getArea() {
    //   let area = this.height * this.width;
    //   $('#describe-area').val(area);
    // }
    // getPerimeter() {
    //   let perimeter = (this.height * 2) * 2;
    //   $('#describe-perimeter').val(perimeter);
    // }
  }
  
  // click button to add square
  $('#square-btn').click(function () {
    let sidePx = $('#side-px').val();
    new Square(sidePx, sidePx);
    $('#side-px').val('');
  })

