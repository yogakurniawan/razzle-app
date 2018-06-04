function splitNested(str) {
  return [str]
    .join('.')
    .replace(/\[/g, '.')
    .replace(/\]/g, '')
    .split('.');
}

export function get(target, field) {
  const pathArray = splitNested(field);
  let result;
  try {
    result = pathArray.reduce((curr, path) => curr[path], target);
  } catch (e) { }
  return result;
}