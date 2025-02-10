import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import NapiIdojaras from './NapiIdojaras.js';

async function maiidojaras() {
    const rl = readline.createInterface({ input, output });

    const maxHomerseklet = await rl.question('Add meg a mai napi max hőmérsékletet: ');
    const minHomerseklet = await rl.question('Add meg a mai napi min hőmérsékletet: ');
    const idojaras = await rl.question('Add meg a mai időjárást (pl. "napos", "felhős", "eső"): ');

    const nap = new Date().getDay();

    rl.close();

    return new NapiIdojaras(nap, maxHomerseklet, minHomerseklet, idojaras);
}

export { maiidojaras };
