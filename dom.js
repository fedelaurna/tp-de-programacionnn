//Buscar elemento h1 y guardar en variable
let titulo = document.querySelector('h1')
//modificar texto del elemento h1


let imagen = document.querySelector('.imagen')


let boton = document.querySelector('#cambiarImagen')

let imagenCambiada = false;

boton.onclick = function () {
    if (imagenCambiada == false) {
        titulo.innerText = 'Hola como estan'
        imagen.src = 'https://sakoteacasa.com.ar/wp-content/uploads/2018/05/31620.jpg'
        imagenCambiada = true
    }else{
        titulo.innerText = 'DOM' 
        imagen.src = 'https://www.losandes.com.ar/resizer/flZBRU0x5cqahizPYN75eLEVMQQ=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/6ECEOA47QJH3LPLTJ6NG5JWBPU.jpg'
        imagenCambiada = false
    } 

}
//guardamos el elemento button #rojo en la variable botonRojo
let botonRojo = document.querySelector('#rojo')
let botonAzul = document.querySelector('#azul')
let botonVerde = document.querySelector('#verde')

//Programamos el evento on click
botonRojo.onclick = function(){
    //del elemento titulo que es un h1, cambiamos los estilos, en particular el color a rojo
    titulo.style.color = "red"
}
