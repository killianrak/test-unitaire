// ============================================================
// 🛣️  ROUTES — Les URLs de notre API
// ============================================================
//
// Ce fichier définit les "adresses" (URLs) de notre API.
//
// C'est comme un standard téléphonique :
//   "Si quelqu'un appelle le numéro 1 → passer l'appel au service A"
//   "Si quelqu'un appelle le numéro 2 → passer l'appel au service B"
//
// Ici c'est pareil :
//   "Si quelqu'un fait GET /products → appeler le contrôleur getAllProducts"
//   "Si quelqu'un fait POST /products → appeler le contrôleur createProduct"
//
// Documentation :
//   - Routing Express : https://expressjs.com/fr/guide/routing.html
//   - Router Express  : https://expressjs.com/fr/4x/api.html#router
// ============================================================

// ── On importe Express ──
const express = require("express");

// ── On crée un "routeur" ──
// Un routeur c'est un mini-groupe de routes qu'on peut brancher sur l'app principale
const router = express.Router();

// ── On importe les contrôleurs ──
// Ce sont les fonctions qui seront appelées quand quelqu'un visite une URL
const productController = require("../controllers/productController");

// ────────────────────────────────────────────────────────────
// TODO ÉTUDIANT : Écrire les 4 routes ci-dessous
// ────────────────────────────────────────────────────────────
//
// La syntaxe c'est :
//   router.VERBE("chemin", fonctionContrôleur);
//
// Les verbes disponibles :
//   router.get(...)    → pour les requêtes GET (lire des données)
//   router.post(...)   → pour les requêtes POST (créer des données)
//   router.delete(...) → pour les requêtes DELETE (supprimer des données)
//
// ⚠️ IMPORTANT :
//   Le préfixe "/api/products" sera ajouté automatiquement dans app.js
//   Donc ici :
//     "/" correspond en réalité à "/api/products"
//     "/:id" correspond en réalité à "/api/products/:id"
//     (le ":id" est un paramètre dynamique, comme une variable dans l'URL)
//
// ────────────────────────────────────────────────────────────


 router.get("/", productController.getAllProducts);

 router.get("/:id", productController.getProductById);

 router.post("/", productController.createProduct);

 router.delete("/:id", productController.deleteProduct);

// ────────────────────────────────────────────────────────────
// EXPORT — On rend le routeur accessible pour app.js
// ────────────────────────────────────────────────────────────
module.exports = router;