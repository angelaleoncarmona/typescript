// Variables
var plantillaContent = document.querySelector('#templateArticulo').content;
var articuloPlantilla = plantillaContent.firstElementChild;
var miMain = document.querySelector('#main');
var misNoticias = [
    {
        titulo: 'Las fallas se guardan',
        autor: 'Yo',
        contenido: 'Se apaga la chispa',
        publicado: true
    },
    {
        titulo: 'Las clases online son mejores',
        autor: 'Otro',
        contenido: 'Mola ver los compis y estar en ropa interior',
        publicado: true
    },
    {
        titulo: 'Los ordenadores conquistan la informática',
        autor: 'Pepe',
        contenido: 'Lo dicho',
        publicado: false
    }
];
// Funciones
function filtrarPublicadas(misNoticias) {
    return misNoticias.filter(function (miNoticia) {
        return miNoticia.publicado;
    });
}
function contarMinutos(texto) {
    return Math.ceil(texto.split(' ').length / 60);
}
function dibujar() {
    filtrarPublicadas(misNoticias).forEach(function (noticia) {
        // Clonamos la plantilla
        var nuevoArticulo = articuloPlantilla.cloneNode(true);
        //Personalizo informacion
        nuevoArticulo.querySelector('.titulo').textContent = noticia.titulo.concat(' - ', contarMinutos(noticia.contenido).toString(), 'min');
        nuevoArticulo.querySelector('.contenido').textContent = noticia.contenido;
        nuevoArticulo.querySelector('.autor').textContent = noticia.autor;
        miMain.appendChild(nuevoArticulo);
    });
}
// Eventos
// Inicio
dibujar();
