'use strict';

import { Shape } from "./shape.js";

// Utility Function

function select(selector, parent = document) {
    return parent.querySelector(selector);
}

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
}

// Variables

const grid = select('.grid-container');
const button = select('.create');
const shapeAndColor = select('.text');
const shapeSelection = select('.shape');
const colorSelection = select('.color');

onEvent('click', button, createShape);

let shapeCount = 0;
let shapeArray = [];

function createShape() {

    if (shapeCount < 24) {
        const selectedShape = shapeSelection.value;
        const selectedColor = colorSelection.value;
        const newShape = new Shape(selectedShape, selectedColor);
        shapeArray.push(newShape);


        const shapeElement = document.createElement('div');
        shapeElement.classList.add('shape');
        shapeElement.classList.add(selectedShape);
        shapeElement.classList.add(selectedColor);

        onEvent('click', shapeElement, function() {
            showShapeDetails(selectedShape, selectedColor, shapeArray.indexOf(newShape));
        });

        grid.appendChild(shapeElement);

        shapeCount++;
    } else {
        shapeAndColor.innerText = 'Maximum number of shapes has been reached';
    }    
}

function showShapeDetails(shape, color, gridNumber) {
    shapeAndColor.innerText = `Unit ${gridNumber}: ${color} ${shape}`
}
