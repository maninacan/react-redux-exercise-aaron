export const toCamelCase = (string) => {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (+match === 0) return "";
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    })
    .replace(/([-_][a-zA-Z])/g, function (v) {
      return v.toUpperCase();
    })
    .replace(/[-_]/g, "");
};
