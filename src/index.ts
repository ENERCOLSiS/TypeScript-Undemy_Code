//1er paso para probar como se genera el .js
//console.log("Hola mundo!!!")

let mensaje: string = "Hola Mundo"

mensaje = "Chacho gordo"

//2do this generates an error in following line as 42 is type number not string
//mensaje = 42

//3do paso ejecutar tsc -init it creates tsconfig.json
// ECMA 2016 is the most estable version
//change rootDir
mensaje = "chao mundo"

console.log(mensaje)

// tipos nativos
// * number
// * string
// * boolean
// * null
// * undifined
// * object
// * function 
console.log(typeof [])
// --array is type object in js

// ----- Types in TS
// * any (DONT USE IT!!!) --elimina el proposito de TS
// * unknown
// * never 
// * arrays
// * tuplas
// * Enums
// * **tipos inferidos

let extincionDinosarios: number = 76_000_000 //*se puede separar los miles y millones con _
let dinosaurioFavorito: string = "T-Rex"
let extintos = true //acá no se puso el :boolean

// NO es necesario referir el tipo de variable si se Inicializan

let mivariable // esta variable es de tipo ANY --- NO se debería utilizar!!

//*** FUNCIONES!!! */

//** Acá config no esta definidad, para q funcione así debe ser config: any o ir a tsconfig.log y noImplicityAny: false, */
function ChachoFeliz(config: any){
    return config
}


let animales: string[] = ["chancho", "feliz", "orlando"]
let nums: number[] = [1, 2, 3]
let checks: boolean[] = []
let num2: Array<number> = []

// nums.map(x => x.) *el autocompletado sugiere métodos del tipo de datos

// ***** LAS TUPLAS ********
// Es una variable que contiene un set de datos que se encuentran ordenados

let tupla: [number, string[]] = [1, ["Ugly chancho", "Handsome Orlando"]]

//error de TS cuando se quiere hacer push, NO es posible y este error no se muestra
tupla.push(14)
console.log(tupla)

// **** ENUM --lista de constantes
// Util para representar estados en la Base de Datos eg. Actvio, pendiente, eliminado
// util para tallas eg. S, M, L , XL...
// tambien para cuando un estado de cargando

const peque = "s"
const medium = "m"
const large = "l"
const extraLarge = "xl"

// PascalCase --palabra que inicia en mayúscula
enum Talla {Peque = 's', Medium = 'm', Large = 'l', XLarge = 'xl'}

const variable1 = Talla.Large
console.log(variable1)

//example with loading states
const enum LoadingState {Idle, Loading, Success, Error} //al escribir const, solo se genera en js a medida que se usan o declaran
const estado  = LoadingState.Success

//**** OBjects *********************/

//definicion del type dirección
type Direccion = {
    numero: number,
    calle: string,
    pais: string
}

// --definicion de type persona
type Persona = {
    readonly id: number, 
    nombre?: string, // ? en nombre significa que es opcional!
    talla: Talla,
    direccion: Direccion
} 

const objeto: Persona = {id: 1, 
    nombre: 'Hola Perros', 
    talla: Talla.Medium,
    direccion: {
        numero: 1,
        calle: "por allá",
        pais: "neiva"
    }
}

//Definición de arreglos -contendrá solo objectos.
const arr: Persona[] = []

//objeto.id = 42 //presenta error por que id es readonly!

//*** FUNTIONS ********************/

//Functions coul be defined with const, let or just function
// const fn = () => {
// }

// let fn = () => {
// }

// function fn1() {
// }

const fn1: () => number = () => {
    //return 2

    //always have to return something, otherwise it is an error
    let x = 2
    if(x > 5){
        return 7
    }else{
        return 10
    }
}
            //parameters   //return  //arguments
const fn2: (a: number) => string = (edad: number) => {
    //return edad //si edad se usa debe ser error -se habilito en tsconfig.json -noUnusedParameters": true
    if(edad > 17) {
        return 'puedes ingresar'
    }
    return 'no puedes pasar'
}

//define always the type of return  //: string
function validaEdad1(edad: number): string {
    if (edad > 17){
        return 'puedes ingresar'
    }
    return 'no puedes pasar'
}

validaEdad1(18)

//con mensaje customizado msg
//define always the type of return  //: string
function validaEdad2(edad: number, msg: string): string {
    if (edad > 17){
        return `puedes ingresar ${msg}`
    }
    return 'no puedes pasar'
}

validaEdad2(18, 'mono cuco')

// ***** Retorno NEVER *****///
// para funciones encargadas de lanzar excepciones -NO Colocar void, colocar never, esto indica que la funcion lanza un error.

function ErrorUsuario(): never {
    throw new Error('error de ususario')
}


// **** Union Types ******-----//

let puntaje: number | string = 98 // esto permite que la variable puntaje sea number o string.

puntaje = 'hola wuey'

type Animal = {
    id: number,
    estado: string
}

