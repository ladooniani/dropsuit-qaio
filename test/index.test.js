//#region dnkscr test

const dropsuit_qaio = require("../index.js");
const json_data = require("../jsobj.js");
const intents = "./test/intents.json";
let intentData = json_data.jsonIntStrct(intents);

let dsqaio = new dropsuit_qaio(
  null,
  intentData.req_arr,
  intentData.res_arr,
  2,
  true /// Set to true to show function output, or false to use only console logs.
);

let input = "Hi, robot! How are you?";

describe("dropsuit-qaio", () => {
  describe("qaio()", () => {
    it("should return qaio (input -> requests -> responses) (input all-words -> sentence)", () => {
      let qaio_output = dsqaio.qaio(input, 0, 1, 0);
      /// let qaio_output_random = dsqaio.qaio(input, 0, 1, 0).rnd();
      /// console.log("qaio output:", qaio_output, "\n");
      /// console.log("qaio rnd() output:", qaio_output_random, "\n");
    });
    it("should return qaio (input -> responses -> responses) (input all-words -> sentence)", () => {
      let qaio_output = dsqaio.qaio(input, 1, 1, 0);
      /// console.log("qaio rnd() output:", qaio_output_random, "\n");
    });
    it("should return qaio (input -> requests -> responses) (input nouns -> sentence)", () => {
      let qaio_output = dsqaio.qaio(input, 0, 0, 0);
      /// console.log("qaio rnd() output:", qaio_output_random, "\n");
    });
    it("should return qaio (input -> requests -> responses) (input all-words -> pattern)", () => {
      let qaio_output = dsqaio.qaio(input, 0, 1, 1);
      /// console.log("qaio rnd() output:", qaio_output_random, "\n");
    });
    it("should return qaio_async rnd(): (input -> requests -> responses) (input all-words -> sentence)", () => {
      callFunctionAsync();
      async function callFunctionAsync() {
        try {
          let qaio_output_random = await dsqaio.qaio_async(input, 0, 1, 0);
          console.log(
            "qaio rnd() output:",
            qaio_output_random.out().rnd(),
            "\n"
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  });
});

//#endregion
