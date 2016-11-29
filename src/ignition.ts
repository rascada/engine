export class Ignition {
    $root = document.createElement('button');

    constructor() {
        const { $root } = this;

        $root.textContent = 'wlacz';
        $root.onclick = this.changed.bind(this);
    }

    changed() {
        console.log('brum');
    }
}

export class Key { }