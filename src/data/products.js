// ============================================================
// 📦 DONNÉES MOCKÉES — Fausse base de données
// ============================================================
//
// En vrai projet, ces données viendraient d'une base de données
// (PostgreSQL, MongoDB, MySQL...).
//
// Ici on utilise un simple tableau JavaScript en mémoire.
// ⚠️  Les données sont réinitialisées à chaque redémarrage du serveur.
//
// Documentation :
//   - Array : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
//   - JSON  : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON
// ============================================================

/**
 * Chaque produit a la structure suivante :
 * {
 *   id: number,        → Identifiant unique
 *   name: string,      → Nom du produit
 *   price: number,     → Prix en euros
 *   category: string   → Catégorie du produit
 * }
 */

let products = [
  {
    id: 1,
    name: "MacBook Pro 14",
    price: 2399.99,
    category: "informatique",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 1199.99,
    category: "smartphone",
  },
  {
    id: 3,
    name: "AirPods Pro 2",
    price: 279.99,
    category: "audio",
  },
  {
    id: 4,
    name: "Samsung Galaxy S24",
    price: 899.99,
    category: "smartphone",
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 349.99,
    category: "audio",
  },
];

// On exporte le tableau pour pouvoir l'utiliser dans les contrôleurs
module.exports = products;
