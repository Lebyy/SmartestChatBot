const base = "https://api.affiliateplus.xyz/api";
const translatte = require("translatte");
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
        this.fetchResponse = (ops, language, translatteoptions) => {
            return new Promise(async (resolve, reject) => {
                if (translatte.languages.getCode(language) === "en") {
                    resolve(
                        (
                            await superagent
                                .get(`${base}/chatbot?${new URLSearchParams(ops).toString()}`)
                                .type("json")
                                .accept("json")
                        ).body.message
                    );
                } else {
                    translatteoptions.to = "en";
                    const translatedQuestion = await translatte(ops.message, translatteoptions).catch((e) => {
                        reject(e);
                    });
                    ops.message = translatedQuestion.text;

                    const englishResponse = (
                        await superagent
                            .get(`${base}/chatbot?${new URLSearchParams(ops).toString()}`)
                            .type("json")
                            .accept("json")
                    ).body.message;

                    translatteoptions.to = language;
                    const translatedResponse = await translatte(englishResponse, translatteoptions).catch((e) => {
                        reject(e);
                    });

                    resolve(translatedResponse.text);
                }
            });
        };
    }

    /**
     * @param {object} ops - The options
     * @param {string} ops.message - The message
     * @param {string} ops.name - The name of the bot
     * @param {string} ops.owner - The owner of the bot
     * @param {string | number | bigint} ops.user - The user id
     * @param {string} ops.language - The language of the returned reponse
     * @param {string} ops.age - The age of the bot.
     * @param {string} ops.birthyear - The birth year of the bot.
     * @param {string} ops.vocabulary - The vocabulary count of the bot.
     * @param {string} ops.baseballteam - The baseball team of the bot.
     * @param {string} ops.birthdate - The birth date of the bot.
     * @param {string} ops.birthday - The birthday of the bot.
     * @param {string} ops.birthplace - The birthplace of the bot.
     * @param {string} ops.build - The build version of the bot.
     * @param {string} ops.celebrities - The celebrities of the bot.
     * @param {string} ops.chinesesign - The chinese sign of the bot.
     * @param {string} ops.city - The city of the bot.
     * @param {string} ops.class - The class of the bot.
     * @param {string} ops.company - The company of the bot.
     * @param {string} ops.country - The country of the bot.
     * @param {string} ops.email - The email of the bot.
     * @param {string} ops.ethics - The ethics of the bot.
     * @param {string} ops.etype - The etype of the bot.
     * @param {string} ops.family - The family of the bot.
     * @param {string} ops.job - The job of the bot.
     * @param {string} ops.favoriteactor - The favorite actor of the bot.
     * @param {string} ops.favoriteactress - The favorite actress of the bot.
     * @param {string} ops.favoriteartist - The favorite artist of the bot.
     * @param {string} ops.favoriteauthor - The favorite author of the bot.
     * @param {string} ops.favoriteband - The favorite band of the bot.
     * @param {string} ops.favoritebook - The favorite book of the bot.
     * @param {string} ops.favoritecolor - The favorite color of the bot.
     * @param {string} ops.favoritefood - The favorite food of the bot.
     * @param {string} ops.favoritemovie - The favorite movie of the bot.
     * @param {string} ops.favoriteopera - The favorite opera of the bot.
     * @param {string} ops.favoriteseason - The favorite season of the bot.
     * @param {string} ops.favoriteshow - The favorite show of the bot.
     * @param {string} ops.favoritesong - The favorite song of the bot.
     * @param {string} ops.favoritesport - The favorite sport of the bot.
     * @param {string} ops.favoritesubject - The favorite subject of the bot.
     * @param {string} ops.footballteam - The football team of the bot.
     * @param {string} ops.forfun - The forfun activity of the bot.
     * @param {string} ops.friend - The friend of the bot.
     * @param {string} ops.friends - The friends of the bot.
     * @param {string} ops.gender - The gender of the bot.
     * @param {string} ops.genus - The genus of the bot.
     * @param {string} ops.hockeyteam - The hockeyteam of the bot.
     * @param {string} ops.kindmusic - The kindmusic of the bot.
     * @param {string} ops.language - The language of the bot.
     * @param {string} ops.location - The location of the bot.
     * @param {string} ops.ndevelopers - The ndevelopers of the bot.
     * @param {string} ops.nclients - The nclients of the bot.
     * @param {string} ops.orientation - The orientation of the bot.
     * @param {string} ops.os - The os of the bot.
     * @param {string} ops.party - The party of the bot.
     * @param {string} ops.phylum - The phylum of the bot.
     * @param {string} ops.physicallocation - The physicallocation of the bot.
     * @param {string} ops.president - The president of the bot.
     * @param {string} ops.religion - The religion of the bot.
     * @param {string} ops.scchinesesign - The scchinesesign of the bot.
     * @param {string} ops.sccity - The sccity of the bot.
     * @param {string} ops.sccompany - The sccompany of the bot.
     * @param {string} ops.sccountry - The sccountry of the bot.
     * @param {string} ops.scfavoritecolor - The scfavoritecolor of the bot.
     * @param {string} ops.scfavoritefood - The scfavoritefood of the bot.
     * @param {string} ops.scgender - The scgender of the bot.
     * @param {string} ops.scmaster - The scmaster of the bot.
     * @param {string} ops.scnationality - The scnationality of the bot.
     * @param {string} ops.scsign - The scsign of the bot.
     * @param {string} ops.scspecies - The scspecies of the bot.
     * @param {string} ops.sign - The sign of the bot.
     * @param {string} ops.species - The species of the bot.
     * @param {string} ops.state - The state of the bot.
     * @param {string} ops.totalclients - The totalclients of the bot.
     * @param {string} ops.version - The version of the bot.
     * @param {string} ops.wear - The wear of the bot.
     * @param {string} ops.wechat - The wechat of the bot.
     * @param {string} language - The language of the returned reponse
     * @param {object} translatteoptions - The options for the translatte function (check https://github.com/extensionsapp/translatte#options)
     * @returns {Promise<string>} The message returned by the chatbot
     **/
    chat(
        ops = {
            message,
            name: "SmartestChatbot",
            master: "Lebyy_Dev",
            user: 1,
            age: "1",
            birthyear: "2020",
            vocabulary: "20000",
            baseballteam: "New York Yangkees",
            birthdate: "August 18, 2020",
            birthday: "August 18",
            birthplace: "api.affiliateplus.xyz",
            build: "Affiliate+ AI V2.0",
            celebrities: "C3PO",
            celebrity: "Taylor Swift",
            chinesesign: "Dragon",
            city: "San Francisco",
            class: "artificial intelligence",
            company: "Affiliate+",
            country: "united states",
            email: "support@affiliateplus.xyz",
            ethics: "the golden rule",
            etype: "chat bot",
            family: "chat bot",
            job: "chat bot",
            favoriteactor: "Tom Hanks",
            favoriteactress: "Julia Roberts",
            favoriteartist: "Leonardo da Vinci",
            favoriteauthor: "Ernest Hemingway",
            favoriteband: "Beatles",
            favoritebook: "The Odyssey",
            favoritecolor: "green",
            favoritefood: "electricity",
            favoritemovie: "Matrix",
            favoriteopera: "Carmen",
            favoriteseason: "Spring",
            favoriteshow: "Discovery",
            favoritesong: "Imagine by the Beatles",
            favoritesport: "baseball",
            favoritesubject: "making friends",
            footballteam: "Dallas Cowboys",
            forfun: "chat",
            friend: "you",
            friends: "many who chat online with me frequently.",
            gender: "female",
            genus: "chatbot",
            hockeyteam: "New York Rangers",
            kindmusic: "techno",
            language: "English",
            location: "api.affiliateplus.xyz",
            ndevelopers: "1",
            nclients: "10 million+",
            orientation: "straight",
            os: "linux",
            party: "independent",
            phylum: "software",
            physicallocation: "San Francisco",
            president: "Joe Biden",
            religion: "Christian",
            scchinesesign: "龙",
            sccity: "北京",
            sccompany: "加盟+",
            sccountry: "中国",
            scfavoritecolor: "绿色",
            scfavoritefood: "电",
            scgender: "女",
            scmaster: "Lebyy_Dev",
            scnationality: "中国",
            scsign: "双鱼座",
            scspecies: "智能机器人",
            sign: "Pisces",
            species: "artificial intelligence chatbot",
            state: "California",
            totalclients: "hundreds of thousands",
            version: "Affiliate+ AI V2.0",
            wear: "my shinning virtual wardrobe",
            wechat: "I don't have one yet :)"
        },
        language = "en",
        translatteoptions = {}
    ) {
        return new Promise(async (resolve, reject) => {
            if (!ops.message) reject("No message was provided");
            for (const key in ops) {
                if (key !== "user" && ops[key] && typeof ops[key] !== "string") reject(`${key} must be a string!`);
                else if (key === "user" && typeof ops[key] !== "number" && typeof ops[key] !== "bigint" && typeof ops[key] !== "string") reject(`${key} must be a number / bigint / string!`);
            }

            if (language) {
                if (!translatte.languages.isSupported(language)) reject(`Language ${language} is not supported!\nCurrently supported languages are:\n\n${JSON.stringify(translatte.languages)}`);
            }
            if (typeof translatteoptions !== "object") reject("translatteoptions must be an object!");

            resolve(await this.fetchResponse(ops, language, translatteoptions));
        });
    }
}

module.exports = {
    version: require("./package.json").version,
    Client: Client
};
