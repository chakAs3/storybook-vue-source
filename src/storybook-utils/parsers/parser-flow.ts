import parseFlow from 'prettier';

function parse(source:string) {
  //return parseFlow..flow.parse(source);
}
function format(source:string) {
  return parseFlow.format(source);
}

export default {
  parse,
  format,
};
