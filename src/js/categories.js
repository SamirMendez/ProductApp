
// Crear funcion de escucha para capturar los datos del formulario
window.onload = () => {
    readLocalStorage();
    document.getElementById('categoryButton').addEventListener('click', () => {
        // Extrayendo datos del formulario
        const $name = document.getElementById('NombreCategoria').value;
        const $description = document.getElementById('CategoriaDescripcion').value;
        // Extrayendo datos del formulario
        const dataToSave = {
            name: $name,
            description: $description,
            id: Date.now(),
        };
        saveCategory(dataToSave);
    });
}
// Crear funcion de escucha para capturar los datos del formulario
// Funcion para leer elementos iniciales del localstorage
function readLocalStorage() {
    // Extrayendo datos del local storage
    const $categoriesSaved = localStorage.getItem('categoryList');
    if ($categoriesSaved != null || $categoriesSaved != undefined) {
        const convertedData = JSON.parse($categoriesSaved);
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
    // Creando una referencia al elemento del DOM con el ID
    const categoryBody = document.getElementById('categoryBody');
    categoryBody.innerHTML = '';
    // Creando una referencia al elemento del DOM con el ID
    for (let index = 0; index < categoryData.length; index++) {
        // Creando elementos td
        const tableCell1 = createHTMLElement('td');
        const tableCell2 = createHTMLElement('td');
        const tableCell3 = createHTMLElement('td');
        const tableCell4 = createHTMLElement('td');
        // Creando elementos td
        // Asignando valores a los elementos td
        tableCell1.innerHTML = categoryData[index].name;
        tableCell2.innerHTML = categoryData[index].id;
        tableCell3.innerHTML = categoryData[index].description;
        tableCell1.setAttribute('class', 'text-center');
        tableCell2.setAttribute('class', 'text-center');
        tableCell3.setAttribute('class', 'text-center');
        // Asignando valores a los elementos td
        // Creando elementos tr
        const tableRow = createHTMLElement('tr');
        // Creando elementos tr
        // Creando boton
        const deleteButton = createHTMLElement('button');
        deleteButton.setAttribute('class', 'btn btn-block text-center text-white bg-danger');
        deleteButton.setAttribute('onclick', `deleteCategory(${categoryData[index].id})`)
        deleteButton.innerHTML = 'Eliminar';
        // Creando boton
        // Introduciendo elementos uno dentro de otro
        tableCell4.appendChild(deleteButton);
        tableRow.appendChild(tableCell1);
        tableRow.appendChild(tableCell2);
        tableRow.appendChild(tableCell3);
        tableRow.appendChild(tableCell4);
        categoryBody.appendChild(tableRow)
        // Introduciendo elementos uno dentro de otro
        console.log(tableRow);
    }
}
// Funcion para listar las categorias
// Funcion para guardar una categoria en el web storage
function saveCategory(dataToSave) {
    // Determinando si existe un elemento el el web storage
    let categoryList = [];
    const categoriesSaved = localStorage.getItem('categoryList');
    if (categoriesSaved == null || categoriesSaved == undefined) {
        categoryList.push(dataToSave);
        localStorage.setItem('categoryList', JSON.stringify(categoryList));
        alert(`La categoría ${dataToSave.name} ha sido creada exitosamente`);
    } else {
        categoryList = JSON.parse(localStorage.getItem('categoryList'));
        categoryList.push(dataToSave);
        localStorage.setItem('categoryList', JSON.stringify(categoryList));
        console.log(categoryList);
    }
    readLocalStorage();
    // Determinando si existe un elemento el el web storage

}
// Funcion para guardar una categoria en el web storage
// Funcion para eliminar una categoria
function deleteCategory (id) {
    const $categoriesSaved = JSON.parse(localStorage.getItem('categoryList'));
    const categoryPosition = $categoriesSaved.map((categoryObject) => { return categoryObject.id }).indexOf(id);
    console.log($categoriesSaved);
    console.log(categoryPosition);
    if (categoryPosition >= 0) {
        alert(`La categoría ${$categoriesSaved[categoryPosition].name} ha sido borrada exitosamente`);
        $categoriesSaved.splice(categoryPosition);
        localStorage.setItem('categoryList', JSON.stringify($categoriesSaved));
    } else {
        alert('Por una extraña razon este elemento no se encuentra en nuestro Local Storage, por favor recargue su pagina para actualizar la vista');
    }
    readLocalStorage();
}
// Funcion para eliminar una categoria
