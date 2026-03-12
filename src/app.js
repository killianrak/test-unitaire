// ============================================================
// 🚀 APP.JS — Le fichier principal de l'application
// ============================================================
//
// Ce fichier assemble toutes les pièces du puzzle :
//   1. On crée l'application Express
//   2. On active les middlewares (fonctions qui traitent les requêtes)
//   3. On branche les routes (les URLs de l'API)
//
// C'est comme le plan d'un restaurant :
//   - Les middlewares = les règles de la maison (tenue correcte exigée, etc.)
//   - Les routes = le menu (quelle commande est possible)
//   - Les contrôleurs = les cuisiniers (qui préparent les plats)
//
// ⚠️ POURQUOI 2 FICHIERS (app.js et server.js) ?
//   app.js  → configure l'application (ce fichier)
//   server.js → démarre le serveur (le fichier à côté)
//
//   On sépare les deux pour pouvoir TESTER l'API sans démarrer le serveur.
//   Les tests importent app.js directement, sans passer par server.js.
//
// Documentation :
//   - Express App    : https://expressjs.com/fr/4x/api.html#app
//   - Middlewares     : https://expressjs.com/fr/guide/using-middleware.html
// ============================================================

// ── On importe Express ──
const express = require("express");

// ── On crée l'application ──
const app = express();

// ────────────────────────────────────────────────────────────
// ÉTAPE 1 : Activer le middleware JSON
// ────────────────────────────────────────────────────────────
//
// Quand un client envoie des données en POST (par exemple pour créer
// un produit), les données arrivent au format JSON dans le "body".
//
// express.json() est un middleware qui :
//   - Lit le body de la requête
//   - Le transforme en objet JavaScript
//   - Le met dans req.body
//
// SANS express.json() → req.body est undefined (vide)
// AVEC express.json() → req.body contient les données envoyées
//
// app.use() veut dire "utilise ce middleware pour TOUTES les requêtes"
//
// Documentation : https://expressjs.com/fr/4x/api.html#express.json
// ────────────────────────────────────────────────────────────

 app.use(express.json());

// ────────────────────────────────────────────────────────────
// ÉTAPE 2 : Brancher les routes des produits
// ────────────────────────────────────────────────────────────
//
// On importe le fichier routes/productRoutes.js qui contient
// toutes les routes de l'API produits.
//
// Puis on le "monte" sur le chemin "/api/products".
// Ça veut dire que toutes les routes dans productRoutes.js
// commenceront par "/api/products" :
//
//   Dans productRoutes.js     →  URL finale
//   router.get("/")           →  GET /api/products
//   router.get("/:id")        →  GET /api/products/:id
//   router.post("/")          →  POST /api/products
//   router.delete("/:id")     →  DELETE /api/products/:id
//
// Documentation : https://expressjs.com/fr/4x/api.html#app.use
// ────────────────────────────────────────────────────────────

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

// ────────────────────────────────────────────────────────────
// ÉTAPE 3 : Route "catch-all" pour les erreurs 404
// ────────────────────────────────────────────────────────────
//
// Si quelqu'un va sur une URL qui n'existe pas
// (par exemple /api/blabla), on veut renvoyer une erreur 404.
//
// Ce middleware est placé EN DERNIER car il attrape toutes
// les requêtes qui n'ont pas été gérées par les routes au-dessus.
//
// C'est comme un filet de sécurité : si aucune route ne correspond,
// on tombe ici.
// ────────────────────────────────────────────────────────────

 app.use((req, res) => {
   res.status(404).json({ message: "Route non trouvée" });
 });

// ────────────────────────────────────────────────────────────
// EXPORT
// ────────────────────────────────────────────────────────────
//
// On exporte l'application pour 2 raisons :
//   1. server.js l'importe pour démarrer le serveur
//   2. Les tests l'importent pour tester les routes (sans démarrer le serveur)
//
module.exports = app;