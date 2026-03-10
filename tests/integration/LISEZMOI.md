# Dossier `tests/integration/` — Les tests d'intégration

## C'est quoi un test d'intégration ?

Un **test d'intégration** vérifie que **plusieurs pièces fonctionnent ensemble**.

Si le test unitaire vérifie qu'une ampoule marche toute seule,
le test d'intégration vérifie que **l'ampoule + la lampe + l'interrupteur** fonctionnent ensemble.

Ici, on teste une route complète :
```
Requête HTTP → Routeur → Contrôleur → Réponse
```

## Comment ça marche avec Supertest ?

**Supertest** simule des requêtes HTTP sans démarrer le serveur :

```js
const request = require("supertest");   // L'outil de simulation
const app = require("../../src/app");   // Notre app Express

test("GET /api/products retourne la liste", async () => {
  const res = await request(app).get("/api/products");
  expect(res.status).toBe(200);
});
```

## C'est quoi `async` et `await` ?

Les requêtes prennent du temps. `await` dit "attends la réponse avant de continuer".

```js
test("mon test", async () => {                              // async = cette fonction contient des await
  const res = await request(app).get("/api/products");      // await = attends la réponse
  expect(res.status).toBe(200);                             // puis vérifie
});
```

## Ce que vous devez faire

Ouvrir `products.test.js` et **compléter les tests**. Un exemple est déjà fourni.

## Documentation utile

- Supertest : https://github.com/ladjs/supertest#readme
- async/await : https://developer.mozilla.org/fr/docs/Learn/JavaScript/Asynchronous/Promises
