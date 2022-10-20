for (const property in statistics) {
    let value = statistics[property];
    let remainder = value % 2;
    if(remainder > 0) {
        console.log(`${statistics[property]}`);
        continue;
    }

    let name = `${property}`;
    let firstLetter = name.charAt(0);
    if(firstLetter === 'r') {
        console.log(`${statistics[property]}`);
        continue;
    }
  }