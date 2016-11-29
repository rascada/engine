import {Dashboard, Engine, Wheel, Tank} from '.';

export class Body {
    constructor(
        private dashboard: Dashboard,
        private engine: Engine,
        private tank: Tank,
        private wheels: Wheel[] = []) { }
}