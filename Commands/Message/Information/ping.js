const { Message, PermissionFlagsBits } = require("discord.js");
const LRMN = require("../../../handlers/Client");
const { Queue } = require("distube");

module.exports = {
  name: "s?ping",
  aliases: ["latancy"],
  description: `get ping of bot`,
  userPermissions: PermissionFlagsBits.SendMessages,
  botPermissions: PermissionFlagsBits.EmbedLinks,
  category: "Information",
  cooldown: 5,
  inVoiceChannel: false,
  inSameVoiceChannel: false,
  Player: false,
  djOnly: false,

  /**
   *
   * @param {LRMN} client
   * @param {Message} message
   * @param {String[]} args
   * @param {String} prefix
   * @param {Queue} queue
   */
  run: async (client, message, args, prefix, queue) => {
    // Code
    client.embed(message, `Ping :: \`${client.ws.ping}\``);
  },
};
