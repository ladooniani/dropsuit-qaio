[<img alt="TAI Lab." width="59px" src="https://github.com/ladooniani/Terbinari-CBM-Robot/blob/main/images/dropsuit.png" />](https://github.com/ladooniani/dropsuit#readme)

[![npm version](https://img.shields.io/npm/v/dropsuit-qaio.svg?style=flat)](https://www.npmjs.com/package/dropsuit-qaio) [![npm](https://img.shields.io/npm/dt/dropsuit-qaio.svg?style=flat-square)](https://www.npmjs.com/package/dropsuit-qaio) [![License](https://img.shields.io/npm/l/dropsuit-qaio.svg)](https://www.npmjs.com/package/dropsuit-qaio)

# Overview of [DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP and the qaio Function

[DropSuit](https://github.com/ladooniani/dropsuit#readme) NLP is an open-source JavaScript and Node.js library offering diverse functions for natural language processing and data manipulation. The qaio function is one of its modules, designed for searching responses by processing input strings or constructor input. It is available under the Apache License 2.0.

## DropSuit NLP Method: qaio - A JavaScript and Node.js function for response search

The qaio function is a part of the DropSuit NLP library, it's a JavaScript and Node.js function that processes input strings or constructor input for searching responses. It is open-source and available under the Apache License 2.0.

### Installation

Add the library function by installing it via npm:

```
npm install dropsuit-qaio
```

### Usage

Import the library in your project:

```
const dropsuit_qaio = require("dropsuit-qaio");

```

Process [intents.json](https://github.com/ladooniani/dropsuit-qaio/blob/main/test/intents.json) using 'jsonIntStrct' function:

```
const json_data = require("dropsuit-qaio/jsobj.js");
let intentData = json_data.jsonIntStrct("assets/json/intents.json");
```

Set boolean parameter (true/false) argument value to display console log processing results output information in terminal:

```
let dsqaio = new dropsuit_qaio(null, intentData.req_arr, intentData.res_arr, stopWordsAmount, false);
```

#### qaio(input: null/string, intent_option: integer, return_type_option: integer, intent_type: integer)

- **input**: Provide a string 'myInputString', or keep it null to use the constructor's input. The function processes the default object instance's json key value (req_arr: requests), (res_arr: responses) arrays based on the provided options.
- **intent_option**: Select the intent processing option 0-1:

Set (0) to lookup for input in requests:

```
┌───────┐
│ Input
└──┬────┘
┌──┴────────────────────┐
│ Requests -> Responses
└───────────────────────┘
```

Set (1) to lookup for input in responses:

```
┌───────┐
│ Input
└──┬────┘
┌──┴─────────────────────┐
│ Responses -> Responses
└────────────────────────┘
```

- **return_type_option**: Select the return type option. (0) Processes nouns only, (1) Processes including stop words.
- **intent_type**: Set intent type (0) for the highest occurrence of input words in the sentence string or set (1) for the highest occurrence in the pattern:

Set (0) to find highest occurrence of input words in the sentence:

```
┌──────────────────────────┐
│ Input all words or nouns
└──┬───────────────────────┘
┌──┴─────┐
│ String
└────────┘
```

Set (1) to find highest occurrence of input words in the pattern:

```
┌──────────────────────────┐
│ Input all words or nouns
└──┬───────────────────────┘
┌──┴──────┐
│ Pattern
└─────────┘
```

#### Return options:

- **rnd()** Returns a random string of answers matching the provided pattern.
- **apt()** Returns a list of answers matching the provided pattern.

#### Synchronous and Asynchronous Usage of qaio and qaio_async Functions

The 'qaio' and 'qaio_async' functions provide the capability to process requests in both synchronous and asynchronous modes. For more detailed information on how to use the functions in either mode, please refer to the [usage example](https://github.com/ladooniani/dropsuit-qaio/blob/main/test/index.test.js)

```
let out = dsqaio.qaio(input, 0, 1, 0);
console.log(out);
```

Response search by nouns or all words higher value:

```
Higher occurence value: ( 0 ) from condition ( 0 )

Type of input: /WORDS/

Intent pattern: [ '(input -> requests -> responses)' ]

Intent pattern type: 0 </PATTERN/STRING>

intent:

 [
  'Hello',
  'Hi',
  'Hey',
  'Greetings!',
  'How are you',
  'Is anyone there?',
  'Good day',
  'Hello',
  'Hello there!',
  "Hey, how's it going?",
  'Greetings, my friend!',
  "How's your day been?",
  'Is anyone available to chat?',
  'Good morning!',
  'Good afternoon!',
  'Good evening!'
]

Input sentence:

 [ 'hi bot how are you' ]

Responses answer output:

 {
  answArr: [
    'Hello!',
    'Hi',
    'Hey!',
    'Greetings!',
    'Hello, thanks for visiting',
    'Hi there, what can I do for you?',
    'Hi there, how can I help?',
    'Hi there! How can I assist you?',
    'Hello! How may I help you today?',
    'Hey, what can I do for you?',
    'Greetings! How can I make your day better?',
    'Hello, welcome! How can I be of service?',
    'Hi there! How can I assist you today?'
  ],
  ansRnd: [Function: ansRnd],
  ansLst: [Function: ansLst]
}

```

## Links

- npm: https://www.npmjs.com/package/dropsuit-qaio

## Supporting DropSuit

DropSuit is an open-source library and I am dedicated to ensuring its continued development and improvement. If you have any questions, feedback, or encounter any issues, please reach out through the [support via PayPal](https://www.paypal.com/paypalme/dropsuit?country.x=GE&locale.x=en_US), and read more about [support details](https://github.com/ladooniani/dropsuit/blob/main/Support.md).

Your support is crucial for the library's success. You can also contribute to the project by submitting bug reports, feature requests, or by providing feedback. Sharing the library with others who may find it useful and giving it a star on GitHub are also great ways to show your support. Thank you for using DropSuit!

## License

[Apache License 2.0](LICENSE.txt)