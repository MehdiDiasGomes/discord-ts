import { Message } from "discord.js";
import { MessageCommand } from "../../types";
import logger from "../../utils/logger";

const command: MessageCommand = {
  name: "salut",
  async execute(message: Message, args: string[]) {
    logger.debug(`Salutation de ${message.author.tag} dans ${message.guild?.name || 'DM'}`);
    message.reply(`Salut ${message.author}!`);
  },
  cooldown: 1,
};

export default command;
