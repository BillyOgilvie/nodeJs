import fs from "fs";
import path from "path";

const myNewFile = path.join(__dirname, "my-new-file.txt")
const myJsonFile = path.join(__dirname, "my-new-file.json")
// const myParentDir = path.join(__dirname, "my-parent-directory")
const myDir = path.join(__dirname, "my-directory")

const data = fs.readFileSync(path.join(__dirname, "example.txt"), "utf-8");
console.log(data);

fs.writeFileSync(myNewFile, "Hello!", "utf-8");
fs.writeFileSync(myNewFile, "Cya!", "utf-8");

fs.writeFileSync(dir, "Hello!", "utf-8");
fs.appendFileSync(dir, "\nCya!", "utf-8");

fs.appendFileSync(myJsonFile, JSON.stringify({ message: "Hello!" }), "utf-8");

delete file
fs.unlinkSync(myNewFile)

fs.mkdirSync(path.join(__dirname, "my-parent-directory", "my-directory"), { recursive: true })
fs.rmdirSync(myDir)

fs.existsSync(path.join(__dirname, "example.txt")) ? console.log("Exists") : console.log("Doesn't exist")

const files = fs.readdirSync(__dirname);
console.log(files);

const stats = fs.lstatSync(path.join(__dirname, "example.txt"));
console.log(stats);