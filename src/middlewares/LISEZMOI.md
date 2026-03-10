# Dossier `middlewares/` — Les fonctions "entre-deux"

## C'est quoi un middleware ?

Le mot "middleware" veut dire "logiciel du milieu". C'est une fonction qui s'exécute **entre** la requête du client et la réponse du serveur.

Imagine la sécurité à l'entrée d'une boîte de nuit :
- Le client arrive (= la requête)
- Le videur vérifie la carte d'identité (= le middleware)
- Si OK → le client entre (= le contrôleur est appelé)
- Si pas OK → le client est refusé (= on renvoie une erreur)

## Comment ça marche ?

```js
const verifierAge = (req, res, next) => {
  if (req.body.age < 18) {
    return res.status(403).json({ message: "Accès interdit" });
  }
  next();  // "OK, passe au suivant"
};
```

`next()` est une fonction qui dit "tout est OK, passe au middleware ou contrôleur suivant".

## Ce que vous devez faire

Ce dossier est un **BONUS**. Si vous avez fini le reste, complétez `validateProduct.js`.

## Documentation utile

- Middlewares : https://expressjs.com/fr/guide/using-middleware.html
