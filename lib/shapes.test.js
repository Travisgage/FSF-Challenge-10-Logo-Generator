const {Circle, Square, Triangle} = require('./shapes');

//tests for shape rendering

describe('Shapes', () => {
    describe('Circle', () => {
        it('should render a circle with a black fill color', () => {
            const circle = new Circle('abc', 'white', 'black');
            expect(circle.render()).toEqual('<circle cx="145" cy="100" r="100" fill="black" />');
        });
    });

    describe('Square', () => {
        it('should render a square with a green fill color', () => {
            const square = new Square('DEF', 'black', 'green');
            expect(square.render()).toEqual('<rect x="40" y="10" width="200" height="200" fill="green" />');
        });
    });

    describe('Triangle', () => {
        it('should render a triangle with a blue fill color', () => {
            const triangle = new Triangle('GHI', 'white', '#0000ff');
            expect(triangle.render()).toEqual('<polygon points="150, 0 0, 250 250, 200" fill="#0000ff" />');
        });
    });

});