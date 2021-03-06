const { prefix } = require('../config')

module.exports = async (client, message) => {

    let flag = false;

    message.guild.channels.cache.map((channel) => {
        if(channel.name == "Wishes")
            flag = true;     
    });

    if(!flag)
        message.guild.channels.create("Wishes", "text/voice");
    
    if (!message.content.startsWith(prefix) || message.author.bot) return

    let args = message.content
        .slice(prefix.length)
        .trim()
        .split(/ +/)
    const command = args.shift().toLowerCase()
    
    if (!client.commands.has(command)) return
    

    try {
        client.commands.get(command).execute(message, args)
    } catch (error) {
        console.error(error)
        message.reply('There was an error trying to execute that command!')
    }
}
