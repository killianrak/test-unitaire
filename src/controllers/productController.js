// ============================================================
// 🎮 CONTRÔLEURS — La logique de l'API
// ============================================================
//
// Un "contrôleur" c'est une fonction qui :
//   1. Reçoit une requête du client (navigateur, Postman, curl...)
//   2. Fait quelque chose (lire, créer, supprimer des données)
//   3. Envoie une réponse au client
//
// Chaque contrôleur reçoit 2 paramètres :
//   - req (request)  → contient les infos de la requête du client
//   - res (response) → permet d'envoyer une réponse au client
//
// C'est comme un serveur dans un restaurant :
//   req = la commande du client
//   res = ce que le serveur ramène à la table
//
// Documentation :
//   - req : https://expressjs.com/fr/4x/api.html#req
//   - res : https://expressjs.com/fr/4x/api.html#res
// ============================================================

// ────────────────────────────────────────────────────────────
// IMPORTS — On récupère ce dont on a besoin
// ────────────────────────────────────────────────────────────

// On importe notre tableau de produits (notre "fausse base de données")
const products = require("../data/products");
//   → "../" veut dire "remonter d'un dossier"
//   → require("../data/products") va chercher le fichier src/data/products.js

// On importe nos fonctions utilitaires
const { generateNextId, validateProduct } = require("../utils/helpers");
//   → Les { } c'est du destructuring : on prend seulement les fonctions dont on a besoin

// ────────────────────────────────────────────────────────────
// CONTRÔLEUR 1 : GET /api/products
// → Récupérer TOUS les produits
// ────────────────────────────────────────────────────────────
//
// Quand un client fait GET /api/products, cette fonction est appelée.
// Elle doit renvoyer la liste complète des produits.
//
// Ce qu'il faut faire :
//   res.status(200) → on met le code HTTP 200 (= OK, tout va bien)
//   .json(products) → on envoie les produits au format JSON
//
// Exemple de réponse attendue :
//   [
//     { "id": 1, "name": "MacBook Pro 14", "price": 2399.99, "category": "informatique" },
//     { "id": 2, "name": "iPhone 15 Pro", "price": 1199.99, "category": "smartphone" },
//     ...
//   ]
//
// ────────────────────────────────────────────────────────────
const getAllProducts = (req, res) => {
  // ✅ À COMPLÉTER ICI

  // La version simple (suffisante) :
  // res.status(200).json(products);

  // La version bonus (avec filtre par catégorie) :
  // Si l'URL est /api/products?category=audio
  // alors req.query.category vaut "audio"
  //
  // const { category } = req.query;
  // if (category) {
  //   const filtered = products.filter(p => p.category === category);
  //   return res.status(200).json(filtered);
  // }
  // res.status(200).json(products);
};

// ────────────────────────────────────────────────────────────
// CONTRÔLEUR 2 : GET /api/products/:id
// → Récupérer UN SEUL produit par son ID
// ────────────────────────────────────────────────────────────
//
// Le ":id" dans l'URL est un paramètre dynamique.
// Exemple : GET /api/products/3 → req.params.id vaut "3"
//
// ⚠️ ATTENTION : req.params.id est une STRING (texte), pas un number !
//   req.params.id → "3"  (c'est du texte)
//   parseInt("3") → 3    (maintenant c'est un nombre)
//
// Ce qu'il faut faire :
//   1. Récupérer l'ID depuis l'URL
//   2. Chercher le produit dans le tableau
//   3. Si on le trouve → renvoyer le produit avec status 200
//   4. Si on ne le trouve pas → renvoyer une erreur avec status 404
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPEL JAVASCRIPT :
//
//   Array.find() → cherche LE PREMIER élément qui correspond à une condition
//
//   const nombres = [10, 20, 30];
//   nombres.find(n => n === 20); → 20 (trouvé !)
//   nombres.find(n => n === 99); → undefined (pas trouvé)
//
//   parseInt("42") → transforme le texte "42" en nombre 42
// ────────────────────────────────────────────────────────────
const getProductById = (req, res) => {
  // ✅ À COMPLÉTER ICI

  // Étape 1 : Récupérer l'ID depuis l'URL et le convertir en nombre
  // const id = parseInt(req.params.id);

  // Étape 2 : Chercher le produit dans le tableau
  // const product = products.find(p => p.id === id);

  // Étape 3 : Si le produit n'existe pas → erreur 404
  // if (!product) {
  //   return res.status(404).json({ message: "Produit non trouvé" });
  // }

  // Étape 4 : Si le produit existe → on le renvoie
  // res.status(200).json(product);
};

