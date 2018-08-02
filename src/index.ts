import { Perceptron } from './perceptron';
import { Session } from './session.class';

const perceptron = new Perceptron();
const sess = new Session();

const feedDict = { x: 10 };
const operation = perceptron.z;

let result = sess.run(operation, feedDict);

console.log('result: ', result);

