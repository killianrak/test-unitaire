// ============================================================
// 🧪 TESTS UNITAIRES — Tester les fonctions utilitaires
// ============================================================
//
// C'EST QUOI UN TEST UNITAIRE ?
//
//   Un test unitaire vérifie qu'UNE SEULE fonction marche correctement.
//   C'est comme vérifier qu'une pièce de Lego est correcte avant
//   d'assembler tout le château.
//
// COMMENT ÇA MARCHE ?
//
//   On utilise Jest, un outil qui lance nos tests automatiquement.
//   Commande : npm test
//
// LA STRUCTURE D'UN TEST (3 étapes) :
//
//   1. ARRANGE (Préparer) → On prépare les données d'entrée
//   2. ACT (Agir)         → On appelle la fonction à tester
//   3. ASSERT (Vérifier)  → On vérifie que le résultat est correct
//
// LES MOTS-CLÉS DE JEST :
//
//   describe("nom du groupe", () => { ... })
//     → Regroupe plusieurs tests qui testent la même chose
//     → C'est juste pour organiser, ça ne fait rien de spécial
//
//   test("description du test", () => { ... })
//     → UN test. La description explique ce qu'on vérifie.
//     → Si le test échoue, Jest affiche cette description.
//
//   expect(résultat).toBe(valeur_attendue)
//     → "Je m'attends à ce que 'résultat' soit égal à 'valeur_attendue'"
//     → Si ce n'est pas le cas, le test ÉCHOUE (rouge dans le terminal)
//
// Documentation :
//   - Jest : https://jestjs.io/fr/docs/getting-started
//   - expect() : https://jestjs.io/docs/expect
// ============================================================

// ── On importe les fonctions qu'on veut tester ──
// Les { } c'est du destructuring : on prend seulement ce dont on a besoin
const {
  generateNextId,
  filterByCategory,
  validateProduct,
  formatPrice,
} = require("../../src/utils/helpers");
//   → "../../" veut dire "remonter de 2 dossiers" (tests/unit/ → tests/ → racine/)

// ════════════════════════════════════════════════════════════
// Tests pour la fonction generateNextId()
// ════════════════════════════════════════════════════════════
describe("generateNextId", () => {

  // ── TEST EXEMPLE (déjà écrit pour vous) ──
  // Étudiez bien sa structure avant de compléter les suivants
  test("devrait retourner 1 pour un tableau vide", () => {
    // 1. ARRANGE — On prépare un tableau vide
    const items = [];

    // 2. ACT — On appelle la fonction avec notre tableau
    const result = generateNextId(items);

    // 3. ASSERT — On vérifie que le résultat est 1
    //    .toBe() vérifie l'égalité stricte (===)
    expect(result).toBe(1);
  });

  // ── À VOUS DE JOUER ! ──

  test("devrait retourner le max ID + 1", () => {
    // ✅ À COMPLÉTER

    // 1. ARRANGE — Créer un tableau avec des objets qui ont des IDs
    //    Exemple : const items = [{id: 1}, {id: 2}, {id: 5}];

    // 2. ACT — Appeler generateNextId(items)
    //    const result = generateNextId(items);

    // 3. ASSERT — Vérifier que le résultat est 6 (car 5 + 1 = 6)
    //    expect(result).toBe(6);
  });

  test("devrait fonctionner avec un seul élément", () => {
    // ✅ À COMPLÉTER

    // Créer un tableau avec UN seul objet : [{id: 7}]
    // Vérifier que generateNextId retourne 8
  });
});

// ════════════════════════════════════════════════════════════
// Tests pour la fonction filterByCategory()
// ════════════════════════════════════════════════════════════
describe("filterByCategory", () => {

  // ── Données de test ──
  // On les déclare UNE FOIS ici et on les réutilise dans chaque test
  // C'est plus propre que de les réécrire à chaque fois
  const testProducts = [
    { id: 1, name: "Laptop", price: 999, category: "informatique" },
    { id: 2, name: "Casque", price: 199, category: "audio" },
    { id: 3, name: "Souris", price: 49, category: "informatique" },
    { id: 4, name: "Enceinte", price: 299, category: "audio" },
  ];

  test("devrait filtrer les produits par catégorie 'audio'", () => {
    // ✅ À COMPLÉTER

    // 1. ACT — Filtrer par "audio"
    //    const result = filterByCategory(testProducts, "audio");

    // 2. ASSERT — Vérifier qu'on obtient 2 produits
    //    .toHaveLength(2) → vérifie que le tableau a 2 éléments
    //    expect(result).toHaveLength(2);
  });

  test("devrait retourner un tableau vide si la catégorie n'existe pas", () => {
    // ✅ À COMPLÉTER

    // Filtrer par "jardinage" (catégorie qui n'existe pas)
    // Vérifier que le résultat est un tableau vide (longueur 0)
    //    expect(result).toHaveLength(0);
  });

  test("devrait retourner tous les produits informatique", () => {
    // ✅ À COMPLÉTER

    // Filtrer par "informatique"
    // Vérifier qu'on obtient 2 produits (Laptop et Souris)
  });
});

// ════════════════════════════════════════════════════════════
// Tests pour la fonction validateProduct()
// ════════════════════════════════════════════════════════════
describe("validateProduct", () => {

  test("devrait valider un produit correct", () => {
    // ✅ À COMPLÉTER

    // 1. Créer un produit valide :
    //    const product = { name: "Test", price: 10, category: "tech" };

    // 2. Appeler validateProduct :
    //    const result = validateProduct(product);

    // 3. Vérifier :
    //    expect(result.valid).toBe(true);       ← le produit est valide
    //    expect(result.errors).toHaveLength(0); ← pas d'erreurs
  });

  test("devrait rejeter un produit sans nom", () => {
    // ✅ À COMPLÉTER

    // Produit avec un nom vide : { name: "", price: 10, category: "tech" }
    // Vérifier que valid === false
  });

  test("devrait rejeter un produit avec un prix négatif", () => {
    // ✅ À COMPLÉTER

    // Produit avec prix négatif : { name: "Test", price: -5, category: "tech" }
    // Vérifier que valid === false
  });

  test("devrait rejeter un produit sans catégorie", () => {
    // ✅ À COMPLÉTER

    // Produit sans catégorie : { name: "Test", price: 10, category: "" }
    // Vérifier que valid === false
  });

  test("devrait lister TOUTES les erreurs d'un produit complètement invalide", () => {
    // ✅ À COMPLÉTER

    // Produit avec TOUT faux : { name: "", price: -5, category: "" }
    // Vérifier qu'il y a 3 erreurs :
    //    expect(result.errors).toHaveLength(3);
  });
});

// ════════════════════════════════════════════════════════════
// Tests pour la fonction formatPrice()
// ════════════════════════════════════════════════════════════
describe("formatPrice", () => {

  test("devrait formater 29.99 en '29,99 €'", () => {
    // ✅ À COMPLÉTER

    // const result = formatPrice(29.99);
    // expect(result).toBe("29,99 €");
  });

  test("devrait formater 1000 en '1000,00 €'", () => {
    // ✅ À COMPLÉTER
  });

  test("devrait formater 0 en '0,00 €'", () => {
    // ✅ À COMPLÉTER
  });
});
