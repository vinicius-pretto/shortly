#!/usr/bin/env node
const chalk = require("chalk");
const spawn = require("child_process").spawn;
const config = require("../../config");

const sass = spawn("sass", [
  `--load-path=${config.sassCompiler.includePath}`,
  config.sassCompiler.file,
  config.sassCompiler.outFile,
]);

sass.stdout.on("data", (data) => {
  console.log(chalk.cyan(data.toString()));
});

sass.stderr.on("data", (error) => {
  console.log(chalk.red(error.toString()));
});
