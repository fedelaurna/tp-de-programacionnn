
let cambio = false
let auto = document.querySelector('#carImage')
let textito = document.querySelector('#ford67')
function cambiarImagen() {
 if(cambio == false) {
  auto.src = 'https://platform.cstatic-images.com/xlarge/in/v2/stock_photos/516cbef1-9373-4c19-933f-5e8f6c63cee2/dc27bed5-7f5d-4100-bf09-ccce032d022f.png'
  auto.alt = 'Nuevo Mustang';
  textito.innerHTML = 'l Ford Mustang 2021 está disponible en cinco niveles de equipamiento principales: EcoBoost, EcoBoost Premium, GT, GT Premium y Mach 1. El estilo de carrocería estándar es un cupé de dos puertas. También se ofrece una versión convertible con capota de tela plegable en todos los modelos excepto en el Mach 1.'
  cambio = true
}else
{
 textito.innerHTML = 'El Ford Mustang 1967 pertenece a la primera generación del Ford Mustang (1964-1973), una línea de vehículos que entró de lleno en los definidos muscle car, automóviles de tamaño medio-grande, con rasgos deportivos y musculosos, atributos instalados en todos los modelos del Ford Mustang Clásico, no solo en el Ford Mustang del 67, y que uno observa cuando ve el vehículo a la vez que lee los datos de Ford Mustang 1967 ficha técnica.' 
  auto.src = 'https://i.pinimg.com/originals/a3/dc/a8/a3dca83531a5c40ff95ba71eff4867f2.png'
cambio  = false
}
}



