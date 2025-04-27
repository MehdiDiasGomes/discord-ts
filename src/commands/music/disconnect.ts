import { Message } from "discord.js";
import { MessageCommand } from "../../types";
import logger from "../../utils/logger";

const command: MessageCommand = {
  name: "disconnect",
  aliases: ["dc", "leave"],
  async execute(message: Message, args: string[]) {
    // S'assurer que message.guild n'est pas null
    if (!message.guild) return;

    // Implementation du lecteur de musique a été retirée
    // Implémentez votre propre solution ici
    
    message.reply("⚠️ Cette commande est désactivée temporairement. Une nouvelle solution de lecture sera implémentée prochainement.");
    logger.debug(`Commande disconnect désactivée: Tentative d'utilisation par ${message.author.tag}`);
  },
  cooldown: 2
};

export default command;