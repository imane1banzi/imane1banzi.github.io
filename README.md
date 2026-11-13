# Portfolio — Imane Banzi

Portfolio personnel de **Imane Banzi**, développeuse Fullstack (Java/Spring Boot, Angular, Laravel, Python & IA) basée à Casablanca.

Site statique en HTML, CSS et JavaScript, sans framework ni étape de build.

## Sections

- **Projets techniques** : Ebank, Chatbot RAG, SmartOP, Lifestyle Planning Tool, Agent IA pour Jira
- **Sites réalisés** : MyShop (en ligne sur [my-shop.cloud](https://my-shop.cloud/)), Maison Ambre, Maison Zitoun
- **Compétences**
- **Contact** et téléchargement du CV

## Structure

```
portfolio/
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js        # modale vidéo
│   ├── img/              # captures des sites + favicon
│   ├── cv/               # CV-Imane-Banzi.pdf
│   └── videos/           # myshop.mp4, maison-ambre.mp4, maison-zitoun.mp4
```

## Lancer en local

Ouvrir `index.html` dans le navigateur, ou lancer un petit serveur :

```bash
npx serve .
# ou
python -m http.server 8000
```

## Fichiers à ajouter

| Fichier | Utilisé par |
|---|---|
| `assets/cv/CV-Imane-Banzi.pdf` | boutons « Télécharger mon CV » |
| `assets/videos/myshop.mp4` | vidéo MyShop |
| `assets/videos/maison-ambre.mp4` | vidéo Maison Ambre |
| `assets/videos/maison-zitoun.mp4` | vidéo Maison Zitoun |

> GitHub Pages refuse les fichiers de plus de 100 Mo : compresser les vidéos (idéalement < 20 Mo chacune).

## Mise en ligne avec GitHub Pages

1. Pousser le dépôt sur GitHub.
2. **Settings → Pages → Source : Deploy from a branch**, branche `main`, dossier `/ (root)`.
3. Le site sera disponible sur `https://imane1banzi.github.io/<nom-du-depot>/`
   (nommer le dépôt `imane1banzi.github.io` pour l'avoir directement sur `https://imane1banzi.github.io/`).

## Contact

- imanebanzi3@gmail.com
- [github.com/imane1banzi](https://github.com/imane1banzi)
