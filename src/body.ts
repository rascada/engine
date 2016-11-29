import {Inject} from '../../di/src/inject';

@Inject('dashboard', { class: 'engine', args: [67]}, 'tank', 'wheel')
export class Body {}