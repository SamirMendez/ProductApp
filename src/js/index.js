// A continuacion vamos a crear funciones que se ejecuten
// cuando cargue la pagina y su trabajo sera estar pendiente
// a cuando demos click sobre un elemento de nuestro html

const presst = document.querySelector('#presentacion')
const cardContainer = document.querySelector('#card-container')
const scrollToSlide1 = document.querySelector('#btm-1');
const slide2 = document.querySelector('#btm-2');

$('#home').click('slide.bs.carousel', function () {
    $('#myCarousel').carousel(0);
})

$('#categoriesButton').click('slide.bs.carousel', function () {
    $('#myCarousel').carousel(1);
})

// location.href = '#carouselExampleControls';
$('#productButton').click('slide.bs.carousel', function () {
    $('#myCarousel').carousel(2);
})


window.onload = () => {
    // Funcion para estar pendiente cuando se hace click sobre el boton de las categorias
    const categoryButton = document.getElementById('categoriesButton');
    // location.href = '#carouselExampleControls';

    // Funcion para estar pendiente cuando se hace click sobre el boton de las categorias
    // Funcion para estar pendiente cuando se hace click sobre el boton de los productos
    const productButton = document.getElementById('productButton');
    // productButton.addEventListener('click', () => {
    //     location.href = 'src/pages/products.html';
    // });
    // Funcion para estar pendiente cuando se hace click sobre el boton de los productos

}