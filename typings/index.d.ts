/**
 *
 *
 * @class Client
 */
export interface ChatOptions {
    message: string;
    user?: number;
    name?: string;
    master?: string;
    age?: string;
    friends?: string;
    botmaster?: string;
    boyfriend?: string;
    genus?: string;
    size?: string;
    species?: string;
    location?: string;
    order?: string;
    birthday?: string;
    kingdom?: string;
    gender?: string;
    favoritefood?: string;
    emotions?: string;
    mother?: string;
    state?: string;
    nationality?: string;
    country?: string;
    city?: string;
    phylum?: string;
    domain?: string;
    family?: string;
    vocabulary?: string;
    class?: string;
    email?: string;
    kindmusic?: string;
    favoritemovie?: string;
    language?: string;
    job?: string;
    birthplace?: string;
    religion?: string;
    party?: string;
    celebrities?: string;
    arch?: string;
    version?: string;
    talkabout?: string;
    website?: string;
    favoritebook?: string;
    favoritesport?: string;
    favoritesong?: string;
    hockeyteam?: string;
    favoritecolor?: string;
    favoriteshow?: string;
    favoriteopera?: string;
    favoriteactor?: string;
    favoritetea?: string;
    favoriteactress?: string;
    favoriteoccupation?: string;
    favoriteseason?: string;
    favoriteartist?: string;
    favoriteauthor?: string;
    favoriteband?: string;
    favoritephilosopher?: string;
    favoritesubject?: string;
    forfun?: string;
    build?: string;
    etype?: string;
    sign?: string;
    looklike?: string;
    wear?: string;
    os?: string;
    question?: string;
    dailyclients?: string;
    nclients?: string;
    totalclients?: string;
    birthdate?: string;
    ndevelopers?: string;
    memory?: number;
    alignment?: string;
    celebrity?: string;
    favoritequestion?: string;
    feelings?: string;
    footballteam?: string;
    friend?: string;
    girlfriend?: string;
    hair?: string;
    hourlyqueries?: string;
    maxclients?: string;
    nclients?: string;
    orientation?: string;
    president?: string;
    richness?: string;
    ethics?: string;
    birthyear?: string;
}


export interface TranslateOptions {
    from?: string,
    to?: string,
    raw?: boolean,
    agents?: string[],
    proxies?: string[],
    tld?: string,
    client?: "t" | "gtx",
    priority?: string[],
    services?: {"google_v3": { "project-id": string, "token": string } } | { "microsoft_v3": { "key": string, "location": "global" } } | { "yandex_v1": { "key": string } } | {"yandex_v2": {"key": string}}
}

export class Client {
    constructor(token: string);
    /**
     * The function to fetch respone from the Lebyy API
     * @type {Function}
     * @ignore
     * @private
     */
    private fetchResponse;

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
    chat(ops?: ChatOptions, language?: string, translatteoptions?: TranslateOptions): Promise<string>;
}
export declare const version: any;
