import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase"; // Asegúrate de importar la configuración de Firebase

const categories = [
  {
    name: "Café",
    products: [
      { id: 1, name: "Café Colombiano", price: 12 },
      { id: 2, name: "Café Árabe", price: 10 },
      { id: 3, name: "Café del Mozambique", price: 15 },
      { id: 4, name: "Café Instantáneo", price: 8 },
      { id: 5, name: "Café en Granos", price: 20 },
    ],
  },
  {
    name: "Panificación",
    products: [
      { id: 6, name: "Croissant", price: 5 },
      { id: 7, name: "Sconns", price: 4 },
      { id: 8, name: "Galleta de Chocolate", price: 3 },
      { id: 9, name: "Cheese Cake", price: 10 },
      { id: 10, name: "Torta de Jamón", price: 12 },
    ],
  },
  {
    name: "Accesorios",
    products: [
      { id: 11, name: "Taza Térmica", price: 18 },
      { id: 12, name: "Set de Cucharitas", price: 7 },
      { id: 13, name: "Taza de Cerámica", price: 9 },
      { id: 14, name: "Colador", price: 4 },
      { id: 15, name: "Cafetera", price: 40 },
    ],
  },
];

export const addProductsToFirestore = async () => {
  try {
    for (const category of categories) {
      // 1️⃣ Creamos un documento para cada categoría
      const categoryRef = doc(db, "products", category.name);
      await setDoc(categoryRef, { name: category.name });

      // 2️⃣ Agregamos cada producto como un documento dentro de la subcolección "items"
      for (const product of category.products) {
        const productRef = doc(collection(categoryRef, "items"), product.id.toString());
        await setDoc(productRef, product);
      }
    }
    console.log("✅ Productos añadidos correctamente a Firestore");
  } catch (error) {
    console.error("❌ Error al agregar productos:", error);
  }
};
