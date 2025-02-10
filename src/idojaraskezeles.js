import readline from 'readline/promises';
import fs from 'fs/promises';
import NapiIdojaras from './NapiIdojaras.js';


async function maiidojaras() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        terminal: false //FONTOS!! 
    });

    const maxHomerseklet = await rl.question('Add meg a mai napi max hőmérsékletet: ');
    const minHomerseklet = await rl.question('Add meg a mai napi min hőmérsékletet: ');
    const idojaras = await rl.question('Add meg a mai időjárást (pl. "napos", "felhős", "eső"): ');

    const nap = new Date().getDay();

    rl.close();
    return new NapiIdojaras(nap, maxHomerseklet, minHomerseklet, idojaras);
}

async function beolvas() {
    const data = await fs.readFile('./src/idojaras.csv', 'utf-8');
    const lines = data.trim().split('\n').slice(1);
    return lines.map(line => {
        const [nap, min, max, idojaras] = line.split(';');
        return new NapiIdojaras(parseInt(nap), parseInt(max), parseInt(min), idojaras);
    });
}

export { maiidojaras, beolvas };
