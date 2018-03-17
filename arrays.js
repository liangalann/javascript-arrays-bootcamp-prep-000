var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray("chocolateBars", "hershey") {
  return [hershey, ... chocolateBars];
}

function destructivelyAddElementToBeginningOfArray("chocolateBars", "hershey") {
  chocolateBars.unshift("hershey");
  return chocolateBars;
}

function addElementToEndOfArray("chocolateBars", "hershey") {
  return [...chocolateBars, "hershey"];
}

function destructivelyAddElementToEndOfArray("chocolateBars", "hershey") {
  chocolateBars.push("hershey");
  return chocolateBars;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray("chocolateBars") {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray("chocolateBars") {
  chocolateBars.slice(1);
  return chocolateBars;
}

function destructivelyRemoveElementFromEndOfArray("chocolateBars") {
  chocolateBars.pop();
  return chocolateBars;
}

function removeElementFromEndOfArray("chocolateBars") {
  return chocolateBars.slice(0, chocolateBars.length - 1);
}
