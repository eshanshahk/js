const character = "#";

const count = 8;

const rows = [];

function padRow(rowNumber, rowCount) {
  
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}
for (let i = 0; i < count; i += 1) 
{
  rows.push(padRow(i + 1, count));
}

let result = ""

for (const row of rows) 
  
{
  result = result + row + "\n";
}
console.log(result);

console.log(rows);

/*second method

const character = "#";

const count = 8;

const rows = [];

function padRow(rowNumber, rowCount) 
{
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

// TODO: use a different type of loop

//for (let i = 1; i <= count; i++) 
{
  rows.push(padRow(i, count));
}//

let done = 0;

while (done <= count) {
  done++;
  
  rows.push(padRow(done, count));
}

let result = ""

for (const row of rows) {
  result = result + row + "\n";
}

console.log(result);
*/
