//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
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
global.gurl = process.env.GURL || "https://wa.me/2349121881343";
global.website = process.env.GURL || "http://cypherilerioluwa.unaux.com/";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
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
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
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

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRU1iZGtLN2Rid21TSEVXVkxRb3lEUklSQkpEVFdvcTlaTGl3ME12ZnFGaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUtYWmZ6bDYyd09BaUxuQ3RjdEphdCtnMllMZnJJeEZQUWVKendhaDgyQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRTHBCS3h0Sm1heXRWUDhpYTlSNUM5TmNycS9xZmY3aUp0ckdiOVMwazNJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJL3FlaVpZZmV3L2xnS2FJM0FGSzJxVWNtUFJJMlVCSml3OVRiZ1IwNlFnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtNL3pzTEpSOEdhLzVNSE5XQ1o1Q2xnQktURWI3Wm04Um4xVDR3ckJ5RWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklySzRRZWc5OEFLWkNqdzJnZXNiRUdUYm1kTHBrRndPUWVxMVNoT2tGdzg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU5DTEEydU5pNU5lUXQyeXBURmY0aTlrbDVJZGNlZ1IzRHpYZERRUjhYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFhPbUZQcWFXTUJ3RVZ1MWZCOWFVcVlVb1NCbmlrYkRYRjJqZ2hIZmNsTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ijd0cTJjZ3RsVE9sQlFSZlNuUGJTREk5bDI2NFptS3c2L202QXNQMHlFTlAxU3hyelVpOGorb0g0RGN4c2FyQXlCbXFjbGdsVVBFUUlaemx4Qy9RSkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzAsImFkdlNlY3JldEtleSI6IlFNbFpQRmhGNWZhT09iTEliUjRyb3ZyUEJsWERkOHh5VGwyUVJuSjdVWHM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTE1MTA2NjExN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIzQTMxQTYzOTM3RDcxNDkwNDRDNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzE1MjYxMjM3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwUE5oWW1kRFNBaWdDM3pQQ2JSSDhRIiwicGhvbmVJZCI6IjY1ZGRmMmQ0LWExNmUtNDczNS04N2NkLTZkODkxMzY5MTZlYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJERFFoTlhmUHdlZk8ralRyZ3hPV29BU2pOVWc9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBBMm0vYjluNGJGVTVmbWJsVEZoT1NCY3NZYz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0o2OStMZ0pFTEdlODdFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNraithR3Y3bUJ0WEQxUjlKRFpsWTdPaTd4bU81eERUakpPQmlpdko4bUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJUQkYvQ2xVQ1hHOWF3QUZVcmtNZWx1TTI2aG9walZBZHo4bHBqWlZFclUvenJoeHFFVWV2RzNEU3dwcGpRNXpLV3lXVjdoS2dWQ1dhS1BVa2NNU0FBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJDZ3JreXN5cWRuQlQ3ZHQ0TEYvTCtFVHlsZFVDNFk2Nzc0SUplQ1FaVm05V0dENGQvTjFVQjNwRzNEMko0NGw4VmlROVY1VW0vaGN4WmRXQzhsSGJCQT09In0sIm1lIjp7ImlkIjoiMjM0OTE1MTA2NjExNzo1QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMTkyMDMyODUzMjc5MjE6NUBsaWQiLCJuYW1lIjoiQ3lwaGVyIMOMbMOpcsOtb2zDundhIPCfjYDwn5KO4p2k77iP8J+TjCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTUxMDY2MTE3OjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXBJL21ocis1Z2JWdzlVZlNRMlpXT3pvdThaanVjUTA0eVRnWW9yeWZKZyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1MjYxMjM1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUhGbCJ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave to Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*Cypher Ilerioluwa Creation*",
  author: process.env.PACK_AUTHER || "Cypher Ilerioluwa",
  packname: process.env.PACK_NAME || "Gifted-Md♥️",
  botname: process.env.BOT_NAME || "Cypher Bots",
  ownername: process.env.OWNER_NAME || "Cypher Bots",
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
