# Dossier `tests/unit/` — Les tests unitaires

## C'est quoi un test unitaire ?

Un **test unitaire** vérifie qu'**UNE seule fonction** marche correctement, toute seule.

C'est comme vérifier qu'une ampoule fonctionne avant de la mettre dans une lampe.

## Exemple simple

```js
// La fonction qu'on veut tester
const addition = (a, b) => a + b;

// Le test qui vérifie
test("2 + 3 devrait donner 5", () => {
  const resultat = addition(2, 3);
  expect(resultat).toBe(5);   // "Je m'attends à ce que le résultat soit 5"
});
```

Si `addition(2, 3)` renvoie `5` → le test **passe** (vert dans le terminal).
Si `addition(2, 3)` renvoie `7` → le test **échoue** (rouge dans le terminal).

## Comment lancer les tests ?

```bash
npm test              # Lance tous les tests une fois
npm run test:watch    # Relance automatiquement quand vous modifiez un fichier
npm run test:coverage # Montre le % de code testé
```

## La structure d'un test : ARRANGE / ACT / ASSERT

```js
test("description", () => {
  // 1. ARRANGE → Préparer les données
  const nombres = [1, 2, 3];

  // 2. ACT → Appeler la fonction
  const resultat = maFonction(nombres);

  // 3. ASSERT → Vérifier le résultat
  expect(resultat).toBe(6);
});
```

## Ce que vous devez faire

Ouvrir `helpers.test.js` et **compléter les tests**. Un exemple est déjà fourni.

## Documentation utile

- Jest pour débutants : https://jestjs.io/fr/docs/getting-started
- expect() : https://jestjs.io/docs/expect
