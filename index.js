const fetch = require('node-fetch');
const moment = require('moment');
const chalk = require('chalk');
const rs = require('readline-sync');

const GoStumble = (auth) => new Promise((resolve, reject) => {

    fetch('http://kitkabackend.eastus.cloudapp.azure.com:5010/round/finishv2/3', {
        method: 'GET',
        headers: {
            'authorization': auth
        }
    })
    .then(res => res.text())
    .then(data=> {
        resolve(data);
    })
    .catch(err => {
        reject(err);
    });

});

  (async () => {

  console.log(`Trophy And Crown Hack Safe! [ReEdit]
By : ${chalk.bold('xDast#8745')} - Credit : @dkmpostor & @Eskey
`);

  const auth = rs.question('Enter Authentication Code! : ');
  console.log('');
    
    while(true) {
      
      const result = await GoStumble(auth);
      if (!result) {
        
        console.log(chalk.red(`\r[ ${moment().format('HH:mm:ss')} ] Kode Auth Lu Salah Ngentod!`));
        break;
        
      } else if (result.includes('User')) {
         
         const data = JSON.parse(result);
         const username = data.User.Username;
         const country = data.User.Country;
         const trophy = data.User.SkillRating;
         const crown = data.User.Crowns;
        
         console.log(chalk.green(`\r[ ${moment().format('HH:mm:ss')} ] Nickname : ${username} | Country : ${country} | ${chalk.red(`Tropi : ${trophy}`)} | ${chalk.red(`MahKota : ${crown}`)}`));
        
         } else if (result == 'BANNED') {
      console.log(chalk.bgRed(`Akun Lu Diban AKWOAWKOAWOK`));
     break;
    }
  }


})();
