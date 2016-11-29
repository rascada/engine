import {Inject} from '../../di/src/inject';

export class Rim {
    constructor(private inches: number) { }
}

export class Tire {
    constructor(private condition: number = 100) { }
}

@Inject('tire', { class: 'rim', args: [19] })
export class Wheel {}
