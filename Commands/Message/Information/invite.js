const { Message, PermissionFlagsBits } = require("discord.js");
const LRMN = require("../../../handlers/Client");
const { Queue } = require("distube");
const { links } = require("../../../settings/config");

module.exports = {
  name: "s?invite",
  aliases: ["inv", "addme"],
  description: `Get My Invite Link For Add me !!`,
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
    client.embed(
      message,
      `[\`Click to Invite Me\`](${links.inviteURL.replace(
        "BOTID",
        client.user.id
      )})`
    );
  },
};
