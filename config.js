//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/165edaf02df71aadbaeb7.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cypherilerioluwa@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://wa.me/2349151066117";
global.website = process.env.GURL || "http://cypherilerioluwa.unaux.com/";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/4b4cb2f88176f87893105.jpg";
global.devs = "2349151066117";
global.sudo = process.env.SUDO || "2349151066117, 2349121881343";
global.owner = process.env.OWNER_NUMBER || "2349151066117, 2349121881343";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/4b4cb2f88176f87893105.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349151066117, 2349121881343";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349151066117, 2349121881343";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID = process.env.SESSION_ID || "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0R3NkVkeVVtV0cySmkvc0Zxamd3ZjU0cWRQV1VoMzEzWlZBOXU0ZFFsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHpyNktyRmtCZnUwS3IvVkpKMy9JSGpyTm1scks4TE5oRmZpbmFXcnRCRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrSjM2clZ4Y0FnZVRLVVBFUVQ3c2p5S3VmK0w2bUdnMXZhbUNRSXBmL2xvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXZ2tSOHk1bTl5U1FyZXlweVhVdWx0b0NyQzZScWV4SGF1a0NWS0dDZmlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNHQTRUcmM4S2VSSUZJdGxDc0t3cUZhejIwZ0NhYm05eVkyQ3ptT1BDRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkxCU0FMOG51ZTdoQjlDVGJPVzE4Yzk5T1I5U2JsdnBRZDZadU1aY0piMlk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR01OMG9XVG84WnZPVVJmb1dzb1dMVjVjcFhhQjhVN1RpNUtYZ1lyYjlHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzJweXpObUVOc2p3VDRGeFpJaDdjcU5pWnA5T3YyNGluTWh5a2xob09YYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1TNUZOOHJZUGFka1YvenlKakZEeGNOZ3ZoYlRhOFl2RXVkV2w2WW9zZUVJemRRdU0xQWRMd2R2OHhvNFdkeXR6YUNaNCtOM3ZzNURmZE41a1dLcERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTIsImFkdlNlY3JldEtleSI6IkNRMndKY0ErOGUvMDBmV3lVUzhnWDlPZFNVZFVkeHhIbEhndEczbHdMdEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE1MTA2NjExN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTNGREMxMkQ4Qjc1RDcyRTJCRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE1MzYwMjM2fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyeHoxeWVBNlFOdVdhemhraWNpdkdRIiwicGhvbmVJZCI6ImYxY2E1N2JiLWVkMWUtNGUwOC1iZDNmLWJmZTE0MGI3ZTk0YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKcTdCUHhtVFJ3K0V4S1QwZ0ZyYlB3cHNWTTg9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFnQmNVZlRWYWxZK1FWWTZnQnFqdnN6MHJPYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0s3bSthc05FT21qK2JFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNraithR3Y3bUJ0WEQxUjlKRFpsWTdPaTd4bU81eERUakpPQmlpdko4bUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ilc1VkF4WlljMlg4K1N0RWdVSW9DV3lTajJFbjk0Z3JPNTNvYjRvNit1S0MrK04rR0NOeEd6Nis1QzVjL3R0ckxieTBsUENaVFJUUkRET2t5SUttNUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJVYmhPSEhsZlE3eWt5VmQ4YVJsZVJpbnY5N0JqRmlpRTkwdTVhYkFWRzhRbkxSc1UrWkkzdE4vcC96M01GUlVZSnNGc2diRUszcFdOQmIrcWNVZGFCQT09In0sIm1lIjp7ImlkIjoiMjM0OTE1MTA2NjExNzo5QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTkyMDMyODUzMjc5MjE6OUBsaWQiLCJuYW1lIjoiQ3lwaGVyIMOMbMOpcsOtb2zDundhIPCfjYDwn5KO4p2k77iP8J+TjCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUxMDY2MTE3OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXBJL21ocis1Z2JWdzlVZlNRMlpXT3pvdThaanVjUTA0eVRnWW9yeWZKZyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1MzYwMjM0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBXSiJ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave to Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*ÀKÀNDÉ-MIDÉ-BOT*",
  author: process.env.PACK_AUTHER || "Cypher Ilerioluwa",
  packname: process.env.PACK_NAME || "ÀKÀNDÉ-MIDÉ-BOT",
  botname: process.env.BOT_NAME || "ÀKÀNDÉ-MIDÉ-BOT",
  ownername: process.env.OWNER_NAME || "Cypher Ilerioluwa",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "GIFTED").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
