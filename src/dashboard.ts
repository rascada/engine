import {Indicator, Ignition, FuelIndicator, Tank} from '.';

export class Dashboard {
    private $root = document.createElement('div');

    constructor(
        private ignition: Ignition,
        private indicator: Indicator,
        private fuelIndicator: FuelIndicator
    ) {
        [indicator, fuelIndicator, ignition]
            .forEach(part => this.$root.appendChild(part.$root));

        indicator.update('silnik wylaczony');

        document.body.appendChild(this.$root);
    }

    update(tank: Tank) {
        this.fuelIndicator.update(tank);
    }
}
