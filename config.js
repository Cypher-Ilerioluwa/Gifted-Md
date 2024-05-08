//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/204481823350f368c1826.mp4";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "giftedmd@giftedtechnexus.co.ke";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://wasitech10:WASImd##12@cluster0.eclhxiz.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/mouricedevs/Gifted-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaYauR9ISTkHTj4xvi1l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a202f454c9532c3f5b7f8.jpg";
global.devs = "254762016957,254110853827,254728746852,255655147353,254728782591";
global.sudo = process.env.SUDO || "2348104656991, 2349121881343";
global.owner = process.env.OWNER_NUMBER || "2348104656991, 2349121881343";
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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2348104656991, 2349121881343";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2348104656991, 2349121881343";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU84Y2l1QkFJbWFtSURNbFNld0dVbUtRaXZWMDI4aXdyZjFkR2NoeFluQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHZ1RUQ0RzdCditITGovQzcyNDVVM0JJQklxMkJVU2tqYmtEdjV4SzkxUT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRWhUVTc0NXBJWmx2V0FHbmR5dGJoMnM0YjMraFNHOERNR1M5ZGdaWTNzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhb0d6UXNMYWdaMnJDTm9QTml1a0xUUGVFMVNEa3JYWm5JS1JTWXd4bHpFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGblRSL2t0NjM5bmlBSjkrQXZ4b1RsaUlQMGRFNnliZzRsck9SSUdybkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNLazU0bk1DT2F2UXBKVllnTzNmeEVtbDgxNlJMUlpXRFhiVitsRmliMlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBMUEN1NEV4UDdhTUx5UHpxVDhVWUxCSmVERW1vVkJSSUZmejNhdmxsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEF5Wjl0SE02VW1sS1V2ZVBqVGpZUzRkbjZvbkR3b2JxbXdvK0pleGR3az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJkQjJvR0JzY0NRYitlckVUQUtTWmlVN0xQS2hvNUpYWGxUb3JOc09rQnkrVzRFV0ovc2VEdU5uajFHNi9NbjVmSHE4Q0EwK3hka2NyNHc2Vm1weWpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjMyLCJhZHZTZWNyZXRLZXkiOiJwak1hSC8zVXJqQWhZMUlHbFNYK210TnBlRGdyTVlxZzZDOXRMZGcvcnBNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHUTdxeDBOZVJ6S2pGdVQ1RHE1b0JRIiwicGhvbmVJZCI6ImU2YTYxYTU5LTBjM2MtNGFmOC1hNjgzLWZlZGNjYmFjY2UzMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlVFZBSmN2T2FKVFR1U3J4clRVSzlDcWpMdTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1JvVzcxODkxZHhUWU9QSmI2NjZhVW5xd09vPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlRNRU5KR0FHIiwibWUiOnsiaWQiOiIyMzQ4MTA0NjU2OTkxOjZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiS8KjbHZpbiDiiIXComjigqwg8J+YjvCfmI4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ042WWxyNEZFSXpHNzdFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjdpL1d3c1lBU2dybDVOYjRRZ0hORFc2RWRRY01aMWd1Q3hSajZ4Zm9mMVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjRLVDc0UmlrLzZxZXpocnVlanpVUmRpamhSbUNuNkY4NDgxQ0FqWXVzWlM0RlNwVWVOa2dWdjBrYjdIOEtxbXJ2VnVsL0RnMDF4TnAwN1Zaejl2cERRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJmQ1BxN2VtNERBZCtrMG0yUUJyaVROSVRDUi8yNFFUM0VrNFQxaExMR29WZ3ZtOWdINXdYZkJCcEdwUzlaODJZbGY1TjllOFlqNTZpUTMzRFlZQmZndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDQ2NTY5OTE6NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlNHYxc0xHQUVvSzVlVFcrRUlCelExdWhIVUhER2RZTGdzVVkrc1g2SDlXIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1MjAwNzk0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU9TbCJ9"
module.exports = {
  menu: process.env.MENU || "2", /*Leave to Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "*Cypher Ilerioluwa Creation*",
  author: process.env.PACK_AUTHER || "Gifted Tech",
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
