const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name? \nNicknames are also acceptable: ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question('What is an activity you like doing? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);
    
    rl.question('What do you listen to while doing that? ', (answer) => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);
    
      rl.question('Which meal is your favourite? ', (answer) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${answer}`);
        
        rl.question('What is your favourite thing to eat for that meal? ', (answer) => {
          // TODO: Log the answer in a database
          console.log(`Thank you for your valuable feedback: ${answer}`);
          
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${answer}`);
          
            rl.question('What is your superpower? ', (answer) => {
              // TODO: Log the answer in a database
              console.log(`Thank you for your valuable feedback: ${answer}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});


