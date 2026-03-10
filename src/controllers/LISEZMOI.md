# Dossier `controllers/` — La logique de l'API

## C'est quoi un contrôleur ?

Un **contrôleur** c'est la fonction qui décide **quoi faire** quand un client envoie une requête.

C'est comme un cuisinier dans un restaurant :
- La **commande** arrive (= la requête du client)
- Le cuisinier **prépare le plat** (= le contrôleur traite la demande)
- Le plat est **servi au client** (= la réponse est envoyée)

## Comment ça marche ?

Chaque contrôleur est une fonction qui reçoit 2 paramètres :

```js
const getAllProducts = (req, res) => {
  // req = la requête (ce que le client demande)
  // res = la réponse (ce qu'on renvoie au client)

  res.status(200).json(products);
  // status(200) → code HTTP "OK"
  // .json(products) → envoie les données au format JSON
};
```

## Les choses utiles dans `req` (la requête)

| Propriété        | C'est quoi ?                                           | Exemple                          |
| ---------------- | ------------------------------------------------------ | -------------------------------- |
| `req.params.id`  | Le paramètre dans l'URL (ex: `/products/3`)            | `"3"` (attention, c'est du texte !)|
| `req.body`       | Les données envoyées en POST                           | `{ name: "iPhone", price: 999 }` |
| `req.query`      | Les paramètres après le `?` dans l'URL                 | `/products?category=audio` → `"audio"` |

## Ce que vous devez faire

Ouvrir `productController.js` et **compléter les 4 fonctions**. Tout est expliqué pas à pas en commentaires.

## Documentation utile

- Request (req) : https://expressjs.com/fr/4x/api.html#req
- Response (res) : https://expressjs.com/fr/4x/api.html#res
- Codes HTTP : https://developer.mozilla.org/fr/docs/Web/HTTP/Status
