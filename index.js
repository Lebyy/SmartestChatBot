const base = "https://api.affiliateplus.xyz/api";
const superagent = require("superagent");
const translate = require("@vitalets/google-translate-api");
const md5 = require("md5");
let cookies;
let cbsid;
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
    this.fetchResponse = async (message, name, owner, user) => {
      return (
        await superagent
          .get(
            `${base}/chatbot?message=${encodeURIComponent(
              message
            )}&botname=${encodeURIComponent(
              name
            )}&ownername=${encodeURIComponent(owner)}&user=${encodeURIComponent(
              user
            )}`
          )
          .type("json")
          .accept("json")
      ).body.message;
    };
	/**
    * The function to fetch respone from the CleverBot API
    * @type {Function}
	* @ignore
    * @private
    */
	this.fetchCleverResponse = async (stimulus, context = [], language) => {
		const _context = context.slice();
	  
		if (cookies == null) {
		  const req = await superagent
			.get("https://www.cleverbot.com/")
			.set(
			  "User-Agent",
			  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
			);
		  cookies = req.header["set-cookie"]; // eslint-disable-line require-atomic-updates
		}
	  
		let payload = `stimulus=${
		  escape(stimulus).includes("%u")
			? escape(escape(stimulus).replace(/%u/g, "|"))
			: escape(stimulus)
		}&`;
	  
		const reverseContext = _context.reverse();
	  
		for (let i = 0; i < _context.length; i++) {
		  payload += `vText${i + 2}=${
			escape(reverseContext[i]).includes("%u")
			  ? escape(escape(reverseContext[i]).replace(/%u/g, "|"))
			  : escape(reverseContext[i])
		  }&`;
		}
	  
		payload += `${
		  language ? `cb_settings_language=${language}&` : ""
		}cb_settings_scripting=no&islearning=1&icognoid=wsf&icognocheck=`;
	  
		payload += md5(payload.substring(7, 33));
	  
		for (let i = 0; i < 15; i++) {
		  try {
			const req = await superagent
			  .post(
				`https://www.cleverbot.com/webservicemin?uc=UseOfficialCleverbotAPI${
				  cbsid
					? `&out=&in=&bot=c&cbsid=${cbsid}&xai=${cbsid.substring(
						0,
						3
					  )}&ns=1&al=&dl=&flag=&user=&mode=1&alt=0&reac=&emo=&sou=website&xed=&`
					: ""
				}`
			  )
			  .timeout({
				response: 10000,
				deadline: 60000,
			  })
			  .set("Cookie", `${cookies[0].split(";")[0]}; _cbsid=-1`)
			  .set(
				"User-Agent",
				"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"
			  )
			  .type("text/plain")
			  .send(payload);
	  
			cbsid = req.text.split("\r")[1];
			return decodeURIComponent(req.text.split("\r")[0]);
		  } catch (err) {
			if (err.status === 503) {
			  await new Promise((resolve) => setTimeout(resolve, 1000));
			} else {
			  throw err;
			}
		  }
		}
	  
		throw "Failed to get a response after 15 tries";
	  }; 
  }

  /**
   * @param {object} ops - The options
   * @param {string} ops.message - The message
   * @param {string} ops.name - The name of the bot
   * @param {string} ops.owner - The owner of the bot
   * @param {string} ops.user - The user id
   * @returns {Promise<string>} The message returned by the chatbot
   **/
  async chat(
    ops = {
      message,
      name: "SmartestChatbot",
      owner: "Lebyy_Dev",
      user: 1,
      language: "en",
    }
  ) {
    if (!ops.message) throw new TypeError("No message was provided");
    if (typeof ops.message !== "string" || ops.message.length > 5000)
      throw new TypeError("Message must be a string with less than 5000 characters!");
    if (ops.name && (typeof ops.name !== "string" || ops.name.length < 3))
      throw new TypeError(
        "Bot name must be a string with 3 or more characters!"
      );
    if (ops.owner && (typeof ops.owner !== "string" || ops.owner.length < 3))
      throw new TypeError(
        "Owner name must be a string with 3 or more characters!"
      );
    if (ops.language && typeof ops.language !== "string")
      throw new TypeError("Language must be a string!");
    if (!ops.name) ops.name = "SmartestChatbot";
    if (!ops.owner) ops.owner = "Lebyy_Dev";
    if (!ops.user) ops.user = 1;
    if (!ops.language) ops.language = "en";
    if (
      ops.language.toLowerCase() === "en" ||
      ops.language.toLowerCase() === "english"
    )
      return await this.fetchResponse(
        ops.message,
        ops.name,
        ops.owner,
        ops.user
      );
    else {
      ops.message = (await translate(ops.message, { to: "en" })).text;
      return (
        await translate(
          await this.fetchResponse(ops.message, ops.name, ops.owner, ops.user),
          { to: ops.language }
        )
      ).text;
    }
  }

  /**
   * @param {object} ops - The options
   * @param {string} ops.message - The message
   * @returns {Promise<string>} The message returned by the chatbot
   **/
  async cleverchat(
    ops = {
      message,
      language: "en",
    }
  ) {
    if (!ops.message) throw new TypeError("No message was provided");
    if (typeof ops.message !== "string" || ops.message.length > 5000)
      throw new TypeError("Message must be a string with less than 5000 characters!");
    if (ops.language && typeof ops.language !== "string")
      throw new TypeError("Language must be a string!");
    if (!ops.language) ops.language = "en";
    if (
      ops.language.toLowerCase() === "en" ||
      ops.language.toLowerCase() === "english"
    )
      return await this.fetchCleverResponse(ops.message);
    else {
      ops.message = (await translate(ops.message, { to: "en" })).text;
      return (
        await translate(await this.fetchCleverResponse(ops.message), { to: ops.language })
      ).text;
    }
  }
}

module.exports = {
  version: require("./package.json").version,
  Client: Client,
};
