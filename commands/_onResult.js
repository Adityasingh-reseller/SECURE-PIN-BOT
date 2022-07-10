/*CMD
  command: /onResult
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if (!options) {
  Bot.sendMessage("Don't try manual")
  return
}
Api.pinChatMessage({
  chat_id: chat.chatid,
  message_id: options.result.message_id
})

