import fsBase from "fs";
const fs = fsBase.promises;
import path from "path";

const myNewFile = path.join(__dirname, "my-new-file.txt");
const exampleFile = path.join(__dirname, "example.txt");
const myJsonFile = path.join(__dirname, "my-new-file.json");
// const myParentDir = path.join(__dirname, "my-parent-directory")
const myDir = path.join(__dirname, "my-directory");

// fs.readFile(exampleFile, "utf-8")
//   .then((data) => {
//     console.log("File contents:", data);
//   })
//   .catch((err) => {
//     console.error("Error reading file:", err);
//   });

const execute = async () => {
  const data = await fs.readFile(exampleFile, "utf-8");
  console.log("File contents:", data);
}

execute();