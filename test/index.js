/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports, @typescript-eslint/no-unsafe-call, @typescript-eslint/strict-boolean-expressions, @typescript-eslint/no-unsafe-member-access */

"use strict";

const { exec } = require("child_process");

const ERROR_CODE = 1;

exec("./node_modules/.bin/eslint -c test/.eslintrc.test.json config/*.js test/*.js", (error, stdout, stderr) => {
    if (!error) {
        console.info("OK");
        return;
    }
    console.error("Error parsing ESLint config file or any js file breaks on the defined rules.");
    console.error("");
    console.error("Error message:");
    console.error(stderr || stdout);
    process.exit(ERROR_CODE); // eslint-disable-line no-process-exit
});
