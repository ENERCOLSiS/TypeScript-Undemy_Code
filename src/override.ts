/**** 
 * Producto es una clase con diferentes propiedades como:
 * name
 * desc
 * Created_at
 * Created_by
 * stock
 * sku  --- identificador para el producto_ e.g bar code
 * 
 * 
 * Tambien la clase Catgoria
 * name
 * desc
 * created_at
 * created_by
 * 
 * --Como ven se estan repiendo las propiedades...
 * 
 * Entonces debemos crear una clase superior que se encarge de tomar las propiedades en comun para luego
 * aplicarlas a las otras clases
 * 
 */

// Hay que comentar herencia! -Si no se comenta salen errores de duplicados!!!------
//---------------------------------------------------------
/****** METHOD OVERRIDE ******/

class DatosBasicos{
    constructor(
        public name: string,
        public desc: string,
        public created_at: Date,
        public created_by: number,
    ){}

    get fullYear() {
        return this.created_at.getFullYear()
    }

    /**METHOD OVERRIDE para que devuelva el nombre y la descripcion */
    get fullDesc() {
        return this.name + ' - ' + this.desc
    }
}

//*aprovechando la herencia!!
class Producto extends DatosBasicos {
    constructor(
        public stock: number,
        public sku: number,

        //se deben agregar la propiedades de la la super clase pero sin public
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,

    ){
       //llamamos al constructor de datos básicos a traves de la palabra reservada super!!
        super(name, desc, created_at, created_by) 
    }   

    override get fullDesc() {
        return 'Producto: ' + super.fullDesc
    }
}

//nueva instancia de la clase producto.
let producto1 = new Producto(
    100, 
    1, 
    'iPhone', 
    'Este es un smartphone', new Date()
    , 1
    )

//  observar que producto como objeto puede usar el método heredado full year
console.log(producto1.fullYear)

/***  Creando la clase CATEGORIA */

class Categoria extends DatosBasicos {
    //nueva propiedad productos: un arreglo de la clase de producto con valor inicial un arreglo vacio
    public productos: Producto[] = []
    constructor(
        //se deben agregar la propiedades de la la super clase pero sin public
        name: string,
        desc: string,
        created_at: Date,
        created_by: number,

    ){
       //llamamos al constructor de datos básicos a traves de la palabra reservada super!!
        super(name, desc, created_at, created_by) 
    }
    //mñetodo para agregar producto
    agregarProducto(producto: Producto) {
        this.productos.push(producto)
    } 

    override get fullDesc() {
        return 'Categoria: ' + ' - ' + super.fullDesc
    }
}

//creando nueva instancia de la clase categoría
let categoria = new Categoria('Celulares','',new Date(),1)

categoria.agregarProducto(producto1)

console.log(producto1.fullDesc)
