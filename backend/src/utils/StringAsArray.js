module.exports = function StringAsArray(arrayAsString) {
  if (!arrayAsString) {
    return [];
  }

  return arrayAsString.split(',').map(tech => tech.trim());
}