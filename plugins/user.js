//nteej
let {cmd} = require("../lib/plugins");
cmd({
  pattern: "jid",
  desc: "get jid of all user in a group.",
  category: "user",
  filename: __filename,
  use: "<@user>",
 }, async ({ jid, reply, quoted }) => {
  if (quoted) {
    return reply(quoted.sender);
  } else {
    return reply(jid);
  }
 });
 
 // Get Profile Picture Command
 cmd({
  pattern: "getpp",
  desc: "Get Profile Pic For Given User",
  category: "user",
  filename: __filename,
 }, async (message) => {
  try {
    const user = message.reply_message
      ? message.reply_message.sender
      : message.mentionedJid[0]
      ? message.mentionedJid[0]
      : message.from;
 
    let profilePicUrl;
    try {
      profilePicUrl = await message.bot.profilePictureUrl(user, "image");
    } catch (error) {
      return message.reply("```Profile Pic Not Fetched```");
    }
 
    return await message.bot.sendMessage(
      message.chat,
      {
        image: {
          url: profilePicUrl,
        },
        caption: "  *---Profile Pic Is Here---*\n" + Config.caption,
      },
      {
        quoted: message,
      }
    );
  } catch (error) {
    await message.error(error + "\n\ncommand : getpp", error);
  }
 });
 
 // Get User Information Command
 cmd({
  pattern: "whois",
  desc: "Makes photo of replied sticker.",
  category: "user",
  use: "<reply to any person>",
  filename: __filename,
 }, async (message) => {
  try {
    const user = message.reply_message
      ? message.reply_message.sender
      : message.mentionedJid[0]
      ? message.mentionedJid[0]
      : false;
 
    if (!user && message.isGroup) {
      const groupPicUrl =
        (await message.bot
          .profilePictureUrl(message.chat, "image")
          .catch(() => "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg")) ||
        THUMB_IMAGE;
 
      const metadata = message.metadata;
      const admins = message.admins
        .map(
          (admin, index) =>
            `  ${index + 1}. wa.me/${admin.id.split("@")[0]}`
        )
        .join("\n");
 
      const owner =
        metadata.owner ||
        message.admins.find((admin) => admin.admin === "superadmin")?.id ||
        false;
 
      let groupInfo =
        "\n      *「 GROUP INFORMATION 」*\n*▢ NAME :* \n   • " +
        metadata.subject +
        "\n*▢ Members :*\n   • " +
        metadata.participants.length +
        "\n*▢ Group Owner :*\n   • " +
        (owner ? "wa.me/" + owner.split("@")[0] : "notFound") +
        "\n*▢ Admins :*\n" +
        admins +
        "\n*▢ Description :*\n   • " +
        (metadata.desc?.toString() || "_not set_") +
        "\n   ";
 
      return await message.reply(
        groupPicUrl,
        {
          caption: groupInfo,
        },
        "image"
      );
    } else {
      if (!user) {
        return message.reply("*_Please Reply To A Person!_*");
      }
 
      try {
        const status = await message.bot.fetchStatus(user);
        const statusText = status.status;
        let statusTimestamp = status.setAt.toString();
        let timestampArray = statusTimestamp.split(" ");
 
        if (timestampArray.length > 3) {
          statusTimestamp = timestampArray.slice(0, 5).join(" ");
        }
      } catch {
        statusText = "undefined";
        statusTimestamp = "";
      }
 
      const userId = user.split("@")[0];
      let profilePicUrl;
 
      try {
        profilePicUrl = await message.bot.profilePictureUrl(user, "image");
      } catch (error) {
        profilePicUrl = "";
      }
 
      const userName = await message.bot.getName(user);
 
      return await message.bot.sendMessage(
        message.jid,
        {
          image: {
            url: profilePicUrl,
          },
          caption: Config.ownername,
        },
        {
          quoted: message,
        }
      );
    }
  } catch (error) {
    await message.error(error + "\n\ncommand : whois", error);
  }
 });
 
 // Get WhatsApp Link Command
 cmd({
  pattern: "wa",
  desc: "Makes wa me of quoted or mentioned user.",
  category: "user",
  filename: __filename,
 }, async (message) => {
  try {
    const user = message.reply_message
      ? message.reply_message.sender
      : message.mentionedJid[0]
      ? message.mentionedJid[0]
      : false;
 
    await message.reply(
      !user
        ? "*Please Reply Or Mention A User*"
        : "https://wa.me/" + user.split("@")[0]
    );
  } catch (error) {
    await message.error(error + "\n\ncommand : wa", error, false);
  }
 });
 
 // Get User's WhatsApp Link Command
 cmd({
  pattern: "link",
  desc: "Makes wa.me link for user with a custom message, image, and voice note.",
  category: "user",
  filename: __filename,
}, async (message) => {
  try {
    // WhatsApp link
    const waLink = "https://wa.me/" + message.sender.split("@")[0];

    // The image URL (replace with the desired image URL)
    const imageUrl = "https://i.postimg.cc/Vs7vFgHQ/1caf53e8190724e18c51d67cc7a91b7e.jpg";

    // The message text
    const customMessage = "𝗜𝗠 𝗥𝗖𝗗 𝗠𝗗 𝗪𝗔 𝗕𝗢𝗧 𝗨𝗦𝗘𝗥 𝗖𝗢𝗠𝗘 𝗠𝗬 𝗘𝗡𝗕𝗢𝗫 💛";

    // The voice note URL
    const voiceUrl = "https://github.com/mmmm6644556/VOICE-CLIP-/raw/main/VOICE/Very%20Sad%20Painful%20Ringtone%20New%20Turkish%20Arabic%20Sad%20Ringtone%202023%20Very%20Emotional%20Music%20Ringtone%20Arabic.mp3";

    // Sending the custom message and image
    await message.reply(
      `${customMessage} ${waLink}`,
      { image: { url: imageUrl } }
    );

    // Sending the voice note after a slight delay
    setTimeout(async () => {
      await message.reply({ audio: { url: voiceUrl }, mimetype: 'audio/mp3' });
    }, 1000); // Adjust the delay as needed

  } catch (error) {
    console.error(error);
  }
});




