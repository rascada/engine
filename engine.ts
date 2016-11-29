// import 'reflect-metadata';

import {Injector} from '../di/src/injector';
import {Wheel, Rim, Tire} from "./src";
import {Body} from "./src/body";
import {Dashboard} from "./src/dashboard";
import {Ignition} from "./src/ignition";
import {Indicator, FuelIndicator} from "./src/indicator";
import {Engine} from "./src/engine";
import {Tank} from "./src/tank";
import {Car} from "./src/car";

const i = new Injector([
    Body, Dashboard, Ignition,
    Indicator, FuelIndicator,
    Engine, Wheel, Rim, Tire,
    FuelIndicator, Tank, Car,
]);

const wheel = i.get('car');

console.log(wheel);