import wordBank from "../wordle-bank.txt";

export const initialBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

const generateWordSet = async () => {
    let wordSet;
    
    await fetch(wordBank).then((response) => response.text()).then((result) => {
        const wordArr = result.split("\n");
        // todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
        wordSet = new Set(wordArr);
      });
      // console.log(todaysWord);
      console.log(wordSet);
    //return { wordSet};
};