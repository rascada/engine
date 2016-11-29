import {Tank} from '.';

export class Indicator {
    $root = document.createElement('p');

    update(msg: string) {
        this.$root.textContent = msg;
    }
}

export class FuelIndicator extends Indicator {
    //noinspection JSAnnotator
    update(tank: Tank) {
        const { $root } = this;

        if (tank) {
            const { fuel } = tank;

            $root.innerHTML += `${ fuel ? `poziom paliwa: ${ fuel }` : 'brak paliwa' }`;
        } else {
            $root.textContent = 'brak zbiornika paliwa';
        }
    }
}
