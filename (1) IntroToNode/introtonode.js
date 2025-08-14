// globals
// console.log(process);
// console.log(__dirname);

//MODULE HANDLING
// const ls = require('./linearsearch.js')  // This is for standard js module not latest ES6 module.. generally es6 module is used nowadays like in reactJS.. But it is better to understand both the modules as both are important and both are used in the industry
// console.log(ls.linearsearch([1,2,3,4,5,5,2],5));


//ES6 MODULE
// import linearsearch,{binarysearch } from "./linearsearch.js"; 
// console.log(linearsearch([1,2,3,4,5,5,2],2));
// console.log(binarysearch([1,2,3,4,5,5,2],2));

// process.stdout.write('hi')
// process.stdout.write('\nbye')

//FS PROMISES TO READ AND WRITE FILE
// import {readFile} from 'fs/promises'
// const path = new URL('./index.html',import.meta.url);
// const content = await readFile(path,{encoding : 'utf-8'});
// console.log(content);

//WRITE FILE
import { readFile } from 'fs/promises';
import {writeFile} from 'fs/promises'
const path = new URL('./index.html',import.meta.url);
let content = await readFile(path,{encoding : 'utf-8'})
const data = {
    title : "TITLE",
    content : "CONTENT"
}

for(const[key,value] of Object.entries(data)){
    content = content.replace(`{${key}}`,value);
}

await writeFile(path,content)




