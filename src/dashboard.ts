import {Tank} from '.';
import {Inject, Resolvable} from '../../di/src/inject';

@Inject('ignition', 'indicator', 'fuelIndicator')
export class Dashboard implements Resolvable {
    private $root = document.createElement('div');

    constructor() {
        document.body.appendChild(this.$root);
    }

    resolved() {
        const { indicator, fuelindicator, ignition } = this;
        console.log(this);

        [indicator, fuelindicator, ignition]
            .forEach(part => this.$root.appendChild(part.$root));

        indicator.update('silnik wylaczony');
    }

    update(tank: Tank) {
        this.fuelindicator.update(tank);
    }
}
