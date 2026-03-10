// ============================================================
// 🔧 FONCTIONS UTILITAIRES
// ============================================================
//
// Ce fichier contient des petites fonctions réutilisables.
//
// Pourquoi un fichier séparé ?
//   → Pour ne pas tout mélanger dans un seul gros fichier.
//   → Ces fonctions sont faciles à tester car elles n'ont pas besoin
//     d'un serveur pour fonctionner.
//
// Comment ça marche ?
//   1. On crée des fonctions ici
//   2. On les "exporte" avec module.exports (en bas du fichier)
//   3. On les "importe" dans d'autres fichiers avec require()
//
// Documentation utile :
//   - Les fonctions en JS : https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide/Functions
//   - Les tableaux en JS  : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
// ============================================================

// ────────────────────────────────────────────────────────────
// FONCTION 1 : Générer le prochain ID
// ────────────────────────────────────────────────────────────
//
// Quand on crée un nouveau produit, il faut lui donner un ID unique.
// Cette fonction regarde tous les IDs existants et retourne le suivant.
//
// Exemple concret :
//   Si on a les produits avec les IDs [1, 2, 5]
//   → Le prochain ID sera 6 (le plus grand + 1)
//
//   Si le tableau est vide []
//   → Le prochain ID sera 1
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPELS JAVASCRIPT UTILES :
//
//   items.length → donne le nombre d'éléments dans un tableau
//     [10, 20, 30].length → 3
//     [].length → 0
//
//   items.map(item => item.id) → crée un nouveau tableau avec juste les IDs
//     [{id: 1, name: "A"}, {id: 3, name: "B"}].map(item => item.id) → [1, 3]
//
//   Math.max(1, 3, 5) → retourne le plus grand nombre → 5
//
//   Math.max(...tableau) → le "..." (spread) étale le tableau :
//     Math.max(...[1, 3, 5]) revient à écrire Math.max(1, 3, 5)
// ────────────────────────────────────────────────────────────
const generateNextId = (items) => {
  // ✅ À COMPLÉTER ICI

  // Étape 1 : Si le tableau est vide, retourner 1
  // if (items.length === 0) return 1;

  // Étape 2 : Récupérer tous les IDs dans un nouveau tableau
  // const ids = items.map(item => item.id);
  //   → par exemple : [{id:1}, {id:5}] devient [1, 5]

  // Étape 3 : Trouver le plus grand ID et ajouter 1
  // return Math.max(...ids) + 1;
  //   → Math.max(1, 5) + 1 = 6
};

// ────────────────────────────────────────────────────────────
// FONCTION 2 : Filtrer les produits par catégorie
// ────────────────────────────────────────────────────────────
//
// On veut pouvoir chercher uniquement les produits d'une catégorie.
// Par exemple : "Donne-moi seulement les produits audio"
//
// Exemple concret :
//   filterByCategory(tousLesProduits, "audio")
//   → retourne seulement les produits dont la catégorie est "audio"
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPEL JAVASCRIPT :
//
//   Array.filter() → crée un nouveau tableau avec seulement les éléments
//   qui passent un test (une condition) :
//
//     [1, 2, 3, 4, 5].filter(nombre => nombre > 3)
//     → [4, 5]    (on garde seulement les nombres plus grands que 3)
//
//     produits.filter(p => p.category === "audio")
//     → garde seulement les produits dont la catégorie est "audio"
//
//   Le "===" c'est la comparaison stricte (est-ce que c'est EXACTEMENT pareil ?)
// ────────────────────────────────────────────────────────────
const filterByCategory = (products, category) => {
  // ✅ À COMPLÉTER ICI — une seule ligne suffit !

  // return products.filter(product => product.category === category);
};

