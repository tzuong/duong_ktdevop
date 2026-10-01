const fs = require("fs");

const files = [
    "index.html",
    "style.css",
    "script.js"
];

if (!fs.existsSync("dist")) {
    fs.mkdirSync("dist");
}

for (const file of files) {
    fs.copyFileSync(file, `dist/${file}`);
}

console.log("Build completed successfully.");