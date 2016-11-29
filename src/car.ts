import {Inject} from '../../di/src/inject';

@Inject('dashboard', 'tank')
export class Car {
    private speed: number = 0;

    resolved() {
        const { dashboard, tank } = this;
        dashboard.update(tank);
    }
}