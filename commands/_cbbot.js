/*CMD
  command: /cbbot
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: Mail

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

if (user.telegramid == 1178697351){
BBAdmin.installBot({
  email: message,
  bot_id: bot.id
})
Bot.sendMessage("*✅Done Bot Sent To "+message+"*")
}else{
Bot.sendMessage("Not admin")
}
