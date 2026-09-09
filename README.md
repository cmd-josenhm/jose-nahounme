# Portfolio José Nahounmè

Portfolio React/Vite de José Nahounmè, développeur web et designer à Cotonou. Le site comprend le portfolio, le journal SEO, les articles dynamiques et un formulaire de contact sans backend applicatif.

## Développement local

```bash
npm install
npm run dev
```

Le site est ensuite disponible sur `http://localhost:5173`.

## Vérification avant publication

```bash
npm run build
npm audit --omit=dev
```

Le build régénère automatiquement `public/sitemap.xml` depuis les articles publiés.

## Publication avec GitHub et Netlify

Le projet est prêt pour Netlify avec [netlify.toml](./netlify.toml) :

- commande de build : `npm run build` ;
- dossier publié : `dist` ;
- fallback SPA : toutes les routes React reviennent vers `index.html` ;
- en-têtes de sécurité de base activés.

### Première mise à jour du dépôt GitHub existant

Depuis le dossier du projet :

```bash
git init
git branch -M main
git remote add origin https://github.com/UTILISATEUR/NOM-DU-DEPOT.git
git add .
git commit -m "Mettre à jour le portfolio et le blog"
git push -u origin main
```

Si le dépôt local possède déjà un remote, vérifier avec `git remote -v` puis utiliser :

```bash
git add .
git commit -m "Mettre à jour le portfolio et le blog"
git push origin main
```

Ne pas utiliser `git push --force` : le dépôt GitHub est déjà relié à Netlify et Netlify redéploiera automatiquement après le push sur la branche configurée.

### Contrôle Netlify

Dans Netlify, vérifier que le site pointe vers le bon dépôt et la branche `main`. Les réglages doivent correspondre à `netlify.toml`. Le domaine personnalisé et les variables éventuelles restent dans Netlify ; aucun secret ne doit être ajouté au dépôt.

## Architecture et sécurité

Ce projet n’a pas de backend, d’authentification ni de base de données. Le formulaire de contact utilise FormSubmit depuis le navigateur, donc l’adresse de réception est publique par conception. La validation côté client limite les entrées manifestement invalides, mais une protection anti-abus complète nécessiterait un backend ou une fonction serverless.

Les fichiers `.env` et `.env.*` sont ignorés par Git. Les dépendances de production doivent être contrôlées avant chaque mise en ligne avec `npm audit --omit=dev`.
