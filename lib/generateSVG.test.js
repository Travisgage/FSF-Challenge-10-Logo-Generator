const { newShape, makeLogo } = require('./generateSVG');
const {Circle, Square, Triangle} = require('./shapes');

//tests for the functions that compile user's data into SVG 

describe('generateSVG', () => {
    describe('newShape', () => {
        it('should compile svg string from user-provided data', () =>{
            const circle = new Circle('svg', 'black', 'red');
            let svg = circle.render();
            expect(svg).toEqual(`<circle cx="145" cy="100" r="100" fill="red" />`)
        })
    });
    describe('makeLogo', () => {
        it('should return a created svg file with user information', () => {
            const triangle = new Triangle('tri', 'white', 'black')
            const svgString = `<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg">`;
            const text = `<text x="145" y="155" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="64"> tri </text>`;
            let svg = triangle.render();
            const makeLogo = `${svgString} ${svg} ${text} </svg>`;
            expect(makeLogo).toEqual(`<svg version="1.1" width="300" height="200" xmlns="https://www.w3.org/2000/svg"> <polygon points="150, 0 0, 250 250, 200" fill="black" /> <text x="145" y="155" dominant-baseline="middle" text-anchor="middle" fill="white" font-size="64"> tri </text> </svg>`)
        })
    })
})