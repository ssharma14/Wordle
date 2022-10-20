import {WORDS} from "./wordle-bank";
import { encodeSolution } from "../lib/encryption";

export const generateWordSet  = async () => {
    let wordSet;
    let todaysWord;
    await fetch({WORDS}).then((response) => response.text())
    .then(() => {
        todaysWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        todaysWord = encodeSolution(todaysWord);
        wordSet = new Set(WORDS);
    });
    return { wordSet, todaysWord };
};