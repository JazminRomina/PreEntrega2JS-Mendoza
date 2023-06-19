let usuarioIngresar
let contraseniaIngresar
function crearCuenta(usuario, contrasenia){
    usuarioIngresar = prompt("Nombre de Usuario").toLowerCase()
    contraseniaIngresar = prompt("Ingrese su contraseña")
    if((usuarioIngresar != usuario) || (contraseniaIngresar != contrasenia)) {
        alert("Nombre de usuario o contraseña incorrectos, Por favor vuelva a intentar")
        crearCuenta(usuario, contrasenia)
    }
    else{
        alert("¡Bienvenido a nuestra tienda" + " " + usuario + "!" + " " + "Aquí vendemos productos inspirados en la serie de Pokémon.")
    }
}

let mensajeInicial = "¡Bienvenido! Para acceder al sitio primero debe crearse una cuenta."
alert(mensajeInicial)

let usuario
function verificarUsuario (){
    usuario = prompt("Ingrese un nombre de usuario (tiene que tener más de 2 caracteres)").toLowerCase().trim()
    if (usuario === ""){
        alert("¡Debes escribir un nombre de usuario!")
        verificarUsuario()
    }
    else if (usuario.length <=2){
        alert("¡Tu nombre de usuario debe tener más de 2 caracteres!")
        verificarUsuario()
    }
}
verificarUsuario()

let contrasenia
function verificarContrasenia (){
    contrasenia = prompt("Ingrese una contraseña (tiene que tener más de 5 caracteres)").trim()
    if (contrasenia === ""){
        alert("¡Debes escribir una contraseña!")
        verificarContrasenia()
    }
    else if(contrasenia.length <= 5){
        alert("¡La contraseña debe tener más de 5 caracteres!")
        verificarContrasenia()
    }
}
verificarContrasenia()

let mensajeIngresar = "¡Felicidades por crear su cuenta! ahora por favor, inicie sesión."
alert(mensajeIngresar)
crearCuenta(usuario, contrasenia)

let carrito = []
const productosPokemon = [
    {id:1, nombre: "Pokeball", precio:1000, categoria: "Juguetes"},
    {id:2, nombre: "zapatilla con diseño de Eevee", precio:4200, categoria: "Ropa"},
    {id:3, nombre: "remera con diseño de Popplio", precio:3500, categoria: "Ropa"},
    {id:4, nombre: "Pokemon Sol.3DS", precio:10000, categoria: "Juegos"},
    {id:5, nombre: "Figura tamaño mediano de Lucario", precio:3000, categoria: "Figura"},
    {id:6, nombre: "zapatilla con diseño de Snorlax", precio:4200, categoria: "Ropa"},
    {id:7, nombre: "Caja misteriosa", precio:2100, categoria: "Juguetes"},
    {id:8, nombre: "zapatilla con diseño de Pikachu", precio:4200, categoria: "Ropa"},
    {id:9, nombre: "Peluche de Eevee", precio:4000, categoria: "Peluches"},
    {id:10, nombre: "Pokemon Y.3DS", precio:10000, categoria: "Juegos"},
    {id:11, nombre: "remera con diseño de Litten", precio:3500, categoria: "Ropa"},
    {id:12, nombre: "Peluche de Pikachu", precio:4000, categoria: "Peluches"},
    {id:13, nombre: "remera con diseño de Rowlet", precio:3500, categoria: "Ropa"},
    {id:14, nombre: "Figura tamaño mediano de Charizard", precio:3000, categoria: "Figura"},
    {id:15, nombre: "Pokemon: Let's go eevee.3DS", precio:10000, categoria: "Juegos"},
    {id:16, nombre: "Figura tamaño mediano de Zoroark", precio:3000, categoria: "Figura"}
]

let mensajeMenu
function menuPokemon(){
    mensajeMenu = Number(prompt("Menú:\n 1. Catálogo\n 2. Productos por precio\n 3. Por Categoria\n 4. Carrito\n 5. Salir"))
    switch (mensajeMenu) {
        case 1:
            casoUno()
            break
        case 2:
            casoDos()
            break
        case 3:
            casoTres()
            break
        case 4:
            casoCuatro()
            break
        case 5:
            alert("Cerrando programa...")
            break
        default:
            alert("¡No seleccionaste ninguna de las opciones!")
            menuPokemon()
    }
}
menuPokemon()

function casoUno(){
    let catalogo = Number(prompt("Catalogo\n 1. Ver Productos\n 2. Regresar"))
    if(catalogo == 1){
        listaProductos(productosPokemon)
        casoUno()
    }
    else if(catalogo == 2){
        menuPokemon()
    }
    else{
        casoUno()
    }
}

function listaProductos(listado){
    let producto = ""
    listado.forEach(lista => {
    producto = producto + lista.id + " - " + lista.nombre + "\n"
    });
    alert(producto)
}

