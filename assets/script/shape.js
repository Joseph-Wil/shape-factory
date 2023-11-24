'use strict';

export class Shape {
    _name;
    _color;

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo() {
        return  `Shape: ${this._name}, Color: ${this._color}`;
    }
}