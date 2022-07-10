/*CMD
  command: /setPassword
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/


var useralready = User.getProperty("UserStatusR")
if (useralready == "yes") {
  Bot.sendMessage("Already Registered")
Bot.runCommand("/start")
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
if (!isNumeric(message)) {
  Bot.sendMessage("Numeric Values Only")
  return
}
if (message.length == 4) {
  User.setProperty("password", message, "integer")
  Bot.sendMessage("🎁Registration Successfully Completed")
  Bot.sendMessage("Your PinCode : " + message + "", { on_result: "/onResult" })
Bot.runCommand("/start")
  User.setProperty("UserStatusR", "yes")
  return
}
Bot.sendMessage("Value Should Be 4 Characters Long")

