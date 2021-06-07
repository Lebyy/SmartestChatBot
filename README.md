<p align="center"><a href="https://nodei.co/npm/smartestchatbot/"><img src="https://nodei.co/npm/smartestchatbot.png"></a></p>
<p align="center"><img src="https://img.shields.io/npm/v/smartestchatbot?style=for-the-badge"> <img src="https://img.shields.io/github/repo-size/Lebyy/smartestchatbot?style=for-the-badge"> <img src="https://img.shields.io/npm/l/smartestchatbot?style=for-the-badge"> <img src="https://img.shields.io/npm/dt/smartestchatbot?style=for-the-badge"> <img src="https://img.shields.io/github/contributors/Lebyy/smartestchatbot?style=for-the-badge"> <img src="https://img.shields.io/github/package-json/dependency-version/Lebyy/smartestchatbot/superagent?style=for-the-badge"> <a href="https://discord.gg/pndumb6J3t" target="_blank"> <img alt="Discord" src="https://img.shields.io/badge/Chat-Click%20here-7289d9?style=for-the-badge&logo=discord"> </a> <a href="https://smartestchatbot.js.org/"><img src="https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge" alt="Documentation - https://smartestchatbot.js.org/"/></a></p>

# SmartestChatBot

SmartestChatBot is a quick way to easily make your own Chat Bot which can reply in multiple languages!

This package is just for Entertainment Purpose.

#
### 📚 [Documentation](https://smartestchatbot.js.org)
### ❔ [Support](https://discord.gg/pndumb6J3t)
### 📂 [NPM](https://npmjs.com/smartestchatbot)
### 📝 [Example Discord Bot](https://github.com/Lebyy/SmartestChatBot-Example)
#

# Quick Example
 
**Javascript:**
```js
// Importing The Package
const smartestchatbot = require('smartestchatbot');

const client = new smartestchatbot.Client();

client.chat({message:"Hello, How are you?", name:"SmartestChatbot", owner:"CoolOwnerName", user: Cooluniqueuserid-in-number, language:"CoolLanguage"}).then(reply => {
console.log(reply);
// The module will reply based on the message!
});

// Or you can even try the 2nd chatbot module!

client.cleverchat({message:"Hello, How are you?", language:"CoolLanguage"}).then(reply => {
console.log(reply);
// The module will reply based on the message!
});
```

**Typescript supported!
Example: (Coming Soon!)**
#

> # A clean and tidy list of the currently supported languages:
```
    'auto': 'Automatic',
    'af': 'Afrikaans',
    'sq': 'Albanian',
    'am': 'Amharic',
    'ar': 'Arabic',
    'hy': 'Armenian',
    'az': 'Azerbaijani',
    'eu': 'Basque',
    'be': 'Belarusian',
    'bn': 'Bengali',
    'bs': 'Bosnian',
    'bg': 'Bulgarian',
    'ca': 'Catalan',
    'ceb': 'Cebuano',
    'ny': 'Chichewa',
    'zh-CN': 'Chinese (Simplified)',
    'zh-TW': 'Chinese (Traditional)',
    'co': 'Corsican',
    'hr': 'Croatian',
    'cs': 'Czech',
    'da': 'Danish',
    'nl': 'Dutch',
    'en': 'English',
    'eo': 'Esperanto',
    'et': 'Estonian',
    'tl': 'Filipino',
    'fi': 'Finnish',
    'fr': 'French',
    'fy': 'Frisian',
    'gl': 'Galician',
    'ka': 'Georgian',
    'de': 'German',
    'el': 'Greek',
    'gu': 'Gujarati',
    'ht': 'Haitian Creole',
    'ha': 'Hausa',
    'haw': 'Hawaiian',
    'he': 'Hebrew',
    'iw': 'Hebrew',
    'hi': 'Hindi',
    'hmn': 'Hmong',
    'hu': 'Hungarian',
    'is': 'Icelandic',
    'ig': 'Igbo',
    'id': 'Indonesian',
    'ga': 'Irish',
    'it': 'Italian',
    'ja': 'Japanese',
    'jw': 'Javanese',
    'kn': 'Kannada',
    'kk': 'Kazakh',
    'km': 'Khmer',
    'ko': 'Korean',
    'ku': 'Kurdish (Kurmanji)',
    'ky': 'Kyrgyz',
    'lo': 'Lao',
    'la': 'Latin',
    'lv': 'Latvian',
    'lt': 'Lithuanian',
    'lb': 'Luxembourgish',
    'mk': 'Macedonian',
    'mg': 'Malagasy',
    'ms': 'Malay',
    'ml': 'Malayalam',
    'mt': 'Maltese',
    'mi': 'Maori',
    'mr': 'Marathi',
    'mn': 'Mongolian',
    'my': 'Myanmar (Burmese)',
    'ne': 'Nepali',
    'no': 'Norwegian',
    'ps': 'Pashto',
    'fa': 'Persian',
    'pl': 'Polish',
    'pt': 'Portuguese',
    'pa': 'Punjabi',
    'ro': 'Romanian',
    'ru': 'Russian',
    'sm': 'Samoan',
    'gd': 'Scots Gaelic',
    'sr': 'Serbian',
    'st': 'Sesotho',
    'sn': 'Shona',
    'sd': 'Sindhi',
    'si': 'Sinhala',
    'sk': 'Slovak',
    'sl': 'Slovenian',
    'so': 'Somali',
    'es': 'Spanish',
    'su': 'Sundanese',
    'sw': 'Swahili',
    'sv': 'Swedish',
    'tg': 'Tajik',
    'ta': 'Tamil',
    'te': 'Telugu',
    'th': 'Thai',
    'tr': 'Turkish',
    'uk': 'Ukrainian',
    'ur': 'Urdu',
    'uz': 'Uzbek',
    'vi': 'Vietnamese',
    'cy': 'Welsh',
    'xh': 'Xhosa',
    'yi': 'Yiddish',
    'yo': 'Yoruba',
    'zu': 'Zulu'
```
# **NOTE: Currently SmartestChatBot uses the Google Translate engine to translate the message, Google has heavy rate limits on their api which is currently unknown, recommended language is `en` to avoid rate-limits.**

# Credits
 
Made by Lebyy_Dev.


# Enjoying Discord-Voice?
Consider donating! 

<a href="https://www.patreon.com/Lebyy">
  <img src="https://c5.patreon.com/external/logo/become_a_patron_button@2x.png" width="160">
</a>
<a href="https://www.buymeacoffee.com/lebyydev" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
<a href='https://ko-fi.com/N4N04B26C' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://cdn.ko-fi.com/cdn/kofi3.png?v=2' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>

Thanks 😊