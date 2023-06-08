class Shape {
  constructor(name) {
    let _name = name;

    this.getName = () => {
      return _name;
    };
  }
}

class Rectangle extends Shape{
    constructor(name, side1, side2){
        super(name)
        this.side1 = side1
        this.side2 = side2
    }

    get Area(){
        return `The area of the ${Shape.getName} is ${this.side1 * this.side2}`
    }

    get isSquare(){
        return this.side1 == this.side2 
    }
}

let rectangle = new Rectangle("rec",3,4)
console.log(rectangle.isSquare)
console.log(rectangle.Area)