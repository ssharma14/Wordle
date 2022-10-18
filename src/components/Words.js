import {WORDS} from "./wordle-bank";

export const generateWordSet  = async () => {
    let wordSet;
    let todaysWord;
    await fetch({WORDS}).then((response) => response.text())
    .then(() => {
        todaysWord = WORDS[Math.floor(Math.random() * WORDS.length)];
        wordSet = new Set(WORDS);
    });
    return { wordSet, todaysWord };
};