// Crear funcion de escucha para capturar los datos del formulario
// Crear funcion de escucha para capturar los datos del formulario
window.addEventListener('load', () => {
    readLocalStorage();
    document.getElementById('productsButton').addEventListener('click', () => {
        // Extrayendo datos del formulario
        const $name = document.getElementById('NombreProducto').value;
        const $stock = document.getElementById('StockProducto').value;
        const $deadDate = document.getElementById('fechaProducto').value;
        const $description = document.getElementById('descriptionProducto').value;
        const $category = document.getElementById('categoriesSelect').value;
        // Extrayendo datos del formulario
        const dataToSave = {
            name: $name,
            stock: $stock,
            deadDate: $deadDate,
            description: $description,
            category: $category,
            id: Date.now(),
        };
        saveProduct(dataToSave);
        console.log(dataToSave);

    });
});
// Crear funcion de escucha para capturar los datos del formulario
// Funcion para leer elementos iniciales del localstorage
function readLocalStorage() {
    // Extrayendo datos del local storage
    const $categoriesSaved = localStorage.getItem('categoryList');
    console.log($categoriesSaved);
    const $productsSaved = localStorage.getItem('productsList');
    if ($categoriesSaved != null || $categoriesSaved != undefined) {
        const convertedData = JSON.parse($categoriesSaved);
        console.log(convertedData);
        categoriesListing(convertedData);
    }
    // Extrayendo datos del local storage
}
// Funcion para leer elementos iniciales del localstorage
// Funcion para crear un elemento en el DOM (HTML)
function createHTMLElement(elementName) {
    return document.createElement(elementName);
}
// Funcion para crear un elemento en el DOM (HTML)
// Funcion para listar las categorias
function categoriesListing(categoryData) {
    alert("Si")
    // Creando una referencia al elemento del DOM con el ID
    const categoriesSelect = document.getElementById('categoriesSelect');
    categoriesSelect.innerHTML = '';
    // Creando una referencia al elemento del DOM con el ID
    for (let index = 0; index < categoryData.length; index++) {
        console.log(index);
        // Creando elementos en el DOM
        const option = createHTMLElement('option');
        option.innerHTML = categoryData[index].name;
        option.setAttribute('value', `${categoryData[index].name}`);
        categoriesSelect.appendChild(option);
        // Creando elementos en el DOM
    }
    // Funcion para guardar un producto en el web storage
}
// Funcion para listar las categorias
function saveProduct(dataToSave) {
    // Determinando si existe un elemento el el web storage
    let productList = [];
    const productSaved = localStorage.getItem('productList');
    if (productSaved == null || productSaved == undefined) {
        productList.push(dataToSave);
        localStorage.setItem('productList', JSON.stringify(productList));
        alert(`El producto ${dataToSave.name} ha sido creada exitosamente`);
    } else {
        productList = JSON.parse(localStorage.getItem('productList'));
        productList.push(dataToSave);
        localStorage.setItem('productList', JSON.stringify(productList));
        console.log(productList);
    }
    // readLocalStorage();
    // Determinando si existe un elemento el el web storage

}
// Funcion para guardar un producto en el web storage