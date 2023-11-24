'use strict';

import { Shape } from "./shape.js";

// Utility Function

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Variables

const grid = select('.grid-container');
const button = select('.create');
//const location = select('.unit');
const shapeSelection = select('.shape');
const colorSelection = select('.color');
/*const square = select('.square');
const circle = select('.circle');
const blue = select('.blue');
const green = select('.green');
const orange = select('.orange');
const pink = select('.pink');
const purple = select('.purple');
*/
// Event

onEvent('click', button,createShape);

let shapeCount = 0;
let shapeArray = [];

function createShape() {

    if (shapeCount < 24) {
        const selectedShape = shapeSelection.value;
        const selectedColor = colorSelection.value;
        const newShape = new Shape(selectedShape, selectedColor);
        shapeArray.push(newShape);


        const shapeElement = document.createElement('div');
        shapeElement.classList.add(selectedShape);
        shapeElement.classList.add(selectedColor);

        grid.appendChild(shapeElement);

        shapeCount++;
    } else {
        //location.style.innerText = 'Maximum number of shapes has been reached';
    }    
}

