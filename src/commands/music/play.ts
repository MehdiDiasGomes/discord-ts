import { Message } from "discord.js";
import { MessageCommand } from "../../types";
import logger from "../../utils/logger";

const command: MessageCommand = {
  name: "play",
  aliases: ["p"],
  async execute(message: Message, args: string[]) {
    // S'assurer que message.member et message.guild ne sont pas null
    if (!message.member || !message.guild) return;

    const query = args.join(" ");
    if (!query) {
      logger.warn(`Commande play sans argument par ${message.author.tag}`);
      return message.reply("❌ Donne-moi un lien ou un terme de recherche !");
    }

    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      logger.warn(`Utilisateur ${message.author.tag} n'est pas dans un salon vocal`);
      return message.reply("❌ Tu dois être dans un salon vocal !");
    }

    // Implementation du lecteur de musique a été retirée
    // Implémentez votre propre solution ici
    
    message.reply("⚠️ Cette commande est désactivée temporairement. Une nouvelle solution de lecture sera implémentée prochainement.");
    logger.debug(`Commande play désactivée: Tentative d'utilisation par ${message.author.tag} avec query: "${query}"`);
  },
  cooldown: 5
};

export default command;