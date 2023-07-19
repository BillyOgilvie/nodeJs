import fs from "fs";
import path from "path";

// const myNewFile = path.join(__dirname, "my-new-file.txt")
// const myJsonFile = path.join(__dirname, "my-new-file.json")
// const myParentDir = path.join(__dirname, "my-parent-directory")
// const myDir = path.join(__dirname, "my-directory")

// const data = fs.readFileSync(path.join(__dirname, "example.txt"), "utf-8");
// console.log(data);

// fs.readFile(path.join(__dirname, "example.txt"), "utf-8", (err, data) => {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.error(err);
//     }
// });

// fs.writeFileSync(myNewFile, "Hello!", "utf-8");
// fs.writeFileSync(myNewFile, "Cya!", "utf-8");
// fs.writeFile(myNewFile, "Hello!", "utf-8", (err) => {
//     if (!err) {
//         console.log("Done!");
//     } else {
//         console.error("Error!");
//     }
// })

// fs.writeFileSync(dir, "Hello!", "utf-8");
// fs.appendFileSync(dir, "\nCya!", "utf-8");
// fs.appendFileSync(myNewFile, "\nCya!", (err) => {
//     if (!err) {
//         console.log("Done!");
//     } else {
//         console.error("Error!");
//     }
// });

// fs.appendFileSync(myJsonFile, JSON.stringify({ message: "Hello!" }), "utf-8");

// delete file
// fs.unlinkSync(myNewFile)
// fs.unlink(myNewFile, (err) => {
//     if (!err) {
//         console.log("Done!");
//     } else {
//         console.error("Error!");
//     }
// })

// fs.mkdirSync(path.join(__dirname, "my-parent-directory", "my-directory"), { recursive: true })
// fs.rmdirSync(myDir)

// fs.existsSync(path.join(__dirname, "example.txt")) ? console.log("Exists") : console.log("Doesn't exist")

// const files = fs.readdirSync(__dirname);
// console.log(files);

// const stats = fs.lstatSync(path.join(__dirname, "example.txt"));
// console.log(stats);

// callback hell example
fs.writeFile(path.join(__dirname, "example.txt"), "Hello!", "utf-8", (err) => {
  if (err) {
    console.error(err);
  }
  fs.readFile(path.join(__dirname, "example.txt"), "utf-8", (err, data) => {
    if (!err) {
      console.log(data);
      fs.unlink(path.join(__dirname, "example.txt"), (err) => {
        if (!err) {
          console.log("Done!");
        } else {
          console.error(err);
        }
      });
    } else {
      console.error(err);
    }
  });
});
