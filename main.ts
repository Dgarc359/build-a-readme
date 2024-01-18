#!/usr/bin/env node
import { program } from "commander";
import dotenv from "dotenv";

dotenv.config();
// todo: get env vars for things like pointing template blocks to specific file urls

program
  .command("generate")
  .option("-cg, --contribution-guide <bool>")
  .action((str, options) => {
    console.log("hello world!!");
  });

program.parse();
