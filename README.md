# Időjárás Kezelő Projekt

Ez a projekt egy egyszerű időjárás kezelő alkalmazás, amely napi időjárási adatokat kezel és jelenít meg.

## Fájlok

- `src/index.js`: A fő belépési pont, amely inicializálja az időjárási adatokat és meghívja a fő funkciókat.
- `src/NapiIdojaras.js`: Egy osztály, amely egy napi időjárási adatot reprezentál.
- `src/idojaraskezeles.js`: Funkciók az időjárási adatok beolvasására és a mai időjárás bekérésére.

## Használat

1. Klónozd a repót:
    ```bash
    git clone <repo_url>
    ```

2. Navigálj a projekt könyvtárába:
    ```bash
    cd idojaras-hornyaktibor
    ```

3. Futtasd a projektet:
    ```bash
    node src/index.js
    ```

## Funkciók

### NapiIdojaras osztály

Ez az osztály egy napi időjárási adatot reprezentál.

#### Konstruktor

```javascript
constructor(nap, maxHomerseklet, minHomerseklet, idojaras)
```

- `nap`: A nap száma (0-6, ahol 0 vasárnap).
- `maxHomerseklet`: A napi maximális hőmérséklet.
- `minHomerseklet`: A napi minimális hőmérséklet.
- `idojaras`: Az időjárás leírása (pl. "napos", "felhős", "eső").

#### toString

Visszaadja a napi időjárási adatokat szöveges formában.

### maiidojaras funkció

Bekéri a felhasználótól a mai napi időjárási adatokat.

### beolvas funkció

Beolvassa az időjárási adatokat egy CSV fájlból.

## Hibakezelés

A `NapiIdojaras` osztály konstruktora ellenőrzi a bemeneti paramétereket és hibát dob, ha azok érvénytelenek.

## Példa

```javascript
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

    console.log(`A legmagasabb hőmérséklet - ${legmagasabbHomersekletuNap.toString()}`);
}

main();
```
