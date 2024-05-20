#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//quiz system

let score: number = 0;

//const answer: {
//   question1 string
//   question2 string
//   question3 string
//   question4 string
//   question5 string
//   question6 string

const answer1 = await inquirer.prompt({
    name: "question01",
    type: "list",
    message: chalk.italic.yellowBright("JavaScript was invented by?"),
    choices: [
      chalk.italic.blue("a) Brendan Eichin"),
      chalk.italic.green("b) James Gosling"),
      chalk.italic.red("c) John Backus"),
    ],
  });
  switch (answer1.question01) {
    case chalk.italic.blue("a) Brendan Eichin"):
      ++score;
      console.log(chalk.italic.green("Your answer is correct.\n"));
      break;
  
    default:
      console.log(chalk.bold.red("Your answer is incorrect.\n"));
  }
  
  const answer2 = await inquirer.prompt({
    name: "question02",
    type: "list",
    message: chalk.italic.yellowBright("when javascript was invented?"),
    choices: [
      chalk.italic.blue("a) March 1992"),
      chalk.italic.green("b) May 1996"),
      chalk.italic.red("c) September 1996"),
    ],
  });
  switch (answer2.question02) {
    case chalk.italic.green("b) May 1996"):
      ++score;
      console.log(chalk.italic.green("Your answer is correct.\n"));
      break;
  
    default:
      console.log(chalk.bold.red("Your answer is incorrect.\n"));
  }
  const answer3 = await inquirer.prompt({
    name: "question03",
    type: "list",
    message: chalk.italic.yellowBright("What is the chemical formula for water?"),
    choices: [
      chalk.italic.blue("a) CO"),
      chalk.italic.green("b) NaOH"),
      chalk.italic.red("c) H₂O"),
    ],
  });
  switch (answer3.question03) {
    case chalk.italic.red("c) H₂O"):
      ++score;
      console.log(chalk.italic.green("Your answer is correct.\n"));
      break;
  
    default:
      console.log(chalk.bold.red("Your answer is incorrect.\n"));
  }
  const answer4 = await inquirer.prompt({
    name: "question04",
    type: "list",
    message: chalk.italic.yellowBright(
      "When RMS Titanic sank in the North Atlantic Ocean?"
    ),
    choices: [
      chalk.italic.blue("a) 15 April 1912"),
      chalk.italic.green("b) 23 may 1912"),
      chalk.italic.red("c) 11 febraury 1912"),
    ],
  });
  switch (answer4.question04) {
    case chalk.italic.blue("a) 15 April 1912"):
      ++score;
      console.log(chalk.italic.green("Your answer is correct.\n"));
      break;
  
    default:
      console.log(chalk.bold.red("Your answer is incorrect.\n"));
  }
  const answer5 = await inquirer.prompt({
    name: "question05",
    type: "list",
    message: chalk.italic.yellowBright(
      "Who was First person to walk on the Moon?"
    ),
    choices: [
      chalk.italic.blue("a) Michael collins"),
      chalk.italic.green("b) Neil Armstrong"),
      chalk.italic.red("C) Buzz Aldrin "),
    ],
  });
  switch (answer5.question05) {
    case chalk.italic.green("b) Neil Armstrong"):
      ++score;
      console.log(chalk.italic.green("Your answer is correct.\n"));
      break;
  
    default:
      console.log(chalk.bold.red("Your answer is incorrect.\n"));
  }
  const answer6 = await inquirer.prompt({
    name: "question06",
    type: "list",
    message: chalk.italic.yellowBright("Who developed the first nuclear weapon?"),
    choices: [
      chalk.italic.blue("a) Albert Einstein"),
      chalk.italic.green("b) Thomas Edison"),
      chalk.italic.red("c) J. Robert Oppenheimer"),
    ],
  });
  switch (answer6.question06) {
    case chalk.italic.red("c) J. Robert Oppenheimer"):
      ++score;
      console.log(chalk.italic.green("Your answer is correct.\n"));
      break;
  
    default:
      console.log(chalk.bold.red("Your answer is incorrect.\n"));
  }
  if (score === 6) {
    console.log(chalk.italic.blue("Congragulation!. YOur score is perfect. "));
  } else if (score < 6 && score > 3) {
    console.log(chalk.italic.bold.green("YOure score is Good."));
  } else if (score <= 3 && score > 0) {
    console.log(chalk.bold.italic("YOur score is nice."));
  } else {
    console.log(chalk.italic.gray("YOU got Fail to give Correct answer."));
  }
   

    
        

    
     

