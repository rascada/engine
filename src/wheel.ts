import {Injectable} from '@angular/core';

export class Rim {
    constructor(private inches: number) { }
}

export class Tire {
    constructor(private condition: number = 100) { }
}

@Injectable()
export class Wheel {
    constructor(private rim: Rim, private tire: Tire) {

    }
}
