// ============================================================
// 🧪 TESTS D'INTÉGRATION — Tester les routes de l'API
// ============================================================
//
// C'EST QUOI UN TEST D'INTÉGRATION ?
//
//   Un test d'intégration vérifie que TOUT fonctionne ensemble :
//   la requête HTTP → le routeur → le contrôleur → la réponse.
//
//   C'est comme tester le restaurant en entier :
//   on commande un plat et on vérifie qu'on reçoit le bon plat.
//
// DIFFÉRENCE AVEC UN TEST UNITAIRE :
//
//   Test unitaire      → teste UNE fonction isolée (rapide, simple)
//   Test d'intégration → teste UNE route complète (plus réaliste)
//
// SUPERTEST — C'EST QUOI ?
//
//   Supertest est un outil qui permet de simuler des requêtes HTTP
//   SANS avoir besoin de démarrer le serveur.
//
//   Au lieu d'ouvrir un navigateur et taper l'URL, on fait :
//     const res = await request(app).get("/api/products");
//
//   "request(app)" crée un faux client qui envoie des requêtes à notre app.
//
// LE MOT-CLÉ "async/await" :
//
//   Les requêtes HTTP prennent du temps (même en local).
//   "await" veut dire "attends que ça finisse avant de continuer".
//   Si on utilise "await" dans une fonction, elle doit être "async".
//
//   test("mon test", async () => {          ← async ici
//     const res = await request(app).get("/api/products");  ← await ici
//   });
//
// ⚠️ CES TESTS NE MARCHERONT QUE SI VOUS AVEZ COMPLÉTÉ :
//   1. src/app.js (décommenter les 3 blocs)
//   2. src/routes/productRoutes.js (écrire les 4 routes)
//   3. src/controllers/productController.js (coder les 4 contrôleurs)
//
// Documentation :
//   - Supertest   : https://github.com/ladjs/supertest#readme
//   - async/await : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises
// ============================================================

// ── Imports ──
const request = require("supertest");
//   → Supertest nous donne la fonction "request" pour simuler des requêtes

const app = require("../../src/app");
//   → On importe notre app Express (PAS server.js, sinon le serveur démarrerait)

// ════════════════════════════════════════════════════════════
// Tests pour GET /api/products (récupérer tous les produits)
// ════════════════════════════════════════════════════════════
describe("GET /api/products", () => {

  // ── TEST EXEMPLE (déjà écrit pour vous) ──
  test("devrait retourner la liste des produits avec status 200", async () => {
    // On simule un GET /api/products
    const res = await request(app).get("/api/products");

    // On vérifie le code de statut HTTP (200 = OK)
    expect(res.status).toBe(200);

    // On vérifie que la réponse est un tableau (Array)
    //   .toBeInstanceOf(Array) → "est-ce que c'est un tableau ?"
    expect(res.body).toBeInstanceOf(Array);

    // On vérifie qu'il y a au moins 1 produit
    //   .toBeGreaterThan(0) → "est-ce que c'est plus grand que 0 ?"
    expect(res.body.length).toBeGreaterThan(0);
  });

  // ── À VOUS DE JOUER ! ──

  test("chaque produit devrait avoir les propriétés id, name, price, category", async () => {
    // ✅ À COMPLÉTER

    // 1. Faire la requête :
    //    const res = await request(app).get("/api/products");

    // 2. Récupérer le premier produit du tableau :
    //    const product = res.body[0];
    //    (res.body est le tableau, [0] prend le premier élément)

    // 3. Vérifier que le produit a les bonnes propriétés :
    //    .toHaveProperty("name") → "est-ce que cet objet a une propriété 'name' ?"
    //
    //    expect(product).toHaveProperty("id");
    //    expect(product).toHaveProperty("name");
    //    expect(product).toHaveProperty("price");
    //    expect(product).toHaveProperty("category");
  });
});

