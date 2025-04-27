import { Message, EmbedBuilder, version as discordJSVersion } from "discord.js";
import { MessageCommand } from "../../types";
import logger from "../../utils/logger";
import { version } from "../../../package.json";

const command: MessageCommand = {
  name: "status",
  aliases: ["info", "stats"],
  async execute(message: Message, args: string[]) {
    // S'assurer que message.client est disponible
    if (!message.client) return;

    try {
      logger.debug(`Commande status exécutée par ${message.author.tag}`);

      // Calcul de l'uptime
      const uptimeMs = message.client.uptime || 0;
      const seconds = Math.floor((uptimeMs / 1000) % 60);
      const minutes = Math.floor((uptimeMs / (1000 * 60)) % 60);
      const hours = Math.floor((uptimeMs / (1000 * 60 * 60)) % 24);
      const days = Math.floor(uptimeMs / (1000 * 60 * 60 * 24));
      
      const uptime = `${days}j ${hours}h ${minutes}m ${seconds}s`;

      // Nombre de serveurs
      const guildCount = message.client.guilds.cache.size;
      
      // Nombre d'utilisateurs (approximatif puisque les caches pourraient ne pas être complets)
      const userCount = message.client.guilds.cache.reduce(
        (acc, guild) => acc + (guild.memberCount || 0), 
        0
      );

      // Création de l'embed
      const embed = new EmbedBuilder()
        .setColor(0x3498DB) // Bleu
        .setTitle("✨ Informations sur le bot")
        .setDescription("Voici les informations et statistiques actuelles du bot")
        .addFields(
          { name: "⏱️ Uptime", value: uptime, inline: true },
          { name: "👥 Serveurs", value: guildCount.toString(), inline: true },
          { name: "👤 Utilisateurs", value: userCount.toString(), inline: true },
          { name: "📊 Version", value: `v${version}`, inline: true },
          { name: "discord.js", value: `v${discordJSVersion}`, inline: true },
          { name: "Node.js", value: `${process.version}`, inline: true }
        )
        .setFooter({ text: `Demandé par ${message.author.tag}` })
        .setTimestamp();

      // Etat du lecteur de musique
      embed.addFields(
        { name: "🎵 Lecteur de musique", value: "⬜ Désactvé (en maintenance)" }
      );

      // Envoyer l'embed
      await message.reply({ embeds: [embed] });
      logger.success(`Informations sur le bot envoyées à ${message.author.tag}`);

    } catch (error) {
      logger.error(`Erreur lors de l'exécution de la commande status:`, error);
      message.reply("❌ Une erreur est survenue lors de la récupération des informations du bot.");
    }
  },
  cooldown: 5
};

export default command;