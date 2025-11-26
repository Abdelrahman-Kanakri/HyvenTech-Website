const fs = require("fs");
const report = JSON.parse(fs.readFileSync("lint_report.json", "utf8"));
report.forEach((file) => {
  if (file.messages.length > 0) {
    console.log(`File: ${file.filePath}`);
    file.messages.forEach((msg) => {
      console.log(`  ${msg.line}:${msg.column} ${msg.message} (${msg.ruleId})`);
    });
  }
});
