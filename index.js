const base = 'https://api.affiliateplus.xyz/api'
const fetch = require("node-fetch");
const err = require('./Error');
    /**
     * @param {object} ops - The options
     * @param {string} ops.message - The Message
     * @param {string} ops.name - The name of the bot
     * @param {string} ops.owner - The owner of the bot
     * @param {string} ops.user - The user id
     * @returns {string} The message by the chatbot
     **/
    const chat = async (ops = {message, name:"SmartestChatbot", owner:"Lebyy_Dev", user:'1'}) => {
        if(!ops.message) throw new err("No message was provided");
        const res = await fetch(`${base}/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(name)}&ownername=${encodeURIComponent(owner)}&user=${encodeURIComponent(user)}`,{
        });
        const response = await res.json();
        return response.message;
        }
    
module.exports = {
    chat
};

