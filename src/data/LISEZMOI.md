# Dossier `data/` — Les données (fausse base de données)

## C'est quoi ce dossier ?

Dans un vrai projet, les données sont stockées dans une **base de données** (PostgreSQL, MongoDB, MySQL...).

Ici, pour simplifier, on stocke les données dans un **simple tableau JavaScript** en mémoire. C'est ce qu'on appelle des **données mockées** (= fausses données).

## Comment ça marche ?

Le fichier `products.js` contient un tableau d'objets. Chaque objet représente un produit :

```js
let products = [
  { id: 1, name: "MacBook Pro", price: 2399.99, category: "informatique" },
  { id: 2, name: "iPhone 15", price: 1199.99, category: "smartphone" },
];
```

On exporte ce tableau avec `module.exports = products;` pour que les contrôleurs puissent y accéder.

## Ce que vous devez faire

Le fichier `products.js` est **déjà complet**, vous n'avez rien à modifier ici. Mais prenez le temps de **lire et comprendre** la structure des données.

## Documentation utile

- Les tableaux : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
- Les objets : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Object
