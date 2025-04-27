# ud83cudfb8 Soolking - Bot Discord (Version TypeScript) ud83eudd16

![Status](https://img.shields.io/badge/status-actif-brightgreen)
![Version](https://img.shields.io/badge/version-2.0.0-blue)
![Discord.js](https://img.shields.io/badge/discord.js-v14-blueviolet)
![TypeScript](https://img.shields.io/badge/TypeScript-v5-blue)

## ud83dudcdd u00c0 propos

Soolking est un bot Discord entiu00e8rement u00e9crit en TypeScript qui permet de jouer de la musique dans vos salons vocaux. Avec des commandes intuitives et une qualitu00e9 audio exceptionnelle, Soolking est le compagnon idu00e9al pour animer vos serveurs Discord !

## u2728 Fonctionnalitu00e9s

- ud83cudfa7 Jouer de la musique depuis YouTube
- u23e9 Passer u00e0 la chanson suivante
- ud83dudccb Gu00e9rer une file d'attente de lecture
- ud83dudd0a Contru00f4le du volume
- ud83dudd04 Structure de code modulaire et extensible en TypeScript
- u26a1 Performance optimisu00e9e

## ud83dudee0ufe0f Structure du Projet

```
discord-ts/
u251cu2500u2500 .env               # Variables d'environnement
u251cu2500u2500 src/
u2502   u251cu2500u2500 index.ts          # Point d'entru00e9e principal
u2502   u251cu2500u2500 types.ts          # Du00e9finitions des types TypeScript
u2502   u251cu2500u2500 config.ts         # Configuration du bot
u2502   u251cu2500u2500 commands/         # Commandes du bot
u2502   u2502   u251cu2500u2500 music/        # Commandes musicales
u2502   u2502       u251cu2500u2500 play.ts      # Commande pour jouer de la musique
u2502   u2502       u251cu2500u2500 next.ts      # Commande pour passer u00e0 la musique suivante
u2502   u2502       u2514u2500u2500 disconnect.ts # Commande pour du00e9connecter le bot
u2502   u251cu2500u2500 slashCommands/     # Commandes slash
u2502   u2502   u2514u2500u2500 ping.ts        # Commande slash de test
u2502   u2514u2500u2500 utils/           # Fonctions utilitaires
u2502       u2514u2500u2500 logger.ts      # Systu00e8me de journalisation
u2514u2500u2500 node_modules/      # Du00e9pendances
```

## ud83dudcbb Technologies Utilisu00e9es

- [TypeScript](https://www.typescriptlang.org/) - Langage de programmation typu00e9
- [Discord.js](https://discord.js.org/) - API Discord pour Node.js
- [discord-player](https://discord-player.js.org/) - Framework audio pour Discord.js
- [discord-player-youtubei](https://www.npmjs.com/package/discord-player-youtubei) - Extracteur YouTube altenative

## ud83dude80 Installation

### Pru00e9requis

- [Node.js](https://nodejs.org/) (v16.9.0 ou supu00e9rieur)
- [Bun](https://bun.sh/) (recommandu00e9 pour des performances optimales) ou [npm](https://www.npmjs.com/)
- [FFmpeg](https://ffmpeg.org/) (pour le traitement audio)

### u00c9tapes d'installation

1. **Cloner le du00e9pu00f4t**
```bash
git clone https://github.com/votre-username/soolking-bot.git
cd soolking-bot
```

2. **Installer les du00e9pendances**
```bash
bun install
```
ou
```bash
npm install
```

3. **Configurer le .env**
Copiez le fichier `.env.example` en `.env` et ajoutez votre token Discord :
```
DISCORD_TOKEN=votre_token_discord
CLIENT_ID=votre_client_id
PREFIX=!
```

4. **Compiler le TypeScript**
```bash
bun run build
```
ou
```bash
npm run build
```

5. **Du00e9marrer le bot**
```bash
bun start
```
ou
```bash
npm start
```

## ud83cudfae Commandes

| Commande | Description | Utilisation |
|----------|-------------|-------------|
| `!play` | Joue une chanson ou l'ajoute u00e0 la file d'attente | `!play nom_de_la_chanson` ou `!play URL` |
| `!next` | Passe u00e0 la chanson suivante | `!next` |
| `!disconnect` | Du00e9connecte le bot du salon vocal | `!disconnect` |

## ud83dudcac Contribuer

Les contributions sont les bienvenues ! N'hu00e9sitez pas u00e0 ouvrir une issue ou u00e0 soumettre une pull request.

1. Forkez le projet
2. Cru00e9ez votre branche de fonctionnalitu00e9 (`git checkout -b feature/amazing-feature`)
3. Committez vos changements (`git commit -m 'Add some amazing feature'`)
4. Poussez vers la branche (`git push origin feature/amazing-feature`)
5. Ouvrez une Pull Request

## ud83dudcdc Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus d'informations.

## ud83dudc96 Remerciements

- [Discord.js](https://discord.js.org/) pour leur incroyable framework
- [discord-player](https://discord-player.js.org/) pour les fonctionnalitu00e9s de lecture audio
- Tous les contributeurs qui ont participu00e9 u00e0 ce projet

---

Du00e9veloppu00e9 avec u2764ufe0f par @MehdiDiasGomes

ud83cudf1f N'oubliez pas de mettre une u00e9toile si ce projet vous a u00e9tu00e9 utile ! ud83cudf1f