class NapiIdojaras {
    constructor(nap, maxHomerseklet, minHomerseklet, idojaras) {
        

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
