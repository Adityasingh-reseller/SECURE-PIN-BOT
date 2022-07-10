/*CMD
  command: 🧿Register
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
CMD*/

var message_id = request.message.message_id
var chat_id = request.message.chat.id

Api.deleteMessage({
chat_id :  chat_id,
message_id : message_id
})
var useralready = User.getProperty("UserStatusR")
if (useralready == "yes") {
  Bot.sendMessage("Already Registered")
Bot.runCommand("/start")
  return
}
if (!useralready) {
  Bot.sendMessage("Starting Registration...")
  Bot.sendMessage(
    "Send Your New Password\n\n_- It should be 4 numbers long\n- Only numbers allower_"
  )
  Bot.run({ command: "/setPassword", options: { verification: true } })
  return
}

