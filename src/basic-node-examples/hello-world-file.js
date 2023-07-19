import fs from "fs";

const args = process.argv.slice(2);

const name = args[0];
fs.writeFile("hello.txt", `Hello ${name}!`, (err) => {
  if (!err) {
    console.log("Done!");
  } else {
    console.error("Error!");
  }
});
