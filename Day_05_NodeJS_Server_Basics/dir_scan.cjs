const fs = require("fs");
const path = require("path");

async function readDirectory(dirPath) {
  try {
    const data = await fs.promises.readdir(dirPath);
    const textFiles = data.filter(
      (file) => path.extname(file).toLowerCase() === ".txt"
    );
    if (textFiles.length === 0) {
      console.log(`No text files found in the provided directory: ${dirPath}`);
    } else {
      console.log("I have found the following text files: \n");
      textFiles.forEach((file) => console.log(".", file));
    }
  } catch (error) {
    console.error("Error reading directory, cause: ", error.message);
  }
}

readDirectory(__dirname);
