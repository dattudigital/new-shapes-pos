import { Injectable } from '@angular/core';

@Injectable()
export class Services {
    api: string = 'http://localhost:3001/';
    _num: any[];
    constructor() {
    }
    setcategoryValue(val) {
        this._num = val;
    }
    getcategoryValue() {
        return this._num
    }
}