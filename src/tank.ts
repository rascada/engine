export class Tank {
    constructor(private _fuel: number = 0) { }

    get fuel() {
        return `${ this._fuel}l`;
    }
}
