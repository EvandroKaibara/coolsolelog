import chalk from "chalk";
import coolFace from "cool-ascii-faces";

export default function coolsolelog(message) {
  console.log(chalk.blue.bold("=========="));
  console.log(chalk.greenBright(coolFace()));
  console.log(chalk.yellow(message));
  console.log(chalk.blue.bold("=========="));
}