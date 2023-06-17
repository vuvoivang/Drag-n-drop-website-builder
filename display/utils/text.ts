export const capitalize = (text: string) => text[0].toUpperCase() + text.substr(1, text.length);
export const weightDescription = (weight: number) => (weight === 400 ? 'Regular' : weight === 500 ? 'Medium' : 'Bold');
export function titleToCamelize(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '');
}

export const camelToTitle = (camelCase) =>
  camelCase
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();
