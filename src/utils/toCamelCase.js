export const toCamelCase = string => {
  const newString = string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, '')
  return newString[0].toLowerCase() + newString.substring(1);
};
