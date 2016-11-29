import 'reflect-metadata';

import { Container } from 'inversify';
import {Wheel, Rim, Tire} from "./src";

const container = new Container();

container.bind(Wheel).toSelf();
container.bind(Rim).toSelf();
container.bind(Tire).toSelf();

const wheel = container.get(Wheel);

console.log(wheel);