# Dossier `routes/` — Les URLs de l'API

## C'est quoi une route ?

Une **route** c'est l'association entre :
- Une **URL** (ex: `/api/products`)
- Un **verbe HTTP** (ex: GET, POST, DELETE)
- Une **fonction contrôleur** (qui sera appelée)

C'est comme un **standard téléphonique** :
- "Si quelqu'un appelle le numéro 1 → transférer au service vente"
- "Si quelqu'un appelle le numéro 2 → transférer au support"

En code :
- "Si quelqu'un fait GET /api/products → appeler getAllProducts"
- "Si quelqu'un fait DELETE /api/products/3 → appeler deleteProduct"

## Comment ça marche ?

```js
const router = express.Router();  // On crée un mini-routeur

// Quand quelqu'un fait GET / → on appelle getAllProducts
router.get("/", controller.getAllProducts);

// ":id" est un paramètre dynamique (il peut valoir 1, 2, 3...)
router.get("/:id", controller.getProductById);
```

## Ce que vous devez faire

Ouvrir `productRoutes.js` et **écrire les 4 routes** (4 lignes seulement !).

## Documentation utile

- Routing Express : https://expressjs.com/fr/guide/routing.html
- express.Router() : https://expressjs.com/fr/4x/api.html#router
