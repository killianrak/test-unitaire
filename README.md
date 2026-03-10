# TP Node.js — API REST & Tests Unitaires

> Pour des étudiants débutants en développement back-end.

---

## C'est quoi tout ça ? (Les bases)

### Node.js — C'est quoi ?

Normalement, JavaScript ne fonctionne que dans un **navigateur web** (Chrome, Firefox...).
**Node.js** permet de faire tourner du JavaScript **sur un ordinateur/serveur**, comme Python ou Java.

C'est grâce à Node.js qu'on peut créer des serveurs web en JavaScript.

> Télécharger : https://nodejs.org/fr
> Documentation : https://nodejs.org/docs/latest/api/

---

### npm — C'est quoi ?

**npm** (Node Package Manager) est le **gestionnaire de paquets** de Node.js.
C'est comme un "App Store" pour les bibliothèques JavaScript.

- `npm install` → télécharge toutes les dépendances du projet (listées dans `package.json`)
- `npm run dev` → lance la commande "dev" définie dans `package.json`
- `npm test` → lance les tests

> Le dossier `node_modules/` contient toutes les bibliothèques téléchargées.
> ⚠️ On ne le met JAMAIS sur Git (il est dans `.gitignore`).

---

### package.json — C'est quoi ?

C'est la **carte d'identité** du projet. Il contient :
- Le nom du projet
- Les **scripts** (commandes qu'on peut lancer)
- Les **dependencies** (bibliothèques utilisées par le projet)
- Les **devDependencies** (bibliothèques utilisées seulement pour développer/tester)

---

### Une API — C'est quoi ?

Une **API** (Application Programming Interface) c'est un **serveur** qui attend des requêtes et renvoie des données.

Imagine un **restaurant** :
- Toi (le client) = le navigateur ou une application mobile
- Le serveur (la personne) = l'API
- La cuisine = la base de données

Tu ne vas pas directement en cuisine. Tu passes ta commande au serveur, il va en cuisine, et il te ramène ton plat.

**Exemple concret :**
```
Toi (navigateur)  →  "Donne-moi la liste des produits"  →  API (serveur Node.js)
                                                              ↓
Toi (navigateur)  ←  [{id: 1, name: "iPhone"}, ...]    ←  API renvoie les données
```

---

### REST — C'est quoi ?

**REST** c'est une façon d'organiser son API. On utilise les **verbes HTTP** :

| Verbe HTTP | Ça veut dire quoi ?       | Exemple                    | Code réponse |
| ---------- | ------------------------- | -------------------------- | ------------ |
| **GET**    | "Donne-moi des données"   | Voir la liste des produits | 200 (OK)     |
| **POST**   | "Crée quelque chose"      | Ajouter un nouveau produit | 201 (Créé)   |
| **DELETE**  | "Supprime quelque chose" | Supprimer un produit       | 200 (OK)     |

Les **codes de statut HTTP** les plus courants :
- `200` → Tout s'est bien passé
- `201` → La ressource a été créée avec succès
- `400` → La requête est invalide (il manque des données)
- `404` → Ce que tu cherches n'existe pas

> En savoir plus : https://developer.mozilla.org/fr/docs/Web/HTTP/Status

---

### Express.js — C'est quoi ?

**Express** est une bibliothèque (framework) qui simplifie la création d'API en Node.js.

Sans Express, créer un serveur web en Node.js est compliqué.
Avec Express, c'est simple :

```js
const express = require("express");  // On importe Express
const app = express();               // On crée notre application

// Quand quelqu'un va sur /bonjour, on lui répond "Salut !"
app.get("/bonjour", (req, res) => {
  res.send("Salut !");
});

// On démarre le serveur sur le port 3000
app.listen(3000);
```

> Documentation : https://expressjs.com/fr/

---

### require() et module.exports — C'est quoi ?

En Node.js, chaque fichier est un **module** indépendant.
Pour utiliser du code d'un autre fichier, on utilise :

```js
// ── fichier math.js ──
// On crée des fonctions
const addition = (a, b) => a + b;
const soustraction = (a, b) => a - b;

// On "exporte" les fonctions pour que d'autres fichiers puissent les utiliser
module.exports = { addition, soustraction };

// ── fichier app.js ──
// On "importe" les fonctions du fichier math.js
const { addition, soustraction } = require("./math");

console.log(addition(2, 3)); // Affiche : 5
```

- `module.exports = ...` → "je rends disponible ce code pour les autres fichiers"
- `require("./fichier")` → "je veux utiliser le code de ce fichier"
- Le `./` signifie "dans le même dossier"

---

### Les fonctions fléchées — C'est quoi ?

En JavaScript, il y a 2 façons d'écrire une fonction. C'est exactement la même chose :

```js
// Écriture classique
function direBonjour(nom) {
  return "Bonjour " + nom;
}

// Écriture fléchée (arrow function) — plus moderne, plus courte
const direBonjour = (nom) => {
  return "Bonjour " + nom;
};

// Écriture fléchée ultra-courte (quand il n'y a qu'une seule ligne)
const direBonjour = (nom) => "Bonjour " + nom;
```

Dans ce projet, on utilise les **fonctions fléchées**.

---

### Un test — C'est quoi ?

Un **test** c'est du code qui **vérifie** que ton code fonctionne correctement.

Imagine que tu écris une fonction `addition(2, 3)`. Le test va vérifier automatiquement que le résultat est bien `5`.

```js
// La fonction
const addition = (a, b) => a + b;

// Le test — "je m'attends à ce que addition(2, 3) donne 5"
test("l'addition de 2 et 3 donne 5", () => {
  expect(addition(2, 3)).toBe(5);
});
```

**Pourquoi c'est utile ?**
- Tu modifies du code → tu lances les tests → si tout passe, tu n'as rien cassé
- C'est comme un filet de sécurité

> Documentation Jest : https://jestjs.io/fr/docs/getting-started

---

### Le destructuring — C'est quoi ?

C'est un raccourci pour extraire des valeurs d'un objet :

```js
// Sans destructuring (long)
const nom = req.body.name;
const prix = req.body.price;

// Avec destructuring (court) — même résultat
const { name, price } = req.body;
```

---

## Documentation officielle

| Outil       | Lien                                                    | Description                        |
| ----------- | ------------------------------------------------------- | ---------------------------------- |
| Node.js     | https://nodejs.org/docs/latest/api/                     | Runtime JavaScript côté serveur    |
| Express.js  | https://expressjs.com/fr/                               | Framework web minimaliste          |
| Jest        | https://jestjs.io/fr/docs/getting-started               | Framework de tests JavaScript      |
| Supertest   | https://github.com/ladjs/supertest#readme               | Tester des API HTTP sans serveur   |
| HTTP Status | https://developer.mozilla.org/fr/docs/Web/HTTP/Status   | Codes de statut HTTP               |

---

## Installation

Ouvrez un **terminal** dans le dossier du projet et tapez :

```bash
npm install
```

Cette commande lit `package.json` et télécharge Express, Jest et Supertest dans `node_modules/`.

## Lancer le serveur

```bash
npm run dev
```

Le serveur démarre sur `http://localhost:3000`. Ouvrez cette URL dans votre navigateur.

> `localhost` = votre propre ordinateur. `3000` = le numéro de port (comme un numéro de porte).

## Lancer les tests

```bash
npm test              # Lancer tous les tests une fois
npm run test:watch    # Relancer automatiquement à chaque modification
npm run test:coverage # Voir la couverture de code (% du code testé)
```

---

## Structure du projet

```
testunitaire/
├── src/                         ← Le code source de l'API
│   ├── app.js                   ← Configuration Express (à compléter)
│   ├── server.js                ← Démarre le serveur (déjà fait)
│   ├── data/                    ← Fausses données (remplace une base de données)
│   │   └── products.js          ← Liste de produits (déjà fait)
│   ├── controllers/             ← La logique : que faire quand on reçoit une requête ?
│   │   └── productController.js ← 4 fonctions à compléter
│   ├── routes/                  ← Les URLs de l'API
│   │   └── productRoutes.js     ← 4 routes à compléter
│   ├── middlewares/             ← Fonctions qui s'exécutent avant les contrôleurs
│   │   └── validateProduct.js   ← Bonus
│   └── utils/                   ← Petites fonctions réutilisables
│       └── helpers.js           ← 4 fonctions à compléter
├── tests/                       ← Les tests
│   ├── unit/                    ← Tests unitaires (1 fonction = 1 test)
│   │   └── helpers.test.js      ← À compléter
│   └── integration/             ← Tests d'intégration (tester les routes)
│       └── products.test.js     ← À compléter
├── package.json                 ← Carte d'identité du projet
└── README.md                    ← Ce fichier
```

---

## Les 4 routes à créer

| Verbe    | URL                  | Ce que ça fait                       |
| -------- | -------------------- | ------------------------------------ |
| `GET`    | `/api/products`      | Récupérer la liste des produits      |
| `GET`    | `/api/products/:id`  | Récupérer UN produit par son ID      |
| `POST`   | `/api/products`      | Créer un nouveau produit             |
| `DELETE` | `/api/products/:id`  | Supprimer un produit                 |

> `:id` est un **paramètre dynamique**. `/api/products/3` → `req.params.id` vaut `"3"`

---

## Déroulé de la journée

### Matin (3h) — Construire l'API

Suivez cet ordre, c'est important :

1. **Lisez ce README en entier** pour comprendre les concepts
2. **Ouvrez `src/utils/helpers.js`** → complétez les 4 petites fonctions
3. **Ouvrez `src/controllers/productController.js`** → complétez les 4 contrôleurs
4. **Ouvrez `src/routes/productRoutes.js`** → écrivez les 4 routes
5. **Ouvrez `src/app.js`** → décommentez les 3 blocs pour tout brancher
6. **Lancez le serveur** avec `npm run dev` et testez dans le navigateur

> Chaque dossier contient un fichier `LISEZMOI.md` avec des explications supplémentaires.

### Après-midi (3h) — Écrire les tests

1. **Ouvrez `tests/unit/helpers.test.js`** → complétez les tests des fonctions utilitaires
2. **Lancez les tests** avec `npm test` pour vérifier
3. **Ouvrez `tests/integration/products.test.js`** → complétez les tests des routes
4. **Visez 100%** avec `npm run test:coverage`

---

## Comment tester manuellement son API ?

### Avec le navigateur (seulement pour GET)

Ouvrez `http://localhost:3000/api/products` dans Chrome/Firefox.

### Avec curl (dans le terminal)

```bash
# Voir tous les produits
curl http://localhost:3000/api/products

# Voir le produit avec l'ID 1
curl http://localhost:3000/api/products/1

# Créer un nouveau produit
curl -X POST http://localhost:3000/api/products -H "Content-Type: application/json" -d "{\"name\": \"Clavier\", \"price\": 49.99, \"category\": \"informatique\"}"

# Supprimer le produit avec l'ID 1
curl -X DELETE http://localhost:3000/api/products/1
```

### Avec Postman (plus facile)

Postman est un logiciel gratuit pour tester les API : https://www.postman.com/downloads/

---

## Si vous êtes bloqués

1. **Lisez le `LISEZMOI.md`** du dossier en question
2. **Lisez les commentaires** dans le code — tout est expliqué étape par étape
3. **Consultez la documentation** (les liens sont dans chaque fichier)
4. **Demandez à votre professeur**
