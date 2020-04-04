const express = require('express');
const jsftp = require('jsftp');
const app = express();
const fs = require('fs');
const path = require('path');

const Ftp = new jsftp({
  host: 'stect.vot.pl',
  port: 21,
  user: 'stect',
  pass: 'K2Rb8*^c5$2}R$2',
});

function mkdir(dir) {
  Ftp.raw('mkd', dir, (err, data) => {
    if (err) {
      return console.log(err);
    }
    console.log(data.text);
    console.log(data.code);
  });
}

// Ftp.auth(Ftp.user, Ftp.pass, (err, res) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(res);
// });

// Ftp.list('/domains/bestcodes.pl/public_html/', (err, res) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.table(res);
// });

// function copyFromFtp() {
//   Ftp.get('/domains/bestcodes.pl/public_html/4.pdf', 'downloads/4.pdf', (err) => {
//     if (err) {
//       return console.error(err.message);
//     }
//     console.log('File copied successfully!');
//   });
// }

// copyFromFtp();



// function copyToFtp() {
//   function bufferFile(relPath) {
//     return fs.readFileSync(path.join(__dirname, relPath)); // zzzz....
//   }
//   const buffer = bufferFile('./downloads/4.pdf');

//   Ftp.put(buffer, '/domains/bestcodes.pl/public_html/4.pdf', (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//     console.log('File transferred successfully!');
//   });
// }

// copyToFtp();

// mkdir('/domains/bestcodes.pl/public_html/jsftp_test2');

app.listen(5000);
