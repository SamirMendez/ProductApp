// A continuacion vamos a crear funciones que se ejecuten
// cuando cargue la pagina y su trabajo sera estar pendiente
// a cuando demos click sobre un elemento de nuestro html

window.onload = () => {
    // Funcion para estar pendiente cuando se hace click sobre el boton de las categorias
    const categoryButton = document.getElementById('categoriesButton');
    categoryButton.addEventListener('click', () => {
        location.href = 'src/pages/categories.html';
    });
    const dataButton = document.getElementById('dataButton');
    dataButton.addEventListener('click', () => {
        location.href = 'src/pages/categories.html';
    });
    // Funcion para estar pendiente cuando se hace click sobre el boton de las categorias
    // Funcion para estar pendiente cuando se hace click sobre el boton de los productos
    const productButton = document.getElementById('productButton');
    productButton.addEventListener('click', () => {
        location.href = 'src/pages/products.html';
    });
    // Funcion para estar pendiente cuando se hace click sobre el boton de los productos
}