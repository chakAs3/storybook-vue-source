import { format as f } from "prettier";
import parserTypescript from "prettier/parser-typescript.js";
import parserHTML from "prettier/parser-html.js";
//import  parseTs  from 'prettier/parser-typescript';

function parse(source:string){
 // parserBabel.parsers.typescript.parse(source)
}


function format(source:string) {
  return f(source, { vueIndentScriptAndStyle:true,parser:'vue',plugins:[parserTypescript,parserHTML]});
}

export default {
  format,
};
