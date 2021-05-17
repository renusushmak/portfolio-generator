const generatePage = require('./src/page-template.js');
const fs = require('fs'); 

const profileDataArgs = process.argv.slice(2, process.argv.length);
const [uname, github] = profileDataArgs;

console.log(uname, github);
console.log(generatePage(uname, github));

fs.writeFile('index.html', generatePage(uname, github), err => {
  if (err) throw err;

  console.log('Portfolio complete! Check out index.html to see the output!');
});
