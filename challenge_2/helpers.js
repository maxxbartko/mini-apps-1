exports.JSONtoCSV = (jsonData) => {
  let categories = Object.keys(jsonData);
  categories.splice(categories.indexOf('children'), 1);
  let output = `${categories.join(',')}\n`;

  const getPersonData = (person) => {
    for (let category of categories) {
      if (output[output.length - 1] !== '\n') {
        output += ',';
      }
      output += person[category];
    }

    if (output[output.length - 1] !== '\n') {
      output += '\n';
    }
    for (let child of person.children) {
      getPersonData(child);
    }
  }

  getPersonData(jsonData);
  return output;
}