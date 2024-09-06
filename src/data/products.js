// Datos de products con identificadores únicos, categorías asignadas y propiedad de azúcar
const products = [
  {
    id: 1,
    nombre: "Espresso",
    descripcion:
      "Un café fuerte y concentrado hecho al forzar agua caliente a través de granos de café finamente molidos.",
    precio: 2.5,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 4, // Espresso
    azucar: false,
    rating: 4.5,
  },
  {
    id: 2,
    nombre: "Americano",
    descripcion:
      "Un café suave y ligero hecho con una o dos partes de espresso y agua caliente.",
    precio: 2.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 5, // Americano
    azucar: false,
    rating: 4.0,
  },
  {
    id: 3,
    nombre: "Cappuccino",
    descripcion:
      "Un café italiano clásico hecho con partes iguales de espresso, leche vaporizada y espuma de leche.",
    precio: 3.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 6, // Cappuccino
    azucar: false,
    rating: 4.2,
  },
  {
    id: 4,
    nombre: "Latte",
    descripcion:
      "Un café suave hecho con espresso y una cantidad generosa de leche vaporizada.",
    precio: 3.5,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 7, // Latte
    azucar: false,
    rating: 4.7,
  },
  {
    id: 5,
    nombre: "Robusta",
    descripcion:
      "Un café con un sabor fuerte y terroso, conocido por su alto contenido de cafeína.",
    precio: 2.75,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 1, // Robusta
    azucar: false,
    rating: 4.3,
  },
  {
    id: 6,
    nombre: "Liberica",
    descripcion:
      "Un café con un sabor único, a menudo con matices afrutados o florales.",
    precio: 3.25,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 2, // Liberica
    azucar: false,
    rating: 4.6,
  },
  {
    id: 7,
    nombre: "Excelsa",
    descripcion:
      "Un café con un sabor complejo y ácido, a menudo utilizado en mezclas para agregar profundidad.",
    precio: 3.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 3, // Excelsa
    azucar: false,
    rating: 4.4,
  },
  {
    id: 8,
    nombre: "Moka",
    descripcion:
      "Un café aromatizado con chocolate y vainilla, ideal para los amantes de los sabores dulces.",
    precio: 4.25,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 4, // Espresso
    azucar: true,
    rating: 4.8,
  },
];

// Duplicar cada producto con y sin azúcar
const productsWithSugar = products.map((producto) => {
  return {
    ...producto,
    id: producto.id + products.length,
    nombre: producto.nombre,
    azucar: true,
  };
});


//best selling products
const bestSellingProducts = [
  {
    id: 1,
    nombre: "Espresso",
    descripcion:
      "Un café fuerte y concentrado hecho al forzar agua caliente a través de granos de café finamente molidos.",
    precio: 2.5,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 4, // Espresso
    azucar: false,
    rating: 4.5,
  },
  {
    id: 2,
    nombre: "Americano",
    descripcion:
      "Un café suave y ligero hecho con una o dos partes de espresso y agua caliente.",
    precio: 2.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 5, // Americano
    azucar: false,
    rating: 4.0,
  },
  {
    id: 3,
    nombre: "Cappuccino",
    descripcion:
      "Un café italiano clásico hecho con partes iguales de espresso, leche vaporizada y espuma de leche.",
    precio: 3.0,
    imagen: "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg",
    categoriaId: 6, // Cappuccino
    azucar: false,
    rating: 4.2,
  },
]

// Combinar los products originales con los products con y sin azúcar
const allProducts = [
  ...products,
  ...productsWithSugar,
];

// Ahora tienes todos los products con y sin azúcar para cada café.

export { allProducts, bestSellingProducts };
