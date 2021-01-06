const base = 'https://api.affiliateplus.xyz/api'
const fetch = require("node-fetch");
    /**
     * @param {string} message - The message provided 
     * @param {string} name - The name of the bot
     * @param {string} owner - The owner of the bot
     * @param {string} user - The user id
     * @returns {string} The message by the chatbot
     **/
    const chat = async (message, name, owner, user) => {
        if(!message) throw new err("No message was provided");
        if(!name) {
        name = "SmartChatBot"
        }
        if(!owner){
        owner = "Lebyy_Dev"
        }
        if(!user){
        user = "1"
        }
        if(typeof(name)!= 'string') throw new err(`Expected name to be string, recieved ${typeof(name)}`);
        if(typeof(owner)!= 'string') throw new err(`Expected owner to be string, recieved ${typeof(owner)}`);
        if(typeof(user)!= 'string') throw new err(`Expected user id to be string, recieved ${typeof(user)}`);
        const res = await fetch(`${base}/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(name)}&ownername=${encodeURIComponent(owner)}&user=${encodeURIComponent(user)}`,{
        });
        const response = await res.json();
        return response.message;
        }
    
module.exports = {
    chat
};

