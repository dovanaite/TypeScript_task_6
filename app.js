var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Darbuotojas = /** @class */ (function () {
    function Darbuotojas(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    Object.defineProperty(Darbuotojas.prototype, "vardas", {
        get: function () {
            return this._vardas;
        },
        set: function (vardas) {
            this._vardas = vardas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "pavarde", {
        set: function (pavarde) {
            this._pavarde = pavarde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Darbuotojas.prototype, "atlyginimas", {
        get: function () {
            return this._atlyginimas;
        },
        enumerable: false,
        configurable: true
    });
    Darbuotojas.prototype.gpm = function () {
        return this._atlyginimas * 0.2;
    };
    Darbuotojas.prototype.psd = function () {
        return this._atlyginimas * 0.0698;
    };
    Darbuotojas.prototype.vsd = function () {
        return this._atlyginimas * 0.1252;
    };
    return Darbuotojas;
}());
var darbuotojai = [];
var jonas = new Darbuotojas("Jonas", "Jonaitis", 1200);
var antanas = new Darbuotojas("Antanas", "Antanas", 1300);
// darbuotojai.push(jonas);
// darbuotojai.push(antanas);
// console.log(darbuotojai);
// console.log(jonas.gpm())
var gpm = 0;
darbuotojai.forEach(function (darbuotojas) {
    console.log(darbuotojas.vardas);
    gpm += darbuotojas.gpm();
});
// console.log("Įmonė turės sumokėti: "+gpm);
//--------------------------------------- UŽDUOTIS PAVELDIMUMAS------------------------------------------------------
//---------------------------------------  PIRMA DALIS ---------------------------------------------
var PirmaeilisDarbuotojas = /** @class */ (function (_super) {
    __extends(PirmaeilisDarbuotojas, _super);
    function PirmaeilisDarbuotojas(_vardas, _pavarde, _atlyginimas) {
        var _this = _super.call(this, _vardas, _pavarde, _atlyginimas) || this;
        _this.npd = 0;
        _this.perskaiciuotiNPD();
        return _this;
    }
    Object.defineProperty(PirmaeilisDarbuotojas.prototype, "atlyginimas", {
        set: function (atlyginimas) {
            this._atlyginimas = atlyginimas;
            this.perskaiciuotiNPD();
        },
        enumerable: false,
        configurable: true
    });
    PirmaeilisDarbuotojas.prototype.perskaiciuotiNPD = function () {
        if (this._atlyginimas <= 750) {
            return this.npd = 460;
        }
        if (this._atlyginimas > 750 && this._atlyginimas <= 1678) {
            return this.npd = 460 - 0.26 * (this._atlyginimas - 730);
        }
        if (this._atlyginimas > 1678) {
            return this.npd = 400 - 0.18 * (this._atlyginimas - 642);
        }
    };
    PirmaeilisDarbuotojas.prototype.gpm = function () {
        return (this._atlyginimas - this.npd) * 0.2;
    };
    return PirmaeilisDarbuotojas;
}(Darbuotojas));
var buhalteris = new PirmaeilisDarbuotojas("Kostas", "Kostauskas", 2000);
var buhalteris2 = new Darbuotojas("Kostas", "Kostauskas", 2000);
console.log(buhalteris.gpm());
console.log(buhalteris2.gpm());
//---------------------------------------  ANTRA DALIS ---------------------------------------------
var PraktikantasDarbuotojas = /** @class */ (function (_super) {
    __extends(PraktikantasDarbuotojas, _super);
    function PraktikantasDarbuotojas(_vardas, _pavarde, _atlyginimas) {
        if (_atlyginimas === void 0) { _atlyginimas = 0; }
        return _super.call(this, _vardas, _pavarde, _atlyginimas) || this;
    }
    Object.defineProperty(PraktikantasDarbuotojas.prototype, "vardas", {
        get: function () {
            return this._vardas;
        },
        set: function (vardas) {
            this._vardas = vardas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PraktikantasDarbuotojas.prototype, "pavarde", {
        set: function (pavarde) {
            this._pavarde = pavarde;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PraktikantasDarbuotojas.prototype, "atlyginimas", {
        get: function () {
            return this._atlyginimas;
        },
        enumerable: false,
        configurable: true
    });
    PraktikantasDarbuotojas.prototype.gpm = function () {
        return 0;
    };
    PraktikantasDarbuotojas.prototype.psd = function () {
        return 0;
    };
    PraktikantasDarbuotojas.prototype.vsd = function () {
        return 0;
    };
    return PraktikantasDarbuotojas;
}(Darbuotojas));
var intern = new PraktikantasDarbuotojas('Intern', 'Intertaitis');
console.log(intern.gpm());
console.log(intern.psd());
console.log(intern.vsd());
