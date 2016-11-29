import {
    FuelIndicator,
    Dashboard,
    Indicator,
    Ignition,
    Engine,
    Wheel,
    Tank,
    Body,
    Tire,
    Car,
    Rim,
} from "./src/index";

const dashboard = new Dashboard(new Ignition(), new Indicator(), new FuelIndicator());
const wheels = [0, 0, 0, 0].map(() => new Wheel(new Rim(17), new Tire()));
const engine = new Engine(67);
const tank = new Tank(20);

const car = new Car(new Body(dashboard, engine, tank, wheels));