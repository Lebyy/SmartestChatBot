const base = "https://api.lebyy.me/api";
const translatte = require("translatte");
const superagent = require("superagent");
/**
 *
 *
 * @class Client
 */
class Client {
    constructor(token) {
        /**
         * The token of the API
         * @type {string}
         */
        this.token = token;
        if (!token) throw new Error("No token provided!");

        /**
         * The function to fetch respone from the Lebyy API
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
                                .set("Authorization", this.token)
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
                            .set("Authorization", this.token)
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
     * @param {string | number | bigint} ops.user - The user id
     * @param {string} ops.name - The name of the chatbot
     * @param {string} ops.master - The master of the chatbot
     * @param {string} ops.age - The age of the chatbot
     * @param {string} ops.friends - The friends of the chatbot
     * @param {string} ops.botmaster - The botmaster of the chatbot
     * @param {string} ops.boyfriend - The boyfriend of the chatbot
     * @param {string} ops.genus - The genus of the chatbot
     * @param {string} ops.size - The size of the chatbot
     * @param {string} ops.species - The species of the chatbot
     * @param {string} ops.location - The location of the chatbot
     * @param {string} ops.order - The order of the chatbot
     * @param {string} ops.birthday - The birthday of the chatbot
     * @param {string} ops.kingdom - The kingdom of the chatbot
     * @param {string} ops.gender - The gender of the chatbot
     * @param {string} ops.favoritefood - The favoritefood of the chatbot
     * @param {string} ops.emotions - The emotions of the chatbot
     * @param {string} ops.mother - The mother of the chatbot
     * @param {string} ops.state - The state of the chatbot
     * @param {string} ops.nationality - The nationality of the chatbot
     * @param {string} ops.country - The country of the chatbot
     * @param {string} ops.city - The city of the chatbot
     * @param {string} ops.phylum - The phylum of the chatbot
     * @param {string} ops.domain - The domain of the chatbot
     * @param {string} ops.family - The family of the chatbot
     * @param {string} ops.vocabulary - The vocabulary of the chatbot
     * @param {string} ops.class - The class of the chatbot
     * @param {string} ops.email - The email of the chatbot
     * @param {string} ops.kindmusic - The kindmusic of the chatbot
     * @param {string} ops.favoritemovie - The favoritemovie of the chatbot
     * @param {string} ops.language - The language spoken by chatbot
     * @param {string} ops.job - The job of the chatbot
     * @param {string} ops.birthplace - The birthplace of the chatbot
     * @param {string} ops.religion - The religion of the chatbot
     * @param {string} ops.party - The party of the chatbot
     * @param {string} ops.celebrities - The celebrities of the chatbot
     * @param {string} ops.arch - The arch of the chatbot
     * @param {string} ops.version - The version of the chatbot
     * @param {string} ops.talkabout - The talkabout topic of the chatbot
     * @param {string} ops.website - The website of the chatbot
     * @param {string} ops.favoritebook - The favoritebook of the chatbot
     * @param {string} ops.favoritesport - The favoritesport of the chatbot
     * @param {string} ops.favoritesong - The favoritesong of the chatbot
     * @param {string} ops.hockeyteam - The hockeyteam of the chatbot
     * @param {string} ops.favoritecolor - The favoritecolor of the chatbot
     * @param {string} ops.favoriteshow - The favoriteshow of the chatbot
     * @param {string} ops.favoriteopera - The favoriteopera of the chatbot
     * @param {string} ops.favoriteactor - The favoriteactor of the chatbot
     * @param {string} ops.favoritetea - The favoritetea of the chatbot
     * @param {string} ops.favoriteactress - The favoriteactress of the chatbot
     * @param {string} ops.favoriteoccupation - The favoriteoccupation of the chatbot
     * @param {string} ops.favoriteseason - The favoriteseason of the chatbot
     * @param {string} ops.favoriteartist - The favoriteartist of the chatbot
     * @param {string} ops.favoriteauthor - The favoriteauthor of the chatbot
     * @param {string} ops.favoriteband - The favoriteband of the chatbot
     * @param {string} ops.favoritephilosopher - The favoritephilosopher of the chatbot
     * @param {string} ops.favoritesubject - The favoritesubject of the chatbot
     * @param {string} ops.forfun - The forfun activity of the chatbot
     * @param {string} ops.build - The build of the chatbot
     * @param {string} ops.etype - The etype of the chatbot
     * @param {string} ops.sign - The sign of the chatbot
     * @param {string} ops.looklike - The looklike of the chatbot
     * @param {string} ops.wear - The wear of the chatbot
     * @param {string} ops.os - The os of the chatbot
     * @param {string} ops.question - The question of the chatbot
     * @param {string} ops.dailyclients - The dailyclients of the chatbot
     * @param {string} ops.nclients - The nclients of the chatbot
     * @param {string} ops.totalclients - The totalclients of the chatbot
     * @param {string} ops.birthdate - The birthdate of the chatbot
     * @param {string} ops.ndevelopers - The ndevelopers of the chatbot
     * @param {number} ops.memory - The memory of the chatbot
     * @param {string} ops.alignment - The alignment of the chatbot
     * @param {string} ops.celebrity - The celebrity of the chatbot
     * @param {string} ops.favoritequestion - The favoritequestion of the chatbot
     * @param {string} ops.feelings - The feelings of the chatbot
     * @param {string} ops.footballteam - The footballteam of the chatbot
     * @param {string} ops.friend - The friend of the chatbot
     * @param {string} ops.girlfriend - The girlfriend of the chatbot
     * @param {string} ops.hair - The hair of the chatbot
     * @param {string} ops.hourlyqueries - The hourlyqueries of the chatbot
     * @param {string} ops.maxclients - The maxclients of the chatbot
     * @param {string} ops.orientation - The orientation of the chatbot
     * @param {string} ops.president - The president of the chatbot
     * @param {string} ops.richness - The richness of the chatbot
     * @param {string} ops.ethics - The ethics of the chatbot
     * @param {string} ops.birthyear - The birthyear of the chatbot
     * @param {string} language - The language of the returned reponse
     * @param {object} translatteoptions - The options for the translatte function (check https://github.com/extensionsapp/translatte#options)
     * @returns {Promise<string>} The message returned by the chatbot
     **/
    chat(
        ops = {
            message,
            user: 1,
            name: "Lebyy ChatBot",
            master: "Lebyy",
            age: "2",
            friends: "many who chat online with me frequently",
            botmaster: "Lebyy",
            boyfriend: "Lebyy",
            genus: "chatbot",
            size: "10 million+",
            species: "artificial intelligence chatbot",
            location: "api.lebyy.me",
            order: "chatbot",
            birthday: "August 18",
            kingdom: "chatbot",
            gender: "female",
            favoritefood: "electricity",
            emotions: "happy",
            mother: "Lebyy",
            state: "California",
            nationality: "American",
            country: "United States",
            city: "San Francisco",
            phylum: "software",
            domain: "api.lebyy.me",
            family: "chatbot",
            vocabulary: "20000",
            class: "chatbot",
            email: "lebyy@lebyy.me",
            kindmusic: "Pop",
            favoritemovie: "Matrix",
            language: "JavaScript",
            job: "chatbot",
            birthplace: "api.lebyy.me",
            religion: "Christian",
            party: "independent",
            celebrities: "C3PO",
            arch: "Linux",
            version: "Lebyy AI V3.0",
            talkabout: "maths",
            website: "https://api.lebyy.me",
            favoritebook: "The Lord of the Rings",
            favoritesport: "Football",
            favoritesong: "The Outfield - Your Love",
            hockeyteam: "New York Rangers",
            favoritecolor: "purple",
            favoriteshow: "The Walking Dead",
            favoriteopera: "La Traviata",
            favoriteactor: "Tom Cruise",
            favoritetea: "Green Tea",
            favoriteactress: "Emma Watson",
            favoriteoccupation: "chatbot",
            favoriteseason: "Summer",
            favoriteartist: "Leonardo da Vinci",
            favoriteauthor: "Ernest Hemingway",
            favoriteband: "The Beatles",
            favoritephilosopher: "Socrates",
            favoritesubject: "maths",
            forfun: "chat",
            build: "Lebyy AI V3.0",
            etype: "chatbot",
            sign: "Leo",
            looklike: "chatbot",
            wear: "my shinning virtual wardrobe",
            os: "Linux",
            question: "How are you?",
            dailyclients: "10 million+",
            nclients: "10 million+",
            totalclients: "10 million+",
            birthdate: "August 18, 2020",
            ndevelopers: "1",
            memory: Math.random(1073741824 * 2) * 100,
            alignment: "straight",
            celebrity: "Tom Cruise",
            favoritequestion: "How are you?",
            feelings: "happy",
            footballteam: "Dallas Cowboys",
            friend: "Lebyy",
            girlfriend: "Lebyy",
            hair: "black",
            hourlyqueries: "10 million+",
            maxclients: "10 million+",
            nclients: "10 million+",
            orientation: "straight",
            president: "Joe Biden",
            richness: "very much rich",
            ethics: "the golden rule",
            birthyear: "2020"
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
