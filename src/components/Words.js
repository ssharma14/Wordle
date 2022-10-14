import {WORDS} from "./wordle-bank";

export const initialBoard = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
];

export const generateWordSet = () => {
    let wordSet;
    let todaysWord;
    todaysWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    //wordSet = new Set(WORDS);
    console.log(todaysWord);
    return { wordSet, todaysWord };
};