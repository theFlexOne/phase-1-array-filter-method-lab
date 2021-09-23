const findMatching = (arrayOfDrivers, name) => {
  const matches = [];
  arrayOfDrivers.filter((value) => {
    if (name.toLowerCase() === value.toLowerCase()) {
      matches.push(value);
    }
  })
  return matches;
}

const fuzzyMatch = (arrayOfDrivers, substring) => {
  const matches = [];
  arrayOfDrivers.filter((value) => {
    if (value.toLowerCase().startsWith(substring.toLowerCase())) {
      matches.push(value);
    }
  })
  return matches;
};

const matchName = (arrayOfDrivers, name) => {
  const matches = [];
  arrayOfDrivers.filter((value) =>{
    if (value.name === name) {
      matches.push(value);
    }
  })
  return matches;
};