// ════════════════════════════════════════════════════════════
// Tests pour GET /api/products/:id (récupérer UN produit)
// ════════════════════════════════════════════════════════════
describe("GET /api/products/:id", () => {

  test("devrait retourner un produit existant avec status 200", async () => {
    // ✅ À COMPLÉTER

    // Faire GET /api/products/1 (le produit avec l'ID 1)
    //    const res = await request(app).get("/api/products/1");

    // Vérifier que le status est 200
    //    expect(res.status).toBe(200);

    // Vérifier que le produit a un ID
    //    expect(res.body).toHaveProperty("id");
  });

  test("devrait retourner 404 pour un produit inexistant", async () => {
    // ✅ À COMPLÉTER

    // Faire GET /api/products/9999 (cet ID n'existe pas)
    //    const res = await request(app).get("/api/products/9999");

    // Vérifier que le status est 404 (Not Found)
    //    expect(res.status).toBe(404);
  });

  test("le produit retourné devrait avoir le bon ID", async () => {
    // ✅ À COMPLÉTER

    // Faire GET /api/products/2
    // Vérifier que res.body.id vaut bien 2
    //    expect(res.body.id).toBe(2);
  });
});

// ════════════════════════════════════════════════════════════
// Tests pour POST /api/products (créer un produit)
// ════════════════════════════════════════════════════════════
describe("POST /api/products", () => {

  test("devrait créer un produit avec status 201", async () => {
    // ✅ À COMPLÉTER

    // 1. Préparer les données du nouveau produit :
    //    const newProduct = {
    //      name: "Clavier RGB",
    //      price: 79.99,
    //      category: "informatique"
    //    };

    // 2. Envoyer une requête POST avec les données :
    //    const res = await request(app)
    //      .post("/api/products")    ← l'URL
    //      .send(newProduct);        ← .send() envoie les données dans le body

    // 3. Vérifier :
    //    expect(res.status).toBe(201);              ← code 201 = Créé
    //    expect(res.body).toHaveProperty("id");      ← le produit a un ID
    //    expect(res.body.name).toBe("Clavier RGB");  ← le nom est correct
  });

  test("devrait retourner 400 si les données sont invalides", async () => {
    // ✅ À COMPLÉTER

    // Envoyer un produit avec des données manquantes :
    //    const badProduct = { name: "" };
    //    const res = await request(app)
    //      .post("/api/products")
    //      .send(badProduct);

    // Vérifier que le status est 400 (Bad Request)
    //    expect(res.status).toBe(400);
  });

  test("le produit créé devrait avoir un ID auto-généré", async () => {
    // ✅ À COMPLÉTER

    // Créer un produit et vérifier que l'ID est un nombre :
    //    expect(typeof res.body.id).toBe("number");
    //    → typeof retourne le type : "number", "string", "boolean"...
  });
});

// ════════════════════════════════════════════════════════════
// Tests pour DELETE /api/products/:id (supprimer un produit)
// ════════════════════════════════════════════════════════════
describe("DELETE /api/products/:id", () => {

  test("devrait supprimer un produit existant avec status 200", async () => {
    // ✅ À COMPLÉTER

    // Faire DELETE /api/products/1 (supprimer le produit 1)
    //    const res = await request(app).delete("/api/products/1");

    // Vérifier que le status est 200
    //    expect(res.status).toBe(200);
  });

  test("devrait retourner 404 pour un produit inexistant", async () => {
    // ✅ À COMPLÉTER

    // Faire DELETE /api/products/9999 (cet ID n'existe pas)
    // Vérifier status 404
  });

  test("BONUS : le produit supprimé ne devrait plus être accessible", async () => {
    // ✅ À COMPLÉTER (BONUS — plus difficile)

    // Idée : on crée un produit, on le supprime, puis on essaie de le récupérer

    // 1. Créer un produit
    //    const createRes = await request(app)
    //      .post("/api/products")
    //      .send({ name: "Produit temporaire", price: 1, category: "test" });
    //    const productId = createRes.body.id;

    // 2. Le supprimer
    //    await request(app).delete(`/api/products/${productId}`);
    //    ↑ les backticks `` permettent d'insérer des variables avec ${}

    // 3. Essayer de le récupérer → devrait être 404
    //    const getRes = await request(app).get(`/api/products/${productId}`);
    //    expect(getRes.status).toBe(404);
  });
});
