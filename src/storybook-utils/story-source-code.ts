//storybook/code/lib/source-loader/src/abstract-syntax-tree/parsers/parser-ts.js
import { Meta, StoryObj } from "@storybook/vue3";
import meta from "../stories/Header.stories";
import { Component, VueElement } from "vue";
import getParser from "./parsers"
import { format as prettyFormat } from 'pretty-format';




type Story = StoryObj<typeof T>;

export const storySourceCode = (
  templateSource: string,
  args: any,
  replacing = 'v-bind="args"'
) => {
  const propToSource = (key: string, val: string | boolean | object) => {
    if (key.startsWith('slotArgs.')) return '';

    const type = typeof val;
    console.log('type =', type)
    switch (type) {
      case 'boolean':
        return val ? key : '';
      case 'string':
        return `${key}="${val}"`;
      case 'object':
        return `${key}="${JSON.stringify(val)}"`;
      default:
        return `:${key}="${val}"`;
    }
  };

  const argsKeys = args ? Object.keys(args) : [];
  return templateSource.replaceAll(
    replacing,
    argsKeys
      .map(key => propToSource(key, args[key]))
      .filter(item => item !== '')
      .join(' ')
  );
};

export const storyParametersObject = (
  parameters: { docs: any; },
  templateSource: string,
  args: any,
  replacing = 'v-bind="args"'
) => {
  // console.log(' Template to render =======>:   ', templateSource)
  let code = templateSource.indexOf('v-bind') > -1 ?
    storySourceCode(templateSource, args, replacing) :
    storySourceCodeProps(templateSource, args, replacing);

  code = getParser('ts').format(code);

  if (!parameters) {
    parameters = { docs: { source: { code, language: 'html' } } };
  } else {
    if (!parameters.docs) {
      parameters.docs = { source: { code: code, language: 'html' } };
    } else {
      if (!parameters.docs.source) {
        parameters.docs.source = { code, language: 'html' };
      } else {
        parameters.docs.source.code = code;
      }
    }
  }
  return parameters;
};


function getTemplate(renderFunc: any): string {
  const spaceless = renderFunc.toString() // functionBody.replace(/\s\s+/g, ' ')
  const index = spaceless.indexOf('template:')
  if (index < 0) return ''
  return spaceless.slice(index + 11, spaceless.lastIndexOf('}') - 4)
}

export const generateCodeSource = (meta: Meta<typeof T>, ...stories: Story[]) => {

  for (var story of stories)
    if (story.render)
      story.parameters = storyParametersObject(story.parameters?.docs, getTemplate(story.render), story.args);
    else
      story.parameters = storyParametersObject(story.parameters?.docs, createDefaultTemplate(meta.component, story.args), story.args);
}

export const storySourceCodeProps = (
  templateSource: string,
  args: any,
  replacing = 'v-bind="args"'
) => {
  const propToSource = (val: string | boolean | object | undefined) => {
    const type = typeof val;
    switch (type) {
      case 'boolean':
        return val
      case 'string':
        return `"${val}"`;
      case 'object':
        return `${objectToString(val as object)}`;
      case 'undefined':
        return `${val}`;
      default:
        return `"${val}"`
    }
  };

  const argsKeys = args ? Object.keys(args) : [];

  let varDeclaration = '<script setup>'
  for (const key of argsKeys) {
    console.log('=====> ', key, '---', "args." + key)
    varDeclaration += `\n const ${key} = ref(${propToSource(args[key])})`
    templateSource = templateSource.replace("args." + key, key)
  }
  varDeclaration += "\n</script>"

  return varDeclaration + "\n\n" + "<template>\n " + templateSource + "\n</template>"
};

function objectToString(obj: Record<any, any>): string {
  if (obj == null) return 'null'

  let text = prettyFormat(obj).replace('Object', '')
  for (const x in obj) {
    text = text.replace('"' + x + '"', x)
  }
  return text
};

function createDefaultTemplate(component: any, args: any = {}): string {
  console.log(' Vue Component : ', component, component.__file)
  let template = `<${component.name || component.__name} `
  template += argsToSource(args)//`v-bind="args"` 
  template += ` />`
  return template
}


function argsToSource(args: any): string {

  const argsKeys = Object.keys(args)
  const srouce = argsKeys
    .map(key => propToDynamicSource(key, args[key]))
    .filter(item => item !== '')
    .join(' ')

  return srouce
}

function propToDynamicSource(key: string, val: string | boolean | object) {
  if (key.startsWith('slotArgs.'))
    return '';
  return `:${key}="${key}"`;
}
