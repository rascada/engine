import {Body} from '.';

export class Car {
    private speed: number = 0;

    constructor(private body: Body) {
        const { body: { dashboard, tank } } = this;
        dashboard.update(tank);
    }
}