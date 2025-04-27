import { Client, GatewayIntentBits, Collection, Events, Message } from 'discord.js';
import { readdirSync } from 'fs';
import { join } from 'path';
import dotenv from 'dotenv';
import type { MessageCommand } from './types';
import logger from './utils/logger';

// Configurer les variables d'environnement
dotenv.config();
const DISCORD_TOKEN = process.env.DISCORD_TOKEN || '';
const PREFIX = process.env.PREFIX || '!';

// Création du client Discord avec les intents nécessaires
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Collection pour stocker les commandes par message
const messageCommands = new Collection<string, MessageCommand>();

// Charger les commandes de message
const commandFiles = readdirSync(join(__dirname, "commands/music")).filter(
    (file) => file.endsWith(".ts") || file.endsWith(".js")
);

for (const file of commandFiles) {
    try {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const command = require(`./commands/music/${file}`).default;
        messageCommands.set(command.name, command);
        logger.debug(`Commande chargée: ${command.name}`);
        if (command.aliases) {
            for (const alias of command.aliases) {
                messageCommands.set(alias, command);
                logger.debug(`Alias chargé: ${alias} -> ${command.name}`);
            }
        }
    } catch (err) {
        logger.error(`Erreur lors du chargement de la commande: ${file}`, err);
    }
}
logger.success(`${commandFiles.length} commandes musicales chargées`);

// NOTE: Implémentation du lecteur de musique supprimée
// C'est ici que vous pourrez implémenter votre propre solution de lecteur de musique

// Événement de connexion du client
client.once("ready", () => {
    logger.success(`✅ Connecté en tant que ${client.user?.tag}`);
});

// Gérer les commandes de message (non-slash)
client.on("messageCreate", async (message: Message) => {
    // Ignore les messages des bots
    if (message.author.bot || !message.guild) return;

    // Gérer les commandes avec préfixe
    if (message.content.startsWith(PREFIX)) {
        const args = message.content.slice(PREFIX.length).trim().split(/\s+/);
        const commandName = args.shift()?.toLowerCase();

        if (!commandName) return;

        const command = messageCommands.get(commandName);
        if (!command) return;

        try {
            logger.command(commandName, `${message.author.tag} (${message.author.id}) sur ${message.guild.name}`);
            await command.execute(message, args);
        } catch (error) {
            logger.error(`Erreur lors de l'exécution de la commande: ${commandName}`, error);
            await message.reply(
                "❌ Une erreur est survenue lors de l'exécution de cette commande!"
            );
        }
    }
});

// Connexion du client Discord
logger.info("Tentative de connexion à Discord...");
client
    .login(DISCORD_TOKEN)
    .then(() => {
        logger.debug("Token accepté, connexion en cours...");
    })
    .catch((error) => {
        logger.error("Erreur de connexion à Discord", error);
    });