// ────────────────────────────────────────────────────────────
// CONTRÔLEUR 3 : POST /api/products
// → Créer un NOUVEAU produit
// ────────────────────────────────────────────────────────────
//
// Le client envoie les données du nouveau produit dans le BODY :
//   { "name": "Clavier", "price": 49.99, "category": "informatique" }
//
// Ces données sont disponibles dans req.body
//   → req.body.name vaut "Clavier"
//   → req.body.price vaut 49.99
//   → req.body.category vaut "informatique"
//
// Ce qu'il faut faire :
//   1. Récupérer les données du body
//   2. Vérifier que les données sont valides
//   3. Si invalide → erreur 400
//   4. Si valide → créer le produit, l'ajouter au tableau, renvoyer 201
//
// 💡 Le code 201 signifie "Créé" (la ressource a été créée avec succès)
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPELS JAVASCRIPT :
//
//   const { name, price } = req.body;
//   → C'est du "destructuring" : on extrait name et price de l'objet req.body
//   → C'est un raccourci pour : const name = req.body.name; const price = req.body.price;
//
//   tableau.push(element) → ajoute un élément à la fin du tableau
//     [1, 2].push(3) → le tableau devient [1, 2, 3]
// ────────────────────────────────────────────────────────────
const createProduct = (req, res) => {
  // ✅ À COMPLÉTER ICI

  // Étape 1 : Récupérer les données envoyées par le client
  // const { name, price, category } = req.body;

  // Étape 2 : Vérifier que les données sont valides
  // const validation = validateProduct({ name, price, category });
  // if (!validation.valid) {
  //   return res.status(400).json({
  //     message: "Données invalides",
  //     errors: validation.errors,
  //   });
  // }

  // Étape 3 : Créer le nouveau produit avec un ID auto-généré
  // const newProduct = {
  //   id: generateNextId(products),
  //   name,          ← raccourci pour name: name
  //   price,         ← raccourci pour price: price
  //   category,      ← raccourci pour category: category
  // };

  // Étape 4 : Ajouter le produit au tableau (notre "fausse BDD")
  // products.push(newProduct);

  // Étape 5 : Renvoyer le produit créé avec le code 201 (Créé)
  // res.status(201).json(newProduct);
};

// ────────────────────────────────────────────────────────────
// CONTRÔLEUR 4 : DELETE /api/products/:id
// → Supprimer un produit
// ────────────────────────────────────────────────────────────
//
// Le client envoie l'ID du produit à supprimer dans l'URL.
// Exemple : DELETE /api/products/3 → on supprime le produit avec id = 3
//
// Ce qu'il faut faire :
//   1. Récupérer l'ID depuis l'URL
//   2. Vérifier que le produit existe
//   3. Si non → erreur 404
//   4. Si oui → le supprimer du tableau et confirmer avec 200
//
// ────────────────────────────────────────────────────────────
// 💡 RAPPELS JAVASCRIPT :
//
//   Array.findIndex() → comme find() mais retourne la POSITION (index) au lieu de l'élément
//     ["a", "b", "c"].findIndex(x => x === "b") → 1 (position 1)
//     ["a", "b", "c"].findIndex(x => x === "z") → -1 (pas trouvé)
//
//   Array.splice(index, nombre) → supprime des éléments à partir d'une position
//     const arr = ["a", "b", "c"];
//     arr.splice(1, 1);  → supprime 1 élément à la position 1
//     arr vaut maintenant ["a", "c"]
// ────────────────────────────────────────────────────────────
const deleteProduct = (req, res) => {
  // ✅ À COMPLÉTER ICI

  // Étape 1 : Récupérer l'ID et le convertir en nombre
  // const id = parseInt(req.params.id);

  // Étape 2 : Trouver la POSITION du produit dans le tableau
  // const index = products.findIndex(p => p.id === id);

  // Étape 3 : Si le produit n'existe pas (index vaut -1)
  // if (index === -1) {
  //   return res.status(404).json({ message: "Produit non trouvé" });
  // }

  // Étape 4 : Supprimer le produit du tableau
  // products.splice(index, 1);

  // Étape 5 : Confirmer la suppression
  // res.status(200).json({ message: "Produit supprimé" });
};

// ────────────────────────────────────────────────────────────
// EXPORT — On rend les fonctions accessibles aux autres fichiers
// ────────────────────────────────────────────────────────────
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};
