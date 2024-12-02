import { ITestMyFile } from "./types";

export function testMyFile({filename, author, lineofcode} : ITestMyFile){
    console.log("Your file name :",filename);
    console.log("Author :",author);
    console.log(`This file contain ${lineofcode} lines of code` );
}