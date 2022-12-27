import { format as f } from "prettier";
import parserBabel from "prettier/parser-babel.js";
import parserHTML from "prettier/parser-html.js";


function format(source:string) {
  return f(source,{printWidth:200,vueIndentScriptAndStyle:true,plugins:[parserBabel,parserHTML],quoteProps:"as-needed"});
}

export default {

  format,
};
