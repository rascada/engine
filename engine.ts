import 'reflect-metadata';

import {ReflectiveInjector} from '@angular/core';

import {Wheel, Rim, Tire} from "./src";

const injector = ReflectiveInjector.resolveAndCreate([Wheel, Tire, Rim]);

console.log(injector.get(Wheel));