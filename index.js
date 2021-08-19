const base = "https://api.affiliateplus.xyz/api";
const translateBase = "https://translate-api.ml";
const superagent = require("superagent");
/**
 *
 *
 * @class Client
 */
class Client {
    constructor() {
        /**
         * The function to fetch respone from the Affiliate+ API
         * @type {Function}
         * @ignore
         * @private
         */
        this.fetchResponse = async (message, name, owner, user, language) => {
            if (language.toLowerCase() === "en" || language.toLowerCase() === "english") {
                return (
                    await superagent
                        .get(`${base}/chatbot?message=${encodeURIComponent(message)}&botname=${encodeURIComponent(name)}&ownername=${encodeURIComponent(owner)}&user=${encodeURIComponent(user)}`)
                        .type("json")
                        .accept("json")
                ).body.message;
            } else {
                return (
                    await superagent
                        .get(
                            `${translateBase}/translate?text=${encodeURIComponent(
                                (
                                    await superagent
                                        .get(
                                            `${base}/chatbot?message=${encodeURIComponent(
                                                (
                                                    await superagent
                                                        .get(`${translateBase}/translate?text=${encodeURIComponent(message)}&lang=en`)
                                                        .type("json")
                                                        .accept("json")
                                                ).body.translated.text
                                            )}&botname=${encodeURIComponent(name)}&ownername=${encodeURIComponent(owner)}&user=${encodeURIComponent(user)}`
                                        )
                                        .type("json")
                                        .accept("json")
                                ).body.message
                            )}&lang=${encodeURIComponent(language.toLowerCase())}`
                        )
                        .type("json")
                        .accept("json")
                ).body.translated.text;
            }
        };
    }

    /**
     * @param {object} ops - The options
     * @param {string} ops.message - The message
     * @param {string} ops.name - The name of the bot
     * @param {string} ops.owner - The owner of the bot
     * @param {string} ops.user - The user id
     * @param {string} ops.language - The language of the returned reponse
     * @returns {Promise<string>} The message returned by the chatbot
     **/
    chat(
        ops = {
            message,
            name: "SmartestChatbot",
            owner: "Lebyy_Dev",
            user: 1,
            language: "en"
        }
    ) {
        if (!ops.message) throw new TypeError("No message was provided");
        if (typeof ops.message !== "string" || ops.message.length > 5000) throw new TypeError("Message must be a string with less than 5000 characters!");
        if (ops.name && (typeof ops.name !== "string" || ops.name.length < 3)) throw new TypeError("Bot name must be a string with 3 or more characters!");
        if (ops.owner && (typeof ops.owner !== "string" || ops.owner.length < 3)) throw new TypeError("Owner name must be a string with 3 or more characters!");
        if (ops.language && typeof ops.language !== "string") throw new TypeError("Language must be a string!");
        if (!ops.name) ops.name = "SmartestChatbot";
        if (!ops.owner) ops.owner = "Lebyy_Dev";
        if (!ops.user) ops.user = 1;
        if (!ops.language) ops.language = "en";
        return this.fetchResponse(ops.message, ops.name, ops.owner, ops.user, ops.language);
    }
}

module.exports = {
    version: require("./package.json").version,
    Client: Client
};
