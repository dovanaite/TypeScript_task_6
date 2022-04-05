class Darbuotojas{
    constructor(
        protected _vardas:string,
        protected _pavarde:string,
        protected _atlyginimas:number
    ){
    }

    public get vardas(){
        return this._vardas;
    }

    public set vardas(vardas:string){
        this._vardas=vardas;
    }

    public set pavarde(pavarde:string){
        this._pavarde=pavarde;
    }

    public get atlyginimas(){
        return this._atlyginimas;
    }

    public gpm(){
        return this._atlyginimas*0.2;
    }

    public psd(){
        return this._atlyginimas*0.0698;
    }

    public vsd(){
        return this._atlyginimas*0.1252;
    }

}

let darbuotojai:Darbuotojas[]=[];

const jonas:Darbuotojas=new Darbuotojas("Jonas", "Jonaitis", 1200);
const antanas:Darbuotojas=new Darbuotojas("Antanas", "Antanas", 1300);

// darbuotojai.push(jonas);
// darbuotojai.push(antanas);

// console.log(darbuotojai);
// console.log(jonas.gpm())

let gpm=0;
darbuotojai.forEach((darbuotojas:Darbuotojas)=>{
    console.log(darbuotojas.vardas);
    gpm+=darbuotojas.gpm();
});
// console.log("Įmonė turės sumokėti: "+gpm);


//--------------------------------------- UŽDUOTIS PAVELDIMUMAS------------------------------------------------------

//---------------------------------------  PIRMA DALIS ---------------------------------------------

class PirmaeilisDarbuotojas extends Darbuotojas{

protected npd:number = 0;
constructor(
    _vardas:string,
    _pavarde:string,
    _atlyginimas:number,
){
    super(_vardas, _pavarde, _atlyginimas);
    this.perskaiciuotiNPD();
}
public set atlyginimas(atlyginimas:number){
    this._atlyginimas=atlyginimas;
    this.perskaiciuotiNPD();
}

private perskaiciuotiNPD(){

    if(this._atlyginimas <= 750){
        return this.npd = 460;
    }
    if(this._atlyginimas > 750 && this._atlyginimas <= 1678){
        return this.npd = 460 - 0.26*(this._atlyginimas-730);
    }
    if(this._atlyginimas > 1678){
        return this.npd = 400 - 0.18*(this._atlyginimas-642);
    }
}

public override gpm(){
    return (this._atlyginimas-this.npd)*0.2;
}

}

let buhalteris = new PirmaeilisDarbuotojas("Kostas", "Kostauskas", 2000);
let buhalteris2 = new Darbuotojas("Kostas", "Kostauskas", 2000);

console.log(buhalteris.gpm());
console.log(buhalteris2.gpm());

//---------------------------------------  ANTRA DALIS ---------------------------------------------

class PraktikantasDarbuotojas extends Darbuotojas{

    constructor(
        _vardas:string,
        _pavarde:string,
        _atlyginimas:number=0,
    ){
        super(_vardas, _pavarde,_atlyginimas);
    }

    public get vardas(){
        return this._vardas;
    }

    public set vardas(vardas:string){
        this._vardas=vardas;
    }

    public set pavarde(pavarde:string){
        this._pavarde=pavarde;
    }

    public get atlyginimas(){
        return this._atlyginimas;
    }

    public override gpm(){
        return 0;
    }

    public override psd(){
        return 0;
    }

    public override vsd(){
        return 0;
    }
}

let intern = new PraktikantasDarbuotojas('Intern', 'Intertaitis');
console.log(intern.gpm());
console.log(intern.psd());
console.log(intern.vsd());