const { writeFileSync, readFileSync } = require("fs");
const { resolve } = require('path');

if(process.env.GITHUB_RUN_NUMBER) {
    const json = readFileSync(resolve(__dirname, "../package.json"))

    const pkg = JSON.parse(json)
    
    const items = [
        pkg.version.split(".")[0], 
        pkg.version.split(".")[1], 
        process.env.GITHUB_RUN_NUMBER || 0, 
        pkg.version.split(".")[2]
    ]

    pkg.version = items.join(".")
    
    writeFileSync(resolve(__dirname, "../package.json"), JSON.stringify(pkg))
}
