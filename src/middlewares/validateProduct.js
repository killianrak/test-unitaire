// ============================================================
// 🛡️  MIDDLEWARE — Validation des données produit (BONUS)
// ============================================================
//
// Ce middleware vérifie que les données envoyées par le client
// sont correctes AVANT que le contrôleur ne les traite.
//
// C'est comme un videur de boîte de nuit :
//   → Il vérifie ta carte d'identité AVANT que tu entres.
//   → Si c'est bon → tu passes (next())
//   → Si c'est pas bon → tu es refusé (res.status(400))
//
// Le flux avec middleware :
//   Client → [Middleware vérifie] → [Contrôleur traite] → Réponse
//
// Le flux SANS middleware :
//   Client → [Contrôleur traite] → Réponse
//   (pas de vérification, risque de bugs !)
//
// Documentation :
//   - Middlewares Express : https://expressjs.com/fr/guide/using-middleware.html
// ============================================================

/**
 * Middleware de validation pour la création de produit
 *
 * Vérifie que req.body contient :
 *   - name (texte non vide)
 *   - price (nombre positif)
 *   - category (texte non vide)
 *
 * Un middleware a toujours 3 paramètres :
 *   - req   → la requête du client
 *   - res   → la réponse à envoyer
 *   - next  → la fonction pour passer au middleware/contrôleur suivant
 *
 * TODO ÉTUDIANT (BONUS) : Compléter ce middleware
 */
const validateProductMiddleware = (req, res, next) => {
  
  const { name, price, category } = req.body;
  
   const errors = [];
   if (!name || name.trim() === "") errors.push("Le nom est requis");
   if (price === undefined || typeof price !== "number" || price <= 0) errors.push("Le prix doit être un nombre positif");
   if (!category || category.trim() === "") errors.push("La catégorie est requise");
  
   if (errors.length > 0) {
     return res.status(400).json({ message: "Données invalides", errors });
   }
  
   next();
};

module.exports = validateProductMiddleware;