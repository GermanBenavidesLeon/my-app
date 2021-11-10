
const Productos = [
    {id: 1, name: "Nueces", categoria:'Frutos secos', description: 'La nuez es el fruto del nogal, de forma redondeada u ovoide, con una cáscara dura y rugosa de color pardo rojiza. ... Además de ser uno de los frutos secos más apreciados por su agradable sabor, es uno de los más ricos en aceite por lo que se usan para su obtención.', price: 400, imagen:'https://siemprejoven.es/Imagenes.ashx?FileName=/Imagenes/Contenidos/259/Cabecera/nueces-cerradas.jpg&xCrop=600&yCrop=349&xCoord=0&yCoord=36&xImage=600&yImage=421&xOrigCrop=688&yOrigCrop=400&Crop=true&Format=jpg'},
    {id: 2, name: "Mani", categoria:'Frutos secos', description: 'También conocido como cacahuate o cacahuete, el maní es una planta apreciada sobre todo por sus semillas comestibles.', price: 200, imagen:'https://www.saborusa.com/wp-content/uploads/2019/10/Sabias-que-el-mani-es-un-super-alimento-Foto-destacada.png'}, 
    {id: 3, name: "Castañas de caju", categoria:'Frutos secos', description: 'El cajú o castañas de cajú, es un fruto seco que se consume cada vez de manera más amplia en la alimentación de las personas. ', price: 300, imagen:'https://www.dieteticasoler.com.ar/productos/1526054711/01_1526054711.jpg'},
    {id: 4, name: 'Almendras', categoria:'Frutos secos', description: 'La almendra es la semilla comestible del fruto del almendro dulce, de color blanco brillante envuelta con una cubierta marrón rojiza.', price: 500, imagen:'https://static1.abc.es/media/bienestar/2020/09/30/almendras-ficha-k4CF--620x349@abc.jpg'},
    {id: 5, name: 'Pasas', categoria:'Frutos secos', description: 'Una pasa es una fruta seca obtenida del proceso de secado de una uva, con el objetivo de disminuir su humedad para lograr así su conservación por un periodo prolongado. ', price: 300, imagen:'https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2018/10/cuantos-gramos-de-pasas-de-uva-hay-que-comer-por-dia.jpg'},
    {id: 6, name: 'Arandanos secos', categoria:'Frutos secos', description: 'El arándano deshidratado se presenta en forma redonda, con una textura arrugada, uniforme en tamaño, aspecto brillante y color marrón rojizo. Tiene un sabor y un olor característicos del producto.', price: 450, imagen:'https://kipa.warmibusiness.com/wp-content/uploads/2020/09/arandanos.jpg'}
];


export const getFetch = new Promise((resolve, reject)=>{
    const condition=true
     if(condition) {
        setTimeout(()=>{
            resolve(Productos)
        }, 2000)
     } else{
         setTimeout(()=>{
           reject('404 not found')
         }, 2000)
     }
 })
 