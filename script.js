const jsftp = require('jsftp');

const Ftp = new jsftp({
  host: 'stect.vot.pl',
  port: 21,
  user: 'stect',
  pass: 'K2Rb8*^c5$2}R$2',
});


Ftp.raw('mkd', '/domains/bestcodes.pl/public_html/jsftp_test', (err,data)=>{
  if (err){
    return console.log(err);
  }
  console.log(data.text);
  console.log(data.code);
});