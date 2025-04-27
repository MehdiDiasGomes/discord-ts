import type {
    SlashCommandBuilder, 
    CommandInteraction, 
    AutocompleteInteraction, 
    Message
} from "discord.js"

export interface SlashCommand {
    command: SlashCommandBuilder | any,
    execute: (interaction : CommandInteraction) => void,
    autocomplete?: (interaction: AutocompleteInteraction) => void,
    cooldown?: number // in seconds
}

export interface MessageCommand {
    name: string,
    aliases?: string[],
    execute: (message: Message, args: string[]) => Promise<void> | void,
    cooldown?: number // in seconds
}