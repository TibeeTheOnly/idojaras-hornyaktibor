import NapiIdojaras from './NapiIdojaras.js';
import { maiidojaras, beolvas } from './idojaraskezeles.js';
import fs from 'fs/promises';

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

    console.log(`A legmagasabb hőmérséklet - ${legmagasabbHomersekletuNap.toString()}`);

    // Move the last element to the second position
    if (idojarasLista.length > 1) {
        const lastElement = idojarasLista.pop();
        idojarasLista.splice(0, 0, lastElement);
    }

    const csvContent = idojarasLista.map(idojaras => 
        `${idojaras.nap};${idojaras.minHomerseklet};${idojaras.maxHomerseklet};${idojaras.idojaras}`
    ).join('\n');

    await fs.writeFile('./src/idojaras-uj.csv', `nap;min;max;idojaras\n${csvContent}`, 'utf-8');
}

main();
