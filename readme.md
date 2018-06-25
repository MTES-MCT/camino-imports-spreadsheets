# Camino imports spreadsheets

Scripts pour générer les tables de la bases de données Camino (au format json) à partir de Google spreadsheets.

Génère les fichiers suivants:

```bash
- domaines.json
- types.json
- _domaines_types.json
- statuts.json
- demarches.json
- demarches_statuts.json
- etapes.json
- etapes_statuts.json
- _demarches_etapes.json
- substances.json
- substances_legals.json
```

---

## Configuration

- Renommer le fichier `.env.example` en `.env`.
- Compléter le fichier `env`.

---

```bash
# installation
npm i

# export des fichiers avec npm
npm run build
```
