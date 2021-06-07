/**
 *
 *
 * @class Client
 */
export class Client {
    /**
    * The function to fetch respone from the Affiliate+ API
    * @type {Function}
    * @ignore
    * @private
    */
    private fetchResponse;
    /**
    * The function to fetch respone from the CleverBot API
    * @type {Function}
    * @ignore
    * @private
    */
    private fetchCleverResponse;
    /**
     * @param {object} ops - The options
     * @param {string} ops.message - The message
     * @param {string} ops.name - The name of the bot
     * @param {string} ops.owner - The owner of the bot
     * @param {string} ops.user - The user id
     * @returns {Promise<string>} The message returned by the chatbot
     **/
    chat(ops?: {
        message: string;
        name: string;
        owner: string;
        user: string;
    }): Promise<string>;
    /**
     * @param {object} ops - The options
     * @param {string} ops.message - The message
     * @returns {Promise<string>} The message returned by the chatbot
     **/
    cleverchat(ops?: {
        message: string;
    }): Promise<string>;
}
export declare const version: any;
