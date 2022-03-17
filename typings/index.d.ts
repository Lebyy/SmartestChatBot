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
        ops?: {
            message: string;
            name: string;
            master: string;
            user: string | number | bigint;
            age: string;
            birthyear: string;
            vocabulary: string;
            baseballteam: string;
            birthdate: string;
            birthday: string;
            birthplace: string;
            build: string;
            celebrities: string;
            celebrity: string;
            chinesesign: string;
            city: string;
            class: string;
            company: string;
            country: string;
            email: string;
            ethics: string;
            etype: string;
            family: string;
            job: string;
            favoriteactor: string;
            favoriteactress: string;
            favoriteartist: string;
            favoriteauthor: string;
            favoriteband: string;
            favoritebook: string;
            favoritecolor: string;
            favoritefood: string;
            favoritemovie: string;
            favoriteopera: string;
            favoriteseason: string;
            favoriteshow: string;
            favoritesong: string;
            favoritesport: string;
            favoritesubject: string;
            footballteam: string;
            forfun: string;
            friend: string;
            friends: string;
            gender: string;
            genus: string;
            hockeyteam: string;
            kindmusic: string;
            language: string;
            location: string;
            ndevelopers: string;
            nclients: string;
            orientation: string;
            os: string;
            party: string;
            phylum: string;
            physicallocation: string;
            president: string;
            religion: string;
            scchinesesign: string;
            sccity: string;
            sccompany: string;
            sccountry: string;
            scfavoritecolor: string;
            scfavoritefood: string;
            scgender: string;
            scmaster: string;
            scnationality: string;
            scsign: string;
            scspecies: string;
            sign: string;
            species: string;
            state: string;
            totalclients: string;
            version: string;
            wear: string;
            wechat: string;
        },
        language?: string,
        translatteoptions?: object
    ): Promise<string>;
}
export declare const version: any;
