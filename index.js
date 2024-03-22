#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(("\t \t \t ") + chalk.underline.bgBlack.red.bold("Calculator ") + chalk.bold.underline.bgBlack.yellow(" With ") + chalk.underline.bold.bgBlack.magenta(" Basic ") + chalk.bold.underline.green(" Operations "));
console.log("\n ");
const answser = await inquirer.prompt([{ message: "Enter First Number (or) Obtained Number For (Percentage) : ", type: "number", name: "FirstNumber" },
    { message: "Enter First number (or) Total Number For (Percentage) : ", type: "number", name: "SecondNumber" },
    {
        message: "Select Operators For Action",
        type: "list",
        name: "operators",
        choices: ["Addition", "Substraction", "multiplication", "Division", "Modulus", "Percentage"],
    }
]);
console.log(answser);
//Conditional Answer
if (answser.operators === "Addition") {
    console.log((("\n") + chalk.dim.redBright.bgBlack("Your Answer Is : ")) + ("\t") + chalk.bold.underline.green(answser.FirstNumber + answser.SecondNumber));
}
else if (answser.operators === "Substraction") {
    console.log((("\n") + chalk.dim.redBright.bgBlack("Your Answer Is : ")) + ("\t") + chalk.bold.underline.green(answser.FirstNumber - answser.SecondNumber));
}
else if (answser.operators === "multiplication") {
    console.log((("\n") + chalk.dim.red.bgBlack("Your Answer Is : ")) + ("\t") + chalk.bold.underline.green(answser.FirstNumber * answser.SecondNumber));
}
else if (answser.operators === "Division") {
    console.log((("\n") + chalk.dim.red.bgBlack("Your Answer Is : ")) + ("\t") + chalk.bold.underline.green(answser.FirstNumber / answser.SecondNumber));
}
else if (answser.operators == "Modulus") {
    console.log((("\n") + chalk.dim.red.bgBlack("Your Answer Is : ")) + ("\t") + chalk.bold.underline.green(answser.FirstNumber % answser.SecondNumber));
}
else if (answser.operators == "Percentage") {
    let Per = (answser.FirstNumber / answser.SecondNumber) * 100;
    console.log((("\n") + chalk.dim.red.bgBlack("Your Answer Is : ")) + ("\t") + chalk.bold.green(Per.toFixed(2)) + chalk.yellowBright(" %"));
}
else {
    console.log(chalk.bgBlack.black("Please Enter Valid Number"));
}
console.log(("\n\n\n \t\t\t\t\t\t\t\t\t\t") + chalk.bgBlue.bold.black("Designed By Zahim Farooqi"));