// ────────────────────────────────────────────────────────────
// FONCTION 3 : Vérifier qu'un produit est valide
// ────────────────────────────────────────────────────────────
//
// Avant d'ajouter un produit, on doit vérifier que les données
// envoyées par l'utilisateur sont correctes.
//
// Un produit est valide si :
//   ✓ Il a un "name" (texte non vide)
//   ✓ Il a un "price" (nombre supérieur à 0)
//   ✓ Il a une "category" (texte non vide)
//
// La fonction retourne un objet avec 2 propriétés :
//   { valid: true, errors: [] }                         ← tout est OK
//   { valid: false, errors: ["Le nom est requis", ...] } ← problèmes trouvés
//
// Exemple :
//   validateProduct({ name: "iPhone", price: 999, category: "smartphone" })
//   → { valid: true, errors: [] }
//
//   validateProduct({ name: "", price: -5, category: "" })
//   → { valid: false, errors: ["Le nom est requis", "Le prix doit être un nombre positif", "La catégorie est requise"] }
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPELS JAVASCRIPT :
//
//   !variable → "est-ce que la variable est vide/null/undefined/false ?"
//     !"" → true (une chaîne vide est considérée comme "fausse")
//     !null → true
//     !"iPhone" → false (une chaîne non vide est "vraie")
//
//   typeof variable → retourne le type de la variable sous forme de texte
//     typeof 42 → "number"
//     typeof "hello" → "string"
//
//   tableau.push("texte") → ajoute un élément à la fin du tableau
//     const arr = []; arr.push("erreur 1"); → arr vaut ["erreur 1"]
//
//   .trim() → enlève les espaces au début et à la fin
//     "  hello  ".trim() → "hello"
//     "   ".trim() → "" (chaîne vide)
// ────────────────────────────────────────────────────────────
const validateProduct = (product) => {
  // On crée un tableau vide pour collecter les erreurs
  const errors = [];

  // ✅ À COMPLÉTER ICI

  // Vérification du nom :
  // if (!product.name || product.name.trim() === "") {
  //   errors.push("Le nom est requis");
  // }

  // Vérification du prix :
  // if (product.price === undefined || typeof product.price !== "number" || product.price <= 0) {
  //   errors.push("Le prix doit être un nombre positif");
  // }

  // Vérification de la catégorie :
  // if (!product.category || product.category.trim() === "") {
  //   errors.push("La catégorie est requise");
  // }

  // On retourne le résultat :
  // - valid = true si le tableau d'erreurs est vide (length === 0)
  // - valid = false s'il y a au moins une erreur
  return {
    valid: errors.length === 0,
    errors,
  };
};

// ────────────────────────────────────────────────────────────
// FONCTION 4 : Formater un prix en euros
// ────────────────────────────────────────────────────────────
//
// Transforme un nombre en texte avec le symbole €.
// On utilise la virgule (format français) au lieu du point.
//
// Exemple :
//   formatPrice(29.99) → "29,99 €"
//   formatPrice(1000)  → "1000,00 €"
//   formatPrice(0)     → "0,00 €"
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPELS JAVASCRIPT :
//
//   .toFixed(2) → arrondit un nombre à 2 décimales ET le transforme en texte
//     (29.9).toFixed(2) → "29.90"
//     (1000).toFixed(2) → "1000.00"
//
//   .replace(".", ",") → remplace le premier "." par ","
//     "29.90".replace(".", ",") → "29,90"
//
//   "texte1" + "texte2" → concatène (colle) les 2 textes
//     "29,90" + " €" → "29,90 €"
// ────────────────────────────────────────────────────────────
const formatPrice = (price) => {
  // ✅ À COMPLÉTER ICI — une seule ligne suffit !

  // return price.toFixed(2).replace(".", ",") + " €";
};

// ────────────────────────────────────────────────────────────
// EXPORT
// ────────────────────────────────────────────────────────────
//
// Cette ligne rend nos fonctions accessibles aux autres fichiers.
// Sans elle, personne ne peut utiliser nos fonctions.
//
// Dans un autre fichier, on fera :
//   const { generateNextId, formatPrice } = require("./utils/helpers");
//
module.exports = {
  generateNextId,
  filterByCategory,
  validateProduct,
  formatPrice,
};
