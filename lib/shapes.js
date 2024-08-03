//Parent class 'Shapes'
class Shapes {
    constructor(text, textColor, color) {
        this.text = text;
        this.textColor = textColor;
        this.color = color;
    }
}

//specific shape classes that extend 'Shapes' prototype
class Circle extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }
    
    render() {
        return `<circle cx="145" cy="100" r="100" fill="${this.color}" />`
    }
}

class Square extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }

    render() {
        return `<rect x="40" y="10" width="200" height="200" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    constructor(text, textColor, color) {
        super(text, textColor, color)
    }

    render() {
        return `<polygon points="150, 0 0, 250 250, 200" fill="${this.color}" />`
    }
}

//exporting the 3 shapes
module.exports = {Circle, Square, Triangle};