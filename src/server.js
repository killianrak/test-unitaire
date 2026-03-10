// ============================================================
// 🖥️  SERVER.JS — Point d'entrée du serveur
// ============================================================
//
// Ce fichier démarre le serveur HTTP.
// On le sépare de app.js pour pouvoir tester l'API
// sans démarrer le serveur (Supertest le fait automatiquement).
//
// Pour lancer : npm run dev
// ============================================================

const app = require("./app");

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`\n✅ Serveur démarré sur http://localhost:${PORT}`);
  console.log(`📦 API Produits : http://localhost:${PORT}/api/products\n`);
});
