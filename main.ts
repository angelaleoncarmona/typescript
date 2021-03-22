// Variables
const plantillaContent: any =  (<HTMLMetaElement> document.querySelector('#templateArticulo')).content;
const articuloPlantilla = plantillaContent.firstElementChild;
const miMain: HTMLElement = document.querySelector('#main');
interface Noticia {
    titulo: string,
    autor: string,
    contenido: string,
    publicado: boolean
}
const misNoticias: Noticia[] = [
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

]
// Funciones

function filtrarPublicadas(misNoticias: Noticia[]): Noticia[] {
    return misNoticias.filter(function (miNoticia) {
        return miNoticia.publicado
    })
}

function contarMinutos(texto: string): number {
    return Math.ceil(texto.split(' ').length / 60)
}



function dibujar(): void {
    filtrarPublicadas(misNoticias).forEach(function(noticia) {
        // Clonamos la plantilla
        const nuevoArticulo = articuloPlantilla.cloneNode(true);
        //Personalizo informacion
        nuevoArticulo.querySelector('.titulo').textContent = noticia.titulo.concat(' - ', contarMinutos(noticia.contenido).toString() ,'min');
        nuevoArticulo.querySelector('.contenido').textContent = noticia.contenido;
        nuevoArticulo.querySelector('.autor').textContent = noticia.autor;
        miMain.appendChild(nuevoArticulo);
    })

}

// Eventos

// Inicio

dibujar()
