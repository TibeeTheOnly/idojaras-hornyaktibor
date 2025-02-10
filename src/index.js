import NapiIdojaras from './NapiIdojaras.js';
import { maiidojaras, beolvas } from './idojaraskezeles.js';

const maiIdojaras = new NapiIdojaras(1, 25, 15, "napos");
console.log(maiIdojaras.toString());

maiidojaras().then(maiIdojaras => {
    console.log(maiIdojaras.toString());
});

async function main() {
    const idojarasLista = await beolvas();
    const maiIdojaras = await maiidojaras();
    idojarasLista.push(maiIdojaras);

    const legmagasabbHomersekletuNap = idojarasLista.reduce((max, current) => {
        return current.maxHomerseklet > max.maxHomerseklet ? current : max;
    });

    console.log(`A legmagasabb hőmérséklet ${legmagasabbHomersekletuNap.toString()}`);
}

main();
