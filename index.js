const base = 'https://api.affiliateplus.xyz/api'
const fetch = require("node-fetch");
const err = require('./Error');
const response = require("./response.js");
const translate = require('@iamtraction/google-translate');
/**
 *
 *
 * @class Client
 */
class Client {
	constructor() {
	}

	/**
	 * @param {object} ops - The options
	 * @param {string} ops.message - The Message
	 * @param {string} ops.name - The name of the bot
	 * @param {string} ops.owner - The owner of the bot
	 * @param {string} ops.user - The user id
	 * @returns {string} The message by the chatbot
	 **/
	async chat(ops = {
		message,
		name: "SmartestChatbot",
		owner: "Lebyy_Dev",
		user: 1,
		language: "en"
	  }) {
		if (!ops.message) throw new err("No message was provided");
		if (typeof ops.message !== "string") throw new err("Message must be a string!");
		if (typeof ops.name !== "string") throw new err("Bot name must be a string with 3 or more characters!");
		if (typeof ops.owner !== "string") throw new err("Owner name must be a string with 3 or more characters!");
		if (typeof ops.language !== "string") throw new err("Language must be a string!");
		if(ops.language !== "en" && ops.language !== "English") {
		let ttt = await translate(ops.message, {to:"en"})
		ops.message = ttt.text
		const res = await fetch(`${base}/chatbot?message=${encodeURIComponent(ops.message)}&botname=${encodeURIComponent(ops.name)}&ownername=${encodeURIComponent(ops.owner)}&user=${encodeURIComponent(ops.user)}`, {});
		const response = await res.json();
		let translatedtext = await translate(response.message, {to: ops.language})
    return translatedtext.text
		}
		if(ops.language === "en" || ops.language === "English") {
		const res = await fetch(`${base}/chatbot?message=${encodeURIComponent(ops.message)}&botname=${encodeURIComponent(ops.name)}&ownername=${encodeURIComponent(ops.owner)}&user=${encodeURIComponent(ops.user)}`, {});
		const response = await res.json();
    return response.message
		}
	}

	/**
	 * @param {object} ops - The options
	 * @param {string} ops.message - The Message
	 * @returns {string} The message by the chatbot
	 **/
	async cleverchat(ops = {
	message,
	language: "en"
	}) {
  if (!ops.message) throw new err("No message was provided");
	if (typeof ops.message !== "string") throw new err("Message must be a string!");
	if (typeof ops.language !== "string") throw new err("Language must be a string!");
	if(ops.language !== "en" && ops.language !== "English"){
	let ttt = await translate(ops.message, {to:"en"})
	ops.message = ttt.text
	let translatedtext = await translate(await response(ops.message), {to: ops.language})
  return translatedtext.text
	}
	if(ops.language === "en" || ops.language === "English"){
	return await response(ops.message)
	}

}
}


module.exports = {
	version: require('./package.json').version,
	Client: Client
}
