const config = require("./tabs.json");
const buildObject = (result) => {
  const sortedItems = result.sort((a, b) =>
    a.name || a.name.first > b.name || b.name.first ? 1 : -1
  );
  const filteredMappedItems = config.tabs.map((item) => {
    item = filterItems(item, sortedItems);
    return item;
  });

  return filteredMappedItems;
};

const filterItems = (alphabet, sortedObject) => {
  let alphabetObject = {};

  let filterdObj = sortedObject.filter(
    (item) => item.name.first.charAt(0).toLowerCase() === alphabet
  );
  alphabetObject.alphabet = alphabet;
  alphabetObject.itemCollection = filterdObj;
  return alphabetObject;
};
export default buildObject;
