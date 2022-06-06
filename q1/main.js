const fs = require('fs');
const readStream = fs.createReadStream(`${__dirname}/halo_emoji.txt`, {encoding: 'utf8'});
const readline = require('readline');
const writeStream = fs.createWriteStream(`${__dirname}/halo_emoji2.txt`, {encoding: 'utf8'});

readline.createInterface({
  input: readStream, terminal: false
}).on('line', function (line) {
  let arr = line.split('');
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  writeStream.write(arr.join('') + '\n');
  console.log(arr.join(''));
});

