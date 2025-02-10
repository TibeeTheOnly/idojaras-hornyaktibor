import NapiIdojaras from './NapiIdojaras.js';
import { maiidojaras } from './idojaraskezeles.js';

const maiIdojaras = new NapiIdojaras(1, 25, 15, "napos");
console.log(maiIdojaras.toString());

maiidojaras().then(maiIdojaras => {
    console.log(maiIdojaras.toString());
});
