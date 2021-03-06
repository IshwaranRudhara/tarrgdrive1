module.exports = Object.freeze({
  TOKEN: '1341358319:AAH29QLMZadHl9AqVCH0-I0tqsPayL70eyw',
  ARIA_SECRET: 'tardrive',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: ['yts', 'YTS', 'cruzing.xyz', 'eztv.ag', 'YIFY'], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: ['YIFY'], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: 'id_of_Drive_folder_to_upload_into',
  OTHER_GDRIVE_DIR_IDS: [1B-PBfcEmx3fFs03WTinFIo09OP7c5nl7], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1382991744],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001273851623],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: ['lvaparna55@gmail.com']
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: true,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@GdriveXtar_bot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: false,
  INDEX_DOMAIN: "https://lokeshv.lokesh18.workers.dev/0:/" // add an extra / at the end, for example https://www.gdindex.url/
});
