# Dossier `utils/` — Les petites fonctions réutilisables

## C'est quoi ce dossier ?

Ce dossier contient des **fonctions utilitaires** : des petites fonctions simples qu'on peut réutiliser partout dans le projet.

Par exemple :
- `generateNextId()` → génère le prochain ID pour un nouveau produit
- `formatPrice()` → transforme `29.99` en `"29,99 €"`
- `validateProduct()` → vérifie qu'un produit a toutes les bonnes données

## Pourquoi un dossier séparé ?

Pour ne pas mélanger ces fonctions avec le code Express.
C'est plus **organisé** et surtout plus **facile à tester**.

## C'est par ici qu'il faut commencer !

Ces fonctions sont les plus simples du projet. **Commencez par les coder**, puis passez aux contrôleurs.

## Ce que vous devez faire

Ouvrir `helpers.js` et **compléter les 4 fonctions**. Des indices sont donnés en commentaires.

## Documentation utile

- Math.max() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/max
- Array.filter() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
- Array.map() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map
- toFixed() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
