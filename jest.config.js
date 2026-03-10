// ============================================================
// Configuration Jest
// Documentation : https://jestjs.io/docs/configuration
// ============================================================

module.exports = {
  // Dossier racine des tests
  testMatch: ["**/tests/**/*.test.js"],

  // Affichage détaillé
  verbose: true,

  // Environnement Node.js (pas navigateur)
  testEnvironment: "node",
};
