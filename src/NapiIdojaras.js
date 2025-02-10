class NapiIdojaras {
    constructor(nap, maxHomerseklet, minHomerseklet, idojaras) {
        if (typeof nap !== 'number' || nap < 0 || nap > 6) {
            throw new Error("Érvénytelen érték a 'nap' paraméterhez. 0 és 6 közötti számnak kell lennie.");
        }
        if (typeof maxHomerseklet !== 'number' || typeof minHomerseklet !== 'number') {
            throw new Error("Érvénytelen érték a 'maxHomerseklet' vagy 'minHomerseklet' paraméterhez. Számoknak kell lenniük.");
        }
        if (typeof idojaras !== 'string') {
            throw new Error("Érvénytelen érték az 'idojaras' paraméterhez. Szövegnek kell lennie.");
        }

        this.nap = nap;
        this.maxHomerseklet = maxHomerseklet;
        this.minHomerseklet = minHomerseklet;
        this.idojaras = idojaras;
    }

    toString() {
        const napok = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
        return `${napok[this.nap]}: Max: ${this.maxHomerseklet}°C, Min: ${this.minHomerseklet}°C, Időjárás: ${this.idojaras}`;
    }
}

export default NapiIdojaras;
