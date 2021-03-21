class Category {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.id = Date.now()
  }
}
class Product {
  constructor(name, stock, date, description, category) {
    this.name = name;
    this.stock = stock;
    this.date = date;
    this.description = description;
    this.category = category;
  }
}

let products = JSON.parse(localStorage.getItem('products'));
if (products == null) {
  products = [];
}
let categories = JSON.parse(localStorage.getItem('categories'));
if (categories == null) {
  categories = [];
}


const CategoryModal = new Vue({
  el: '#ModalAgregarCategoria',
  data: {
    newCategory: new Category(),
    categories: categories
  },
  methods: {
    addCategory: function () {
      this.categories.push(this.newCategory)
      this.newCategory = new Category()
      localStorage.setItem('categories', JSON.stringify(this.categories));
    }
  }
})

const CategoryTable = new Vue({
  el: '#CategoryTable',
  data: {
    categories: categories
  },
  methods: {
    deleteItem: function (index) {
      this.categories.splice(index, 1);
      localStorage.setItem('categories', JSON.stringify(this.categories));
    },
    editItem: function (index) {
      console.log('ss')
      $('#ModalAgregarCategoria').modal('show')
    }
  }
})

const ModalProducto = new Vue({
  el: '#ModalProducto',
  data: {
    newProduct: new Product(),
    categories: categories,
    products: products
  },
  methods: {
    addProduct: function () {
      this.products.push(this.newProduct)
      this.newProduct = new Product()
      localStorage.setItem('products', JSON.stringify(this.products));
    }
  },
})

const ProductsTable = new Vue({
  el: '#productosTable',
  data: {
    productsList: products,
  },


})

