//RCD code
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });

//=======[dependencies]====================//
global.SESSION_ID = process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUt5dStBR083amVCNU9mYkhXY0R3dWpibmFFU1Voakdhckh2RzNpQzRWOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2NFQUZhRmtQVExuNWR6OTJXaVQzNlFHS0svZGxFRnNRUnA1WVBNUk9CND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQk90UlQ2VmhGc1kyWGt0WXV6ODhzeDV2QzJPMldyT1N3ZWFDRG4xa25ZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0dWwzeDRXaXY3aEtjeDhRM28wQlYvbWdjQm50bFJIbm1WSG9pR0kyVERjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNHNXRlU2NlaUYvckV0KzBCTVlHOHk4Q2VUSC9hNE9NZkNCM1ZXZG11V1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5hWTd5OTJTblhrQXVFNDhhV1RHc3hLQnBmcnJnNTlpZWg4elh0cDlWWFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ01WSXNHZC9uMFRKV2s3TmtxalZETHZMc2c0clhKY3QvbmZMdWRxSXlGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1RqcE5hWjRZK3YvK1U4bk1xM3VHZ1R1SDIydzloZVpmKzRQbzVseVBEQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9YQTVUc21oaDRyV081SGVYb0QzUnd4VTdsblpSK0Y0VUJxS0I2LyszU1pXSkJOK3FhV1hIaHFTUUg4c0VXOWhrMHVJZ01oRzlaRldmaDFZVDhxU2p3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiJwZ1BYcGZ4dUg5aHpkQjdwTGgrVEpsSUpSQ3d3VlpsdlAvVHB0WS9TYjlFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJoUEZLNVpSSFRCS0p0NGZQdVNEbTRBIiwicGhvbmVJZCI6IjBiZDM0YmQyLTJmY2YtNDY4Ny05OTU3LWI2Mjk2ZWZlMjZjOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaME56Um1rbUtQWERZbXVLU1lLZVFrRmVleGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1JUYndDbGZrYnVVRTN1dGdWWWJNVFZKYlc0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IllOUTZFUTRSIiwibWUiOnsiaWQiOiIyMzQ3MDUzMTc0MDc2OjIxQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJU043UnNRMXNENnRRWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJoUEgzWnVHVzRWdGlydnBiZ2F3amQwVWpHMUpaWDMyQ0ZqWjdVTEZYeEY4PSIsImFjY291bnRTaWduYXR1cmUiOiJWR1lFNzlRKzY3NENCV0dTd0FMaGZkSzhOK2FPMEU3cFFJY0FPLzN1aVljbEx5OEpkeitkSkZTdXZaeW5mSGFaMHR3Uk1yVGhSZUtUbU9HdnJhUjFEUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoickdRUjNxdCtZeEh5OUREdGdsMElqTXhqbDVTVVZTcVg5dlA3OVRUaWd0U0YyRktkcFNxSHAvMlVhWGxyenl6bTE1Z3BUTS9raEtsYUE2eGxxNnoralE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDUzMTc0MDc2OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllUeDkyYmhsdUZiWXE3Nlc0R3NJM2RGSXh0U1dWOTlnaFkyZTFDeFY4UmYifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM3Njg5MzF9";
global.MONGODB = process.env.MONGODB_URI || "";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.sudo = process.env.SUDO
  ? process.env.SUDO.replace(/[\s+]/g, "")
  : "null";
global.owner = process.env.OWNER_NUMBER
  ? process.env.OWNER_NUMBER.replace(/[\s+]/g, "")
  : "94789958225";
global.THUMB_IMAGE =
  process.env.THUMB_IMAGE ||
  process.env.IMAGE ||
  "https://i.postimg.cc/FssKzLK7/20240622-140407.jpg,https://i.postimg.cc/FssKzLK7/20240622-140407.jpg";
global.userImages =
  process.env.USER_IMAGES ||
  "https://i.postimg.cc/3wrf9ccK/IMG-20240804-WA0000.jpg";
///===========[global iMPORTS]====================//

module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`RCD-MD`",
  author: process.env.PACK_AUTHER || "RCD-MD",
  packname: process.env.PACK_NAME || "RCD",
  botname: process.env.BOT_NAME || "RCD-MD",
  ownername: process.env.OWNER_NAME || "RCD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "WhatsApp").toUpperCase(),
};
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u/161";
global.website = process.env.GURL || "https://chat.whatsapp.com/Cry8eSzZqW27t9H8uOcRIR";
global.devs = "94789958225,94757660788,94778668193,94785274495";
global.msg_style = process.env.STYLE || "4";
global.session_reset = process.env.SS_RESET || "false";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
(global.disablegroup = process.env.DISABLE_GROUPS || "false"),
  (global.MsgsInLog = process.env.MSGS_IN_LOG || "true");
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "null";
global.read_status_from = process.env.READ_STATUS_FROM || "null";
global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://mainv2-f66485a0f702.herokuapp.com/";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
