//GIFTED-MD
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4";
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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ec6ea1aef6f229cf76909.mp4";
global.devs = "2349151066117";
global.sudo = process.env.SUDO || "2349151066117";
global.owner = process.env.OWNER_NUMBER || "2349151066117";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 5;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8fed3725a6d912aedc601.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "2349151066117";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349151066117, 2349121881343";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://web.giftedtechnexus.co.ke";

global.SESSION_ID = process.env.SESSION_ID || "Gifted;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9aVGFGK0o4Nkw5R2ZLeFYzWkRQajF1czl4UWIxL2Y0YS9jczdHVlUwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL0MyalFKcU5Bdzc5b1hYbHJtd1U1b2VoTTJVWkpkMnZYTVJkcFlxMnRoOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRENNSlNMc0pTc0Jxd3EwY2k3aTV0aFFHV09laDhITXRSOGRnQkw2L0ZzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuK3puMHc1azU0WE1mS1pjYkJIS0VPQXg0ZjI1OS9BbG5UUjV2bllpZDFFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1CMHdqVkZNc3lhOU8yeHR5aXorV3pUN0QrV3Bjb1l3MUFsWG4vaGsrbVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZrL0ZVd2dsc0M3RmNXUkgzaVdyZWdHZjdYcmlyUExKQ0RVNmIzSW9CUVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkFITVJucENiVEREaHJva1QxZ1I1Z29objFHbTFMRFhQK3diU1Z6TDgxbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3dZS1pOK2I4Ly9qK2l1bjIzbzJOV2s2MWdqRlBKTTJxallnZnc5YVBrdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9IQ2lxbEpaZkptelROZ1dkS2xPc0RSWlR0bFdmL3dCQmZsbC9tdnFPMXBzK2IyT3gzNVJmOTdkYWQ2ditrL290M0pvWWhXTnJPV2xpYnUxa2dPTERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJ2WE1RekhwZlJITmowdjB0ZFc4TW9Pb3dUamVyZytqakEvNUMvdWZSdW1VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLaXlNbnh1bFFvQ1ltYlRDZFBRd21BIiwicGhvbmVJZCI6IjU2NGMzZDYzLWUzMGUtNGE3ZS1hMmVjLWU3OWYzMmZlZDgwZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRVowdHVIUGV6dkJ3d2s0cmtzZjJ4L0M0YmM9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJNOWFMTUZuK043QTJlLzNoMUx4YVZxOHBUOD0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xMajdFMFErZHFkc2dZWUJDQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlNraithR3Y3bUJ0WEQxUjlKRFpsWTdPaTd4bU81eERUakpPQmlpdko4bUE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkZBRWdaMEJTcHpwc0E2cEUwRmF0QjhJWUJtbXI4MWRNUE0zUWx1REJ6d3JOOXhLOHZQRWI5ODUxSGR1QlVxMTVSMW1FUEl3MUFtY3hBVitjQUdTakNBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJtdmpFdXNuZXFOWlkzYWp3SWVsS280bm8xQytCYk1HLy9pS0t0NmkvciszcGNXZzBvckNBYlRKQUJtbE9GSE9LSVp1K0sra3ovRjU3bm1XY1lrZjlCUT09In0sIm1lIjp7ImlkIjoiMjM0OTE1MTA2NjExNzoyNEBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE5MjAzMjg1MzI3OTIxOjI0QGxpZCIsIm5hbWUiOiJDeXBoZXIgw4xsw6lyw61vbMO6d2Eg8J+NgPCfko7inaTvuI/wn5OMIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNTEwNjYxMTc6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVXBJL21ocis1Z2JWdzlVZlNRMlpXT3pvdThaanVjUTA0eVRnWW9yeWZKZyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE1OTU3MTE2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtDRSJ9"
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
