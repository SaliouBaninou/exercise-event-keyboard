
# 🔹 Exercice 3: Écoute des événements clavier ⌨️

## Objectif 🎯

Cet exercice consiste à afficher la dernière touche pressée par l'utilisateur en écoutant les événements clavier.

## Fonctionnalités ⚙️

- Un `useEffect` est ajouté pour écouter l'événement `keydown` sur le clavier 🧑‍💻.
- La touche pressée est stockée dans un état `useState` 🔑.
- L'événement est correctement nettoyé dans le `return` de `useEffect` pour éviter les fuites de mémoire 🧹.

## Prérequis 📦

- Node.js installé sur votre machine 💻.
- Un éditeur de texte ou IDE de votre choix (par exemple, VSCode) 🖥️.

## Installation ⚡

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/SaliouBaninou/exercise-event-keyboard.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd exercise-event-keyboard
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

## Lancer l'application 🚀

Pour démarrer l'application en mode développement, utilisez la commande suivante :

```bash
npm start
```

Cela ouvrira l'application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000) 🌐.

## Fonctionnement 🔍

- **`useEffect` :** Ajoute un écouteur d'événements `keydown` sur le document pour capturer la touche pressée ⌨️.
- **`useState` :** Stocke la touche pressée et l'affiche sur la page 🖥️.
- **Nettoyage de l'événement :** L'événement est nettoyé lorsque le composant est démonté pour éviter les fuites de mémoire 🧹.

## Technologies utilisées 💡

- React (Hooks : `useState`, `useEffect`) ⚛️

## Auteur 🖋️

Ce projet est développé et maintenu par **Saliou Baninou**. Il est destiné à un usage personnel et ne doit pas être modifié sans autorisation préalable 🛑.

## Licence 📜

Ce projet est sous licence personnelle et ne doit pas être redistribué ou modifié sans l'accord de l'auteur 🚫.

