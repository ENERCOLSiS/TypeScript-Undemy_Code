class Personaje1{ //Pascal case or Upper Camel Case
    readonly id: number //propiedad que no se puede modificar, solo en el constructor!
    name: string
    nivel: number
    private _hp: number
    profesion?: string  //propiedad opcional ? --aparece luego para un personaje que haya avanzado en el juego
//el constructor es un método que se ejecuta siempre que creamos una instancia
    constructor(id: number, name: string, nivel: number, hp: number){
        //siempre retornará un personaje, return 1 o cualquier otro return da error
        this.id = id
        this. name = name
        this.nivel = nivel
        this._hp = hp
    }
//agregando el méthodo subir nivel
    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    campiarHP(cantidad: number):number {
        this._hp = this._hp + cantidad
        return this._hp
    }
}

const personaje1 = new Personaje1(1, 'Mig', 1, 100)
personaje1.campiarHP(-10)
console.log(personaje1)

if(typeof personaje1){
    // Esto evalua o devuelve un objeto
}

if(personaje1 instanceof Personaje1){ // Para hacer el TypeNarrowing
    // Esto evalua o devuelve True or False
}

//______________________________________________________________________________
//**** Control de Acceso -- Clases privada y clases públicas */
// --Aqui se modificó la propiedad hp a private, se sugiere usar el guión bajo para idicar propiedades privadas
// por eso _hp

//______________________________________________________________________________
//*** Parámetros Opcionales y de solo lectura ------- */
// --- se agregó readonly a Id y se agregó profesion como  propiedad opcional

//______________________________________________________________________________
//** Parámeter Properties */
// another way to define the previous class

class Personaje2 { //Pascal case or Upper Camel Case
    profesion?: string  //propiedad opcional ? --aparece luego para un personaje que haya avanzado en el juego
//El constructor es un método que se ejecuta siempre que creamos una instancia
    constructor(
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number)
    {
    }
//agregando el méthodo subir nivel
    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    campiarHP(cantidad: number):number {
        this._hp = this._hp + cantidad
        return this._hp
    }
}

const personaje2 = new Personaje2(2, 'Mozz', 2, 100)
personaje2.campiarHP(+15)
console.log(personaje2)

//______________________________________________________________________________
//** Getter y Setters */
// implementing get to know a property value and set to change a property value

class Personaje3 { //Pascal case or Upper Camel Case
    profesion?: string  //propiedad opcional ? --aparece luego para un personaje que haya avanzado en el juego
//El constructor es un método que se ejecuta siempre que creamos una instancia
    constructor(
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number)
    {
    }
//agregando el méthodo subir nivel
    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    campiarHP(cantidad: number):number {
        this._hp = this._hp + cantidad
        return this._hp
    }

    get hp(): number {
        return this._hp
    }

    //NO es recomendable cambiar valores de propiedades con setters, es preferible para validaciones
    //Lo recomendable es crear un método para esto como: -- cambiarHP
    set hp(cantidad: number){
        this._hp = this._hp + cantidad
    }
}

const personaje3 = new Personaje3(3, 'Mar', 12, 100)
//personaje3.campiarHP(-20)
personaje3.hp = 20
console.log(personaje3)

//***** PROPIEDADES Y MÉTODOS ESTÁTICOS */
//  ---creando la propiedad equipo dentro de la clase Personaje, se hace esta estática y privada 

class Personaje { //Pascal case or Upper Camel Case
    profesion?: string  //propiedad opcional ? --aparece luego para un personaje que haya avanzado en el juego
    private static equipo: number = 1 //static: equipo No pertenece a las instancias de personajes sino a la misma clase de personaje!!!
    //private: solo la clase puede acceder a esta propiedad.
//El constructor es un método que se ejecuta siempre que creamos una instancia
    constructor(
        public readonly id: number, 
        public name: string, 
        public nivel: number, 
        private _hp: number)
    {
    }
//agregando el méthodo subir nivel
    subirNivel(): number {
        this.nivel = this.nivel + 1
        return this.nivel
    }

    campiarHP(cantidad: number):number {
        this._hp = this._hp + cantidad
        return this._hp
    }

    get hp(): number {
        return this._hp
    }

//NO es recomendable cambiar valores de propiedades con setters, es preferible para validaciones
    //Lo recomendable es crear un método para esto como: -- cambiarHP
    set hp(cantidad: number){
        this._hp = this._hp + cantidad
    }

    //agregando método agregar personaje
    static agregarPersonaje(): void { //static para poder modificar con la misma clase de personaje en lugar de una instancia
        //this.equipo++ //cuando equipo se torna static, ya no pertenece a las instancias
        Personaje.equipo++
    }

    static getEquipo(): number{
        return Personaje.equipo
    }
    
}

const personaje4 = new Personaje(4, 'Paula', 10, 100)
personaje4.campiarHP(-5)
//Personaje.equipo = 1  //NO se puede settear, esta se volvió privada --necesita un método  

const personaje5 = new Personaje(5, 'papa', 12, 120)
Personaje.agregarPersonaje()
//console.log(Personaje.equipo) //al ser privada no se puede leer aquí

console.log(personaje4,'\n',personaje5)
console.log(Personaje.getEquipo())
