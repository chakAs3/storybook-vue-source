import jsParser from './parser-js';
import tsParser from './parser-ts';


function getParser(type:string) {
  if (type === 'js' || /\.jsx?/.test(type) || !type) {
    return jsParser;
  }

  if (type === 'ts' || /\.tsx?/.test(type)) {
    return tsParser;
  }


  throw new Error(`Parser of type "${type}" is not supported`);
}

export default getParser;