type Usuario = {
    id: number,
    name: string
}

let animal: Usuario | Animal = { id: 1, estado: '', name: '' }

//                       union type
function sumaDos(n: number | string): number{
    if(typeof n === 'number'){
        //si es un tipo de dato llamanos un tipo de metodos
        return n +2 
    }
    return parseInt(n) + 2
}

console.log("Suma de 2 + 2 = ", sumaDos('2'))
console.log("Suma de 2 + 8 = ", sumaDos(8))

//en JS si sumas string 2 + 2 da lo siguiente (22) esto es un error si lo que se quiere es sumar en lugar de concatenar:
console.log("la suma de un string y un numeric en JS: ",'2' + 2)

//****** ---- Intersection Types -----  */
//nos sirve para que nosotros podamos tener un tipo y otro tipo, juntarlos y crear un objeto con las propiedades de ambos tipos
type Audit = {
    created_at: string,
    modified_at: string,
}

type Product = {
    name: string,
}

const product: Audit & Product = {
    created_at: '',
    modified_at: '',
    name: '',
}

//**** Literal Types ******* */

// como asignar los primeros 3 numeros de fibonacci ??
const nDeFibo1: 0 | 1 | 2 | 3 | 5 = 5 //feo ... en lugar de esto...

type Fibo = 0 | 1 | 2 | 3 | 5
const nDeFibo2: Fibo = 5 //le puedo asignar 0 ó 1 ó 2 ó 3 ó 5

///**** Nullables Types --valores nulos */

function toNumber(s: string | null | undefined){
    if(!s){
        return 0 //si el valor es null retorna cero
    }
    return parseInt(s)
}

const n = toNumber(null) // descomentar en tsconfig.json strickNullchecks : true

const m = toNumber(undefined) // se agrega | undefined

//*** Optional Chain Operator */

function getUser(id: number){
    if (id < 0){
        return null
    }
    return {
        id: 1,
        name: 'orlando',
        created_at: new Date()
    }
}

const user = getUser(1) //puede ser id 0 , 1 , 2...

console.log('usuario', user?.created_at) // ? --este es el chain operator. Pregunta si user existe y si es un objeto.

// --Alternativa tradicional --sin chain operator
if (user && user.created_at){
    console.log(user.created_at)
}

// ahora como seria con arreglos
const arr1 = null

arr1?.[0] //si el arreglo arr1 existe accede al elemento 0

console.log(arr1?.[0])

const fn5: any = null

fn5?.()

console.log(fn5?.())

//--forma tradicional con arreglos
function cb(fn: () => void ){
    if(fn){
        fn()
    }
}

//**** Nullishcoalesing Operator ***/
// -- Util cuando el valor de cero o el valor vacio es representativo para nosotros.
//**ejemplo de dificultad de un juego */
const difficulty: number | null = 0

const user2 = {
    username: "soy yo",
    difficulty: difficulty ?? 1,
}

console.log(user2)

//**** Type Assertion */
//cuando nosotros tenemos un valor obtenido pero nosotros sabemos al 100% que tipo de dato es y el compilador no lo tiene muy claro *** Es peligro usarlo!!!
const elem: any = null

const elem1 = elem as number //se forza a que sea de tipo number

const input =  document.getElementById('username') as HTMLInputElement //solamente usar si esta 100% del tipo de dato que se esta obteniendo --aca buscando algo dentro del DOM que estamos seguros q exite y su tipado.

//otra forma: 
const input1 = <HTMLInputElement> document.getElementById('username') 

//*** Type Narrowing */
//Cuando se tiene mas de un tipo de dato en una misma variable y llevar alguno de estos tipos por un camino

// function Lala(x: string | number){
//     if(typeof x == 'number'){
//         x. //show properties according to the type
//     }
//     if(typeof x == 'string'){
//         x. //show properties according to the type
//     }
// }

//**** Type Unknown */
// mejor alternativa o reemplazo del tipo ANY

// function procesa(algo: unknown){
//     if(typeof algo === 'string'){
//         return algo.toUpperCase()
//     }
//     if(typeof algo === 'number'){
//         return algo.toString()
//     }

//     //para llamar los siguientes métodos tendráimos que llamar instanceof alguna clase.
//     if(algo instanceof String){
//        // here the method 
//     }
//     // algo.haceCosas()
//     // algo.otrasCosas()
//     // algo.genkidama()
// }

// __________________________________________
// ******  PROGRAMACIÓN ORIENTADA A OBJETOS  ********
// Es uno de los paradigmas que existen como: Funcional, Interpretado, Imperativo entre muchos otros...

// las clases son los planos y los objetos son las casas ya construidas segun esos planos.
// Las clases se componen de: propiedades(variables) y métodos(funciones) 
// e.g cuando estas variables y funciones se agrupan en una clase, se les llama propiedades y métodos respectivamente

//---ver archivo clases.ts
