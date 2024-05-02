#! /usr/bin/env  node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgRed(`\n\t\t Welcome to Table Writer `));

let multipl = await inquirer.prompt([
  {
    name: "Multiple",
    type: "number",
    message: "Enter the number of Table : ",
  },
  {
    name: "Multiplant",
    type: "number",
    message: "Enter the count of Table : ",
    validate: (num) => {
      if (num > 100) {
        return `Error!  Enter a num less than 100`;
      } else {
        return true;
      }
    },
  },
]);

let nums = multipl.Multiple  //Multiple;
let count =multipl.Multiplant
 
for (let i = 1 ; i <= count; i++ ){
    console.log(`${nums} x ${i} = ${nums * i}`);
    
}
 console.log(chalk.bgRedBright(`\n\t\t Thank you`));
 