//#region Dysplay info data

function displayInfoData() {
  const liblink =
    "DropSuit: https://github.com/ladooniani/DropSuit#readme\n" +
    "Copyright © 2016-" +
    getYear() +
    " Lado Oniani - DropSuit. All Rights Reserved.\n\n";
  const libName = "DropSuit NLP module library function:\n";
  const line =
    "\n———————————————————————————————————————————————————————————\n\n";
  const divider =
    "\n-----------------------------------------------------------\n";
  const libraryInformation = line + liblink + libName;

  const functionDescription = `
  ${libraryInformation}
  qaio(null/string, integer, integer, integer)
  
  string: Input 'myInputString', or keep NULL to process constructor 'input'.
  Processes default object instance json key value arrays (req_arr: requests), 
  (res_arr: responses) array patterns.
  
  integer: Intent option   
    (0) (input -> requests -> reponses)
    (1) (input -> reponses -> reponses)
  
  integer: Return type option 
    (0) Process nouns, 
    (1) Process including stop words.
  
  integer: Set intent type for the highest occurrence 
  of input words in the sentence string: 
    (0) (input -> sentence)
  Set for the highest occurrence in the pattern: 
    (1) (input -> pattern) 
  
  Output:
  
    Response search by nouns/all-words higher value.

    apt() Return pattern of answers.
    rnd() Return random string from answers pattern.
  ${divider}`;

  const displayInfoData = {
    descript: functionDescription,
    line: line,
  };

  return displayInfoData;
}

function getYear() {
  return new Date().getFullYear();
}

//#endregion

//#region Modules

module.exports = {
  displayInfoData,
};

//#endregion
