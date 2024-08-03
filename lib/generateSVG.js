const {Circle, Square, Triangle} = require('./shapes');

function newShape(data) {
    let svg;

    if (data.shape === 'circle') {
     data.shape = new Circle(data.text, data.textColor, data.shapeColor);
     svg = (data.shape).render();
    } else if (data.shape === 'square') {
     data.shape = new Square(data.text, data.textColor, data.shapeColor);
     svg = (data.shape).render(); 
    } else if (data.shape === 'triangle') {
     data.shape = new Triangle(data.text, data.textColor, data.shapeColor);
     svg = (data.shape).render();
    }
    
    return svg;
 }

 //function to compile SVG string
 
 function makeLogo(data) {
    const svgString = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">`;
    const text = `<text x="145" y="125" text-anchor="middle" fill="${data.textColor}" font-size="64"> ${data.text} </text>`;
    return `${svgString} ${newShape(data)} ${text}  </svg>`
 }

 //exporting the functions
 module.exports = {newShape, makeLogo};