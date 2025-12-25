const crypto = require("crypto");

const id = crypto.randomUUID();

function logLine() {
  process.stdout.write(`${new Date().toISOString()}: ${id}\n`);
}

logLine();
setInterval(logLine, 5000);