function casoDos(){
    let precioOrden = Number(prompt("Precio\n 1. Precios de menor a mayor\n 2. Precios de mayor a menor\n 3. Regresar"))
    if(precioOrden == 1){
        ordenAZ(productosPokemon, "precio", "A")
        casoDos()
    }
    else if(precioOrden == 2){
        ordenAZ(productosPokemon, "precio", "Z")
        casoDos()
    }
    else if(precioOrden == 3){
        menuPokemon()
    }
    else{
        casoDos()
    }
}

function ordenAZ(ordenar, propiedad, filtro){
    ordenar.sort((a, b) => {
        if (a[propiedad] < b[propiedad]) {
            return -1
        }
        else if (a[propiedad] > b[propiedad]) {
            return 1
        }
    })
    let orden = ""
    orden = ordenar.map(producto => "Nombre: " + producto.nombre + " Precio: " + producto.precio)
    if(filtro === "A"){
        alert(orden.join("\n"))
    }
    else if(filtro === "Z"){
        alert(orden.reverse().join("\n"))
    }
}

function casoTres(){
    let buscaCategorias = Number(prompt("Categorias\n 1. Juguetes\n 2. Ropa\n 3. peluches\n 4. Juegos\n 5. figuras\n 6. Regresar"))
    if (buscaCategorias === 1){
        categoriaSeleccionada(productosPokemon, "categoria", "Juguetes")
        casoTres()
    }
    else if (buscaCategorias === 2){
        categoriaSeleccionada(productosPokemon, "categoria", "Ropa")
        casoTres()
    }
    else if (buscaCategorias === 3){
        categoriaSeleccionada(productosPokemon, "categoria", "Peluches")
        casoTres()
    }
    else if (buscaCategorias === 4){
        categoriaSeleccionada(productosPokemon, "categoria", "Juegos")
        casoTres()
    }
    else if (buscaCategorias === 5){
        categoriaSeleccionada(productosPokemon, "categoria", "Figura")
        casoTres()
    }
    else if (buscaCategorias === 6){
        menuPokemon()
    }
    else{
        casoTres() 
    }
}

function categoriaSeleccionada(seleccion, categoria, nombre){
    let buscar = ""
    buscar = seleccion.filter(producto => producto[categoria] === nombre);
    mostrarProductos(buscar);
}
function mostrarProductos(productos){
    let listaProductos = ""
    listaProductos = productos.map(producto => "Nombre: " + producto.nombre + " - " + "Categoría: " + producto.categoria);
    alert(listaProductos.join("\n"));
}

function casoCuatro(){
    let mensajeCarrito = Number(prompt("Carrito\n 1. Agregar al carrito\n 2. Productos en el carrito\n 3. Precio Total\n 4. Comprar\n 5. Regresar"))
    if (mensajeCarrito === 1){
        comprar()
        casoCuatro()
    }
    else if (mensajeCarrito === 2){
        verCarrito()
        casoCuatro()
    }
    else if (mensajeCarrito === 3){
        precioTotal()
        casoCuatro()
    }
    else if (mensajeCarrito === 4){
        comprarCarrito()
    }
    else if (mensajeCarrito === 5){
        menuPokemon()
    }
    else{
        casoCuatro()
    }
}

function comprar(){
    let opciones = ""
    productosPokemon.forEach(op => {
        opciones = opciones + op.id + " - " + op.nombre + "\n"
    })
    let mensajeCompra = Number(prompt("Seleccione uno de los productos para poner en el carrito:\n" + opciones))
    let buscarEnBolsa = productosPokemon.find(objeto => objeto.id === mensajeCompra)
    let posicionBolsa = carrito.findIndex(objeto => objeto.id === buscarEnBolsa.id)
    if(posicionBolsa === -1){
        carrito.push({
            id: buscarEnBolsa.id,
            nombre: buscarEnBolsa.nombre,
            precioUnitario: buscarEnBolsa.precio,
            unidades: 1,
            subtotal: buscarEnBolsa.precio
        })
    } else {
        carrito[posicionBolsa].unidades++
        carrito[posicionBolsa].subtotal = carrito[posicionBolsa].precioUnitario * carrito[posicionBolsa].unidades
    }
}

function precioTotal(){
    let precio = carrito.filter(dinero => dinero.subtotal)
    let precioTot = precio.reduce((acum, registro) => acum + registro.subtotal, 0)
    alert("Total a gastar: " + precioTot)
}

function verCarrito(){
    let pcarrito = ""
    carrito.forEach(lista => {
    pcarrito = pcarrito + lista.nombre + " - " + lista.subtotal + "\n"
    });
    alert(pcarrito)
}

function comprarCarrito(){
    alert("¡Gracias por venir a nuestra tienda! ¡Vuelva pronto!")
}